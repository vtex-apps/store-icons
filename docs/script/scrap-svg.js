const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const PRODUCTION_ICON_PACK = path.join(__dirname, '..', '..', 'styles', 'iconpacks', 'iconpack.svg')

const body = fs.readFileSync(PRODUCTION_ICON_PACK)

const $ = cheerio.load(body);
const svgs = {}

$('g').toArray().map(element => {
  let id = element.attribs.id.trim()
  let htmlG = $(`#${id}`).html().trim().replace(new RegExp('currentColor', 'g'), '#000000')
  svgs[id] = htmlG
  let template = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
      <g id="${id}">
        ${htmlG}
      </g>
    </svg>`

  fs.writeFileSync(path.join(__dirname, '..', id + '.svg'), template)
})

const BASELINE_PATH = path.join(__dirname, 'baseline.md')
const ICONPACK_PATH = path.join(__dirname, '..', '..', 'ICONPACK.md')

fs.copyFile(BASELINE_PATH, ICONPACK_PATH, (err) => {
  if (err) throw err
  for (id in svgs) {
    fs.appendFileSync(ICONPACK_PATH, `| ![](docs/${id}.svg)  | ${id} | \n`)
  }
})