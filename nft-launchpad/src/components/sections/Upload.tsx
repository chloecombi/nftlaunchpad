'use client';
import React, { useState } from 'react';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import useStore from '@/store/useStore';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export default function UploadPage() {
  const { step, increaseStep, decreaseStep } = useStore((state) => state);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const onNext = () => {
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining for safety

    if (file) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        setSelectedFile(event.target?.result as string); // Cast to string
      };

      reader.onerror = (error: any) => {
        console.error('Error reading file:', error);
        // Handle the error gracefully, e.g., display an error message to the user
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <div>
        <SectionHeader title="Upload" description="" />
        <div className="h-[220px] w-full mt-4">
          <Label
            htmlFor="picture"
            className="h-full w-full border-2 border-dashed rounded-xl flex items-center justify-center flex-col relative aspect-[0]"
          >
            <Input
              type="file"
              id="picture"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <Image
                src={selectedFile}
                alt="Preview"
                className="max-w-full max-h-full overflow-hidden object-cover rounded-lg"
                fill
              />
            ) : (
              <>
                <Upload size={32} />
                <p>Browse file</p>
                <p className="text-xs text-muted-foreground">.zip</p>
              </>
            )}
          </Label>

          <div className="w-full mx-auto">
            <Button className="w-full mt-10">Deploy</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
