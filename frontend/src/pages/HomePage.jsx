import Card from "../components/Card";
import { products } from "../products";

const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {products.map((product) => {
        return <Card product={product} key={product._id} />;
      })}
    </div>
  );
};

export default HomePage;
