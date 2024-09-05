import { useEffect, useState } from 'react';
import advLogo from '../../assets/advLogoTransparent.png';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import './SignUp.css';
import LeftPortionAdv from '../../components/Signin/LeftPortionAdv';
import formatPhoneNumber from '../../hooks/formatPhoneNumber';
import SignUpFormAdv from '../../components/Advertiser/SignUpFormAdv';
import BusinessInfoFormAdv from '../../components/Advertiser/BusinessInfoFormAdv';
import HostSelectionForm from '../../components/Advertiser/HostSelectionForm';
import PaymentFormAdv from '../../components/Advertiser/PaymentFormAdv';
import StepIndicator from '../../components/common/StepIndicator';

function AdvSignUp() {
  const { id, type } = useParams();
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
  const [dropdownValue, setDropdownValue] = useState([]);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [contactNameError, setContactNameError] = useState(false);
  const [contactNumberError, setContactNumberError] = useState(false);
  const [companyLocationError, setCompanyLocationError] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (email !== '') {
      validateForm();
    }
  }, [email, password, confirmPassword, companyName, contactName, contactNumber, companyLocation, currPage]);

  const SampleHostsData = [
    { name: "The New York Times Website", value: "The New York Times Website" },
    { name: "LinkedIn", value: "LinkedIn" },
    { name: "Facebook", value: "Facebook" },
    { name: "Instagram Reels", value: "Instagram Reels" },
  ];

  useEffect(() => {
    const formattedPhoneNumber = formatPhoneNumber(contactNumber);
    setContactNumber(formattedPhoneNumber);
  }, [contactNumber]);

  useEffect(() => {
    if (toAdd === 'remove') {
      setToAdd('');
      setCurrPage((prevState) => prevState - 1);
      const newArr = [...activeArr];
      newArr.pop();
      setActiveArr(newArr);
    } else if (toAdd !== '') {
      setActiveArr([...activeArr, toAdd]);
    };
  }, [toAdd]);

  const handleClickNext = (val) => {
    if (val === 2) {
      if (validateForm()) {
        setToAdd('1');
        setCurrPage(2);
        setCorrectData(false);
        setErrorOccured('');
      }
    } else if (val === 3) {
      if (validateForm()) {
        setToAdd('2');
        setCurrPage(3);
        setCorrectData(false);
        setErrorOccured('');
      }
    } else if (val === 4) {
      if (validateForm()) {
        setToAdd('3');
        setCurrPage(4);
        setCorrectData(false);
        setErrorOccured('');
      }
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
      <div className="hidden md:flex md:flex-col relative !w-[594px] lg:max-w-[594px]">
        <LeftPortionAdv id={id} type={type} currPage={currPage} />
      </div>
      <div className="w-full items-center justify-center h-full pt-[3rem] px-[5%] sm:px-[20%] md:px-[5%] lg:px-[5%] xl:px-[12%] 2xl:px-[15%] overflow-y-scroll">
        <div onClick={() => naviate('/')} className="w-full flex items-center justify-center cursor-pointer">
          <img src={advLogo} alt="advLogo" className="w-[200px]" />
        </div>
        <div className="flex flex-row items-center gap-2 mt-[2rem] relative w-full justify-center">
          {activeArr.includes('1') && (
            <div className="!absolute flex flex-col items-center space-y-2 relative w-[5rem] pr-[10rem]  left-[-10px] top-0">
              <div onClick={() => setToAdd('remove')} className="hover:bg-slate-100 rounded-full cursor-pointer p-2">
                <IoArrowBackOutline size={22} />
              </div>
            </div>
          )}
          <StepIndicator
            step="1"
            isActive
            onClick={() => setCurrPage(1)}
            label="Sign Up"
            isCompleted={activeArr.includes('1')}
          />
          <span className={activeArr.includes('1') ? 'scale-in-hor-left h-[1px] w-[50px] bg-gradient-to-r to-pink-400 from-indigo-500' : ' scale-in-hor-right h-[1px] w-[50px]'} />
          <StepIndicator
            step="2"
            isActive={activeArr.includes('1')}
            onClick={() => setCurrPage(2)}
            label="Business Information"
            isCompleted={activeArr.includes('2')}
          />
          <span className={activeArr.includes('2') ? 'scale-in-hor-left h-[1px] w-[50px] bg-gradient-to-r to-pink-400 from-indigo-500' : ' scale-in-hor-right h-[1px] w-[50px]'} />
          <StepIndicator
            step="3"
            isActive={activeArr.includes('2')}
            onClick={() => setCurrPage(3)}
            label="Business Information"
            isCompleted={activeArr.includes('3')}
          />
          <span className={activeArr.includes('3') ? 'scale-in-hor-left h-[1px] w-[50px] bg-gradient-to-r to-pink-400 from-indigo-500' : ' scale-in-hor-right h-[1px] w-[50px]'} />
          <StepIndicator
            step="4"
            isActive={activeArr.includes('3')}
            onClick={() => setCurrPage(4)}
            label="Business Information"
            isCompleted={activeArr.includes('4')}
          />
        </div>
        <div className="w-full" key={activeArr.includes('1') ? 'form1' : 'form2'}>
          {currPage === 1 ? (
            <SignUpFormAdv
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
              handleClickNext={() => handleClickNext(2)}
            />
          ) : (
            currPage === 2 ? (
              <BusinessInfoFormAdv
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
                handleClick={() => handleClickNext(3)}
              />
            ) : (
              currPage === 3 ? (
                <HostSelectionForm
                  companyName={companyName}
                  setCompanyName={setCompanyName}
                  dropdownValue={dropdownValue}
                  setDropdownValue={setDropdownValue}
                  SampleHostsData={SampleHostsData}
                  handleClickNext={() => handleClickNext(4)}
                />
              ) : (
                <PaymentFormAdv
                  file={file}
                  setFile={setFile}
                  handleClickNext={() => naviate('/advertiser/profile')}
                />
              )
            )
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

export default AdvSignUp;