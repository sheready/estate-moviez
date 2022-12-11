import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {HomeOutlined, VideoCameraOutlined} from '@ant-design/icons';


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Menu 
            style={{
                width: 256,
                height: "100vh",
                backgroundColor: "#d0efff",
            }}
            onClick={({key}) => {
                navigate(key);
            }}
            mode="inline"
            items={[
                {label: "Home", key:"/",icon:<HomeOutlined/>},
                {label: "Movies", key:"movies", children:[
                    {label: "Search-Movies", key:"/movies", icon: <VideoCameraOutlined />}
                ]}
            ]}
            ></Menu>
        </div>
    )


};

export default Navbar;