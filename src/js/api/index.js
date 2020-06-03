const data = require('./mock-data').textFieldData;
const social = require('./mock-data').social;
const types = require('./mock-data').types;
const validations = require('./mock-data').validation;
export function getAllTextFieldData (cb) {
    cb({textFieldData : data, social,types, validations});
}

export function createMessage ({ text, thread }, cb) {
    const timestamp = Date.now()
    const id = 'm_' + timestamp
    const message = {
        id,
        text,
        timestamp,
        threadID: thread.id,
        threadName: thread.name,
        authorName: 'Evan'
    }
    setTimeout(function () {
        cb(message)
    }, LATENCY)
}
