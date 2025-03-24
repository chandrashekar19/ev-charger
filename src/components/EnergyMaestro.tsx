import { Link } from "react-router-dom";

const EnergyMaestro = () => {
  return (
    <section className="py-16 bg-evblue-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-evblue-600 mb-4">
            EnergyMÆSTRO
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our Charge Network Management Software
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 text-lg">
              EnergyMaestro, Schön's innovative charge network management
              system, is the nexus of advanced EV infrastructure management and
              energy optimization. This platform, tailored for the evolving
              needs of electric vehicle support, streamlines operations and
              reduces costs.
            </p>
            <div className="mt-8">
              <Link
                to="/energy-maestro"
                className="inline-flex items-center text-evblue-600 font-medium hover:text-evblue-700"
              >
                Learn more about EnergyMÆSTRO
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/energy-maestro.png"
              alt="EnergyMaestro Dashboard"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyMaestro;
