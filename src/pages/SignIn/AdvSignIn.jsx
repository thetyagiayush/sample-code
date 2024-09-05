import { useEffect, useState } from 'react';
import advLogo from '../../assets/advLogoTransparent.png';
import Header from '../../components/common/Header';
import SignInFormAdv from '../../components/Advertiser/SignInFormAdv';

function AdvSignin() {
  const [viewBox, setViewBox] = useState('0 0 1440 346');
  const [heightVal, setHeightVal] = useState(346);
  const [errorOccured, setErrorOccured] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setViewBox('0 0 1440 206');
        setHeightVal(206);
      } else if (window.innerWidth < 1000) {
        setViewBox('0 0 1440 306');
        setHeightVal(306);
      } else {
        setViewBox('0 0 1440 346');
        setHeightVal(346);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="flex flex-col h-[100vh]">
      <div className="mx-[2rem] xl:mx-[10rem] my-[2rem] lg:my-[3rem]">
        <Header />
      </div>
      <div className="flex flex-row items-center justify-center !h-full relative">
        <div className="w-full pb-[10%] flex flex-col items-center justify-center h-full z-[100] px-[5%] sm:px-[20%] md:px-[5%] lg:px-[10%] xl:px-[15%] 2xl:px-[20%]">
          <SignInFormAdv
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
        <div className="hidden sm:flex absolute bottom-0 left-0 z-0">
          <svg width="1440" height={heightVal} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2 0L79.3234 66.8745C240.367 199.305 438.778 278.086 646.802 292.196L1440 346H-2V0Z" fill="#7A66FB" />
          </svg>
        </div>
        <div className="hidden sm:flex absolute bottom-0 right-0 z-0">
          <svg width="1440" height={heightVal} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1461 0L1374.28 70.3884C1213.85 200.593 1017.04 277.91 810.888 291.712L0.00012207 346H1461V0Z" fill="#D36AC6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AdvSignin;