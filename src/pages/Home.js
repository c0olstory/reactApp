import '../App.scss'
import React from 'react'
import EntryField from '../components/EntryField'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store/actions/profile'


export default function Home() {
  const {name, age} = useSelector(state => state.profile)
  const dispatch = useDispatch()

  const handleChangeName = (newName) => {
    dispatch(changeName(newName))
  }


  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <p>
              <b>Name: </b>
              {name}
          </p>
          <p>
              <b>Age: </b>
              {age}
          </p>
        </div>
        <EntryField
          label="Имя"
          placeholder="Введите новое имя"
          onSubmit={handleChangeName}
        />
      </div>
    </div>
  )
  
}

