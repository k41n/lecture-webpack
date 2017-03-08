window.derive = function(expression, callback) {
  $.ajax({
    url: 'https://newton.now.sh/derive/' + encodeURIComponent(expression),
    method: 'GET',
    success: function(response) {
      callback(response.result)
    }
  })
}
