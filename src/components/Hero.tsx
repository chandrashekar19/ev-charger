import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="pt-32 pb-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(/hero-banner.png)`,
        backgroundSize: "cover",
        minHeight: "80vh",
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-evblue-500 hover:text-evblue-600 mb-6">
            The Schön Way
          </h1>
          <p className="text-xl text-white mb-8">
            Making Range Anxiety & Charging Inconvenience a thing of the past by
            Making EV Chargers Cost-Effective and Smart
          </p>
          <Button
            asChild
            className="bg-evblue-500 hover:bg-evblue-600 text-white px-8 py-3 rounded-full text-lg"
          >
            <Link to="/get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
