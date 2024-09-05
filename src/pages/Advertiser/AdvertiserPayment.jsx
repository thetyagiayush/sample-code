import { useEffect, useState } from "react";
import Payments from "../../components/Payments/Payments";

function AdvertiserPayment() {
  const [showModal, setShowModal] = useState(false);
  const [swiftCode, setSwiftCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    if (showModal) {
      setSwiftCode('');
      setBankName('');
      setFirstName('');
      setLastName('');
      setAccountNumber('');
      setExpiry('');
      setCvc('');
    }
  }, [showModal]);

  return (
    <>
      <Payments
        usedFor="advertiser"
        tempData={tempData}
        setTempData={setTempData}
        bankName={bankName}
        setBankName={setBankName}
        swiftCode={swiftCode}
        setSwiftCode={setSwiftCode}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        accountNumber={accountNumber}
        setAccountNumber={setAccountNumber}
        expiry={expiry}
        setExpiry={setExpiry}
        cvc={cvc}
        setCvc={setCvc}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default AdvertiserPayment;