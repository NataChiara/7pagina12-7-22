import Header from "../components/Header";
import Footer from '../components/Footer';
import React from "react";
import './Containers.css';

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <h1> Home </h1>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;