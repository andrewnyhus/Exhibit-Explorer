import React from "react";
import {ExhibitDetail} from "../exhibit-detail/exhibit-detail";

import exhibitsData from "../exhibits";

export const ExhibitList = () => {

    return (
        <div>
            {Object.keys(exhibitsData).map((key, index) =>(
                <ExhibitDetail key={index} {...exhibitsData[key]}/>
            ))}
        </div>
    );
};
