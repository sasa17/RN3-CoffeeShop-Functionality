import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    const found = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (found) {
      found.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  };

  removeItemFromCart = item => {
    const found = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (found) {
      if (item.quantity <= 1) {
        this.items = this.items.filter(_item => _item != item);
      } else {
        found.quantity -= 1;
      }
    }
  };
  checkoutCart = () => {
    this.items = [];
    alert("Happy caffienation");
  };

  totalItems = () => {
    const total = this.items.map(item => item.quantity);
    let sum = total.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  };
}

decorate(CartStore, {
  items: observable
});
const cartStore = new CartStore();

export default cartStore;
