import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";
import GradientButton from "../common/GradientButton";
import { GoSearch } from "react-icons/go";
import InputBar from "../common/InputBar";
import { LuPhone, LuUser } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import OtpInput from "./OtpInput";

function BusinessInfoForm({
  companyName, setCompanyName, companyNameError,
  contactName, setContactName, contactNameError,
  contactNumber, setContactNumber, contactNumberError,
  verifyClicked, setVerifyClicked, companyLocation,
  setCompanyLocation, companyLocationError, errorOccured,
  correctData,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-[3rem]">
      {errorOccured && (
        <Alert type="error" message={errorOccured} />
      )}

      {correctData && (
        <Alert type="success" message="Data entered correctly. Please proceed to the next step." />
      )}
      <div className="w-full mt-2">
        <InputBar
          label="Company Name"
          type="text"
          value={companyName}
          setValue={setCompanyName}
          isErrored={companyNameError}
          placeholder="Enter your company name"
          icon={<MdOutlineWorkOutline />}
        />
      </div>
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Contact Name"
          type="text"
          value={contactName}
          setValue={setContactName}
          isErrored={contactNameError}
          placeholder="Enter your name"
          icon={<LuUser />}
        />
      </div>
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Contact Number"
          type="text"
          value={contactNumber}
          setValue={setContactNumber}
          placeholder="Enter your number"
          isErrored={contactNumberError}
          icon={<LuPhone className="text-slate-600" />}
          setOnClickSideIcon={setVerifyClicked}
        />
      </div>
      {verifyClicked && (
        <div className="w-full mt-[1rem] ">
          <div className="text-slate-700 myfont-bold text-sm">
            Enter your verification code
          </div>
          <div className="text-xs text-slate-500 mt-[0.5rem]">
            We've sent the verification code to your phone number +1 ** ****
            {' '}
            {contactNumber.slice(-4)}
          </div>
          <div className="text-xs text-indigo-500 mt-[0.5rem] underline">
            Resend Code
          </div>
          <div className="mt-[0.5rem] flex items-center justify-start">
            <OtpInput />
          </div>
        </div>
      )}
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Company Location"
          type="text"
          value={companyLocation}
          setValue={setCompanyLocation}
          isErrored={companyLocationError}
          placeholder="Search a location"
          icon={<GoSearch className="text-slate-600" />}
        />
      </div>
      <div className="w-full mt-[4rem]">
        <GradientButton text="Sign Up" additionalCss="w-full !py-2" onClick={() => navigate('/host/home')} />
      </div>
    </div>
  );
}

export default BusinessInfoForm;