
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentUploader from "@/components/DocumentUploader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Upload, FileText, Save, AlertCircle, ChevronLeft } from "lucide-react";

const DocumentUpload = () => {
  const navigate = useNavigate();
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [photoDocument, setPhotoDocument] = useState<File | null>(null);
  const [resumeDocument, setResumeDocument] = useState<File | null>(null);
  const [certificateDocument, setCertificateDocument] = useState<File | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd upload the files here
    // For now, we'll just navigate to the next step
    navigate("/interview");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Document Upload</h1>
              <p className="text-gray-600">
                Please upload all required documents to proceed with your application.
              </p>
            </div>
            
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Important Information</AlertTitle>
              <AlertDescription className="text-blue-700">
                All documents must be clear, legible, and in either JPG, PNG, or PDF format. 
                Maximum file size is 5MB per document.
              </AlertDescription>
            </Alert>
            
            <form onSubmit={handleSubmit}>
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Required Documents</CardTitle>
                  </div>
                  <CardDescription>
                    Upload the following documents to complete your application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <DocumentUploader
                    title="Identification Document"
                    description="Upload a valid passport, national ID, or driver's license."
                    onFileChange={setIdDocument}
                  />
                  
                  <DocumentUploader
                    title="Recent Photograph"
                    description="Upload a professional passport-sized photo taken within the last 6 months."
                    onFileChange={setPhotoDocument}
                    acceptedFileTypes=".jpg,.jpeg,.png"
                  />
                  
                  <DocumentUploader
                    title="Resume/CV"
                    description="Upload your most recent resume or curriculum vitae."
                    onFileChange={setResumeDocument}
                    acceptedFileTypes=".pdf,.doc,.docx"
                  />
                  
                  <DocumentUploader
                    title="Certificates (Optional)"
                    description="Upload any relevant skill certificates or training documents."
                    onFileChange={setCertificateDocument}
                  />
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/biodata")}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Biodata
                </Button>
                <Button 
                  type="submit" 
                  disabled={!idDocument || !photoDocument || !resumeDocument}
                >
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

export default DocumentUpload;
