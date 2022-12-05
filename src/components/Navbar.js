import React from "react";
import Home from "./Home";
import { Menu } from "antd";


const Navbar = () => {
    return (
        <div>
            <header>
                <Menu 
                style={{
                    width: 256,
                }}
                mode="inline"
                items={[
                    {label: "Home", key:"home"},
                    {label: "Movies", key:"movies", children:[
                        {label: "All-Movies", key:"all-movies"},
                        {label: "Search-Movies", key:"searched-movies"}
                    ]}
                ]}
                ></Menu>
            </header>
        </div>
    )


};

export default Navbar;