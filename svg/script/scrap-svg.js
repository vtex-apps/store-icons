const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


request("https://raw.githubusercontent.com/vtex-apps/store-icons/master/styles/iconpacks/iconpack.svg", function (error, response, body) {
  if (error) {
    console.log("Error: " + error);
  }

  const $ = cheerio.load(body);
  const svgs = {}
  const ICONPACK_PATH = '../../ICONPACK.md'

  $('g').toArray().map(element => {
    let id = element.attribs.id.trim()
    let htmlG = $(`#${id}`).html().trim().replace(new RegExp('currentColor', 'g'), '#000000')
    svgs[id] = htmlG
    let template = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
        <g id="${id}">
          ${htmlG}
        </g>
      </svg>`
    fs.writeFileSync(`../${id}.svg`, template)
  })

  fs.unlinkSync(ICONPACK_PATH)
  fs.copyFile('baseline.md', ICONPACK_PATH, (err) => {
    if (err) throw err
    for (id in svgs) {
      fs.appendFileSync(ICONPACK_PATH, `| ![](svg/${id}.svg)  | ${id} | \n`)
    }
  })
  

});


