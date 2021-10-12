import React from 'react';

import {Link} from 'react-router-dom';


export const phone = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-center p-4">
                <h2>Phone list</h2>
            </div>
            <div className="grid">
                {props.phones.map((phone) => {
                    return (
                        <div>
                            
                            <h3>
                                <Link key={phone._id}
                                to={`/phone/${phone._id}`}>

                                    <div class="row row-cols-md-1 g-4 p-4">
                                        <div class="col">
                                            <div class="card-phones">
                                                <div class="card-body">
                                                    <h4 class="card-title p-2">{phone.name}</h4>
                                                    <img
                                                    src={phone.imageFileName}
                                                    class="card-img-top"
                                                    />
                                                    <p class="card-text p-2">
                                                    <h5>{phone.description}</h5>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </Link>
                            </h3>
                
                            
                        </div>
                    )
                })}
            
            </div>
        </div>
    )
};


