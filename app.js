var button = document.getElementsByClassName('button');
var cartItem = document.getElementById('cart-value');
var cart = document.getElementById('cart');
var items = [
  {
    name: 'This was our pact',
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: 'The famous five',
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: 'Matilda',
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: 'Harry Potter',
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: 'For Young Readers',
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: 'Wimpy Kid - DIY',
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: 'Dart Board',
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: 'Connect Four',
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: 'Jenga',
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: 'Monopoly',
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: 'Bookmarks',
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: 'Birthday Card',
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: 'Stuffed toys',
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: 'Dream catcher drawing',
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];
let addedItem = [];
let count = 0;
for (let i = 0; i < button.length; i++) {
  addClickListener(i);
}
cart.onclick = (e) => {
  let totalDollars = 0;
  let totalCents = 0;
  for (var i = 0; i < items.length; i++) {
    for (var j = 0; j < items[i].quantity; j++) {
      totalDollars = totalDollars + items[i].dollars;
      totalCents = totalCents + items[i].cents;
      console.log(
        'Item name: ' + items[i].name + ' - Quantity ' + items[i].quantity
      );
    }
  }
  console.log('Total Dollars is ' + totalDollars + ' and cents ' + totalCents);
};
function addClickListener(index) {
  button[index].onclick = (e) => {
    addItem(index);
  };
}
function addItem(index) {
  items[index].quantity++;
  let quantity = 0;
  for (var i = 0; i < items.length; i++) {
    quantity = quantity + items[i].quantity;
  }
  cartItem.innerHTML = quantity;
}
