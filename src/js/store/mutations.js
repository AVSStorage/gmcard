import Vue from 'vue';
export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {

  receiveAll(state,data) {
    Vue.set(state, 'data', data);
  },

  changeType(state, value){
    Vue.set(state.data,'types',value);
  },

  addNewSocialValue(state, {index, data}) {
    Vue.set(state.data.social,index,data);
  },

  addTodo (state, todo) {
    state.todos.push(todo)
  },

  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo (state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done
    })
  }
}
