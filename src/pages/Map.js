import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map(props) {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDRd1qND7fzsiMaReVz90kt1CaWsKD4OxU" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent lat={25.716031} lng={84.476559} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
