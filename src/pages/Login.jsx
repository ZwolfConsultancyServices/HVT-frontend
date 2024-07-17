import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import  axios from "axios";
import "../pagesCss/Login.css"
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();

  const signup = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const url = "https://hvt-backend.vercel.app";
      const userApiUrl = `${url}/login`;
      axios
      .post(userApiUrl, values)
      .then((res) => {
        navigate("/dashboard", { replace: true });
       toast.success("Admin login successfull")
       
      })
      .catch((err) => {
        toast.error(err.response.data.message||"an error accoured");
      });
    },
  });

  return (
    <>
      <div className="login-page vh-100 d-flex justify-content-center align-items-center">
        <div className="login-container rounded-2 p-4 bg-transparent">
          <div className="mb-4 text-center text-primary">
            <FontAwesomeIcon icon={faUser} size="5x" />
          </div>

          <form onSubmit={signup.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control mt-1 bg-light"
                id="email"
                value={signup.values.email}
                onChange={signup.handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control mt-1 bg-light"
                id="password"
                value={signup.values.password}
                onChange={signup.handleChange}
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
            <hr />

            <div className="mt-4 text-center">
              <Link to={"/register"}>
                <button className="btn btn-success" type="button">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
