// Minimal

let shopList = [
  {
    name: "milk",
    quantity: 2,
    bought: true,
    price: 25,
    sum: function () {
      return this.price * this.quantity;
    },
  },

  {
    name: "orange",
    quantity: 4,
    bought: false,
    price: 50,
    sum: function () {
      return this.price * this.quantity;
    },
  },

  {
    name: "apple",
    quantity: 3,
    bought: false,
    price: 21,
    sum: function () {
      return this.price * this.quantity;
    },
  },

  {
    name: "bread",
    quantity: 2,
    bought: true,
    price: 10,
    sum: function () {
      return this.price * this.quantity;
    },
  },
];

function showShopList(array) {
  console.log("To buy:");
  getNotPurchasedList(array).forEach((el) => {
    console.log(` - ${el.name} - ${el.quantity} pieces - ${el.sum()}$`);
  });
  console.log("Bought:");
  getPurchasedList(array).forEach((el) => {
    console.log(` + ${el.name} - ${el.quantity} pieces - ${el.sum()}$`);
  });
}

function getPurchasedList(array) {
  return array.filter((product) => product.bought);
}

function getNotPurchasedList(array) {
  return array.filter((product) => !product.bought);
}

// showShopList(shopList);

// Normal

function removeProduct(array, name) {
  let filteredShopList = array.filter((value) => value.name !== name);
  showShopList(filteredShopList);
}

// removeProduct(shopList, "apple");

function addProduct(array, name, quantity, bought, price) {
  let search = array.filter((value) => value.name == name);
  let newProduct;
  array.forEach((el) => {
    if (!search.length) {
      array.push({
        name,
        quantity,
        bought,
        price,
        sum: function () {
          return this.price * this.quantity;
        },
      });
    } else {
      if (el.name == name) {
        el.quantity += quantity;
        el.bought == bought;
        el.price == price;
      }
    }
  });

  // array.forEach((el) => {
  //   if (el.name == name) {
  //     el.quantity += quantity;
  //     el.bought == bought;
  //     el.price == price;
  //   } else {
  //     array.push({
  //       name,
  //       quantity,
  //       bought,
  //       price,
  //       sum: function () {
  //         return this.price * this.quantity;
  //       },
  //     });
  //   }
  // });
  showShopList(array);
}

// addProduct(shopList, "cherry", 2, false, 15);
// addProduct(shopList, "bread", 1);
