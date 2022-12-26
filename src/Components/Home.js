import React from "react";
import Navbar from "./Navbar";
import Section from "./Section"

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Section name= "Model S" image="model-s.jpg" desc="Order Online for Touchless Delivery"/>
            <Section name= "Model Y" image="model-y.jpg" desc="Order Online for Touchless Delivery"/>
            <Section name= "Model 3" image="model-3.jpg" desc="Order Online for Touchless Delivery"/>
            <Section name= "Model X" image="model-x.jpg" desc="Order Online for Touchless Delivery"/>
            <Section name= "Solar Panels" image="solar-panel.jpg" desc="Lowest Cost Solar Panels in America"/>
            <Section name= "Solar Roof" image="solar-roof.jpg" desc="Produce Clean Energy From Your Roof"/>
            <Section name= "Accessories" image="accessories.jpg"/>
        </div>
    )
}

export default Home;