import CompanyInfo from '../common/components/CompanyInfo/index.vue'

export default {
    components : {
        "CompanyInfo" : CompanyInfo
    },
    data () {
        return {
            spanLeft: 3,
            spanRight: 21
        }
    },
    computed: {
        iconSize () {
            return this.spanLeft === 3 ? 16 : 24;
        }
    },
    methods: {
        toggleClick () {
            if (this.spanLeft === 3) {
                this.spanLeft = 1;
                this.spanRight = 23;
            } else {
                this.spanLeft = 3;
                this.spanRight = 21;
            }
        }
    }
}