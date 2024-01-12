import SideBar from "../sideBarItems";
import React from "react";
import Text from "../text";
import Spotlight from "../spotlight";
import CubeDots from "../cube";

const Home = () => {
    return (
        <div className="home">
            <ul className="left-section">
                <CubeDots />
                <SideBar />
                <li className="logout">
                    <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 fa-2xl"></i>
                    <Text title={"Log Out"} />
                </li>
            </ul>
            <div className="right-section">
                <div className="slider">
                    <div className="content">
                        <div className="logo">
                            <p>logo</p>
                        </div>
                        <h2>Association</h2>
                    </div>
                </div>
                <Text className={"heading"} title={"Advocates"} />
                <Spotlight />
                <div className="pagination">
                    <p>Rows per page : 10 {" "}
                        <i className="fa-solid fa-caret-down"></i>{" "}
                    </p>
                    <p>1-1 of 1 </p>
                    <p>{"|<"}</p>
                    <p>{"<"}</p>
                    <p>{">"}</p>
                    <p>{">|"}</p>
                </div>
            </div>
        </div>
    )
}
export default Home;