export const technologyIcons = {
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  React: "devicon-react-plain colored",
  Tailwind: "devicon-tailwindcss-original colored",
  Express: "devicon-express-original",
  Nextjs: "devicon-nextjs-plain",
  Sanity: "devicon-sanity-plain colored",
  Vite: "devicon-vitejs-plain colored",
} as const;

export type Technology = keyof typeof technologyIcons;
