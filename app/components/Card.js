import Image from "next/image"
import React, { useState, useEffect } from 'react'
import styles from '../styles/Card.module.css'

export default function Card(props) {
    const [isBuy, setIsBuy] = useState(false)

    return (
        <div>
            <div className={styles.cardcontainer}>
                <h2>{props.title}</h2>
                <Image width="100%" height="100%" src={props.img} alt="Image mon pote" />
                <p style={{
                    fontSize: '8px'
                }}>{props.desc}</p>
                <h3>{props.price}</h3>
                <button style={{ color: 'white', backgroundColor: '#333', borderRadius: '30px', padding: '5px 30px', textTransform: 'uppercase' }} onClick={() => setIsBuy(!isBuy)}>Acheter</button>

                <div style={{ display: isBuy === true ? 'unset' : 'none' }}>
                    <p>Titre: {props.title}</p>
                    <p>Image: <Image width="100%" height="100%" src={props.img} alt="Image mon pote" /></p>
                    <p>Description: {props.desc}</p>
                    <p>Prix: {props.price}</p>
                </div>
            </div>
        </div>
    )
}