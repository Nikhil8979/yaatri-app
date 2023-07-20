import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "./RoomItem";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";
export const Home = () => {
  const { rooms, error } = useSelector((state) => state.allRooms);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {" "}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms?.length ? (
          rooms?.map((room) => {
            return <RoomItem key={room._id} room={room} />;
          })
        ) : (
          <div className="alert alert-danger">
            <b>No Room.</b>
          </div>
        )}
      </div>
    </section>
  );
};
