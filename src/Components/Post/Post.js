import React, { useState, useEffect } from "react";
import axios from "axios";
import Poststyle from "./Poststyle.css";
import Authors from "../Authors/Authors";
import Novels from "../Novels/Novels";
// import Trending from "./Trending/Trending";

function Post() {
  const [post, setPost] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://priyamehannovels.com/api/index")
      .then((response) => {
        console.log(response.data); // Log the entire response to see its structure
        setPost(response.data.post.data); // Set the data in state

        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  return (
    <div className="w-full md:w-2/3 flex flex-col items-center px-3">
      <h4 className="w-full post-title-name margin">
        <span className="flex align-center text-white p-2 text-base font-bold ">
          தொடர் கதைகள்
        </span>
      </h4>

      {/* <h4 className="sub-title">
        <span>தொடர் கதைகள்</span>
      </h4> */}
      <h4 className="w-full post-title-name margin">
        <span className="flex align-center text-white p-2 text-base font-bold ">
          புதிய வரவுகள்
        </span>
      </h4>

      {/* <h4 className="sub-title1">
        <span>புதிய வரவுகள்</span> <br></br>
      </h4> */}

      <div className="main">
        <div className="post">
          {post.map((item) => (
            <div className="post-content pl-6 pt-3 pr-4 pb-0" key={item.id}>
              <div style={{ color: "red", fontWeight: "1000" }}>
                {item.title}
              </div>
              <div className="flex items-center">
              <div>Published on {formatDate(item.created_at)}</div>
                {/* <div>Published on {item.created_at}</div> */}
                <svg
                  className="w-6 h-6 text-orange-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                  />
                </svg>
                <div>{item.comments_count}</div>
                <svg
                  className="w-6 h-6 text-orange-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <div>{item.visit_count}</div>
              </div>

              <div className="w-full flex mt-3 mb-1">
                <svg
                  className="w-6 h-6 mr-2 text-orange-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  // className="w-5 h-6"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>{item.user.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
