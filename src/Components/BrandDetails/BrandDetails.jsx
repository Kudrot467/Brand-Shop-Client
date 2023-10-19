import { useParams } from "react-router-dom";

const BrandDetails = () => {
    const {brandName}=useParams();
    
    console.log(brandName);

    return (
        <div>
            
        </div>
    );
};

export default BrandDetails;