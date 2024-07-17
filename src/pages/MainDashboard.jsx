import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBarsProgress,
    faBoxOpen,
    faComments,
    faGear,
    faRightFromBracket,
    faTachographDigital,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Sidebar = ({ useremail }) => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/", { replace: true });
    };

    const [viewData, setViewData] = useState([]);
    const [fetchData, setFetchData] = useState(false);

    const nagivate = useNavigate();

    useEffect(() => {
        axios
            .get("https://hvt-backend.vercel.app/user/get-user")
            .then((res) => {
                setViewData(res?.data?.result);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [fetchData]);

    // const handleEdit = (data) => {
    //   nagivate("/dashboard/user/edit", { state: data });
    // };

    let handleDelete = async (_id) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure do you want to delete the data ?"
            );
            if (confirmDelete) {
                await axios.delete(`http://localhost:8000/user/delete/${_id}`);
                // toast.error(`User with id ${_id} deleted successfully`, {
                //   duration: 2000,
                // });
                alert('deletd')
                setTimeout(() => {
                    setFetchData(true);
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="contain">

            <nav
                className="side-bar d-flex flex-column border-end"
                id={toggle ? "sidebar-toggle" : null}
            >
                <div className="profile d-flex align-items-center gap-3 my-4 ms-3">
                    <div>
                        <FontAwesomeIcon
                            icon={faCircleUser}
                            size={"2x"}
                            className="ps-1 text-primary"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <h6 className="profile-name mb-1 text-primary">Welcome Back!</h6>
                        <span className="personal-email">{useremail}</span>
                    </div>
                </div>
                <ul className="nav w-100 navigation flex-column">
                    <li>
                        <Link to={"/dashboard"} className="nav-link px-4">
                            <FontAwesomeIcon icon={faTachographDigital} className="me-3" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/user"} className="nav-link px-4">
                            <FontAwesomeIcon icon={faUsers} className="me-3" />
                            <span>Users</span>
                        </Link>
                    </li>

                    <li>
                        <Link className="nav-link px-4">
                            <FontAwesomeIcon icon={faComments} className="me-3" />
                            <span>Chat</span>
                        </Link>
                        <li>
                            <button className="nav-link px-4" onClick={handleLogout}>
                                <FontAwesomeIcon icon={faRightFromBracket} className="me-3" />
                                <span>Logout</span>
                            </button>
                        </li>
                    </li>
                </ul>
                {/* <li className="mt-3 pt-3 pb-2 border-top w-100">
                        <Link className="nav-link px-4">
                            <FontAwesomeIcon icon={faGear} className="me-3" />
                            <span>Settings</span>
                        </Link>
                    </li> */}
                <ul className="navigation nav w-100 mt-auto mb-3 ms-1">
                    <li
                        className="nav-link px-4"
                        onClick={() => setToggle(!toggle)}
                        style={{ cursor: "pointer" }}
                    >
                    </li>
                </ul>
            </nav>

            <div className="table">
                <div className="mx-3 my-5">
                    <div className="mb-4 d-flex justify-content-between">
                        <div>
                            <h3>The User List is here!</h3>
                        </div>
                        {/* <Link to={"/dashboard/user/create"}>
          <button className="btn btn-primary">Create</button>
        </Link> */}
                    </div>

                    <div className="border rounded-2 p-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email Address</th>
                                    <th>Number of Adults</th>
                                    <th>category</th>
                                    <th>Mobile Number </th>
                                    <th>Date of Tour </th>
                                    <th>Created </th>

                                </tr>
                            </thead>
                            <tbody>
                                {viewData.map((e) => {
                                    return (
                                        <tr key={e._id}>
                                            <td>{e._id}</td>
                                            <td>{e.Name}</td>
                                            <td>{e.Email}</td>
                                            <td>{e.Numberofadults}</td>
                                            <td>{e.category}</td>
                                            <td>{e.mobNumber}</td>
                                            <td>{e.Date}</td>
                                            <td>{e.createdAt}</td>

                                            <td>

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(e.id)}
                                                >
                                                    {/* <FontAwesomeIcon icon={faTrash} /> */}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <div style={{ display: viewData.length === 0 ? "block" : "none" }}>
                            <p className="text-center text-danger fs-3">No Data Found!</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Sidebar;
