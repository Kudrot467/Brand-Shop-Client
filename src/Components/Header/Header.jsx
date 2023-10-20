import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div>
             <div className="mx-auto flex justify-center p-4 items-center flex-col md:flex-row">
        <img
          className="w-[220px] h-[80px] rounded-xl"
          src="https://i.ibb.co/wg4Zvyd/Brand-Shop.png"
          alt=""
        />
        <div className="flex flex-col md:flex-row">
          {/* <p className="text-xl mr-2 text-[#4E9BD8]">{
            user?.displayName
          }</p> */}
            {/* {
                user ? <button onClick={handleSignOut}  className="text-xl font-medium  mr-1 text-[#0070C7] hover:text-[#4E9BD8]">Sign out</button> :  <Link to="/login" className="flex items-center ">
                <FaUser className="text-[#0070C7] mr-1 hover:text-[#4E9BD8]"></FaUser>
                <p className="text-xl font-medium  mr-1 text-[#0070C7] hover:text-[#4E9BD8] ">
                  Login
                </p>
              </Link>
            } */}
          {/* <Link to="/contact-us" className="flex items-center">
            <FaRegAddressBook className="text-[#0070C7] mr-1"></FaRegAddressBook>
            <p className="text-xl font-medium text-[#0070C7]">Contact-us</p>
          </Link> */}
        </div>
      </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;