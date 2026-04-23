
let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateLiFile.text();

let Movie = {};

Movie.format = function (data) {
  let htmlConteneur = template;
  
  if (data.length == 0) {
    return htmlConteneur.replace(
      "{{movie}}",
      "<p class='movies_error'>Aucun film disponible pour le moment.</p>"
    );
  } else {
    let htmlMovie = "";
    
    for (let movie of data) {
      let htmlItem = templateLi;
      htmlItem = htmlItem.replaceAll("{{name}}", movie.name);
      htmlItem = htmlItem.replaceAll("{{image}}","../server/images/" + movie.image);
      htmlMovie += htmlItem;
    }
    
    return htmlConteneur.replace("{{movie}}", htmlMovie);
  }
};

export { Movie };