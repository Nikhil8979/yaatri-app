import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "./room/RoomItem";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
export const Home = () => {
  const { rooms, error, resPerPage, roomsCount } = useSelector(
    (state) => state.allRooms
  );
  const dispatch = useDispatch();
  const router = useRouter();
  let { page } = router.query;
  page = Number(page);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);

  const handlePagination = (currentPage) => {
    router.push(`/?page=${currentPage}`);
  };

  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

        <a href="#" className="ml-2 back-to-search">
          {" "}
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row">
          {rooms?.length ? (
            rooms?.map((room) => <RoomItem key={room._id} room={room} />)
          ) : (
            <div className="alert alert-danger">
              <b>No Room.</b>
            </div>
          )}
        </div>
      </section>

      {resPerPage < roomsCount && (
        <div className="d-flex justify-content-center align-items-center">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={roomsCount}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};
