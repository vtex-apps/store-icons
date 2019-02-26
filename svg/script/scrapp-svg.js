var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


request("https://raw.githubusercontent.com/vtex-apps/store/master/styles/iconpacks/iconpack.svg", function (error, response, body) {
  if (error) {
    console.log("Error: " + error);
  }

  var $ = cheerio.load(body);
  var svgs = {}

  $('g').toArray().map(element => {
    var id = element.attribs.id.trim()
    var htmlG = $(`#${id}`).html().trim().replace(new RegExp('currentColor', 'g'), '#000000')
    svgs[id] = htmlG
    var template = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
        <g id="${id}">
          ${htmlG}
        </g>
      </svg>`
    fs.writeFileSync(`${id}.svg`, template)
  })
  var templates = ` ## Icon Pack list

  Here we describe all our SVG fragment identifiers. 
  
  
  
  
  | Icon                  | ID         |
  | --------------------- | ---------- |
  `
  fs.appendFileSync('markd.md', templates)
  for (id in svgs) {
    fs.appendFileSync('markd.md', ` | ![](svg/${id}.svg)  | ${id} | \n`)
  }

});