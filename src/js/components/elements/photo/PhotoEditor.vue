<template>
    <!-- Modal -->
    <div class="modal editor fade" :class="modal ? 'show' : ''" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" :style="modal ?' display: block;' : ''" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div>
                    <cropper
                            classname="cropper"
                            :src="src"
                            ref="cropper"
                            :stencilProps="{scalable: false, aspectRatio: 25/14}"
                            @change="change"
                    ></cropper>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <div class="d-flex">
                        <p class="photo__text photo__text--blue">{{ editStep }} из 2</p>
                        <p class="photo__text--accent">Выберите длинное изображение</p>
                    </div>
                    <div>
                        <button @click="$emit('hideModal')" type="button" class="btn  photo__button" data-dismiss="modal">Отменить</button>
                        <button @click="saveEditedPhoto" type="button" class="btn ml-2 photo__button photo__button--accent">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoEditor",
        props: {
          num: Number,
          src: String,
          editStep: Number,
          modal : Boolean
        },
        data() {
            return {
                id :this.num,
                image : this.src,
                coordinates : {}
            }
        },
        beforeUpdate : function() {
                this.$refs.cropper.setCoordinates((coordinates, imageSize) => ({
                    left: imageSize.width/2 - coordinates.width/2,
                    top: imageSize.height/2 - coordinates.height/2
                }))
        },
        methods : {
            saveEditedPhoto() {
                this.$emit('saveEditedPhoto', this.coordinates);
            },
            defaultSize() {
                return {
                    width: 777,
                    height: 437,
                }
            },
            change({coordinates, canvas}) {
                this.coordinates = coordinates;
            },
        }
    }
</script>

<style scoped>
    .editor .modal-dialog {
        width: 100%;
    }
    @media (min-width: 991px) {
        .editor .modal-dialog {
            max-width: 45%
        }
    }

</style>