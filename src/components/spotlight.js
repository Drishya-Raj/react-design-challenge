import { details } from "../constants/constants";
import Text from "./text";

const Spotlight = () => {
    return (
        <div className="spotlight">

            <div className="title">
                <Text title={"Active members"} className={"sub-title"} />
                <div className="sub-titles-one">
                    <Text title={"Pending request"} />
                    <span className="count-one">3</span>
                </div>
                <div className="sub-titles-two">
                    <Text title={"Membership Expired"}  />
                    <span className="count-two">2</span>
                </div>
            </div>
            <ul>
                {details.map((item) => {
                    const { id, list } = item;
                    return (<li key={id}>{list}</li>)
                })}
            </ul>


        </div>
    )
}
export default Spotlight;