import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { BsFacebook } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
function FAuth() {
  const navigate = useNavigate();

  async function onFacebookClick() {
    try {
      const auth = getAuth();
    
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //   const credential = FacebookAuthProvider.credentialFromResult(result);
      //   const accessToken = credential.accessToken;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Facebook");
    }
  }
  return (
    <button
      type="button"
      onClick={onFacebookClick}
      className=" flex items-center justify-center w-full bg-blue-600 text-white px-7 py-2 uppercase text-sm font-medium hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-3xl m-4"
    >
      <BsFacebook className="text-3xl  bg-blue rounded-full mr-3" />
      Continue with Facebook
    </button>
  );
}

export default FAuth;
