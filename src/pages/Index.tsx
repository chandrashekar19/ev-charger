
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import EnergyMaestro from '@/components/EnergyMaestro';
import Industries from '@/components/Industries';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Products />
      <EnergyMaestro />
      <Industries />
      <Contact />
    </Layout>
  );
};

export default Index;
