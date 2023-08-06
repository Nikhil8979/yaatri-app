import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { checkUserLogin } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { LOAD_USER_SUCCESS } from "../../redux/constants/userConstants";
import { useRouter } from "next/router";
const token = getCookie("token");
export const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, error } = useSelector((state) => state.auth);
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  console.log(error, "---yu ser");
  if (error === 401) {
    deleteCookie("token");
    router.push("/login");
  }
  useEffect(() => {
    dispatch(checkUserLogin(token));
  }, [dispatch]);
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link href="/">
              <Image
                style={{ cursor: "pointer" }}
                src="/../public/images/bookit_logo.png"
                alt="BookIT"
                width={100}
                height={40}
              />
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          {user ? (
            <div className="ml-4 dropdown d-line">
              <a
                className="btn drowdown-toggle mr-4"
                id="'dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user?.avatar?.url}
                    alt={user?.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user?.name}</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                <Link href="/me/update">
                  <span className="dropdown-item text-danger">My Profile</span>
                </Link>
                <span
                  onClick={() => {
                    deleteCookie("token");
                    dispatch({ type: LOAD_USER_SUCCESS, payload: null });
                    window.location.reload();
                  }}
                  className="dropdown-item text-danger"
                >
                  Logout
                </span>

                {/* </Link> */}
              </div>
            </div>
          ) : (
            !loading && (
              <Link
                href={"/login"}
                className="btn btn-danger px-4 text-white login-header-btn float-right"
              >
                Login
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};
