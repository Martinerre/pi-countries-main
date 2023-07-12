import React from 'react';
import { Card } from '../Card/Card';
// import Card from '../Detail/detail';
// import styles from './Cards.module.css'

export default function Cards(props) {
  const { datos } = props; //aca hay un problema y no se cual essss
  console.log(props); //datos: [{...}]
  console.log(datos); //[[{...}],[{...}]]
  let i = 0;
  return (
    <div >
      {datos.map((elem) => (
        <Card
          id={elem.id}
          name={elem.name}
          continent={elem.continent}
          flag={elem.flag}
          // onClose={() => props.onClose(elem.id)}
          key={i++}
        />
      )
      )
      }
    </div>)
};
