export default {
    addCart(context, payload) {
        //   判断是否是重复商品
        let oldProduct = null;
        for (let item of context.state.cartList) {
          if (item.iid === payload.iid) {
            oldProduct = item;
          }
        }
        if (oldProduct) {
          context.commit("addCounter", oldProduct);
        } else {
          context.commit("addToCart", payload);
        }
      }
}