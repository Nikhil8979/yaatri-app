import React from "react";
import { Layout } from "../../components/layout/Layout";
import RoomDetails from "../../components/room/RoomDetails";
import { wrapper } from "../../redux/store";
import { getRoomDetails, getRooms } from "../../redux/actions/roomActions";

const RoomDetailsPage = () => {
  return (
    <Layout title="Room Details">
      <RoomDetails />
    </Layout>
  );
};

export default RoomDetailsPage;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(params.id));
    }
);
