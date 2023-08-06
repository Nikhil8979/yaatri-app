import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import ButtonLoader from "../layout/ButtonLoader";
import { CLEAR_ERRORS } from "../../redux/constants/roomConstants";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { error, user } = useSelector((state) => state.user);
  if (!!user) {
    window.location.href = "/";
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERRORS,
        error: null,
      });
    }
  }, [error, user, dispatch]);
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch(userLogin({ email, password }));

    setLoading(false);
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={handleLogin}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label for="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form-group">
              <label for="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <Link href={"/password/forgot"} className="float-right mb-4">
              Forgot Password?
            </Link>

            <button
              disabled={loading}
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              {loading ? <ButtonLoader /> : "LOGIN"}
            </button>

            <Link href={"/register"} className="float-right mt-3">
              New User?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
