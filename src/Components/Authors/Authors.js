import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Authors.css";

function Authors() {
  const [authors, setAuthors] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://priyamehannovels.com/api/index")
      .then((response) => {
        console.log(response.data); // Log the entire response to see its structure
        setAuthors(response.data.authors); // Set the data in state

        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="author-whole">
      <div >
        <p style={{ color: "black", fontWeight: "866" }}>
          பிரியாமெகன் நாவல் எழுத்தாளர்கள்
        </p>
        <br></br>
        <marquee>
          <div>
            <div className="author">
              {authors.map((item) => (
                <div className="author-content">
                  <div key={item.id}>
                    <div>
                      <div className="author-name">{item.name}</div>
                      <img
                        className="authorimage"
                        src={item.profile_images}
                        alt="Media"
                        // style={{ width: "10%", height: "8%" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </marquee>
      </div>
      <div className="writers-text">View All Writers</div>
    </div>
  );
}

export default Authors;
