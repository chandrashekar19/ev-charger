import { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Phone, MessageSquare, Download, HelpCircle, Check } from 'lucide-react';
import Contact from '@/components/Contact';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What types of EV chargers do you offer?',
          a: 'We offer three main types of chargers: Home Charger (7.4 kW), Pro Charger (22 kW), and Rapid DC Charger (150 kW). Each is designed for different use cases, from overnight home charging to ultra-fast public charging.'
        },
        {
          q: 'Are your chargers compatible with all EV models?',
          a: 'Yes, our chargers are compatible with all major EV models. Our Home and Pro Chargers use the standard Type 2 connector common in most EVs, while our Rapid DC Charger offers both CCS and CHAdeMO connectors to accommodate virtually all fast-charging capable vehicles.'
        },
        {
          q: 'How do I find EVCharge stations near me?',
          a: 'You can find our charging stations through our mobile app, available on iOS and Android, or on our website\'s Network page. The app provides real-time information on station availability and allows you to filter by charger type and amenities.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'For product purchases, we accept all major credit cards, PayPal, and bank transfers. For charging sessions at our public stations, you can pay through our mobile app using a linked credit card, our RFID card, or contactless payment methods at equipped stations.'
        }
      ]
    },
    {
      category: 'Installation',
      questions: [
        {
          q: 'Can I install the Home Charger myself?',
          a: 'While the Home Charger is designed for simplicity, we strongly recommend professional installation by a certified electrician to ensure safety and compliance with local electrical codes. Improper installation could void your warranty.'
        },
        {
          q: 'What electrical requirements are needed for installation?',
          a: 'The Home Charger requires a dedicated 240V circuit with at least 32A capacity. The Pro Charger typically requires three-phase power with 32A per phase. Our Rapid DC Charger has significant power requirements and needs site-specific evaluation. We can help determine if your electrical service is sufficient during the consultation process.'
        },
        {
          q: 'How long does installation typically take?',
          a: 'For a standard Home Charger installation, the process typically takes 2-4 hours. Pro Charger installations usually take 4-6 hours. Rapid DC Charger installations are more complex and can take 1-3 days depending on site conditions and electrical requirements.'
        },
        {
          q: 'Do you offer installation services?',
          a: 'Yes, we partner with certified electricians nationwide to provide professional installation services. You can add installation to your purchase, and we\'ll coordinate with local professionals in your area. All installation partners are trained and certified for EVCharge products.'
        }
      ]
    },
    {
      category: 'Usage & Maintenance',
      questions: [
        {
          q: 'How fast will my EV charge with your products?',
          a: 'Charging speed depends on both your charger and vehicle. With our Home Charger (7.4 kW), most EVs gain 25-30 miles of range per hour. The Pro Charger (22 kW) can add 75-90 miles per hour to vehicles capable of accepting this power. Our Rapid DC Charger can add up to 200 miles in 30 minutes for compatible vehicles.'
        },
        {
          q: 'How do I start a charging session at a public station?',
          a: 'You can start a charging session using our mobile app (scan the QR code at the station), tap an RFID card, or use contactless payment at equipped stations. The station display will guide you through the process of connecting your vehicle and initiating charging.'
        },
        {
          q: 'Do your chargers require regular maintenance?',
          a: 'Our chargers are designed for minimal maintenance. For home and business chargers, we recommend occasional visual inspection of cables for wear and keeping the unit clean. Public rapid chargers receive regular preventive maintenance from our service team to ensure optimal performance.'
        },
        {
          q: 'What should I do if my charger isn\'t working?',
          a: 'First, check that the charger is properly powered and that there are no error messages on the display or in the app. Ensure the connector is properly seated in your vehicle. If issues persist, you can run a diagnostic test through the app or contact our 24/7 support team for assistance.'
        }
      ]
    },
    {
      category: 'Troubleshooting',
      questions: [
        {
          q: 'My charger shows a red light. What does this mean?',
          a: 'A red light typically indicates a fault condition. Check the display or app for specific error codes. Common issues include power supply problems, connector faults, or communication errors with the vehicle. The app provides troubleshooting steps for each error code, or you can contact our support team for assistance.'
        },
        {
          q: 'Charging stopped unexpectedly. What should I do?',
          a: 'This could be due to several factors: your vehicle may have reached its set charge limit, there might be a power fluctuation, or a safety feature may have activated. Check the app for notifications, restart the charging session, and if the problem persists, contact support with the error code displayed.'
        },
        {
          q: 'The app cannot connect to my home charger. How can I fix this?',
          a: 'First, ensure your charger is powered on and that your phone has a stable WiFi or cellular connection. Try restarting the app and the charger. If issues persist, you may need to reset the charger\'s network connection through the reset button on the unit (refer to your user manual for specific instructions).'
        },
        {
          q: 'My charging speed seems slower than expected. Why?',
          a: 'Charging speed can be affected by several factors: your vehicle\'s onboard charger capabilities, battery temperature, current battery level (charging slows as the battery fills), electrical supply limitations, or high charger usage on shared circuits. The app provides real-time charging data to help identify potential limitations.'
        }
      ]
    }
  ];
  
  const resources = [
    {
      title: 'User Manuals',
      icon: <FileText className="h-10 w-10 text-evblue-500" />,
      description: 'Detailed guides for all our products',
      links: [
        { name: 'Home Charger Manual', url: '#' },
        { name: 'Pro Charger Manual', url: '#' },
        { name: 'Rapid DC Charger Manual', url: '#' },
        { name: 'Mobile App Guide', url: '#' }
      ]
    },
    {
      title: 'Installation Guides',
      icon: <Download className="h-10 w-10 text-evblue-500" />,
      description: 'Step-by-step installation instructions',
      links: [
        { name: 'Pre-Installation Checklist', url: '#' },
        { name: 'Home Charger Installation', url: '#' },
        { name: 'Pro Charger Installation', url: '#' },
        { name: 'Electrical Requirements', url: '#' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: <HelpCircle className="h-10 w-10 text-evblue-500" />,
      description: 'Solutions for common issues',
      links: [
        { name: 'Error Codes Explained', url: '#' },
        { name: 'Connection Problems', url: '#' },
        { name: 'Charging Interruptions', url: '#' },
        { name: 'Mobile App Issues', url: '#' }
      ]
    },
    {
      title: 'Video Tutorials',
      icon: <FileText className="h-10 w-10 text-evblue-500" />,
      description: 'Visual guides and demonstrations',
      links: [
        { name: 'Getting Started', url: '#' },
        { name: 'Advanced Features', url: '#' },
        { name: 'Maintenance Tips', url: '#' },
        { name: 'Troubleshooting Walkthrough', url: '#' }
      ]
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-evblue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-evblue-100 px-3 py-1 text-sm font-medium text-evblue-800 mb-6">
              <span>Customer Support</span>
            </div>
            <h1 className="heading-1 text-evgray-900 mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-evgray-600">
              Find answers to common questions, access resources, or get in touch with our support team.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" id="support-content">
        <div className="container-custom">
          <Tabs defaultValue="faq" className="animate-fade-in-up" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-xl">
                <TabsTrigger value="faq" className="py-3">
                  FAQs
                </TabsTrigger>
                <TabsTrigger value="resources" className="py-3">
                  Resources
                </TabsTrigger>
                <TabsTrigger value="contact" className="py-3">
                  Contact Us
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="faq" className="animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-evgray-50 rounded-xl p-4 sticky top-24">
                    <h3 className="font-semibold text-lg mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {faqs.map((category, index) => (
                        <li key={index}>
                          <a 
                            href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-evgray-700 hover:text-evblue-600 transition-colors block py-1"
                          >
                            {category.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  {faqs.map((category, index) => (
                    <div 
                      key={index} 
                      id={category.category.toLowerCase().replace(/\s+/g, '-')}
                      className="mb-10"
                    >
                      <h2 className="text-2xl font-semibold text-evgray-900 mb-5">
                        {category.category}
                      </h2>
                      
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, fIndex) => (
                          <AccordionItem 
                            key={fIndex} 
                            value={`faq-${index}-${fIndex}`}
                            className="border bg-white rounded-lg px-6 shadow-sm"
                          >
                            <AccordionTrigger className="text-left py-4 hover:no-underline">
                              <span className="font-medium text-evgray-900">{faq.q}</span>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 text-evgray-600">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                  
                  <div className="mt-12 bg-evgray-50 rounded-xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                      Still Have Questions?
                    </h3>
                    <p className="text-evgray-600 mb-6">
                      Our support team is ready to assist you with any other questions you might have.
                    </p>
                    <Button 
                      onClick={() => setActiveTab('contact')}
                      className="bg-evblue-500 hover:bg-evblue-600 rounded-full"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {resources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 border border-evgray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-evgray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-evgray-600 mb-4">
                      {resource.description}
                    </p>
                    <ul className="space-y-2">
                      {resource.links.map((link, lIndex) => (
                        <li key={lIndex}>
                          <a 
                            href={link.url} 
                            className="text-evblue-600 hover:text-evblue-700 transition-colors flex items-center"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            <span>{link.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-evgray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-evgray-900 mb-4">
                    Installation Resources
                  </h3>
                  <p className="text-evgray-600 mb-6">
                    Planning to install an EVCharge product? Check our detailed guidelines and requirements to ensure a smooth installation process.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-evgray-800">Pre-Installation Assessment</h4>
                        <p className="text-evgray-600">Evaluate your electrical capacity and installation location.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-evgray-800">Finding a Certified Installer</h4>
                        <p className="text-evgray-600">Work with professionals trained on our products.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-evgray-800">Post-Installation Setup</h4>
                        <p className="text-evgray-600">Configure your charger and connect to the network.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-full">
                    View Installation Guide
                  </Button>
                </div>
                
                <div className="bg-evgray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-evgray-900 mb-4">
                    Video Tutorials
                  </h3>
                  <p className="text-evgray-600 mb-6">
                    Visual step-by-step guides to help you get the most out of your EVCharge products.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden bg-evgray-200 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Video tutorial thumbnail" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-evblue-600 ml-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-full">
                    View All Tutorials
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="animate-fade-in-up">
              <Contact />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
