'use client';
import { ImageIcon } from '@/icons';
import { useRef, useState } from 'react';
import { ButtonCustom, InputCustom } from '../common';

interface ImageUploaderProps {
  onImagesChange: (images: string[]) => void;
}

const Media = ({ onImagesChange }: ImageUploaderProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [url, setUrl] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle file upload (select or drop)
  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      const updatedImages = [...images, ...newImages].slice(0, 10);
      setImages(updatedImages);
      onImagesChange(updatedImages);
    }
  };

  // Handle drag and drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFileUpload(event.dataTransfer.files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle URL input submission
  const handleUrlSubmit = () => {
    if (url && images.length < 10) {
      const updatedImages = [...images, url];
      setImages(updatedImages);
      onImagesChange(updatedImages);
      setUrl('');
      setShowModal(false);
    }
  };

  // Remove image
  const handleImageDelete = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);

    // Revoke the object URL to free memory
    URL.revokeObjectURL(images[index]);
  };

  // Trigger file input on media area click
  const handleAreaClick = () => {
    setShowModal(true);
  };

  // Trigger file input from modal
  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file input change when choosing images from the computer
  const handleFileInputChange = (files: FileList | null) => {
    handleFileUpload(files);
    setShowModal(false);
  };

  return (
    <div className="mt-3xl">
      <h3 className="font-semibold text-lg text-black-900 dark:text-white mb-3">
        Media
      </h3>
      <div
        className="upload-area border-2 border-dashed border-grayBlue-400 rounded-md p-8 flex flex-col items-center justify-center text-grayBlue-400 cursor-pointer gap-3"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleAreaClick}
      >
        <ImageIcon width="60px" height="60px" />
        <p className="text-center font-normal text-xsm text-grayBlue-400">
          Drop your images here, or click to browse 1600 x 1200 (4:3) <br />
          recommended, up to 10MB each.
        </p>
        <InputCustom
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileUpload(e.target.files)}
          ref={fileInputRef}
          className="hidden"
        />
      </div>

      {/* Image preview with delete button */}
      <div className="image-previews mt-4 grid grid-cols-2 gap-2">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <img
              src={src}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <ButtonCustom
              type="button"
              onClick={() => handleImageDelete(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Delete image"
            >
              &times;
            </ButtonCustom>
          </div>
        ))}
      </div>

      {/* Note below the uploader */}
      <p className="font-normal text-xsm text-grayBlue-400 mt-3">
        Add up to 10 images to your product. Used to represent your product
        during checkout, in email, social sharing, and more.
      </p>

      {/* Modal for URL input */}
      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white p-4 rounded-md shadow-md">
            <h4 className="text-lg font-medium mb-2">Add Image</h4>
            <div className="flex flex-col mb-2">
              <ButtonCustom
                type="button"
                color="primary"
                radius="sm"
                onClick={handleFileInputClick}
                className="rounded-md px-4 py-2 mb-2"
              >
                Choose Image from Computer
              </ButtonCustom>
              <InputCustom
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileInputChange(e.target.files)}
                ref={fileInputRef}
                className="hidden"
              />
              <InputCustom
                type="text"
                placeholder="Enter image URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <ButtonCustom
                onClick={handleUrlSubmit}
                className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2"
              >
                Add
              </ButtonCustom>
              <ButtonCustom
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black rounded-md px-4 py-2"
              >
                Cancel
              </ButtonCustom>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
