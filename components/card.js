import React from 'react';
import Link from 'next/link';

const card = props => (

    <Link href={props.linkUrl}>
        <a>
            <div className='card'>
                <img src={props.imageUrl}></img>
                <h3>{props.title}</h3>
            </div>
        </a>
    </Link>

)

export default card;
