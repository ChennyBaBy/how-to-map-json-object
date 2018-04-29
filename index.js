var json = require('./example.json')

json.menu.popup.menuitem.map(function(item) {
  console.log("value is:" + item.value + ", the function name is" + item.onclick)
})
