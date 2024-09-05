import { MdErrorOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InputBar from "../common/InputBar";
import { GoLock } from "react-icons/go";
import GradientButton from "../common/GradientButton";

function SignInFormAdv({
  advLogo,
  errorOccured,
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  validate,
  setClicked
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center jusitfy-center max-w-[500px]">
      <div>
        <img src={advLogo} onClick={() => navigate('/')} alt="advLogo" className="w-[200px] cursor-pointer" />
      </div>
      <div className="myfont-bold mt-[3rem] text-2xl">
        Sign In to your Account
      </div>
      <div className="text-slate-600 text-xs mt-[1rem]">
        Dont't have an account?
        {' '}
        <span onClick={() => navigate('/adv-signup/m/1')} className="!text-indigo-500 cursor-pointer myfont-bold">
          Sign Up
        </span>
      </div>
      {errorOccured !== '' && (
        <div className="w-full mt-[1rem]">
          <div className="w-full bg-red-100 p-2 rounded-lg text-red-500 text-sm flex items-center">
            <MdErrorOutline className="mr-1" />
            {' '}
            {errorOccured}
          </div>
        </div>
      )}
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Email"
          type="email"
          placeholder="Enter your email"
          isErrored={emailError}
          value={email}
          setValue={setEmail}
          icon={<MdOutlineAlternateEmail className="text-slate-600" />}
        />
      </div>
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Password"
          type="password"
          isErrored={passwordError}
          value={password}
          setValue={setPassword}
          placeholder="Enter your password"
          icon={<GoLock className="text-slate-600" />}
          rightSideLabel="Forgot Password?"
        />
      </div>
      <div className="w-full mt-[4rem] z-[100]">
        <GradientButton text="Sign In" additionalCss="w-full !py-2" onClick={() => {
          setClicked(true);
          if (validate()) {
            navigate('/advertiser/profile');
          }
        }} />
      </div>
      <div className="w-full mt-[3rem] flex flex-col md:flex-row items-center justify-between z-[100]">
        <div className="text-xs text-slate-600">
          &copy; 2024 @Advertiser | All Rights Reserved
        </div>
        <div>
          <span className="underline text-xs text-indigo-500 cursor-pointer">
            Terms of Use
          </span>
          {' '}
          <span className="text-xs text-slate-500">
            and
          </span>
          {' '}
          <span className="underline text-xs text-indigo-500 cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignInFormAdv;