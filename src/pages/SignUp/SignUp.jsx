import { useEffect, useState } from 'react';
import advLogo from '../../assets/advLogoTransparent.png';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import LeftPortion from '../../components/Signin/LeftPortion';
import './SignUp.css';
import formatPhoneNumber from '../../hooks/formatPhoneNumber';
import StepIndicator from '../../components/common/StepIndicator';
import SignUpForm from '../../components/Host/SignUpForm';
import BusinessInfoForm from '../../components/Host/BusinessInfoForm';

function SignUp() {
  const naviate = useNavigate();
  const [currPage, setCurrPage] = useState(1);
  const [toAdd, setToAdd] = useState('');
  const [activeArr, setActiveArr] = useState([]);
  const [contactNumber, setContactNumber] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [verifyClicked, setVerifyClicked] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorOccured, setErrorOccured] = useState('');
  const [correctData, setCorrectData] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [contactNameError, setContactNameError] = useState(false);
  const [contactNumberError, setContactNumberError] = useState(false);
  const [companyLocationError, setCompanyLocationError] = useState(false);

  useEffect(() => {
    if (email !== '') {
      validateForm();
    }
  }, [email, password, confirmPassword, companyName, contactName, contactNumber, companyLocation]);

  useEffect(() => {
    const formattedPhoneNumber = formatPhoneNumber(contactNumber);
    setContactNumber(formattedPhoneNumber);
  }, [contactNumber]);

  useEffect(() => {
    if (toAdd === '2') {
      setCurrPage(1);
      setActiveArr([]);
    } else if (toAdd !== '') {
      setActiveArr([toAdd]);
    };
  }, [toAdd]);

  const handleClickNext = () => {
    if (validateForm()) {
      setToAdd('1');
      setCurrPage(2);
      setCorrectData(false);
      setErrorOccured('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let hasError = false;

    const setFieldError = (condition, setErrorFunc, errorMessage) => {
      if (condition) {
        setErrorFunc(true);
        setCorrectData(false);
        setErrorOccured(errorMessage);
        hasError = true;
      } else {
        setErrorFunc(false);
      }
    };

    if (currPage === 1) {
      setFieldError(!email || !password || !confirmPassword, setEmailError, 'Please fill all the fields.');
      setFieldError(!validateEmail(email), setEmailError, 'Please enter a valid email address.');
      setFieldError(password !== confirmPassword, setConfirmPassError, `Passwords don't match, please check again`);
    } else {
      setFieldError(!companyName, setCompanyNameError, 'Please fill all the fields.');
      setFieldError(!contactName, setContactNameError, 'Please fill all the fields.');
      setFieldError(!contactNumber, setContactNumberError, 'Please fill all the fields.');
      setFieldError(!companyLocation, setCompanyLocationError, 'Please fill all the fields.');
    }

    if (!hasError) {
      setErrorOccured('');
      setCorrectData(true);
    }

    return !hasError;
  };

  return (
    <div className="flex flex-row items-center justify-center h-[100vh]">
      <div className="hidden md:flex md:flex-col relative max-w-[400px] lg:max-w-[500px] h-full">
        <LeftPortion />
      </div>
      <div className="w-full items-center justify-center h-full pt-[3rem] px-[5%] sm:px-[20%] md:px-[5%] lg:px-[10%] xl:px-[15%] 2xl:px-[20%] overflow-y-scroll">
        <div className="w-full flex items-center justify-center">
          <img src={advLogo} onClick={() => naviate('/')} alt="advLogo" className="w-[200px] cursor-pointer" />
        </div>
        <div className="flex flex-row items-center gap-2 mt-[2rem] relative w-full justify-center">
          {activeArr.includes('1') && (
            <div className="!absolute flex flex-col items-center space-y-2 relative w-[5rem] pr-[10rem]  left-4 top-0">
              <div onClick={() => setToAdd('2')} className="hover:bg-slate-100 rounded-full cursor-pointer p-2">
                <IoArrowBackOutline size={22} />
              </div>
            </div>
          )}
          <StepIndicator
            onClick={() => setCurrPage(1)}
            label="Sign Up"
            step="1"
            isCompleted={activeArr.includes('1')}
            isActive
          />
          <span className={activeArr.includes('1') ? 'scale-in-hor-left h-[1px] w-[50px] bg-gradient-to-r from-pink-400 to-indigo-500' : ' scale-in-hor-right h-[1px] w-[50px]'} />
          <StepIndicator
            onClick={() => activeArr.includes('1') ? setCurrPage(2) : null}
            label="Business Information"
            step="2"
            isCompleted={(activeArr.length === 1 && activeArr.includes('2'))}
            isActive={activeArr.includes('1')}
          />
        </div>
        <div className="w-full" key={activeArr.includes('1') ? 'form1' : 'form2'}>
          {currPage === 1 ? (
            <SignUpForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              emailError={emailError}
              confirmPassError={confirmPassError}
              correctData={correctData}
              errorOccured={errorOccured}
              handleClickNext={handleClickNext}
            />
          ) : (
            <BusinessInfoForm
              companyName={companyName}
              setCompanyName={setCompanyName}
              contactName={contactName}
              setContactName={setContactName}
              contactNumber={contactNumber}
              setContactNumber={setContactNumber}
              companyLocation={companyLocation}
              setCompanyLocation={setCompanyLocation}
              companyNameError={companyNameError}
              contactNameError={contactNameError}
              contactNumberError={contactNumberError}
              companyLocationError={companyLocationError}
              correctData={correctData}
              errorOccured={errorOccured}
              verifyClicked={verifyClicked}
              setVerifyClicked={setVerifyClicked}
            />
          )}
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
    </div>
  );
}

export default SignUp;