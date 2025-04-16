
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Users, FileText, Upload, Calendar, Briefcase, MapPin, ChevronRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Path to International Employment Opportunities
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Connect with trusted employers worldwide for manual and non-skilled labor positions. 
                Start your journey to a better future today.
              </p>
              <div className="flex space-x-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/biodata">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Workers on job site" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-gray-600">Successful Placements</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600">Employer Partners</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <CardContent className="pt-8 pb-6 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Fill Biodata Form</h3>
                <p className="text-gray-600">Complete your profile with personal and professional information.</p>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <CardContent className="pt-8 pb-6 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
                <p className="text-gray-600">Submit required identification and qualification documents.</p>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <CardContent className="pt-8 pb-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Book Interview</h3>
                <p className="text-gray-600">Pay the $2 fee and schedule your interview session.</p>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <CardContent className="pt-8 pb-6 text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Get Hired</h3>
                <p className="text-gray-600">Receive job offers and prepare for your international placement.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/biodata">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Available Positions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We place workers in various sectors across multiple countries. Find the right opportunity for your skills and preferences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Construction</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        General Laborers
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Masonry Workers
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Carpentry Assistants
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hospitality</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Hotel Housekeeping
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Kitchen Helpers
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Waitstaff Assistants
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Factory Workers
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Assembly Line Staff
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Packaging Assistants
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/biodata" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              View All Available Positions
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of workers who have successfully found international employment through our platform.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/biodata">Apply Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
