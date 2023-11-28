// Criar um novo elemento de parágrafo (p)
let novoParagrafo = document.createElement('p');

// Inserir texto no novo elemento de parágrafo
novoParagrafo.textContent = 'Este é um novo parágrafo inserido dinamicamente na página.';

// Adicionar o novo elemento de parágrafo ao final do body do documento
document.body.appendChild(novoParagrafo);

// Adicionar um novo elemento de lista (ul)
let novaLista = document.createElement('ul');

// Adicionar elementos de lista (li) ao novo elemento de lista
for (let i = 0; i < 3; i++) {
    let novoItem = document.createElement('li');
    novoItem.textContent = 'Item ' + (i + 1);
    novaLista.appendChild(novoItem);
}

// Adicionar o novo elemento de lista ao final do body do documento
document.body.appendChild(novaLista);

// Adicionar um novo elemento de parágrafo após o elemento com a classe 'minhaClasse'
let elementoComClasse = document.querySelector('.minhaClasse');
let novoParagrafoComClasse = document.createElement('p');
novoParagrafoComClasse.textContent = 'Este é um novo parágrafo inserido após o elemento com a classe "minhaClasse".';
document.body.insertBefore(novoParagrafoComClasse, elementoComClasse.nextSibling);
