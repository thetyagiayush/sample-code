import { useNavigate } from 'react-router-dom';
import { MdErrorOutline, MdOutlineAlternateEmail } from 'react-icons/md';
import { GoLock } from 'react-icons/go';
import InputBar from '../common/InputBar';
import GradientButton from '../common/GradientButton';
import Alert from '../common/Alert';

function SignInForm({
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
    <div className="w-full pb-[45%] md:pb-[8%] flex flex-col items-center justify-center h-full px-[5%] sm:px-[20%] md:px-[5%] lg:px-[10%] xl:px-[15%] 2xl:px-[20%]">
      <div className="hidden md:flex">
        <img src={advLogo} onClick={() => navigate('/')} alt="advLogo" className="w-[200px] cursor-pointer " />
      </div>
      <div className="myfont-bold mt-[3rem] text-2xl">
        Sign In to your Account
      </div>
      <div className="text-slate-600 text-xs mt-[1rem]">
        Dont't have an account?
        {' '}
        <span onClick={() => navigate('/host-signup')} className="!text-indigo-500 cursor-pointer myfont-bold">
          Sign Up
        </span>
      </div>
      {errorOccured && (
        <Alert type="error" message={errorOccured} />
      )}
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          isErrored={emailError}
          placeholder="Enter your email"
          icon={<MdOutlineAlternateEmail className="text-slate-600" />}
        />
      </div>
      <div className="w-full mt-[1rem]">
        <InputBar
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
          isErrored={passwordError}
          placeholder="Enter your password"
          icon={<GoLock className="text-slate-600" />}
          rightSideLabel="Forgot Password?"
        />
      </div>
      <div className="w-full mt-[4rem]">
        <GradientButton text="Sign In" additionalCss="w-full !py-2" onClick={() => {
          setClicked(true);
          if (validate()) {
            navigate('/host/home');
          }
        }} />
      </div>
      <div className="w-full mt-[3rem] flex flex-col md:flex-row items-center justify-between">
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

export default SignInForm;