const restaurant = {
  name: "Bob's Burger",

  // The object should have a property named orders that is an array. You will need to define this.
  orders: [],

  // Define a function to represent the behavior of placing an order. It should accept one
  // argument named meal. This argument will be an object. There is starter code provided.
  placeOrder: function (meal) {
    this.orders.push(meal);
  },

  // Define a function to represent the behavior of getting all orders. It should return
  // the order property (hint: this). You will need to define this.
  collectOrders: function () {
    return this.orders;
  },
};

// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

function mealCombo(sandwichType, fries, drinkSize) {
  let combo = {};
  combo.sandwichType = sandwichType;
  combo.fries = fries;
  combo.drinkSize = drinkSize;
  return combo;
}

const chickenCombo = mealCombo("Chicken", true, "Small");
const shrimpCombo = mealCombo("Shrimp", false, "Medium");
const steakCombo = mealCombo("Steak", true, "Large");

// Place an order
restaurant.placeOrder(chickenCombo);
restaurant.placeOrder(steakCombo);
restaurant.placeOrder(shrimpCombo);

// Invoke the function to return the list of all orders
restaurant.collectOrders();
// Output all orders to the console using console.table()
console.table(restaurant.orders);
