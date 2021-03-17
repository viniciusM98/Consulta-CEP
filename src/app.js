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
      content.innerHTML = '' //Inicia o conteúdo vazio
      createLine(response.data.logradouro)
      createLine(response.data.localidade + '/' + response.data.uf)
      createLine(response.data.bairro)
    })
    .catch(error => {
      console.log(error)
    })
}

function createLine(valor){
  let line = document.createElement('p')
  let text = document.createTextNode(valor)

  line.appendChild(text)
  content.appendChild(line)
}