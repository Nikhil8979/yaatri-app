import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Head from "next/head";
import { Carousel, CarouselItem } from "react-bootstrap";
const RoomDetails = () => {
  const { room, error } = useSelector((state) => state.roomDetail);
  console.log(room, "[----r room ");
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{room?.name} - BookIt</title>
      </Head>
      <div className="container container-fluid">
        <h2 className="mt-5">{room?.name}</h2>
        <p>{room?.address}</p>
        <div
          style={{ width: `${(room.rating / 5) * 100}%` }}
          className="ratings mt-auto mb-3"
        >
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <span id="no_of_reviews">({room?.numOfReviews} Reviews)</span>
        </div>
        <Carousel>
          {room?.images?.length &&
            room?.images?.map((image) => (
              <CarouselItem key={image.public_id}>
                <div style={{ width: "100%", height: "440px" }}>
                  <Image
                    className="d-block m-auto"
                    src={
                      "https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
                    }
                    alt={room.name}
                    layout="fill"
                    // width={100}
                    // height={300}
                  />
                </div>
              </CarouselItem>
            ))}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{room?.description}</p>

            <div className="features mt-5">
              <h3 className="mb-4">Features:</h3>
              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
                <p>6 Guests</p>
              </div>

              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
                <p>2 Beds</p>
              </div>

              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-bath" aria-hidden="true"></i>
                <p>2 Baths</p>
              </div>

              <div className="room-feature">
                <i
                  className="fa fa-cog fa-fw fa-cutlery"
                  aria-hidden="true"
                ></i>
                <p>Kitchen</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>$28</b> / night
              </p>

              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>

        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>

          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
