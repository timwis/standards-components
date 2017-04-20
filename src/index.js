activate('phl-button', require('./components/button'))
activate('phl-service-update', require('./components/service-update'))

function activate (query, fn) {
  const elsNodeList = document.querySelectorAll(query)
  const elsArray = [].slice.call(elsNodeList)
  elsArray.forEach(fn)
}
