self.__BUILD_MANIFEST = {
  __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
  "/": ["static/chunks/pages/index.js"],
  "/_app": ["static/chunks/pages/_app.js"],
  "/_error": ["static/chunks/pages/_error.js"],
  "/api/hello": ["static/chunks/pages/api/hello.js"],
  "/friends/[id]": ["static/chunks/pages/friends/[id].js"],
  sortedPages: ["/", "/_app", "/_error", "/api/hello", "/friends/[id]"],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
