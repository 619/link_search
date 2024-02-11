export default (phase, { defaultConfig }) => {
  const env = process.env.NODE_ENV;
  /**
   * @type {import("next").NextConfig}
   */
  if (env === "production") {
    return {
      output: "export",
      assetPrefix: "/ui/",
      basePath: "/ui",
      distDir: "../ui"
    };
  } else {
    return {
      async rewrites() {
        return [
          {
            source: "/query",
            destination: "http://localhost:8080/query" // Proxy to Backend
          },
          // {
          //   source: "/:slug*",
          //   destination: "http://localhost:8080/search?q=:slug*" // Redirect any path to the search page with the path as query
          // }
          {
              source: "/:slug*",
              destination: "http://localhost:8080/query" // Redirect any path to the search page with the path as query
            }
        ];
      }
    };
  }
}
