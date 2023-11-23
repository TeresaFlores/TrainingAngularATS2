export const ITEM = {
  itemName: '',
  qty: 0,
  price: 0,
};

export const FOOD = {
  items: [ITEM],
  totalPrice: 0,
};

export const TICKETS = {
  items: [ITEM],
  totalPrice: 0,
};

export const CART = {
  currencies: ['USA', 'CAD', 'MXN'],
  tickets: TICKETS,
  food: FOOD,
  cadChange: 1,
  mxnChange: 17,
  totalItem: 0,
};
