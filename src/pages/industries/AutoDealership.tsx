
import IndustryPage from '@/components/IndustryPage';

const AutoDealershipIndustry = () => {
  return (
    <IndustryPage
      title="Auto Dealership"
      subtitle="Power Your Dealership's Electric Future"
      description="Provide an essential service for your EV inventory and customers. With Schön's charging solutions, dealerships can showcase EVs fully charged and ready for test drives while offering convenient charging for service customers."
      image="/lovable-uploads/d59e2f7f-ce62-43d6-b794-94a249e64882.png"
      features={[
        {
          title: "Showcase EV Readiness",
          description: "Demonstrate your dealership's commitment to the electric future with visible charging infrastructure.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        },
        {
          title: "Service Department Enhancement",
          description: "Offer charging as a value-added service for customers bringing in their EVs for maintenance.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        },
        {
          title: "EV Sales Support",
          description: "Keep your electric inventory charged and ready for test drives at all times.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        },
        {
          title: "Future-Proof Investment",
          description: "Stay ahead of the competition as the automotive industry shifts toward electrification.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        }
      ]}
    />
  );
};

export default AutoDealershipIndustry;
