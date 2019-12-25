import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import cart, { State as CardState } from './modules/cart'
import products, { State as ProductsState } from './modules/products'

Vue.use(Vuex)

// 原因是vuex定义，new Vuex.Store参数类型 StoreOptions 如下：

// export interface StoreOptions<S> {
//   state?: S;
//   getters?: GetterTree<S, S>;
//   actions?: ActionTree<S, S>;
//   mutations?: MutationTree<S>;
//   modules?: ModuleTree<S>;
//   plugins?: Plugin<S>[];
//   strict?: boolean;
// }
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products,
  },
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}



export type CheckoutStatus = 'successful' | 'failed' | null

export interface Product {
  id: number,
  title: string,
  price: number,
  inventory: number
}
export interface State {
  cart: CardState,
  products: ProductsState
}
export interface CartProduct {
  title: string,
  price: number,
  quantity: number
}

export interface AddToCartPayload {
  id: number
}
