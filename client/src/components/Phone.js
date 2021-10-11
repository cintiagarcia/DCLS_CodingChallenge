import React from 'react';

import {Link} from 'react-router-dom';


export const phone = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-center p-4">
                <h2>Phone list</h2>
            </div>

            {props.phones.map((phone) => {
                return (
                    <div>
                        
                        <h3>
                            <Link key={phone._id}
                            to={`/phone/${phone._id}`}>
                            {phone.name}
                            </Link>
                            <br/>
                        </h3>
            
                        
                    </div>
                )
            })}
        
        </div>
    )
};


