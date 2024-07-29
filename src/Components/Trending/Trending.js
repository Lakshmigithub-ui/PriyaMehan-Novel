import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trending.css"

function Trending() {
  const [trending, setTrending] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://priyamehannovels.com/api/index")
      .then((response) => {
        console.log(response.data); // Log the entire response to see its structure
        setTrending(response.data.post.data); // Set the data in state

        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
      <div className="flex-container flex justify-content-between items-center breaking-news bg-white dark:bg-gray-700 bg">
        <div className="motion-reduce:animate-pulse flex flex-row flex-grow-1 flex-fill justify-content-center py-2 text-white px-4 news text-center border  border-newsteal tranding-box">
            <span className="text-sm text- items-left font-bold"> Trending </span>
        </div>

        <marquee className="motion-safe:animate-pulse font-bold news-scroll w-full mx-auto space-x-5 " behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
          <div>
            <div className="trading-text flex style " >
            <span className="dot"></span>
            {trending.map((item) => (
              <div >
               
              <div key={item.id}> 
                <div>&#x2022; {item.title}</div>

              </div>
              </div>
            ))}

          </div>
          </div>
        </marquee>

      </div>
  );
}

export default Trending;
