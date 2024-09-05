import { useEffect, useState } from 'react';
import advLogo from '../../assets/advLogoTransparent.png';
import LeftPortion from '../../components/Signin/LeftPortion';
import Header from '../../components/common/Header';
import SignInForm from '../../components/Host/SignInForm';

function HostSignin() {
  const [errorOccured, setErrorOccured] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);

  const validate = () => {
    let hasError = false;

    if (!email) {
      setEmailError(true);
      setErrorOccured('Email is required');
      hasError = true;
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      setErrorOccured('Invalid Email');
      hasError = true;
      return false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      setErrorOccured('Password is required');
      hasError = true;
      return false;
    } else {
      setPasswordError(false);
    }

    if (!hasError) {
      setErrorOccured('');
    }

    return !hasError;
  };

  useEffect(() => {
    if (clicked) {
      validate();
    }
  }, [email, password, clicked]);

  return (
    <div className="flex flex-col !h-[100vh]">
      <div className="mx-[2rem] xl:mx-[10rem] my-[2rem] lg:my-[3rem]">
        <Header />
      </div>
      <div className="flex flex-row items-center justify-center !h-full">
        <div className="hidden h-full md:flex md:flex-col relative max-w-[400px] lg:max-w-[500px]">
          <LeftPortion />
        </div>
        <SignInForm
          advLogo={advLogo}
          errorOccured={errorOccured}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          validate={validate}
          setClicked={setClicked}
        />
      </div>
    </div>
  );
}

export default HostSignin;