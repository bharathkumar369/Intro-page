import React from "react";

const Main = () => {
    return (
        <div className="Box-layout">
            <div className="flex-box">
                <div className="left-side">     
                    <div>
                        <h1>Make Remote Work</h1>
                    </div>
                    <div>
                        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </p>
                    </div>
                    <div>
                        <button className="btn">Learn More</button>
                    </div>         
                    <div>
                        <img src="../../images/client-databiz.svg" alt="icon" className="icon"/>
                        <img src="../../images/client-audiophile.svg" alt="icon" className="icon"/>
                        <img src="../../images/client-meet.svg" alt="icon" className="icon"/>
                        <img src="../../images/client-maker.svg" alt="icon" className="icon"/>
                    </div>
                </div>      
                <div className="right-side">
                    <img src="../../images/image-hero-desktop.png" alt="hero-img" className="hero-img"/>
                </div>
            </div>
        </div>
    )
}
export default Main;