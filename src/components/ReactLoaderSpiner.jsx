import { RotatingLines } from "react-loader-spinner";

const ReactLoaderSpiner = () => {
  return (
    <div className="flex justify-center mt-5 md:mt-14">
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        strokeColor="#f97316"
        strokeWidth="5"
        animationDuration="0.75"
      />
    </div>
  );
};

export default ReactLoaderSpiner;