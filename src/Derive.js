export default function(expression) {
  return new Promise( resolve => {
    $.ajax({
      url: API_URL + encodeURIComponent(expression),
      method: 'GET',
      success: response => {
        resolve(response.result)
      }
    })
  })
}
