import Vuex from 'vuex'
import liff from '@line/liff'
import Vue from 'vue'
import { users } from '../firebase'

liff.init({liffId: '1654917258-m2QqMz51'})
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
        },
        set_line_id(state, lineId) {
            state.user.lineId = lineId
        },
        set_user_profile(state, profile) {
            state.user.profile = profile
        },
    },
    actions: {
        fetchUser({ commit, state }) {
            if (state.user.lineId.length > 0) {
                users.where('lineId', '==', state.lineId).get().then((snapshot) => {
                    let user = snapshot.docs[0]
                    commit('set_license_id', user.licenseId)
                })
            }
        },
        fetchProfile({ commit, state}) {
            liff.getProfile().then((profile)=> {
                commit('set_user_profile', profile)
                commit('set_line_id', profile.userId)
                users.where('lineId', '==', state.user.lineId).get().then((snapshot) => {
                    if (snapshot.docs.length > 0) {
                        let user = snapshot.docs[0].data()
                        commit('set_license_id', user.licenseId)
                    }
                })
            })
        }
    }
})

