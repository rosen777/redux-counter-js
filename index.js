import { createStore } from 'redux'

const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'COUNTER_UP':
            return state >= 10 ? state : state + 1
        case 'COUNTER_DOWN':
            return state <= 0 ? state : state - 1
        case 'COUNTER_RESET':
            return 0
        default:
            return state
    }
}

const store = createStore(reducer)

const upAction = {
    type: 'COUNTER_UP'
}

const downAction = {
    type: 'COUNTER_DOWN'
}

const resetAction = {
    type: 'COUNTER_RESET'
}

const displayEl = document.querySelector('#counter')
const upBtn = document.querySelector('#up-btn')
const downBtn = document.querySelector('#down-btn')
const resetBtn = document.querySelector('#reset-btn')

const changeTheDisplay = newCounter => {
    displayEl.innerText = newCounter
}

upBtn.addEventListener('click', () => {
    store.dispatch(upAction)
})

downBtn.addEventListener('click', () => {
    store.dispatch(downAction)
})

resetBtn.addEventListener('click', () => {
    store.dispatch(resetAction)
})

changeTheDisplay(0)

store.subscribe(() => changeTheDisplay(store.getState()))

