import Image from "next/image"
import React, { useState, useEffect } from 'react'
import styles from '../styles/Card.module.css'

export default function Card(props) {
    const buy = () => {
        console.log("Oui")
    }

    return (
        <div>
            <div className={styles.cardcontainer}>
                <h2>{props.title}</h2>
                <Image width="100%" height="50%" src={props.img} alt="" />
                <p style={{
                    fontSize: '8px'
                }}>{props.desc}</p>
                <h3>{props.price}</h3>
                <button onClick={buy}>Acheter</button>
            </div>
        </div>
    )
}