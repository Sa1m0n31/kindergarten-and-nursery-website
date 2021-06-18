import React from "react";

const JadlospisDay = ({day, sniadanie, obiad, podwieczorek}) => {
    return <div className="jadlospis__day">
        <h4 className="jadlospis__day__header">
            {day}
        </h4>

        <div className="jadlospis__day__partContainer">
            <section className="jadlospis__day__part">
                <h5 className="jadlospis__day__part__header">
                    Śniadanie
                </h5>
                <ul className="jadlospis__day__list">
                    {sniadanie.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="jadlospis__day__part">
                <h5 className="jadlospis__day__part__header">
                    Obiad
                </h5>
                <ul className="jadlospis__day__list">
                    {obiad.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="jadlospis__day__part">
                <h5 className="jadlospis__day__part__header">
                    Podwieczorek
                </h5>
                <ul className="jadlospis__day__list">
                    {podwieczorek.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    </div>
}

export default JadlospisDay;