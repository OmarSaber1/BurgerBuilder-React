import React from 'react';

const Contact = ()=>{

    return(
        <div className="w-75 mx-auto mt-5">
            <form action="">
                <label htmlFor="">Name</label>
                <input className="input form-control" placeholder="Enter your Name"  type="text"/>
                <label htmlFor="">Email</label>
                <input className="input form-control" placeholder="Enter your Email" type="text"/>
                <label htmlFor="">Address</label>
                <input className="input form-control" placeholder="Enter your Address" type="text"/>
                <button className="btn btn-success mt-3 w-100" type="submit">PlaceOrder!</button>
            </form>
        </div>
    )
}

export default Contact;