import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
    <button
      type="button"
      // onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-2 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-3xl"
    >
      <FcGoogle className="text-3xl  bg-white rounded-full mr-3" />
      Continue with Google
    </button>
  );
}

export default OAuth;
