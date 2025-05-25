import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_3q9Vi_Xs.mjs';
import { manifest } from './manifest_BN3y5WKK.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BrsU6ZQr.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DA7xBzht.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.8.0_@types+node@22._e9b272dfd7d49c20c99c901b4c9c402c/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cfdb516d-e69e-4adc-882d-ec510059f439",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
