
import { useState } from "react";
import { Upload, X, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DocumentUploaderProps {
  title: string;
  description: string;
  onFileChange: (file: File | null) => void;
  acceptedFileTypes?: string;
}

const DocumentUploader = ({
  title,
  description,
  onFileChange,
  acceptedFileTypes = ".pdf,.jpg,.jpeg,.png",
}: DocumentUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0] || null;
    setFile(droppedFile);
    onFileChange(droppedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    onFileChange(null);
  };

  return (
    <div className="w-full mb-6">
      <div className="mb-2">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {!file ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-gray-200 hover:border-primary/50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById(`file-upload-${title}`)?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <Upload className="h-10 w-10 text-muted-foreground" />
            <div>
              <p className="text-base font-medium">
                Drag & drop your file here or click to browse
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Accepted formats: {acceptedFileTypes.replace(/\./g, "")}
              </p>
            </div>
            <input
              id={`file-upload-${title}`}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept={acceptedFileTypes}
            />
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium truncate max-w-[200px]">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center rounded-full bg-green-50 text-green-600 px-2 py-1">
                <Check className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium">Uploaded</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveFile}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUploader;
