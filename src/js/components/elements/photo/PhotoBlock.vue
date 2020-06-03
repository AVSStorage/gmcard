<template>
    <div class="promo-form__wrapper d-flex flex-column">
        <div class="d-flex justify-content-between mb-4 flex-column flex-sm-row">
            <p class="promo-form__title d-flex flex-column">Загрузите
                фотографии в слайдер, что вы предлагаете.
                <span class="promo-form__description">Обязательна только 1 (первая) фотография, остальные по желанию.</span>
            </p>
            <div class="promo-form__help">
                <button class="btn promo-form__link promo-form__link--dashed" data-toggle="modal" data-target="#photoModal"><span>У меня нет фото, что делать?</span></button>
            </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap mb-4">
            <slider-photo
                    v-for="image in sliderImages"
                    :key="image.id"
                    @processFile="processFile"
                    :image="image"
                    :required="$v.sliderImages[0].required"
            ></slider-photo>
            <div @click="addSliderPhoto" v-show="resetSliderButton" :class="resetSliderButton && 'd-flex'"
                 class="promo-form__image mb-2 promo-form__image--big promo-form__image--empty  flex-column">
                <span class="font-weight-normal promo-form__title text-center mt-3 mt-lg-0">Добавить еще место под фото</span></div>
        </div>

        <label class="promo-form__link promo-form__link--dashed promo-form__link--big justify-content-center mb-3">
            <input v-model="showSmallPhotos" type="checkbox" class="d-none">
            <span class="link-long">Загрузить
                дополнительные фотографии</span><i class="material-icons">keyboard_arrow_down</i>
        </label>

        <div v-show="showSmallPhotos" class="flex-column"><p
                class="promo-form__title d-flex flex-column w-100 text-center mt-3 mb-3">
            Дополнительные фото в карточке под спойлером (не обязательно)</p>
            <div class="d-flex justify-content-between flex-column">
                <p class="promo-form__image-text">Выберите стиль отображения дополнительных фото, увидеть отличия вы сможете при просмотре акции.</p>
                <div :class="showTypes" class="mb-3">
                <div class="d-flex flex-column mr-4">
                    <div class="d-flex promo-form__image-form align-items-start">
                        <input type="radio" class="mt-3" checked name="image_type[]" id="image_type_1">
                        <label class="d-flex flex-column" for="image_type_1">Использовать расположение дополнительных фото по варианту 1
                            <div class="promo-form__image  promo-form__image--center w-100 d-flex flex-column"></div>
                            <div class="d-flex justify-content-start align-items-start promo-form__image-container">
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview promo-form__image--preview-small d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview promo-form__image--preview-small d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview promo-form__image--preview-small d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview promo-form__image--preview-small d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview promo-form__image--preview-small d-flex flex-column"></div>
                            </div>

                        </label>
                    </div>

                </div>
                <div class="d-flex flex-column">
                    <div class="d-flex promo-form__image-form align-items-start">
                        <input type="radio" class="mt-3" name="image_type[]"  id="image_type_2">
                        <label class="d-flex flex-column" for="image_type_2">Использовать расположение дополнительных фото по варианту 2

                            <div class="promo-form__image  promo-form__image--center w-100 d-flex flex-column"></div>
                            <div class="d-flex justify-content-between align-items-start mt-2 mb-2">
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview  d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview d-flex flex-column"></div>
                                <div class="promo-form__image  promo-form__image--center promo-form__image--preview  d-flex flex-column"></div>
                            </div>
                        </label>
                    </div>

                </div>
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-between">
                <small-photo
                        v-for="image in smallImages"
                        :key="image.id"
                        @processFile="processFile"
                        @deleteSmallImage="deleteSmallImage"
                        :image="image"

                ></small-photo>
                <div @click="addSmallPhoto" :class="smallImages.length < 5 ? 'd-flex' : 'd-none'"
                     class="promo-form__image promo-form__image-wrapper promo-form__image--empty mb-2 flex-column">
                    <span class="font-weight-normal promo-form__title text-center mt-3 mt-lg-0">Добавить еще место под фото</span>
                </div>
            </div>
        </div>
        <photo-editor
                :src="image"
                :num="editedImageId"
                :editStep="editStep"
                @hideModal="cancelModal"
                @saveEditedPhoto="saveEditedPhoto"
                :modal="modal"
        ></photo-editor>

    </div>

</template>

<script>
    import SliderPhoto from "./SliderPhoto.vue";
    import SmallPhoto from "./SmallPhoto.vue";
    import {Cropper} from 'vue-advanced-cropper'
    import PhotoEditor from "./PhotoEditor.vue";
    import { required, minLength, between } from 'vuelidate/lib/validators';

    export default {
        name: "PhotoBlock",
        components: {SmallPhoto, SliderPhoto, Cropper, PhotoEditor},
        data() {
            return {
                modal: false,
                image: 'https://avatars.mds.yandex.net/get-zen_doc/230574/pub_5af074057ddde876737617c4_5af074478c8be36795a8456f/scale_1200',
                editedImageId: 1,
                editStep: 1,
                showSmallPhotos: false,
                sliderImages: [
                    {
                        id: 1,
                        loaded: false,
                        required: true,
                        file: {}
                    },
                    {
                        id: 2,
                        loaded: false,
                        required: false,
                        file: {}
                    }
                ],
                smallImages: [
                    {
                        id: 1,
                        loaded: false,
                        file: {}
                    },
                    {
                        id: 2,
                        loaded: false,
                        file: {}
                    },
                    {
                        id: 3,
                        loaded: false,
                        file: {}
                    },
                    {
                        id: 4,
                        loaded: false,
                        file: {}
                    },
                ]
            }
        },
        validations: {
            sliderImages: {
                '0' :  {required}
            }
        },
        computed: {
            showTypes: function() {
                if (this.smallImages.findIndex(image => {
                    return image.file instanceof File
                }) !== -1 ) {
                    return 'd-flex';
                } else {
                    return  'd-none';
                }
            },
            resetSliderButton: function () {
                return this.sliderImages.length < 3;
            }
        },
        methods: {
            saveEditedPhoto(data) {
                let image = this.sliderImages.find(img => img.id === this.editedImageId);
                let index = this.sliderImages.findIndex(img => img.id === this.editedImageId);
                if (!image.coordinates) {
                    image.coordinates = [{id:1, data}];
                    this.editStep = 2;
                    this.$set(this.sliderImages, index, image);
                } else if (image.coordinates.length < 2) {
                    image.coordinates.push({id:2, data});
                    this.editStep = 1;
                    this.hideModal();
                }

            },
            cancelModal() {
                let image = this.sliderImages.find(img => img.id === this.editedImageId);
                let index = this.sliderImages.findIndex(img => img.id === this.editedImageId);
                this.editStep = 1;
                image.loaded = false;
                image.file = {};
                if (image.coordinates) {
                    delete image.coordinates;
                }
                this.sliderImages[index] = image;
                console.log(this.sliderImages[index]);
                this.hideModal();
            },
            hideModal() {
                this.modal = false;
            },
            showModal() {
                this.modal = true;
            },
            addSmallPhoto() {
                this.smallImages.push({
                    id: this.smallImages.length + 1,
                    loaded: false,
                    file: {}
                },);
            },
            addSliderPhoto() {
                this.sliderImages.push({
                    id: this.sliderImages.length + 1,
                    loaded: false,
                    required: false,
                    file: {}
                },);
            },
            async validateImage(image) {
                const reader = new FileReader();
                let promise = new Promise((resolve, reject) => {
                    reader.onerror = () => {
                        reader.abort();
                        reject(new DOMException("Problem parsing input file."));
                    };
                    reader.readAsDataURL(image);
                    reader.onload = (e) => {
                        resolve(e.target.result);
                    };
                }).then((src) => {
                    let image = new Image();
                    image.src = src;
                    return new Promise((resolve, reject) => {
                        image.onload = function () {
                            let {height, width} = this;
                            if (height < 500) {
                                alert("Высота изображения должна быть больше 500 пикселей");
                                reject(false);
                            } else if (width < 800) {
                                alert("Ширина изображения должна быть больше 800 пикселей");
                                reject(false);
                            }
                            resolve(true);
                        };
                    })
                }).catch(error => console.log(error));
                return await promise;

            },
            deleteSmallImage(id) {
                let image = this.smallImages.find(img => img.id === id);
                let index = this.smallImages.findIndex(img => img.id === id);
                image.file = {}
                image.loaded = false;
                this.smallImages[index] = image;
            },
            async processFile(event, id, type) {

                let index = this[type].findIndex(img => img.id === id);
                let image = this[type].find(img => img.id === id);
                if (type === 'sliderImages') {
                    this.editedImageId = id;
                    if (image.coordinates) {
                       delete image.coordinates;
                    }
                    this.$v.$touch();
                    this.showModal();
                }

                console.log(this.$v.sliderImages[0].required);
                let valid = await this.validateImage(event.target.files[0]);
                if (valid) {
                    image.file = event.target.files[0];
                    image.loaded = true;
                    this[type][index] = image;
                    let urls = ['https://web-zoopark.ru/wp-content/uploads/2018/06/1-306.jpg', 'https://avatars.mds.yandex.net/get-zen_doc/1680084/pub_5d3599116f5f6f00add74a04_5d3599dece44a000b9d37220/scale_1200', 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-08/TASS_24070351.jpg?itok=jOwSCOzM', 'https://kipmu.ru/wp-content/uploads/2016/04/leopard.jpg'];
                    this.image = urls[Math.floor(Math.random() * Math.floor(3))];
                    this.editedImageId = id;

                } else {
                    image.loaded = false
                }
            }

        }
    }
</script>

<style scoped>

</style>