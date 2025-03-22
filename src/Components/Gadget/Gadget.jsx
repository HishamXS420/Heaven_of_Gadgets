import { Link } from "react-router";

const Gadget = ({ gadget }) => {
  const { id, title, image, price } = gadget;
  return (
    <div className="card bg-base-100 w-84 shadow-sm rounded-xl">
      <figure>
        <img className="h-40 w-40 mt-6 " src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-lg mb-4">
          Price:{" "}
          <span className="text-purple-950 font-medium text-xl">${price}</span>
        </p>
        <div className="card-actions justify-start">
          <Link to={`/gadgets/${id}`}>
            <button className="btn btn-outline text-purple-700 rounded-3xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
