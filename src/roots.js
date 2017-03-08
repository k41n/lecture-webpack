import derive from './Derive'

var RootsApp = {
  find: async function(expression) {
    const result = await derive(expression)
    $('#result').html(result)
  },

  init: function() {
    $(form).on('submit', event => {
      event.preventDefault();
      var expression = event.target[0].value
      RootsApp.find(expression)
    })
  }
}

$(() => { RootsApp.init() })
