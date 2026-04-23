let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movie) {
  let html = template;
  html = html.replaceAll("{{id}}", movie.id);
  html = html.replaceAll("{{name}}", movie.name);
  html = html.replaceAll("{{image}}", movie.image);
  return html;
};

Movie.formatMany = function (movies) {
  let html = "";
  if (movies.length == 0) {
    return `Aucun film disponible pour le moment`;
  }
  for (const movie of movies) {
    html += Movie.format(movie);
  }
  return html;
};

export { Movie };
