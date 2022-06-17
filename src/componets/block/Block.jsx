import React from 'react';
import "./block.css";

const Block = (props) => {

    
    return (
        <div className="block">
            <p className="block--number">{props.no}</p>
            <div className="block__line"/>
            <p className="block--title">{props.title}</p>
            <div className="block__info">
                {props.data}
            </div>
        </div>
    );
}

export default Block;