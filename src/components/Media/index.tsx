'use client';

// Third party
import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import { Image } from '@nextui-org/react';

// Components
import { ButtonCustom, InputCustom } from '@/components';
import { ImageIcon } from '@/icons';
import { MESSAGE } from '@/constants';

interface ImageUploaderProps {
  mode: 'add' | 'edit' | 'detail';
  onImagesChange?: (images: string[]) => void;
  data?: { img: string[] };
}

const Media = ({ mode, onImagesChange, data }: ImageUploaderProps) => {
  const [images, setImages] = useState<string[]>(data?.img || []);
  const [url, setUrl] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (data?.img) {
      setImages(data.img);
    }
  }, [data?.img]);

  // Handle file upload (select or drop)
  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      const updatedImages = [...images, ...newImages];

      if (updatedImages.length > 10) {
        setErrorMessage(MESSAGE.IMAGE_OVERLOAD);
        return;
      }

      setImages(updatedImages);
      setErrorMessage(null);
      onImagesChange?.(updatedImages);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFileUpload(event.dataTransfer.files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUrlSubmit = () => {
    if (url) {
      if (images.length > 10) {
        setErrorMessage(MESSAGE.IMAGE_OVERLOAD);
        return;
      }

      const updatedImages = [...images, url];
      setImages(updatedImages);
      setErrorMessage(null);
      onImagesChange?.(updatedImages);
      setUrl('');
      setShowModal(false);
    }
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setErrorMessage(null);
    onImagesChange?.(updatedImages);
    URL.revokeObjectURL(images[index]);
  };

  const handleAreaClick = () => {
    setShowModal(true);
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (files: FileList | null) => {
    handleFileUpload(files);
    setShowModal(false);
  };

  return (
    <div className="mt-3xl">
      <label
        className="font-semibold text-lg text-black-900 dark:text-white"
        htmlFor="Media"
      >
        Media
      </label>

      {mode !== 'detail' && (
        <div
          className="upload-area border-2 border-dashed border-grayBlue-400 rounded-md p-8 flex flex-col items-center justify-center text-ratio-200 dark:text-grayBlue-400 cursor-pointer gap-3 mt-3"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleAreaClick}
        >
          <ImageIcon width="60px" height="60px" />
          <p className="text-center font-normal text-xsm text-ratio-200 dark:text-grayBlue-400">
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
      )}

      <div className="image-previews mt-4 grid grid-cols-2 gap-2">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <Image
              src={src}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover rounded-md"
            />
            {mode !== 'detail' && (
              <ButtonCustom
                type="button"
                onClick={() => handleImageDelete(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Delete image"
              >
                &times;
              </ButtonCustom>
            )}
          </div>
        ))}
      </div>

      <p
        className={clsx(
          'font-normal text-xsm text-ratio-200 dark:text-grayBlue-400 mt-3',
          { 'text-red-500': errorMessage },
        )}
      >
        {errorMessage ||
          'Add up to 10 images to your product. Used to represent your product during checkout, in email, social sharing, and more.'}
      </p>

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
