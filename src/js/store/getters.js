export const textFieldData = state => state.data.textFieldData;
export const social = state => state.data.social;
export  const types = state => state.data.types;
export  const validations = state => state.data.validations;
export const findValueById = (state, getters) => (id, data) => {
    return data.find(item => item.id === id );
}

export const checkValidation = (state) => {
    const errors  = {
        area: 'Не заполнено поле описания акции',
        title: 'Не заполнено поле заголовок',
        city: 'Не заполнено поле город',
        days: 'Не выбрано количество дней акции',
        agreement: 'Необходимо принять соглашение',
        type: 'Выберите тип скидки'
    }
    let valid = !Object.values(state.data.validations).includes(false);
    let index = Object.values(state.data.validations).indexOf(false);
    return {valid, field: Object.keys(state.data.validations)[index], errorText: errors[Object.keys(state.data.validations)[index]] };
}

export const selectedType = (state) => {

    return state.data.types.findIndex(type => {
        return type.state
    })
}
export const findIndexById = (state, getters) => (id, data) => {
    return data.findIndex(item => item.id === id);
}

export const getSocialButtonById = (state, getters) => id => {
    let newState = {...state};
    return getters.findValueById(id, newState.data.social);
}


export const getSocialButtons = (state, getters) =>  {
    let newState = {...state};
    return newState.data.social;
}


export const getSocialButtonIndexById = (state, getters) => id => {
    let newState = {...state};
    return getters.findIndexById(id, newState.data.social);
}


export const currentThread = state => {
    return state.currentThreadID
        ? state.threads[state.currentThreadID]
        : {}
}

export const currentMessages = state => {
    const thread = currentThread(state)
    return thread.messages
        ? thread.messages.map(id => state.messages[id])
        : []
}

export const unreadCount = ({ threads }) => {
    return Object.keys(threads).reduce((count, id) => {
        return threads[id].lastMessage.isRead ? count : count + 1
    }, 0)
}

export const sortedMessages = (state, getters) => {
    const messages = getters.currentMessages
    return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
}
