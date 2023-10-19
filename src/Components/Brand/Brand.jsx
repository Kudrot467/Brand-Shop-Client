import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
  console.log(brand);
  const { bpic, bname } = brand;
  return (
    <div>
      <Link to={`/brandDetails/${bname}`}>
      <div className="card lg:card-side w-full bg-base-100 shadow-xl">
        <figure className="h-[150px]">
          <img className=""
            src={bpic}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bname}</h2>
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
