import React from 'react'
import {MdPerson} from 'react-icons/md'

export const HeaderComponent = () => {
  return (
    <header className="Header">
      <h1 className="Logo">
        My <span>Todo</span>
      </h1>

      <div className="ProfileContainer">
        <div className="ProfileIcon">

        </div>
        <MdPerson/>
        <p>Erico</p>
      </div>
    </header>
  )
}
