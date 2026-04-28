let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (data) {
  let html = template;
  html = html.replaceAll("{{name}}", data.name);
  html = html.replaceAll("{{poster}}", "../server/images/" + data.image);
  html = html.replaceAll("{{category}}", data.label);
  html = html.replaceAll("{{length}}", data.length);
  html = html.replaceAll("{{year}}", data.year);
  html = html.replaceAll("{{director}}", data.director);
  html = html.replaceAll("{{min_age}}", data.min_age);
  html = html.replaceAll("{{description}}", data.description);
  html = html.replaceAll("{{trailer}}", data.trailer);

  return html;
};

export { MovieDetail };
