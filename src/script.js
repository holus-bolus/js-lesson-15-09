const shop = {
  goods: [],
  moneyAmount: 120,
  /**
   *
   * @param name {string}
   * @param price {number}
   * @param quantity {number}
   * @returns {string}
   */
  addAGood: function (name, price, quantity = 0) {
    const good = this.goods.find((item) => item.name === name);
    if (good) {
      return 'The product has been found';
    }
    this.goods.push({ name, price, quantity });
  },
  getSocialProducts: function () {
    return this.goods.filter((item) => item.price < 30);
  },
  sellAProduct(productName, quantity) {
    const good = this.goods.find((item) => item.name === productName);
    if (!good) {
      return "We don't have such a product";
    }
    if (good.quantity < quantity) {
      return "We don't have enough items of this product";
    }
    good.quantity -= quantity;
    this.moneyAmount += quantity * good.price;
  },
  buyGoodsFromStorage(productName, quantity) {
    const good = this.goods.find((item) => item.name === productName);
    if (!good) {
      return "We don't have such a product";
    }
    const productsWithDiscount = good.price * quantity * 0.8;
    if (this.moneyAmount < productsWithDiscount) {
      return "We don't have enough money";
    }
    this.moneyAmount -= productsWithDiscount;
    good.quantity += quantity;
  },
  getexpensiveGoods() {
    return this.goods
      .filter((item) => item.price > 15)
      .map((item) => item.name)
      .join(', ');
  },
  checkProductNameAndAmount(name) {
    return this.goods.some((item) => item.name === name && item.quantity);
  },
};
shop.addAGood('bread', 15, 20);
shop.addAGood('eggs', 30, 20);
shop.addAGood('milk', 13, 10);
shop.addAGood('whiskey', 50, 20);
shop.addAGood('washing liquid', 31, 20);
shop.addAGood('meat', 25, 30);

console.log(shop.checkProductNameAndAmount('plate'));
