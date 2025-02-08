//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const nameInput = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const nameList = document.getElementById('listaAmigos');
const drawButton = document.querySelector('.button-draw');
const resultDisplay = document.getElementById('resultado');

const names = [];

function adicionarAmigo() {
  const name = nameInput.value.trim();
  const nomeValido = /^[A-Za-z\s]+$/.test(name);

  if (nomeValido && name) {
    names.push(name);
    atualizarListaAmigos();
    nameInput.value = '';
    nameInput.focus();
  } else {
    console.log('Nome inválido:', name);
    alert('Nome inválido. Por favor, digite apenas letras.');
  }
}

function atualizarListaAmigos() {
  nameList.innerHTML = names.map((name) => `<li>${name}</li>`).join('');
}

function sortearAmigo() {
  if (names.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  const selectedName = names[randomIndex];

  resultDisplay.innerHTML = `<li>O amigo secreto sorteado é: <strong>${selectedName}</strong>!</li>`;
}

addButton.addEventListener('click', adicionarAmigo);
drawButton.addEventListener('click', sortearAmigo);
