const fs = require('fs')
const fm = require('front-matter')
const markdown = './markdown/'
const manifest = 'manifest.json'
let arr = []
let files = []
const path = require('path')

/**
 * Sort array of objects by property
 *
 * https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
 */
function dynamicSort(property) {
  var sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}

fs.readdirSync(markdown).forEach(file => {
  files.push(file)
})

files.forEach(file => {
  const content = fs.readFileSync(`${markdown}${file}`, 'utf8')
  let obj = {}
  obj = fm(content)
  obj.position = obj.attributes.position
  delete obj.attributes.position
  arr.push(obj)
})
arr.sort(dynamicSort('position'))
fs.writeFileSync('manifest.json', JSON.stringify(arr))
