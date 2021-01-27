let esSass = require('essass');

require('esbuild')
  .build({
    entryPoints: ['./src/index.tsx'],
    outfile: './build/bundle.js',
    loader: { '.ts': 'ts', '.tsx': 'tsx' },
    bundle: true,
    minify: true,
    define: { 'process.env.NODE_ENV': "'production'" },
    plugins: [esSass],
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  })
  .catch(() => {
    process.exit(1);
  });
