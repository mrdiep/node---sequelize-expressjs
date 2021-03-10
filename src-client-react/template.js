export default function renderFullPage(html, finalState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
    `
}