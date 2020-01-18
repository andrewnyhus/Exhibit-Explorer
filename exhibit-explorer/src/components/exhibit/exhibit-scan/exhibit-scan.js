import React from "react";
import QrReader from 'react-qr-reader';

import exhibitsData from "../exhibits";

export const ExhibitScan = () => {
    const isValidExhibitUrl = (url) => {
        const validExhibitKeys = Object.keys(exhibitsData);
        const urlComponents = url.split('/');
        return urlComponents.length === 4
            && urlComponents[0] === ''
            && urlComponents[1] === 'exhibit'
            && urlComponents[2] === 'detail'
            && validExhibitKeys.includes(urlComponents[3]);
    };
    const handleScan = data => {
        if (!!data && isValidExhibitUrl(data)) {
            window.location.href = data;
        }
    };
    return (
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={error => console.error(error)}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
    );
};

// {
//     return (
//         <div>
//             <QrReader
//               delay={300}
//               facingMode={"environment"}
//               onError={error => console.error(error)}
//               onScan={data => console.log(data)}
//               style={{ width: '100%' }}
//             />
//             {/*Insert scanner here.*/}
//             {/*<a href={"https://www.thomasbilliet.com/react-qr-reader/"}>Go here to see similar example.</a>*/}
//             {/*Scanning should route you to the exhibit page.*/}
//         </div>
//     );
// };
