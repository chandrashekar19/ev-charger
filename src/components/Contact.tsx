import { useState } from "react";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      businessName: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      agreeToTerms: false,
    });
    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section className="bg-gradient-to-b from-[#e6f7ff] to-[#e6f7ff]/40 py-16">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Form Column */}
            <div className="col-span-3 p-8">
              <h2 className="text-3xl font-bold text-evblue-500 hover:text-evblue-600 mb-8">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder="Business Name"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />

                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message (Max 500 characters)"
                    required
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleCheckboxChange}
                    className="mt-1 mr-2"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-600"
                  >
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms and Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Info Column */}
            <div className="col-span-2 bg-[#f9f9f9] p-8 flex flex-col justify-center">
              <div className="mb-10">
                <img
                  src="/contact-us.png"
                  alt="Contact Us"
                  className="w-full max-w-[250px] mx-auto mb-8"
                />

                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  CONTACT US
                </h3>

                <div className="space-y-3 mt-6">
                  <p className="text-center text-gray-700">
                    <a
                      href="mailto:sales@schonmobility.com"
                      className="hover:text-blue-600"
                    >
                      sales@schonmobility.com
                    </a>
                  </p>
                  <p className="text-center text-gray-700">(248) 242-7520</p>
                  <div className="text-center text-gray-700">
                    <p>Schon Mobility, Inc.</p>
                    <p>Bloomfield Hills, MI 48302-5007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
