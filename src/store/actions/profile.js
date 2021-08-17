export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_CHECKBOX = 'PROFILE::CHANGE_CHECKBOX'
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED'

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: {
    name,
  },
})

export const changeCheckbox = (check) => ({
  type: CHANGE_CHECKBOX,
  payload: {
    check,
  },
})

export const changeIsAuthed = (isAuthed) => ({
  type: CHANGE_IS_AUTHED,
  payload: {
    isAuthed,
  },
})

