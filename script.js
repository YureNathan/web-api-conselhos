let valorId = 0;
function buscarConselhos() {
  let elementos = document.getElementById('pesquisar');
  elementos.innerHTML = `<input type="number" name="valorConselho" id="valorConselho" placeholder="Digite um número"> <button onclick="gerarConselhos()">Estou com sorte</button>`;

  let inputConselho = document.getElementById('valorConselho');
  inputConselho.addEventListener('input', () => {
    valorId = inputConselho.value;
  });

}

function gerarConselhos() {
  let URL = 'https://api.adviceslip.com/advice';

  if (valorId != 0) {
    fetch(`${URL}/${valorId}`).then(
      response => response.json()
    ).then(dados => {
      document.getElementById('outMensage').innerText = dados.slip.advice;
      document.getElementById('outId').innerText = `Conselho: ${dados.slip.id}`;
      document.getElementById('infoId').classList.add('visivel');
    })
  } else {
    fetch(URL).then(
      response => response.json()
    ).then(dados => {
      document.getElementById('outMensage').innerText = dados.slip.advice;
      document.getElementById('outId').innerText = `Conselho: ${dados.slip.id}`;
      document.getElementById('infoId').classList.add('visivel');

    })

  }
   valorId = 0;

}
