import React from "react";
import {ExhibitDetail} from "../exhibit-detail/exhibit-detail";
import ListGroup from 'react-bootstrap/ListGroup';
import exhibitsData from "../exhibits";

export const ExhibitList = () => {

    return (
	<ListGroup>
	   {Object.keys(exhibitsData).map((key, index) =>(
	<ListGroup.Item>
		<ExhibitDetail key={index} {...exhibitsData[key]}/>
	</ListGroup.Item>
))} 
	</ListGroup>
    );
};
