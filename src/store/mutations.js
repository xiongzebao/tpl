
import { INCREMENT,DECREMENT } from './types'

const mutations = {
	 [INCREMENT](state) {
		state.counter++;
	},
    [DECREMENT](state) {
		state.counter--;
	}
};

export default mutations
