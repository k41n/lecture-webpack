window.derive = function(expression, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
      callback(JSON.parse(xmlhttp.responseText).result)
     }
  }

  xmlhttp.open("GET", "https://newton.now.sh/derive/" + encodeURIComponent(expression), true);
  xmlhttp.send();
}
