export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_CHECKBOX = 'PROFILE::CHANGE_CHECKBOX';

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

