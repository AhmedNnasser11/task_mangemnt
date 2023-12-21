/** @format */

const Spinner = ({ size = ""}: { size?: string}) => {
  const showSize = (size: string) => {
    let dimensions = "";
    switch (size) {
      case "sm":
        dimensions = "h-12 w-12";
        break;
      case "md":
        dimensions = "h-32	w-32";
        break;
      case "lg":
        dimensions = "h-52 w-52";
        break;
      default:
        dimensions = "h-64 w-64";
        break;
    }
    return dimensions
  };

  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className={`border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-4 ${showSize(size)}`} />
    </div>
  );
};

export default Spinner;
