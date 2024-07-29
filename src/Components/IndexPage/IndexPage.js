import Trending from "../Trending/Trending";
import Post from "../Post/Post";
import Authors from "../Authors/Authors";
import "./IndexPage.css"

function IndexPage() {
  return (
    <>
      <br></br>
      <h1>Advertisement</h1>
      <br></br>
      <Trending></Trending>
      <br></br>

      <div className="frontpage">
        <div className="item1"> <Post></Post></div>
        <div className="item2 "><Authors></Authors></div>
      </div>

      {/* <div className="container mx-auto flex flex-wrap py-6 body ">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <Post></Post>
        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <Authors></Authors>
          </div>
        </aside>
      </div> */}
    </>
  );
}

export default IndexPage;
