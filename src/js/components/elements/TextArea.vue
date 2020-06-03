<template>
    <div class="flex-column w-100" :class="toggleClass">
<!--                <textarea v-bind:name="item.name" v-bind:placeholder="item.placeholder" class="promo-form__more w-100"></textarea>-->
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar">

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                >
                    <icons name="bold.svg"/>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                >
                    <icons name="italic.svg"/>
                </button>

                <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.strike() }"
                        @click="commands.strike"
                >
                    <icons name="strike.svg"/>
                </button>


                <button
                        class="menubar__button"
                        @click="commands.undo"
                >
                    <icons name="undo.svg"/>
                </button>

                <button
                        class="menubar__button"
                        @click="commands.redo"
                >
                    <icons name="redo.svg"/>
                </button>

            </div>
        </editor-menu-bar>

        <editor-content  class="editor__content" :editor="editor"/>
    </div>
</template>

<script>
    import {Editor, EditorContent, EditorMenuBar} from 'tiptap';
    import Icons from "./Icons.vue";
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Placeholder,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
    } from 'tiptap-extensions'

    let extensions = [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new TodoItem(),
            new TodoList(),
            new Link(),
            new Bold(),
            new Code(),
            new Italic(),
            new Strike(),
            new Underline(),
            new History(),
     ];
    export default {
        name: "TextAreaElement",
        props: {
            item: Object,
            state: Boolean,
            placeholder: String,
            index: Number
        },
        data() {

            return {
                json: '',
                html: '',
                editor: null
            }
        },
        components: {
            EditorContent,
            EditorMenuBar,
            'icons' : Icons
        },
        mounted(){
            this.editor = new Editor({
                extensions: [
                    ...extensions,
                    new Placeholder({
                        showOnlyCurrent: false,
                        emptyNodeText: node => {

                            if (node.type.name === 'paragraph') {
                                return this.placeholder
                            }
                             return 'Write something'
                        },
                    })
                ],
                content: `<p></p>`,
                onUpdate: ({ getJSON, getHTML }) => {
                    this.json = getJSON();
                    this.html = getHTML();
                    this.$emit('update', this.index, this.json);
                },
            })



        },
        computed: {
            // editor: function() {
            //     return  new Editor({
            //         extensions,
            //         content: `<p>${this.placeholder}</p>`
            //     })
            // },
            toggleClass: function () {
                return this.state ? 'd-flex animated fadeIn ' + this.item.classes : 'd-none'
            }
        },
        // mounted() {
        //     this.editor = new Editor({
        //         content: '<p>This is just a boring paragraph</p>',
        //     })
        // },
        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style scoped>


</style>