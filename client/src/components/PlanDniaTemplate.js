import React from 'react';

const PlanDniaTemplate = ({planDnia}) => {
    return <div className="planDnia__inner">
        {planDnia.map(item => (<>
            <div className="planDnia__hours">
                <h4>
                    {item.start}
                </h4>
                <span>-</span>
                <h4>
                    {item.end}
                </h4>
            </div>
            <div className="planDnia__textContainer">
                <p className="planDnia__text">
                    {item.text}
                </p>
            </div>
            </>
        ))}
    </div>
}

export default PlanDniaTemplate;