import React, { useState, useEffect } from "react";

const YogurtContainer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <div className="flex justify-center mt-4">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 297 297"
        >
          <g>
            <g>
              <g>
                <path
                  d="M148.5,0C66.617,0,0,66.617,0,148.5S66.617,297,148.5,297S297,230.383,297,148.5S230.383,0,148.5,0z M148.5,276.085
				c-70.351,0-127.585-57.234-127.585-127.585S78.149,20.915,148.5,20.915S276.085,78.149,276.085,148.5
				S218.851,276.085,148.5,276.085z"
                />
                <path
                  d="M148.5,36.602c-61.701,0-111.898,50.197-111.898,111.898S86.799,260.398,148.5,260.398S260.398,210.201,260.398,148.5
				S210.201,36.602,148.5,36.602z M222.849,207.831l-3.338-3.338c-4.083-4.085-10.706-4.084-14.789,0.001
				c-4.084,4.084-4.083,10.706,0.001,14.789l3.362,3.361c-13.761,11.081-30.656,18.415-49.127,20.444v-5.174
				c0-5.775-4.682-10.458-10.458-10.458s-10.458,4.683-10.458,10.458v5.174c-18.552-2.037-35.514-9.427-49.307-20.589l3.772-3.773
				c4.084-4.084,4.083-10.706-0.001-14.789c-4.083-4.085-10.706-4.084-14.789,0.001l-3.711,3.712
				c-10.886-13.681-18.087-30.416-20.094-48.693h5.174c5.775,0,10.458-4.682,10.458-10.458s-4.682-10.458-10.458-10.458h-5.174
				c2.028-18.471,9.363-35.366,20.444-49.127l3.361,3.362c2.042,2.043,4.718,3.064,7.395,3.064c2.676,0,5.352-1.021,7.394-3.063
				c4.084-4.083,4.085-10.705,0.001-14.789l-3.338-3.338c13.715-10.967,30.516-18.224,48.873-20.239v4.39
				c0,5.775,4.682,10.458,10.458,10.458s10.458-4.682,10.458-10.458v-4.39c18.277,2.007,35.011,9.208,48.693,20.094l-2.928,2.928
				c-4.084,4.084-4.083,10.706,0.001,14.789c2.042,2.043,4.717,3.063,7.394,3.063s5.353-1.021,7.395-3.064l2.986-2.987
				c11.162,13.794,18.552,30.755,20.589,49.307h-4.39c-5.775,0-10.458,4.682-10.458,10.458s4.683,10.459,10.458,10.459h4.39
				C241.072,177.315,233.815,194.116,222.849,207.831z"
                />
                <path
                  d="M191.377,138.042h-32.419V86.799c0-5.775-4.682-10.458-10.458-10.458s-10.458,4.682-10.458,10.458V148.5
				c0,5.775,4.682,10.458,10.458,10.458h42.877c5.775,0,10.458-4.682,10.458-10.458S197.152,138.042,191.377,138.042z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <p>El yogurt lleva {seconds} segundos en reposo.</p>
    </>
  );
};

export default YogurtContainer;
