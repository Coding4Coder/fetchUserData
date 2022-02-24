import Home from "./Home";

import classes from "../scss/Home.module.scss";

const HomeUsersDataTemp = (props) => {
    return (
                <div className={classes.card}>
                        <div className={classes.cardBody}>
                            { <img src={props.userPhoto} alt="" />}<br />
                            { props.userName }<br />
                            { props.userGender }<br />
                            { props.userPhone }<br />
                        </div>
                </div>
    );
}

export default HomeUsersDataTemp;
