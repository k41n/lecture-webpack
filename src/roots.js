var RootsApp = {
  find: function(expression) {
    derive(expression, function(result) {
      document.getElementById("result").innerHTML = result
    })
  },

  init: function() {
    var form = document.getElementById('form')
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var expression = event.target[0].value
      RootsApp.find(expression)
    })
  }
}

document.addEventListener("DOMContentLoaded", function(){
  RootsApp.init()
})
