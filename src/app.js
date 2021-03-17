var submitButton = document.querySelector('#app form button')
var zipCodeField = document.querySelector('#app form input')
var content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run (event) {
  event.preventDefault() // Não deixa a página atualizar quando clicar no botão

  var zipCode = zipCodeField.value

  zipCode = zipCode.replace(' ', '')
  zipCode = zipCode.replace('.', '')
  zipCode = zipCode.trim()

  axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}