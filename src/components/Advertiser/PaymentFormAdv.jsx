import GradientButton from "../common/GradientButton";
import PaymentForm from "../Signin/PaymentForm";
import UploadAdvFile from "../Signin/UploadAdvFile";

function PaymentFormAdv({
  handleClickNext,
  setFile,
  file,
}) {
  return (
    <div className="w-full mt-[4rem]">
      <div className="myfont-bold flex w-full items-center justify-center text-xl mb-[1rem]">
        Payment
      </div>
      <div className="mt-[1rem] md:hidden">
        <UploadAdvFile
          label="Upload Advertisement File (Optional)"
          showFileName
          setUploadedFile={setFile}
          uploadedFile={file}
          supportedFiles="Supported formats: Xls, PDF, Word, JPG, PNG, SVG | Max Size : 50 MB"
        />
      </div>
      <div className="mt-[1rem]">
        <PaymentForm />
      </div>
      <div className="w-full mt-[4rem]">
        <GradientButton text="Pay Now" additionalCss="w-full !py-2" onClick={handleClickNext} />
      </div>
    </div>
  );
}

export default PaymentFormAdv;