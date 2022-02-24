
import classes from "../scss/Home.module.scss";

import {useState, useEffect} from 'react';
import UsersDisplayTemplate from "./UsersDisplayTemplate";

const HomeUserData = () => {

        const[users, setUsers] = useState([])

        const  fetchData = () => {
            fetch("https://randomuser.me/api/?results=10")
            .then((response) => {
                //console.log(response)
                return response.json();
            })
            .then((data) => {
                //console.log(data)  
                let usersList = data.results;
              // console.log(usersList[0].phone) 
               setUsers(usersList);
               
            })
        }

        useEffect(() => {
            fetchData();
        },[])
       
    return (
            <div className={classes.containerFluid}>
                <div className="row g-0">

                {
                    users.map((usersBinder) =>
                            <UsersDisplayTemplate 
                            usersPhoto = {usersBinder.picture.large} 
                            userName = {usersBinder.name.first} 
                            userPhone = {usersBinder.phone} 
                            userGender = {usersBinder.gender} 
                            />
                    )
                }

                

                </div>
            </div>
    );
}

export default HomeUserData;
