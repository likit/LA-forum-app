import Vuex from 'vuex'
import Vue from 'vue'
import { users } from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            lineId: null,
            licenseId: null,
            profile: {}
        }
    },
    mutations: {
        set_license_id(state, licenseId) {
            state.user.licenseId = licenseId
        }
    },
    actions: {
        fetchUser({ commit, state }) {
            if (state.user.lineId.length > 0) {
                users.where('lineId', '==', state.lineId).get().then((snapshot) => {
                    let user = snapshot.docs[0]
                    commit('set_license_id', user.licenseId)
                })
            }
        }
    }
})

