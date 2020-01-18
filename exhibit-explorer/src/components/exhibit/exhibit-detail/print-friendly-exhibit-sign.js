import React from "react";
import QRCode from "qrcode.react";

import exhibitsData from "../exhibits";

export const PrintFriendlyExhibitSignWrapper = (props) => {
    const { exhibitKey } = props.match.params;
    const exhibitData = exhibitsData[exhibitKey];
    // TODO: handle 404

    return (
        <PrintFriendlyExhibitSign {...exhibitData}/>
    );
};

export const PrintFriendlyExhibitSign = (props) => {

    const domain = 'https://andrewnyhus.github.io/Exhibit-Explorer';
    const endpoint = `/exhibit/detail/${props.exhibit_key}`;
    const fullUrl = domain + endpoint;
    return (
        <div>
            <h3>Scan this code to see more info about: "{props.title}"</h3>
            <QRCode value={endpoint}/>
            <h3>or go to this link:</h3>
            <a href={fullUrl}>{fullUrl}</a>
        </div>
    );
};
