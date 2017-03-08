var RootsApp = {
  find: function(expression) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        document.getElementById("result").innerHTML = JSON.parse(xmlhttp.responseText).result;
       }
    }

   xmlhttp.open("GET", "https://newton.now.sh/derive/" + encodeURIComponent(expression), true);
   xmlhttp.send();
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
