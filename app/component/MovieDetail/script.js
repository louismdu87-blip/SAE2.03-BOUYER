let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (data, isFavorite) {
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


  let svgEmpty = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none" style="vertical-align: middle;"><path d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  let svgFilled = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="#911515" style="vertical-align: middle;"><path d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  if (isFavorite) {
    html = html.replace(
      "{{btnFavoris}}",
      "<button class='movieDetail__btn-favorite' style='cursor:pointer; background:none; border:none;' onclick=\"C.handlerDeleteFavorite(" +
        data.id +
        ")\">" + svgFilled + "</button>"
    );
  } else {
    html = html.replace(
      "{{btnFavoris}}",
      "<button class='movieDetail__btn-favorite' style='cursor:pointer; background:none; border:none;' onclick=\"C.handlerAddFavorite(" +
        data.id +
        ")\">" + svgEmpty +"</button>"
    );
  }
  return html;
};

export { MovieDetail };