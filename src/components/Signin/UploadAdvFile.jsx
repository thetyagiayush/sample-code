import { useRef } from "react";
import { MdUploadFile } from "react-icons/md";

const UploadAdvFile = ({ label, supportedFiles, setUploadedFile, uploadedFile, showFileName }) => {
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="w-full">
      <div className="w-full text-sm text-slate-700 mt-[0.5rem]">
        {label}
      </div>
      <div className="mt-[0.5rem] border border-dashed border-slate-300 rounded-xl bg-[#7A66FB0D] flex flex-col items-center justify-center p-4 space-y-2">
        <div>
          <MdUploadFile size={30} />
        </div>
        {uploadedFile && showFileName && (
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm text-slate-600">
              {uploadedFile.name}
            </div>
            <div onClick={() => setUploadedFile(null)} className="text-xs text-red-600 cursor-pointer">
              Remove
            </div>
          </div>
        )}
        {!uploadedFile && (
          <>
            <div>
              <span
                onClick={handleFileClick}
                className="text-black text-sm myfont-bold underline cursor-pointer"
              >
                Choose file
              </span>
              {' '}
              <span className="text-sm text-slate-600">
                to upload
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-600">
                {supportedFiles}
              </span>
            </div>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => setUploadedFile(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default UploadAdvFile;