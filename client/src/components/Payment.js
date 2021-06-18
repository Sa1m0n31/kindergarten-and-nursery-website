import React, { useState } from 'react'

import axios from 'axios'

const Payment = () => {
    const [email, setEmail] = useState("sajmon0031@gmail.com"); /* TODO */

    const pay = () => {
        console.log("Pay!");
        axios.post("https://przedszkoleswarzedz.pl/payment", {
            email
        })
            .then((res) => {
                window.location = res.data.link;
            })
            .catch((err) => {
                console.log("Cos poszlo nie tak...");
            });
    }

    return <div className="paymentContainer">
        <h4 className="paymentHint">
            Zapłać opłatę za cały rok <b>bez wychodzenia z domu</b>!
        </h4>
        <button className="strefaRodzica__button paymentBtn" onClick={() => {pay()}}>
            Przejdź do szybkich płatności
        </button>
    </div>
}

export default Payment;