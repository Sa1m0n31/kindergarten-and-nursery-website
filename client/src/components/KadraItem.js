import React from 'react'

const KadraItem = ({letter, name, func, description}) => {
    return <div className="kadra__item">
        <div className="kadra__item__imgWrapper">
            <h2 className="kadra__item__imgHeader">
                {letter}
            </h2>
        </div>
        <h3 className="kadra__item__name">
            {name}
        </h3>
        <h4 className="kadra__item__func">
            {func}
        </h4>
        <p className="kadra__item__desc">
            {description}
        </p>
    </div>
}

export default KadraItem;