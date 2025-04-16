
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentForm from "@/components/PaymentForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ChevronLeft, Calendar, DollarSign, CheckCircle } from "lucide-react";

const InterviewBooking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("payment");
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  const handlePaymentComplete = () => {
    setPaymentComplete(true);
    setActiveTab("schedule");
  };
  
  const handleBookingComplete = () => {
    navigate("/booking-confirmation");
  };
  
  // Generate available dates (next 14 days)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          dayOfMonth: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' }),
        });
      }
    }
    
    return dates;
  };
  
  // Generate available time slots
  const getTimeSlots = () => {
    return [
      "09:00 AM", "10:00 AM", "11:00 AM", 
      "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Book Your Interview</h1>
              <p className="text-gray-600">
                Pay the $2 booking fee and select your preferred interview time.
              </p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="payment" disabled={activeTab === "schedule" && !paymentComplete}>
                  <DollarSign className="h-4 w-4 mr-2" />
                  Payment
                </TabsTrigger>
                <TabsTrigger value="schedule" disabled={!paymentComplete}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="payment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Fee Payment</CardTitle>
                    <CardDescription>
                      A one-time fee of $2.00 is required to book your interview slot.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PaymentForm onPaymentComplete={handlePaymentComplete} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Interview Date & Time</CardTitle>
                    <CardDescription>
                      Choose your preferred date and time for the interview.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="text-base font-medium mb-3">Available Dates</h3>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                        {getAvailableDates().map((date) => (
                          <button
                            key={date.date}
                            type="button"
                            className={`p-3 rounded-md border text-center transition-colors ${
                              selectedDate === date.date
                                ? "bg-primary text-white border-primary"
                                : "border-gray-200 hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedDate(date.date)}
                          >
                            <div className="text-xs font-medium">{date.day}</div>
                            <div className="text-lg font-bold">{date.dayOfMonth}</div>
                            <div className="text-xs">{date.month}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {selectedDate && (
                      <div>
                        <h3 className="text-base font-medium mb-3">Available Time Slots</h3>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                          {getTimeSlots().map((time) => (
                            <button
                              key={time}
                              type="button"
                              className={`py-2 px-4 rounded-md border text-center transition-colors ${
                                selectedTime === time
                                  ? "bg-primary text-white border-primary"
                                  : "border-gray-200 hover:border-primary/50"
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-8 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setActiveTab("payment")}
                      >
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Back to Payment
                      </Button>
                      <Button
                        type="button"
                        onClick={handleBookingComplete}
                        disabled={!selectedDate || !selectedTime}
                      >
                        Complete Booking
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Need help? Contact our support team at support@globalworkforceconnect.com
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InterviewBooking;
