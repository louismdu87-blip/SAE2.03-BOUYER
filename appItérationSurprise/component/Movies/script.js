
let templateFile = await fetch("./component/Movies/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/Movies/templateLi.html");
let templateLi = await templateLiFile.text();

let Movie = {};

Movie.format = function (data) {
  let htmlConteneur = template;
  
  if (data.length == 0) {
      let html = "";
      html = html.replace ("{{movie}}",
      "<p class='movies_error'>Aucun film disponible pour le moment.</p>");
    
  } else {
    let htmlMovie = "";
    
    for (let movie of data) {
      let html = templateLi;
      html= html.replaceAll("{{name}}", movie.name);
      html= html.replaceAll("{{handler}}", movie.id);
      html = html.replaceAll("{{image}}","../server/images/" + movie.image);
      htmlMovie += html;
    }
    
    return htmlConteneur.replace("{{movie}}", htmlMovie);
  }
};

export { Movie };