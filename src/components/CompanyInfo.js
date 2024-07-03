import React from 'react';
import NavBar from './NavBar';
const CompanyInfo = () => {
    return (
        <div>
            <NavBar />
            <div className="containerMain">

                <h1>Company Info</h1>
                <p><b>Company</b>: Geeksynergy Technologies Pvt Ltd</p>
                <p><b>Address</b>: Sanjayanagar, Bengaluru-56</p>
                <p><b>Phone</b>: XXXXXXXXX09</p>
                <p><b>Email</b>: XXXXXX@gmail.com</p>
            </div>
        </div>

    );
};

export default CompanyInfo;
