import React from 'react';
import {box1, box2, box3} from "./boxes";
import InfoBox from "./InfoBox";

function ThreeBox(props) {
    return (
        <div>
            <div className="three_box">
                <div className="container">

                    <div className="row">
                        <InfoBox data={box1}/>
                        <InfoBox data={box2}/>
                        <InfoBox data={box3}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreeBox;