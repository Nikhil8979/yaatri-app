import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CLEAR_ERRORS } from "../../redux/constants/userConstants";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import { updateProfile, userRegiseter } from "../../redux/actions/userAction";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );
  const { user: currentUser } = useSelector((state) => state.auth);
  const { loading, isUpdated, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();
  const submitUserHandler = (e) => {
    e.preventDefault();
    const userData = {
      ...user,
      id: currentUser._id,
      avatar,
    };
    dispatch(updateProfile(userData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
    if (currentUser) {
      setUser({
        name: currentUser?.name,
        email: currentUser?.email,
      });
      setAvatarPreview(currentUser?.avatar?.url);
    }
    if (isUpdated) {
      router.push("/login");
    }
  }, [currentUser, dispatch, router, isUpdated, error]);
  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitUserHandler}>
            <h1 className="mb-3">Update</h1>

            <div className="form-group">
              <label htmlFor="name_field">Full Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={user?.name || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={user?.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="image"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    accept="images/*"
                    className="custom-file-input"
                    id="customFile"
                    onChange={handleChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading}
            >
              {loading ? <Spinner /> : "UPDATE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
