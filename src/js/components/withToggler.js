import Vue from 'vue'

const withToggler = (component, selectData) => {
    return Vue.component('withToggler', {
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
export default withToggler;