import Vue from 'vue'
import { mapState } from "vuex"
import contents from '../locale/language'
import axios from 'axios'

const helpers = Vue.mixin({
    computed: {
        ...mapState({
            serviceAPI: 'serviceAPI',
            imageAPI: 'imageAPI',
            backgroundPosition: 'backgroundPosition',
            backgroundSize: 'backgroundSize',
            oBackgroundSize: 'oBackgroundSize',
            msBackgroundSize: 'msBackgroundSize',
            mozBackgroundSize: 'mozBackgroundSize',
            webkitBackgroundSize: 'webkitBackgroundSize',
            backgroundRepeat: 'backgroundRepeat'
        })
    },
    methods: {
        cekCache(time) {
            var hours = 24
            var now = new Date().getTime()
            if (time == null) {
                return false
            } else {
                if(now-time > hours*60*60*1000) {
                    localStorage.clear()
                    return false
                }
                return true
            }
        },
        goBack() {
            if (process.browser) {
                window.history.go(-1)
            }
        }
    }
});

export default helpers;
