import Vue from 'vue'
import Vuex from 'vuex'
import {myAjax,myLoad} from 'network'

Vue.use(Vuex)

Vue.prototype.myAjax = myAjax;
Vue.prototype.myLoad = myLoad;

const store = new Vuex.Store({
	state: {
		num: 0
	},
	mutations: {
		numAdd(state){
			state.num++
		},
		numSub(state){
			state.num--
		}
	},
	actions: {
		numAction(context){
			setTimeout(() => context.commit("numAdd"),1000)
		},
		ajaxAction(context){
			return new Promise((resolve,reject) => {
				myAjax({
					url: 'admin.php/agent/test',
					method: 'pose',
					data: {
						id: 0
					}
				}).then(data => resolve(data))
				// $ajax{
					// resolve(data)
					// setTimeout(() => resolve('data'),1000);
				// }
			})
		}
	},
	getters: {

	},
	modules: {

	}
})

export default store