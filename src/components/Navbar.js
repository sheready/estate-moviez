import React from "react";
import Home from "./Home";
import { Menu } from "antd";
import {HomeOutlined, VideoCameraOutlined} from '@ant-design/icons';


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
                    {label: "Home", key:"home",icon:<HomeOutlined/>},
                    {label: "Movies", key:"movies", children:[
                        {label: "All-Movies", key:"all-movies", icon: <VideoCameraOutlined />},
                        {label: "Search-Movies", key:"searched-movies", icon: <VideoCameraOutlined />}
                    ]}
                ]}
                ></Menu>
            </header>
        </div>
    )


};

export default Navbar;