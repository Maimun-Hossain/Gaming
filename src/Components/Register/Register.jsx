
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Register = () => {
    const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    // create user
    createUser(email, password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.error(error)
    })
    
  };
  return (
    <div className="link-with-bg-image h-[700px] lg:h-screen w-full">
      <div className="mt-52">
        <div className="hero">
          <div className="">
            <div
              id="banner-img"
              className="card backdrop-blur-sm bg-transparent flex-shrink-0 w-full p-8"
            >
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    className="input border-pink-500 w-full backdrop-blur-sm bg-transparent input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input border-pink-500 w-full backdrop-blur-sm bg-transparent input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input border-pink-500 input-bordered backdrop-blur-sm bg-transparent"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-pink-400 font-bold"
                    >
                      Terms and Conditions
                    </a>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-secondary mr-10 bg-pink-500"
                    />

                    <br />
                  </label>
                  <p className="text-pink-400 text-xs ml-1 font-bold">
                    Have Account?{" "}
                    <Link to="/login" className="text-purple-500">
                      Login
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-[#5204f5] text-pink-400">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
