/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss';
import Playstation from './playstation';
import Xbox from './xbox';
import Switch from './switch';

const Jogos = () => {
    return (
        <>
            <Playstation />
            <Xbox />
            <Switch />
        </>
    )
}

export default Jogos