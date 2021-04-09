//prideti/pasalinti klases (veikia su ciklu)
//btn.classList.add('blue');
//btn.classList.remove('blue');

// Ka reikia zinoti:
// 1. Koki noriu sugeneruoti turini? Is kokiu duomenu?
// 2. Kur ta turini patalpinti? Koks yra selector?

// Kai norim perrasyti elemento tekstini turini:
// element.innerText = 'turinys'

// susirandame vieta
const selector = '.calc';
const DOM = document.querySelector(selector); //DOM yra konkreti vieta, kurioje norime dirbti (atnaujinti turini)
const formulaDOM = DOM.querySelector('.formula');

// const screen = document.querySelector('.screen');
// screen.innerText = '114';

// DOM.innerHTML = HTML; overridina turima elementa
// DOM.innerHTML += HTML; prideda nauja dalyka prie jau turimos reiksmes

// sukuriame turini
const symbols = ['C', '+/-', '%', '/', '1', '2', '3', '*', '4', '5', '6', '-', '7', '8', '9', '+', '0', '.', '<', '='];

let HTML = '';

for (let i = 0; i < symbols.length; i++) {
    HTML += `<div class = "key" data-symbol = "${symbols[i]}"></div>`
}

// istatome i turini
DOM.innerHTML += HTML;

// susirandame katik sukurtus mygtukus
const buttons = DOM.querySelectorAll('.key');

//atsiradus poreikiui, uzdedame papildoma klase ant visu elementu
for (let i = 0; i < buttons.length; i++) {
const btn = buttons[i];

btn.addEventListener('click', function () {
    const symbol = btn.dataset.symbol;
    formulaDOM.innerText += symbol;
});
} 







