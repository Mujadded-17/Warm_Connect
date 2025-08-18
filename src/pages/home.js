import '../css/home.css';
import React from "react";
import Footer from "../components/footer";
const Home = () => {
    return (
        <div className="home-container">
            <h1>This is home page</h1>
            <div className="button-group">
            <a href="#donate" className="btn btn-donate">Donate</a>
            <a href="#receive" className="btn btn-receive">Receive</a>
            </div>
            <Footer></Footer>
        </div>
    );

}
 
export default Home;