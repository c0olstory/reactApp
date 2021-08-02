import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { changeCheckbox } from '../store/profile/actions'

// const Profile = (props) => (
//  return <p>Profile page</p>
// )
export default function Profile (props) {
  const dispatch = useDispatch()
  const {name, age, check} = useSelector(state => state.profile)

  const handleChangeCheck = (event) => {
    dispatch(changeCheckbox(event.target.checked))
  }

  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <FormControlLabel
        control={
          <Checkbox
            checked={check}
            onChange={handleChangeCheck}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
    </div>  
  )
}

// export default Profile