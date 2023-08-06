import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import ButtonLoader from "../layout/ButtonLoader";
import { resetPassword } from "../../redux/actions/userAction";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.reset);
  const router = useRouter();
  const { resetToken } = router.query;
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
    }
  }, [error, message, dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      newPassword: password,
      resetToken,
    };
    dispatch(resetPassword(userData));
  };
  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandler}>
          <h1 className="mb-3">New Password</h1>

          <div className="form-group">
            <label htmlFor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm_password_field">Confirm Password</label>
            <input
              type="password"
              id="confirm_password_field"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            id="new_password_button"
            type="submit"
            disabled={loading ? true : false}
            className="btn btn-block py-3"
          >
            {loading ? <ButtonLoader /> : "SET PASSWORD"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
