import { Circles } from "react-loader-spinner";

export default function Loader() {
  const loaderContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: 9999,
  };
  return (
    <div style={loaderContainerStyles}>
      <Circles
        height="100"
        width="100"
        color="#0072ce"
        ariaLabel="circles-loading"
        speedMultiplier={1.5}
        visible={true}
      />
    </div>
  );
}
