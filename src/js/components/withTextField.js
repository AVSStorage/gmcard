import Vue from 'vue'

const withTextField = (component, selectData) => {
    return Vue.component('withTextField', {
        render(createElement) {
            return createElement(component)
        },
        data() {
            return {
                fetchedData: null
            }
        },
        methods: {
            handleChange() {
                this.fetchedData = selectData(DataSource)
            }
        }
    })
}
export default withTextField;