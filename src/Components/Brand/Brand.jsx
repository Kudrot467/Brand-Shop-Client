import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Brand = ({ brand }) => {
  const { bpic, bname } = brand;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div >
      <Link to={`/brandDetails/${bname}`}>
      <div className="card lg:card-side w-full overflow-x-auto bg-base-100 shadow-xl" data-aos="fade-right">
        <figure className="h-[150px]">
          <img className= "w-full h-full md:h-auto"
            src={bpic}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#52BA5D]">{bname}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

Brand.propTypes={
    brand:PropTypes.object
}
export default Brand;
