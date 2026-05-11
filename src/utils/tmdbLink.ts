export const tmdbLink = (
  id: number,
  name: string,
  type: "movie" | "tv",
): string => {
  return `https://www.themoviedb.org/${type}/${id}-${name.replaceAll(" ", "-")}`;
};
