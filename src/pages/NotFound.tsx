
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex justify-center items-center w-24 h-24 bg-evgray-100 rounded-full mb-8">
              <span className="text-5xl font-bold text-evgray-400">404</span>
            </div>
            
            <h1 className="heading-2 text-evgray-900 mb-4">
              Page Not Found
            </h1>
            
            <p className="text-xl text-evgray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="rounded-full border-evgray-300 text-evgray-700 hover:bg-evgray-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
              
              <Link to="/">
                <Button className="rounded-full bg-evblue-500 hover:bg-evblue-600">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
