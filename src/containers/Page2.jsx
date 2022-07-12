import Header from "../components/Header";
import Footer from '../components/Footer';
import React from "react";
import './Containers.css';

const Page2 = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <h1>Page 2 </h1>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Page2;