import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "rgb(0, 152, 255)",
};

function LoadingSpinner() {
  return (
    <div className="sweet-loading">
      <ClipLoader loading={true} cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
}
export default LoadingSpinner;
