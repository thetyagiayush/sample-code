import { useNavigate } from "react-router-dom";
import { GoLock } from "react-icons/go";
import InputBar from "../common/InputBar";
import GradientButton from "../common/GradientButton";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Alert from "../common/Alert";

function SignUpFormAdv({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  emailError,
  confirmPassError,
  correctData,
  errorOccured,
  handleClickNext,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="myfont-bold mt-[4rem] text-2xl">
        Sign Up
      </div>
      <div className="text-slate-600 text-xs mt-[1rem]">
        Already have an account?
        {' '}
        <span onClick={() => navigate('/adv-signin')} className="!text-indigo-500 cursor-pointer myfont-bold">
          Sign In
        </span>
      </div>
      {errorOccured && (
        <Alert type="error" message={errorOccured} />
      )}

      {correctData && (
        <Alert type="success" message="Data entered correctly. Please proceed to the next step." />
      )}
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
          isErrored={emailError}
          icon={<MdOutlineAlternateEmail />}
        />
      </div>
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="Enter your password"
          icon={<GoLock />}
        />
      </div>
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Enter your password"
          icon={<GoLock />}
          isErrored={confirmPassError}
        />
      </div>
      <div className="w-full mt-[4rem]">
        <GradientButton text="Next" additionalCss="w-full !py-2" onClick={handleClickNext} />
      </div>
    </div>
  );
}

export default SignUpFormAdv;