<template>
    <div class="promo-form__wrapper d-flex flex-column">
        <p class="promo-form__title d-flex flex-column w-100">Укажите в блоке: график работы, адрес и телефоны<span class="promo-form__description"> для одной акции можно заполнить не более 4-х блоков</span></p>
        <organization v-for="(organization, index) in data" :index="index" @addNumber="addNewNumber" @delete="deleteOrganization" @deleteNumber="deleteNumber" :key="organization.id" :single="organization.single" :multiple="organization.multiple" :id="organization.id"></organization>
        <button v-if="data.length < 4" class="btn mt-3 promo-form__link d-flex justify-content-center promo-form__link--dashed promo-form__link--big" v-on:click="addOrganization"><span>Добавить еще организацию</span></button>
    </div>
</template>

<script>
    import Organization from "./Organization.vue";
    import { normalize, schema } from 'normalizr';
    let template = {
        id: 1,
        single: [
            {id:1,name: 'Адрес', placeholder: 'Москва, проспект Мира 82 корпус 1', alias: 'address', address: ''},
            {id:2,name: 'График работы', placeholder: 'пн-сб: с 10.00 до 20.00 вс с 10.00 до', alias: 'schedule', schedule : ''},
        ],
        multiple: [
            {id: 1, name: 'Телефон', placeholder: '+7 (000) 000-00-00', alias: 'phone', phone : ''}]
    };

    export default {
        name: "OrganizationContainer",
        components:{Organization},
        data() {
            return {
                data: [ {
                    id: 1,
                    single: [
                        {id:1,name: 'Адрес', placeholder: 'Москва, проспект Мира 82 корпус 1', alias: 'address', address: ''},
                        {id:2,name: 'График работы', placeholder: 'пн-сб: с 10.00 до 20.00 вс с 10.00 до', alias: 'schedule', schedule : ''},
                    ],
                    multiple: [
                        {id: 1, name: 'Телефон', placeholder: '+7 (000) 000-00-00', alias: 'phone', phone : ''}]
                }]
            }
        },
        methods: {
            addOrganization() {
                let currentTemplate = {...template}
                currentTemplate.id = this.data.length + 1;
                this.data.push(currentTemplate);

            },
            deleteOrganization(index) {
                let newTemplate = {
                    id: this.data[index].id,
                    single: [
                        {id:1,name: 'Адрес', placeholder: 'Москва, проспект Мира 82 корпус 1', alias: 'address', address: ''},
                        {id:2,name: 'График работы', placeholder: 'пн-сб: с 10.00 до 20.00 вс с 10.00 до', alias: 'schedule', schedule : ''},
                    ],
                    multiple: [
                        {id: 1, name: 'Телефон', placeholder: '+7 (000) 000-00-00', alias: 'phone', phone : ''}]
                };
                this.data.splice(index, 1, newTemplate);

            },
            addNewNumber(id) {
                let index = this.data.findIndex(item => item.id === id);
                let template = {id: this.data[index].multiple.length + 1 ,name: 'Телефон', placeholder: '+7 (000) 000-00-00', alias: 'phone', phone:''};
                const newValue =  {...this.data[index], multiple: this.data[index].multiple.concat(template)};

                this.data.splice(index, 1,newValue);
               // this.$set(this.data, index, newValue)
            },
            deleteNumber(id, multipleId) {
                console.log(id,multipleId )
                let index = this.data.findIndex(item => item.id === id);
                let multipleIndex = this.data[index].multiple.findIndex(item => item.id === multipleId);
                this.data[index].multiple.splice(multipleIndex,1);
            }
        }

    }
</script>

<style scoped>

</style>