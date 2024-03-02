import React from "react";
import Navbar from "../../shared/components/Navbar";
import HomeRouter from "./appRouter";
import "./style.scss"
const Home = (props: any) => {
    return (
        <div>
            <Navbar />
            <div className="home-wrapper">
            <HomeRouter />
            </div>
          
        </div>
    )
}

export default Home;
