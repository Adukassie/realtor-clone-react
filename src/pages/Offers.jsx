import React from 'react'
import { useNavigate } from 'react-router';

function Offers() {
  const navigate =useNavigate()
  return (
    <div>
      <h2>I Am Offers page</h2>
      {/* button credit for me */}
      <button className='bg-blue-400 rounded text-gray-300'
        onClick={() => {
          console.log("redirecting.....");
          navigate(-1);
        }}
      >
        Home
      </button>
    </div>
  );
}

export default Offers
