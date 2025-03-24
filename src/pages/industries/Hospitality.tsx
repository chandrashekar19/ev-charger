
import IndustryPage from '@/components/IndustryPage';

const HospitalityIndustry = () => {
  return (
    <IndustryPage
      title="Hospitality"
      subtitle="Powering Hospitality Across Premier Locations"
      description="Schön Mobility's EV chargers are trusted by top-tier hospitality brands across the country. From upscale resorts to city-centered hotels, our installations deliver seamless charging solutions that enhance guest experiences while showcasing sustainability. With our chargers already powering multiple destinations, we're proud to be a reliable partner in the hospitality industry's shift toward a greener future."
      image="/lovable-uploads/d59e2f7f-ce62-43d6-b794-94a249e64882.png"
      features={[
        {
          title: "Enhanced Guest Satisfaction",
          description: "Offer a premium amenity that attracts EV-driving guests and encourages longer stays at your property.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        },
        {
          title: "Exceptional Support",
          description: "Our dedicated support team ensures your charging infrastructure remains operational 24/7.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        },
        {
          title: "Customizable Solutions For Business Specific Needs",
          description: "Tailor your charging setup to match your property's aesthetic and operational requirements.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        },
        {
          title: "Additional Revenue Opportunity",
          description: "Generate new revenue streams while providing a valuable service to your guests.",
          icon: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        }
      ]}
      testimonials={[
        {
          customerName: "Best Western",
          location: "French Lick, IN",
          quote: "Installing Schön's charging stations has significantly increased our bookings from EV drivers. The system is reliable and our guests love the convenience.",
          image: "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"
        }
      ]}
    />
  );
};

export default HospitalityIndustry;
