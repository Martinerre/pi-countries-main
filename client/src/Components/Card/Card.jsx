import React from 'react'

export const Card = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.flag} alt='imagen de bandera' />
      <div>
        <h3>hola {props.name}</h3>
        <h4>{props.continent}</h4>
      </div>
    </div>
  )
}
