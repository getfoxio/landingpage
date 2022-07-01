import esbuild from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

esbuild
  .build({
    entryPoints: ['src/landingpage.ts'],
    outdir: 'dist/iife',
    bundle: true,
    sourcemap: false,
    minify: true,
    format: 'iife',
    target: ['es2015', 'chrome57', 'firefox56', 'safari11', 'edge16'],
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => {
    process.exit(1)
  })

esbuild.build({
  entryPoints: ['src/landingpage.ts'],
  outdir: 'dist/cjs',
  bundle: true,
  sourcemap: false,
  minify: true,
  format: 'cjs',
  target: 'esnext',
  plugins: [nodeExternalsPlugin()],
})

esbuild.build({
  entryPoints: ['src/landingpage.ts'],
  outdir: 'dist/esm',
  bundle: true,
  sourcemap: false,
  minify: true,
  splitting: true,
  format: 'esm',
  target: 'esnext',
  plugins: [nodeExternalsPlugin()],
})