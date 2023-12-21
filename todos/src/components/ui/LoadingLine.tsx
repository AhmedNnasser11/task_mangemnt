/** @format */

const LoadingLine = ({ loading }: { loading: boolean }) => {
  return (
    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-full bg-blue-500 ${
          loading ? "animate-pulse" : ""
        }`}
        style={{ width: loading ? "50%" : "100%" }}
      />
    </div>
  );
};

export default LoadingLine;
