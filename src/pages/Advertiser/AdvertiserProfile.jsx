import { useEffect, useRef, useState } from "react";
import Profile from "../../components/Profile/Profile";
import formatPhoneNumber from "../../hooks/formatPhoneNumber";

function AdvertiserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const formattedPhoneNumber = formatPhoneNumber(phone);
    setPhone(formattedPhoneNumber);
  }, [phone]);

  return (
    <div className="mt-[3rem] border border-slate-300 rounded-xl p-[1.5rem]">
      <div className="w-full sm:flex items-center justify-between space-y-4 sm:space-y-0">
        <div className="md:flex gap-4 items-center">
          <div className="text-lg myfont-bold">
            Profile
          </div>
        </div>
      </div>
      <Profile 
        usedFor="advertiser"
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        password={password}
        setPassword={setPassword}
        fileInputRef={fileInputRef}
        handleFileClick={handleFileClick}
      />
    </div>
  );
}

export default AdvertiserProfile;