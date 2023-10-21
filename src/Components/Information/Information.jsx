import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div >
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
         
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn bg-[#52BA5D] hover:text-[#52BA5D] font-medium text-lg text-white "
          >
            Information Of Brands
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-50 md:w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link className="text-xl underline text-[#AD66D9] hover:text-[#52BA5D] font-medium" to={'/informationSamsung'}>History Of Samsung</Link>
            </li>
            <li>
              <Link className="text-xl underline text-[#AD66D9] hover:text-[#52BA5D] font-medium" to={'/informationApple'}>History Of Apple</Link>
            </li>
            <li>
              <Link className="text-xl underline text-[#AD66D9] hover:text-[#52BA5D] font-medium" to={'/informationLG'}>History Of LG</Link>
            </li>
            <li>
              <Link className="text-xl underline text-[#AD66D9] hover:text-[#52BA5D] font-medium" to={'/informationMI'}>History Of MI</Link>
            </li>
            <li>
              <Link className="text-xl underline text-[#AD66D9] hover:text-[#52BA5D] font-medium" to={'/informationGoogle'}>History Of Google</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
