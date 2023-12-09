import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser,setProfilePicture } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const [showPassword,setShowPassWord]=useState(false)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const image_url=form.get("image_url");
    const email = form.get("email");
    const password = form.get("password");
    console.log(firstName, lastName, email, password);

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Please take a capital letter");
      return;
    } else if (
      !/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)
    ) {
      setRegisterError("Please take a special character ");
      return;
    }

    setRegisterError("");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setProfilePicture(image_url)
       toast("user created successfully");
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-[#52BA5D]">
      <div className="hero-content md:w-3/4 lg:w-full flex-col">
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="flex items-center justify-around">
              <img
                className="w-[120px] h-[100px] rounded-lg"
                src="https://i.ibb.co/wg4Zvyd/Brand-Shop.png"
                alt=""
              />
            </div>
           <div className="flex flex-col md:flex-col lg:flex-row gap-1">

           <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">
                  First Name
                </span>
              </label>
              <input
                type="text"
                placeholder="first name"
                name="firstName"
                className="input input-bordered border-[#52BA5D]"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                placeholder="last name"
                name="lastName"
                className="input input-bordered border-[#52BA5D]"
                required
              />
            </div>
            
           </div>
            <div>

            <div className="form-control">
            <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image url"
                name="image_url"
                className="input input-bordered border-[#52BA5D]"
                required
              />
            </div>

            <div className="form-control">
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
                  type={showPassword ? "text" : "password" }
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full border-[#52BA5D]"
                  required
                />
                <span className="absolute top-3 right-2" onClick={() => setShowPassWord(!showPassword)}>
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button id="register-done" className="btn text-white hover:bg-[#52BA5D] bg-[#52BA5D]">
                Registration
              </button>
            </div>
          </form>
          <p className="text-center font-medium text-lg text-[#52BA5D]">
            Already have an account ?{" "}
            <Link className="text-red-400" to="/login">
              Login
            </Link>
          </p>
          {registerError && (
            <p className="text-red-700 text-center text-xl font-medium">
              {registerError}
            </p>
          )}
           <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Register;
