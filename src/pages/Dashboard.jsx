import { faBoxOpen, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pagesCss/Dashboard.css"
const Dashboard = () => {

    const [userData, setUser] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
    let getUsers = async () => {
      try {
        const users = await axios.get("http://localhost:8000/user/get-user");
        setUser(users?.data?.result);
        console.log(users.data);
      } catch (error) {
        console.log(error.message);
      }
    };



    return (
        
            <div >
                <div className="row m-4 gy-4">
                    <div className="col col-xl-4">
                        <div className="card p-4 border-primary bg-light">
                            <FontAwesomeIcon icon={faUsers} size="3x" className="text-primary" />
                            <div className="mt-4 text-center">
                                <p className="fw-bold">
                                    Total users: <span>{userData.length}</span>
                                </p>
                            </div>
                            <Link
                                to={"/main-deshboard "}
                                className="btn btn-sm btn-outline-primary"
                            >
                                Go to User
                            </Link>
                        </div>
                    </div>
                </div>
            
            </div>

    )
            
};

            export default Dashboard;
