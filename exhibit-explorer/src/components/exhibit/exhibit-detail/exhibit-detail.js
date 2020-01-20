import React from "react";
import {NavLink as Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';

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

/*	return (
		
	) <div>{props.title}</div>*/
    return (
<Card>

<Card.Header>
<Link to={`/exhibit/detail/${props.exhibit_key}`}>{props.title}</Link>
</Card.Header>

<Card.Body>
<Card.Text>{props.content}</Card.Text>
</Card.Body>

</Card>
    );
};
