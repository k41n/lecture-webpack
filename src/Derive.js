export default function(expression) {
  return new Promise( resolve => {
    $.ajax({
      url: 'https://newton.now.sh/derive/' + encodeURIComponent(expression),
      method: 'GET',
      success: response => {
        resolve(response.result)
      }
    })
  })
}
