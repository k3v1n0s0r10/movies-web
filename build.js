let esSass = require("essass");

require("esbuild")
  .build({
    entryPoints: ["./src/index.tsx"],
    outfile: "./build/bundle.js",
    loader: { ".ts": "ts", ".tsx": "tsx" },
    bundle: true,
    minify: true,
    define: { "process.env.NODE_ENV": "'production'" },
    plugins: [esSass],
  })
  .catch(() => {
    process.exit(1);
  });
