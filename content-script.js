const cards = document.getElementsByClassName("grid-view-item grid-view-item--sold-out product-card")

for (let i = cards.length - 1; i >= 0; i--) {
  cards[i].parentElement.remove();
}