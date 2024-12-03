'use client';

// Third party
import { useRef, useState } from 'react';

// Constants
import { MESSAGE } from '@/constants';

// Components
import { ButtonCustom, InputCustom } from '@/components';
import { FileIcon } from '@/icons';
import clsx from 'clsx';

interface FileUploaderProps {
  onFilesChange: (files: string[]) => void;
  mode: 'add' | 'edit' | 'detail';
  data?: { link: string[] };
}

const MAX_TOTAL_SIZE = 5 * 1024 * 1024 * 1024; // 5GB

const File = ({ onFilesChange, mode, data }: FileUploaderProps) => {
  const [files, setFiles] = useState<
    { src: string; name: string; size: number }[]
  >(
    data?.link?.map((link) => ({
      src: link,
      name: 'Uploaded file',
      size: 0,
    })) || [],
  );

  const [url, setUrl] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateFiles = (
    newFiles: { src: string; name: string; size: number }[],
  ) => {
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFilesChange(updatedFiles.map((file) => file.src));
  };

  const handleFileUpload = (fileList: FileList | null) => {
    if (!fileList) return;

    let totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const validFiles = Array.from(fileList).filter((file) => {
      if (totalSize + file.size <= MAX_TOTAL_SIZE) {
        totalSize += file.size;
        return true;
      }
      setErrorMessage(MESSAGE.FILE_OVERLOAD);
      return false;
    });

    const newFiles = validFiles.map((file) => ({
      src: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
    }));
    updateFiles(newFiles);
    setShowModal(false);
  };

  const handleUrlSubmit = () => {
    if (url) {
      updateFiles([{ src: url, name: 'Uploaded from URL', size: 0 }]);
      setUrl('');
      setShowModal(false);
    }
  };

  const handleFileDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles.map((file) => file.src));
    URL.revokeObjectURL(files[index].src); // Clean up object URL
    setErrorMessage(null);
    setShowModal(false);
  };

  return (
    <div className="mt-11">
      <label className="text-lg text-black-900 dark:text-white" htmlFor="Files">
        Files
      </label>

      {mode !== 'detail' && (
        <div
          className="upload-area border-2 border-dashed border-grayBlue-400 rounded-md p-8 flex flex-col items-center justify-center text-ratio-200 dark:text-grayBlue-400 cursor-pointer gap-3 mt-3"
          onDrop={(e) => {
            e.preventDefault();
            handleFileUpload(e.dataTransfer.files);
          }}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => setShowModal(true)}
        >
          <FileIcon width="60px" height="60px" />
          <p className="text-center font-normal text-xsm text-ratio-200 dark:text-grayBlue-400">
            Drop your files here, or click to browse. Unlimited files, up to
            5GB.
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
      )}

      <div className="file-previews mt-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between mt-2">
            <a
              href={file.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-ratio-1000"
            >
              {file.name}
            </a>
            {mode !== 'detail' && (
              <ButtonCustom
                type="button"
                onClick={() => handleFileDelete(index)}
                className="ml-2 bg-red-500 text-white rounded-md px-2 py-1"
                aria-label="Delete file"
              >
                Delete
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
          'Upload an unlimited number of files to your product. Your customers will be given access to them after purchase.'}
      </p>

      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white p-4 rounded-md shadow-md">
            <h4 className="text-lg font-medium mb-2">Add File</h4>
            <div className="flex flex-col mb-2">
              <ButtonCustom
                type="button"
                color="primary"
                radius="sm"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-md px-4 py-2 mb-2"
              >
                Choose File from Computer
              </ButtonCustom>
              <InputCustom
                type="file"
                accept=".pdf,.doc,.docx,.fdf,.txt"
                multiple
                onChange={(e) => handleFileUpload(e.target.files)}
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
            <div className="flex justify-end gap-3 mt-2">
              <ButtonCustom
                type="button"
                color="primary"
                onClick={handleUrlSubmit}
                className={clsx('rounded-md px-4 py-2', {
                  'cursor-not-allowed opacity-50': !url.trim(),
                })}
                disabled={!url.trim()}
              >
                Add
              </ButtonCustom>
              <ButtonCustom
                type="button"
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
