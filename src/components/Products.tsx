import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "PowerUp 32",
      image: "/ev-charger1.png",
      link: "/products/powerup-32",
    },
    {
      name: "PowerUp 60",
      image: "/power-charger.png",
      link: "/products/powerup-60",
    },
    {
      name: "PowerUp Mobile",
      image: "/ev-bluecar.png",
      link: "/products/powerup-mobile",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={index} to={product.link} className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-evblue-100">
                <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-evblue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
