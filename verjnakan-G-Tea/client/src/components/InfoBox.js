import React from 'react';
function InfoBox(props) {
    return (
        <div className="col-md-4 margin_bottom1">
            <div className="box_text">
                <i><img src={props.data.img} alt="#"/></i>
                <h3>{props.data.title}</h3>
                <p>{props.data.text}</p>
            </div>
        </div>
    );
}

export default InfoBox;