import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { changeCheckbox } from '../store/actions/profile'
import { profileUser } from '../store/selectors/profile'

export default function Profile (props) {
  const dispatch = useDispatch()
  // const {name, age, check} = useSelector(state => state.profile)
  const {name, age, check} = useSelector(profileUser)

  const handleChangeCheck = (event) => {
    dispatch(changeCheckbox(event.target.checked))
  }

  return (
    <div className="profile">
      <div className="container">
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
    </div>  
  )
}

// export default Profile