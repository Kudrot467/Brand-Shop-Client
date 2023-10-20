import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassWord] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLog = () => {
    googleSignIn().then().catch();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
          toast("login successful", {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast(`${errorMessage}`);
      });
  };
  return (
    <div className="hero min-h-screen bg-[#52BA5D]">
      <div className="hero-content md:w-3/4 lg:w-1/2 flex-col">
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <div className="flex items-center justify-around">
                <img
                  className="w-[120px] h-[100px] rounded-lg"
                  src="https://i.ibb.co/wg4Zvyd/Brand-Shop.png"
                  alt=""
                />
              </div>
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered border-[#52BA5D]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">
                  Password
                </span>
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full border-[#52BA5D]"
                  required
                />
                <span className="absolute top-3 right-2" onClick={() => setShowPassWord(!showPassword)}>
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#52BA5D] bg-[#52BA5D]">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-medium text-lg text-[#52BA5D]">
            New Applicant ?{" "}
            <Link className="text-red-400" to="/register">
              Register
            </Link>
          </p>
          <div className="flex items-center justify-center my-6">
            <button onClick={handleGoogleLog} className="btn  text-[#52BA5D]">
              <FaGoogle></FaGoogle>Continue with Google
            </button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Login;
