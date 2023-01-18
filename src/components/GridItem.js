import { Link } from "react-router-dom";

export const GridItem = ({ title, link, image }) => {
  return (
    <div className="grid--item">
      <h3 className="grid-product">
        <Link to={link}>{title}</Link>
      </h3>
      <img className="grid--image" src={image} alt="" />
    </div>
  );
};
