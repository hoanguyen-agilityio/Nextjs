'use client';
import { useRef, useState } from 'react';
import { ButtonCustom, InputCustom } from '../common';
import { FileIcon } from '@/icons';

interface FileUploaderProps {
  onFilesChange: (files: string[]) => void;
}

const File = ({ onFilesChange }: FileUploaderProps) => {
  const [files, setFiles] = useState<
    { src: string; name: string; size: number }[]
  >([]);
  const [url, setUrl] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Maximum total size allowed in bytes (5GB)
  const MAX_TOTAL_SIZE = 5 * 1024 * 1024 * 1024; // 5GB

  // Handle file upload (select or drop)
  const handleFileUpload = (fileList: FileList | null) => {
    if (fileList) {
      let totalSize = files.reduce((sum, file) => sum + file.size, 0);
      const newFiles: { src: string; name: string; size: number }[] = [];

      Array.from(fileList).forEach((file) => {
        if (totalSize + file.size <= MAX_TOTAL_SIZE) {
          const fileURL = URL.createObjectURL(file);
          newFiles.push({ src: fileURL, name: file.name, size: file.size });
          totalSize += file.size; // Update total size
        } else {
          alert('File size exceeds the maximum limit of 5GB');
        }
      });

      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFilesChange(updatedFiles.map((file) => file.src));
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
    if (url) {
      // Simulating the size of a file added via URL
      const simulatedSize = 0;
      const totalSize =
        files.reduce((sum, file) => sum + file.size, 0) + simulatedSize;

      if (totalSize <= MAX_TOTAL_SIZE) {
        const updatedFiles = [
          ...files,
          { src: url, name: 'Uploaded from URL', size: simulatedSize },
        ];
        setFiles(updatedFiles);
        onFilesChange(updatedFiles.map((file) => file.src));
        setUrl('');
        setShowModal(false);
      } else {
        alert('Total file size exceeds the maximum limit of 5GB');
      }
    }
  };

  // Remove file
  const handleFileDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles.map((file) => file.src));

    // Revoke the object URL to free memory
    URL.revokeObjectURL(files[index].src);
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

  // Handle file input change when choosing files from the computer
  const handleFileInputChange = (files: FileList | null) => {
    handleFileUpload(files);
    setShowModal(false);
  };

  return (
    <div className="mt-11">
      <h3 className="font-semibold text-lg text-black-900 dark:text-white mb-3">
        Files
      </h3>
      <div
        className="upload-area border-2 border-dashed border-grayBlue-400 rounded-md p-8 flex flex-col items-center justify-center text-grayBlue-400 cursor-pointer gap-3"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleAreaClick}
      >
        <FileIcon width="60px" height="60px" />
        <p className="text-center font-normal text-xsm text-grayBlue-400">
          Drop your files here, or click to browseUnlimited files. Up to 5 GB.
        </p>
        <InputCustom
          type="file"
          accept=".pdf,.doc,.docx,.fdf,.txt"
          multiple
          onChange={(e) => handleFileUpload(e.target.files)}
          ref={fileInputRef}
          className="hidden"
        />
      </div>

      {/* File links with delete button */}
      <div className="file-previews mt-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between mt-2">
            <a
              href={file.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {file.name}
            </a>
            <ButtonCustom
              type="button"
              onClick={() => handleFileDelete(index)}
              className="ml-2 bg-red-500 text-white rounded-md px-2 py-1"
              aria-label="Delete file"
            >
              Delete
            </ButtonCustom>
          </div>
        ))}
      </div>

      {/* Note below the uploader */}
      <p className="font-normal text-xsm text-grayBlue-400 mt-3">
        Upload an unlimited number of files to your product. Your customers will
        be given access to them after purchase.
      </p>

      {/* Modal for URL input */}
      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white p-4 rounded-md shadow-md">
            <h4 className="text-lg font-medium mb-2">Add File</h4>
            <div className="flex flex-col mb-2">
              <ButtonCustom
                type="button"
                color="primary"
                radius="sm"
                onClick={handleFileInputClick}
                className="rounded-md px-4 py-2 mb-2"
              >
                Choose File from Computer
              </ButtonCustom>
              <InputCustom
                type="file"
                accept=".pdf,.doc,.docx,.fdf,.txt"
                multiple
                onChange={(e) => handleFileInputChange(e.target.files)}
                ref={fileInputRef}
                className="hidden"
              />
              <InputCustom
                type="text"
                placeholder="Enter file URL"
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

export default File;
