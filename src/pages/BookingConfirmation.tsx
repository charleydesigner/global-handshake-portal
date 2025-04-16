
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, Video, Download, Home } from "lucide-react";

const BookingConfirmation = () => {
  // In a real app, these would come from the booking data
  const interviewDate = "2023-10-15";
  const interviewTime = "10:00 AM";
  const interviewId = "INT-" + Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center mb-8">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Interview Booked Successfully!</h1>
              <p className="text-gray-600 text-lg mb-6">
                Your interview has been scheduled. Check your email for confirmation details.
              </p>
              <div className="flex justify-center">
                <Link to="/">
                  <Button className="bg-primary">
                    <Home className="h-4 w-4 mr-2" />
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Interview Details</CardTitle>
                <CardDescription>
                  Please save this information for your records.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Interview Date</h3>
                      <p className="text-base font-medium">
                        {new Date(interviewDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Interview Time</h3>
                      <p className="text-base font-medium">{interviewTime} (GMT+0)</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Interview Format</h3>
                    <p className="text-base font-medium">Video Call (Zoom)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      You will receive a Zoom link via email 24 hours before your scheduled interview.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Booking Reference</h3>
                    <p className="text-base font-medium">{interviewId}</p>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Details
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="w-full p-4 bg-blue-50 rounded-lg text-blue-800">
                  <h3 className="text-sm font-semibold mb-1">Prepare for Your Interview</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Test your camera and microphone before the interview</li>
                    <li>Have your identification documents ready</li>
                    <li>Prepare to discuss your work experience and skills</li>
                    <li>Find a quiet place with good lighting and internet connection</li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
