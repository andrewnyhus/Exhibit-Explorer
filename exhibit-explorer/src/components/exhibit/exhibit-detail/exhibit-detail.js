import React from "react";
import {NavLink as Link} from "react-router-dom";

import exhibitsData from "../exhibits";

export const ExhibitDetailWrapper = (props) => {
    const { exhibitKey } = props.match.params;
    const exhibitData = exhibitsData[exhibitKey];
    // TODO: handle 404

    return (
        <ExhibitDetail {...exhibitData}/>
    );
};

export const ExhibitDetail = (props) => {

    return (
        <div>
            <Link to={`/exhibit/detail/${props.exhibit_key}`}>{props.title}</Link><br/>
            <Link to={`/exhibit/print-exhibit-sign/${props.exhibit_key}`}>Print Exhibit Sign</Link><br/>
            <div>{props.content}</div><br/>
            <div>insert copy of the qr code that corresponds to this exhibit</div>
        </div>
    );
};
