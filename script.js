const drawCardButton = document.getElementById('draw-card');
const cardDisplay = document.getElementById('card-display');

const cards = [
  {
    image: 'oracle spell cards/ancla.png',
    title: 'Ancla',
    description: 'lorem ipsum 1'
  },
  {
    image: 'oracle spell cards/angel.png',
    title: 'Ángel',
    description: 'lorem ipsum 2'
  },
  {
    image: 'oracle spell cards/balanza.png',
    title: 'Balanza',
    description: 'lorem ipsum 3'
  },
  {
    image: 'oracle spell cards/calavera.png',
    title: 'Calavera',
    description: 'lorem ipsum 4'
  },
  {
    image: 'oracle spell cards/campana.png',
    title: 'Campana',
    description: 'lorem ipsum 5'
  }
];

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

function displayCard() {
  const card = getRandomCard();
  
  cardDisplay.innerHTML = `
    <img src="${card.image}" alt="Carta">
    <h2>${card.title}</h2>
    <p>${card.description}</p>
  `;
}

drawCardButton.addEventListener('click', displayCard);