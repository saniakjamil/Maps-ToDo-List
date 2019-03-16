import React from "react";
import ReactMapGL from "react-map-gl";

const Dashboard = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoic2FuaWFramFtaWwiLCJhIjoiY2p0YmludnZ3MGw0YzRhcXRkc2JlbTFkayJ9.I5_-ItnbNZk8jvBSxmeSnA";
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReactMapGL
        width={400}
        height={400}
        latitude={30.34805556}
        longitude={73.37833333}
        zoom={8}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={viewport => console.log(viewport)}
      />
    </div>
  );
};

export default Dashboard;
