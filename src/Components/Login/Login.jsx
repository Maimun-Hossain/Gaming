import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)

        // login user
        login(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
  return (
    <div className="link-with-bg-image h-[700px] lg:h-screen w-full">
      <div className="mt-52">
        <div className="hero">
          <div className="">
            <div id="banner-img" className="card backdrop-blur-sm bg-transparent flex-shrink-0 w-full p-8">
              <form onSubmit={handleLogIn} className="card-body">
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
                    <a href="#" className="label-text-alt link link-hover text-pink-400 font-bold">
                      Forgot password?
                    </a>
                    <br />
                  </label>
                  <p className="text-pink-400 text-xs ml-1 font-bold">
                      New Here? <Link to="/register" className="text-purple-500">Register</Link>
                    </p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-[#5204f5] text-pink-400">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
