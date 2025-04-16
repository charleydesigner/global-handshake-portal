
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CountrySelector } from "@/components/CountrySelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, User, MapPin, CalendarIcon, Briefcase, Phone, Mail, Save } from "lucide-react";

const BiodataForm = () => {
  const navigate = useNavigate();
  const [originCountry, setOriginCountry] = useState("");
  const [preferredCountry, setPreferredCountry] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd save the form data to a database here
    // For now, we'll just navigate to the next step
    navigate("/documents");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Worker Biodata Form</h1>
              <p className="text-gray-600">
                Please complete all the required information to proceed with your application.
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <CardTitle>Personal Information</CardTitle>
                  </div>
                  <CardDescription>
                    Provide your basic personal details as they appear on your identification documents.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <div className="relative">
                        <Input 
                          id="dateOfBirth" 
                          type="date" 
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select required>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="email@example.com" 
                          required
                        />
                        <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+1 (555) 123-4567" 
                          required
                        />
                        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Enter your current residential address" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Country of Origin</Label>
                    <CountrySelector
                      value={originCountry}
                      onChange={setOriginCountry}
                      placeholder="Select your country of origin"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Work Experience */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <CardTitle>Work Experience</CardTitle>
                  </div>
                  <CardDescription>
                    Tell us about your previous work experience and skills.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryOccupation">Primary Occupation</Label>
                    <Select required>
                      <SelectTrigger id="primaryOccupation">
                        <SelectValue placeholder="Select your main occupation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction Worker</SelectItem>
                        <SelectItem value="domestic">Domestic Helper</SelectItem>
                        <SelectItem value="factory">Factory Worker</SelectItem>
                        <SelectItem value="hospitality">Hospitality Staff</SelectItem>
                        <SelectItem value="farm">Farm Worker</SelectItem>
                        <SelectItem value="driver">Driver</SelectItem>
                        <SelectItem value="cleaner">Cleaner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                    <Select required>
                      <SelectTrigger id="yearsOfExperience">
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="more-than-10">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-driving" />
                        <Label htmlFor="skill-driving" className="font-normal">Driving</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-cooking" />
                        <Label htmlFor="skill-cooking" className="font-normal">Cooking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-welding" />
                        <Label htmlFor="skill-welding" className="font-normal">Welding</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-plumbing" />
                        <Label htmlFor="skill-plumbing" className="font-normal">Plumbing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-electrical" />
                        <Label htmlFor="skill-electrical" className="font-normal">Electrical Work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-carpentry" />
                        <Label htmlFor="skill-carpentry" className="font-normal">Carpentry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-cleaning" />
                        <Label htmlFor="skill-cleaning" className="font-normal">Cleaning</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-childcare" />
                        <Label htmlFor="skill-childcare" className="font-normal">Childcare</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="workExperience">Previous Work Experience</Label>
                    <Textarea 
                      id="workExperience" 
                      placeholder="Briefly describe your previous work experience" 
                      required
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Job Preferences */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle>Job Preferences</CardTitle>
                  </div>
                  <CardDescription>
                    Tell us about your preferred job location and type.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Preferred Country for Work</Label>
                    <CountrySelector
                      value={preferredCountry}
                      onChange={setPreferredCountry}
                      placeholder="Select your preferred country"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="alternateCountries">Alternative Countries (Optional)</Label>
                    <Textarea 
                      id="alternateCountries" 
                      placeholder="List any alternative countries you would consider working in"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="jobType">Preferred Job Type</Label>
                    <Select required>
                      <SelectTrigger id="jobType">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="seasonal">Seasonal</SelectItem>
                        <SelectItem value="any">Any type</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expectedSalary">Expected Monthly Salary (USD)</Label>
                    <Select required>
                      <SelectTrigger id="expectedSalary">
                        <SelectValue placeholder="Select expected salary range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300-500">$300-$500</SelectItem>
                        <SelectItem value="500-800">$500-$800</SelectItem>
                        <SelectItem value="800-1200">$800-$1,200</SelectItem>
                        <SelectItem value="1200-1500">$1,200-$1,500</SelectItem>
                        <SelectItem value="1500+">$1,500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              {/* Agreement */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" required />
                    <div>
                      <Label htmlFor="terms" className="font-medium">
                        I agree to the terms and conditions
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        By checking this box, I confirm that all the information provided is accurate and true. I understand that providing false information may result in disqualification.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => navigate("/")}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Save and Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiodataForm;
