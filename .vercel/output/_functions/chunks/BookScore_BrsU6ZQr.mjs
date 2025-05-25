import { c as createComponent, e as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server_DC6VVYoI.mjs';

const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=5&base=10&format=plain&rnd=new";

const $$Astro = createAstro();
const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookScore;
  const { id } = Astro2.props;
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span id="score" class="text-xs">
⭐ Puntuación ${scoreValue} de 5
</span>`;
}, "C:/Users/castm/Documents/stalin/projects/dev-books/src/components/BookScore.astro", void 0);

const $$file = "C:/Users/castm/Documents/stalin/projects/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
