import * as api from '../api'
import cities from '../../static/cities.json'

export function ajaxFindCity (query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const results = cities.filter((element, index, array) => {
        return element.city.toLowerCase().includes(query.toLowerCase())
      })
      resolve(results)
    }, 1000)
  })
}

export const updateValidation = ({commit, getters}, {key,value}) => {
  let validation = getters.validations;
  Vue.set(validation,key,value);
}

export const changeType = ({commit, getters, dispatch}, {value, index}) => {
  let types = getters.types;
  let newBoolean = types.map(type => {
    type.state = false;
    return type;
  })
  dispatch('updateValidation', {key: 'type', value:  true});

  let newType = types[index];
  commit('changeType', newBoolean);
  newType.state = value;
  types.splice(index,1,newType);

}

export const getAllTextFieldData= ({ commit }) => {
  api.getAllTextFieldData(data => {
    commit('receiveAll', data)
  })
}

export const toggleSocialButton = ({commit, getters, dispatch}, {state,  id}) => {
  let payload = getters.getSocialButtonById(id);
  if (state && payload.value.length === 0) {
    dispatch('addNewSocialValue', id);
  } else if (!state) {
    payload.value.splice(0, payload.value.length);
  }
}
export const deleteSocialValue = ({commit, getters}, {id, valueId}) => {
  let payload = getters.getSocialButtonById(id);
  let index = getters.findIndexById(valueId, payload.value);
  payload.value.splice(index, 1);
  if (payload.value.length === 0) {
    payload.status = false;
  }
}

export const addNewSocialValue = ({commit, getters}, id) => {
  let payload = getters.getSocialButtonById(id);
  let index = getters.getSocialButtonIndexById(id);
  payload.value.push({id: payload.value.length + 1, value : ''});
  commit('addNewSocialValue', {index, data: payload} )
}
export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload, message => {
    commit('receiveMessage', message)
  })
}

export const switchThread = ({ commit }, payload) => {
  commit('switchThread', payload)
}
