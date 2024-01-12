import React from "react";
import Text from "./text";

const SideBarItems = () => {
    return (
        <ul className="sidebar">
            <li>

                <div className="icon"><i className="fa-solid fa-house fa-2xl"></i></div>
                <Text title={"Home"} />
            </li>

            <li>
                <div className="icon"><i className="fa-regular fa-file fa-2xl"></i></div>
                <Text title={"Admin"} />
            </li>
            <li>
                <div className="icon"> <i className="fa-solid fa-cube fa-2xl"></i></div>
                <Text title={"Membership"} />
            </li>

            <li>
                <div className="icon"><i className="fa-regular fa-user fa-2xl" ></i></div>
                <Text title={"Advocate"} />
            </li>

        </ul>
    )
}
export default SideBarItems;