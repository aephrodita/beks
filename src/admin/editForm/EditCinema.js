import React from 'react';
import {Link} from 'react-router-dom';


export default function EditCinema () {

    return (
        <div>
            <div className='main-form'>
                <div className='main-container-form'>
                    <div className='d-flex justify-content-center'>
                        <div style={{width: "40%",border: "2px solid black", borderRadius: "20px"}} id='bc' className='text-light mt-5'>
                            <div className="ms-4 me-4 mt-4 mb-3">
                                <div className='mb-5 text-center'>
                                    <h2>
                                        Edit the Cinema Page
                                    </h2>
                                </div>
                                <div>
                                    <div class="form-group mb-2">
                                        <label>Name the cinema: </label>
                                        <input type="text" class="form-control" placeholder="Enter name cinema" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>Address: </label>
                                        <input type="text" class="form-control" placeholder="Enter address" />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label>City: </label>
                                        <input type="text" class="form-control" placeholder="Enter city" />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label>Description: </label>
                                        <input type="text" class="form-control" placeholder="Enter description" />
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Link to={'/cinema'}>
                                            <button className='btn btn-primary' >
                                                Exit
                                            </button>
                                        </Link>
                                        
                                        <Link to={'/cinema'}>
                                            <button className='btn btn-primary' >
                                                Edited
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}