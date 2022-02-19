import React, { useState, useEffect } from 'react';

function Card(props) {
    
    return(
        <div>
            <h3>{ props.cards }</h3>
        </div>
    )
}

export default Card;