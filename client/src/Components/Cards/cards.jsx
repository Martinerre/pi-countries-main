import React from 'react';
// import Card from '../Detail/detail';
// import styles from './Cards.module.css'

export default function Cards(props) {
    const { name, flag, continent } = props;
    let i = 0;
    return (
        <div >
            <img src={flag} alt='imagen de bandera' />
            <div>
                <h3>{name}</h3>
                <h4>{continent}</h4>
            </div>
        </div>)
};
