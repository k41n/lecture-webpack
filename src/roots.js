var RootsApp = {
  find: function(expression) {
    derive(expression, function(result) {
      $('#result').html(result)
    })
  },

  init: function() {
    $(form).on('submit', function(event) {
      event.preventDefault();
      var expression = event.target[0].value
      RootsApp.find(expression)
    })
  }
}

$(function() {
  RootsApp.init()
})
