import "./Register.css";

function Register() {
  return (
    <div>
      <div className="flex flex-col w-full md:w-50 p-5 rounded shadow-lg justify-items-center">
        <h1 className="font-bold mb-4">Register Now</h1>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group mb-4">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-group">
                <label>Email :</label>
                <input
                  type="text"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-group">
                <label>Mobile No :</label>
                <input
                  type="tel"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Mobile No"
                />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-group">
                <label>Password :</label>
                <input
                  type="password"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="form-group">
                <label>Confirm Password :</label>
                <input
                  type="password"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Confirm Password"
                />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button className=" btn text-white btn-success cursor-pointer">
                Register
              </button>
            </div>
            {/* <div className="col-md-12"> */}
              {/* <!-- <a className="text-primary" ><strong className="text-black">Login</strong></a> --> */}
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
