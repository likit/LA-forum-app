import Vuex from 'vuex'
// import liff from '@line/liff'
import Vue from 'vue'
import { users } from '../firebase'
import VuexPersistence from "vuex-persist";

const vuexLocalStorage = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage,
    reducer: state => ({
        user: state.user,
    })
})

// liff.init({liffId: '1657676192-qpme4gOz'})
Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    state: {
        user: {
            admin: false,
            lineId: null,
            licenseId: null,
            number: null,
            firstname: null,
            lastname: null,
            title: null,
            email: null,
            phone: null,
        },
        opening: false,
    },
    mutations: {
        toggle_opening(state) {
            state.opening = true
        },
        set_license_id(state, licenseId) {
            state.user.licenseId = licenseId
        },
        set_admin(state, isAdmin) {
            state.user.admin = isAdmin
        },
        set_line_id(state, lineId) {
            state.user.lineId = lineId
        },
        set_firstname(state, firstname) {
            state.user.firstname = firstname
        },
        set_lastname(state, lastname) {
            state.user.lastname = lastname
        },
        set_title(state, title) {
            state.user.title = title
        },
        set_email(state, email) {
            state.user.email = email
        },
        set_phone(state, phone) {
            state.user.phone = phone
        },
        set_number(state, number) {
            state.user.number = number
        },
    },
    actions: {
        fetchUser({ commit, state }) {
            if (state.user.lineId) {
                users.where('lineId', '==', state.user.lineId).get().then((snapshot) => {
                    if (snapshot.docs.length > 0) {
                        let user = snapshot.docs[0]
                        commit('set_license_id', user.data().licenseId)
                        commit('set_line_id', user.data().lineId)
                        commit('set_firstname', user.data().firstname)
                        commit('set_lastname', user.data().lastname)
                        commit('set_title', user.data().title)
                        commit('set_email', user.data().email)
                        commit('set_phone', user.data().phone)
                        commit('set_number', user.data().number)
                        commit('set_admin', user.data().admin)
                    }
                })
            }
        },
    }
})

