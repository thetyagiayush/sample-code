import { useNavigate } from "react-router-dom";
import GradientButton from "../common/GradientButton";
import InputBar from "../common/InputBar";
import UploadAdvFile from "../Signin/UploadAdvFile";
import { useState } from "react";

function Profile({ name, setName, email, setEmail, phone,
  setPhone, password, setPassword, fileInputRef, handleFileClick,
  usedFor,
}) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  return (
    <div className="md:flex w-full mt-[3rem]">
      <div className={`md:w-[35%] flex md:flex-col items-start px-[4%] md:px-[10%] md:space-y-5 gap-[2rem] md:gap-0 mb-[1.5rem] md:mb-0 justify-center md:justify-start ${usedFor === 'admin' ? 'lg:px-[13%]' : 'lg:px-[20%]'}`}>
        {usedFor === 'admin' ? (
          <div onClick={() => navigate(`/${usedFor}/home`)} className="cursor-pointer text-slate-500 text-sm hover:text-black">
            My Profile
          </div>
        ) : (
          <div className="cursor-pointer text-[#7A66FB] myfont-bold text-sm">
            Account
          </div>
        )}
        {usedFor === 'admin' ? (
          <div className="cursor-pointer text-[#7A66FB] myfont-bold text-sm">
            Edit Profile
          </div>
        ) : (
          <div onClick={() => navigate(`/${usedFor}/payment`)} className="cursor-pointer text-slate-500 text-sm hover:text-black">
            Payment
          </div>
        )}
      </div>
      <div className="md:w-[75%] px-[5%] md:px-0 md:pr-[10%] lg:pr-[20%]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <div className="cursor-pointer min-w-[72px]">
            <img src="https://s3-alpha-sig.figma.com/img/fec6/3c68/40b708f7affc1e615cb35f8314717735?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhkllyTkeOF9~NYRuhL9yXGoNTBvLIq4Hx2tUq2GR3EOQTdMaiVgy9EyjSbwIgCtP-Nrm1m5QViFYY2FOehOS-d5rPx2V0Z3pzQsurOtgEc8rLOzD9vL1NyvUuih2zo5tf-HcjxigQTsJB3unA8ebR3gf-yfrHt9Z-h2Vt6X7VRm31YNXofvb2ZQ0W31Eg0GlAD5Fh-dreMe0mA6ZgkjviAL6wHblXoH4gCJbedZ3aP--REm~HFeBMD1USZRx7~9YooAPpkZAE53pyd4jBEOSZXnCCf0PT6Im3nnV11y3wXHCa1~a3isXUQInf3wtnzd4ao7MRESzKO~FtgzfvYcBA__" alt="profile" className="w-[72px] h-[72px] rounded-full" />
          </div>
          <div className="flex items-center gap-2 mt-[1rem] md:mt-0">
            <div>
              <div onClick={handleFileClick} className="min-w-[50px] p-2 truncate border border-[#7A66FB] rounded-full text-[#7A66FB] text-xs cursor-pointer hover:bg-[#7A66FB] hover:text-white">
                Upload new picture
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => console.log(e.target.files)}
              />
            </div>
            <div>
              <div className="p-2 px-4 border border-red-500 rounded-full bg-red-50 text-red-500 text-xs cursor-pointer hover:bg-red-500 hover:text-white">
                Delete
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <InputBar
            label="Name"
            type="text"
            placeholder="Soap"
            usedFor="profile"
            value={name}
            setValue={setName}
          />
        </div>
        <div className="mt-[1rem]">
          <InputBar
            label="Email Address"
            type="email"
            placeholder="myemail@email.com"
            usedFor="profile"
            value={email}
            setValue={setEmail}
          />
        </div>
        <div className="mt-[1rem]">
          <InputBar
            label="Phone Number"
            type="text"
            placeholder="+1"
            usedFor="profile"
            value={phone}
            setValue={setPhone}
          />
        </div>
        <div className="mt-[1rem]">
          <InputBar
            label="Password"
            type="password"
            placeholder=""
            usedFor="profile"
            value={password}
            setValue={setPassword}
          />
        </div>
        {usedFor !== 'admin' && (
          <div className="mt-[1rem]">
            {file && (
              <div className="h-[200px] overflow-auto">
                <img src={URL.createObjectURL(file)} alt="interior" className="w-[100%] object-cover rounded-lg" />
              </div>
            )}
            {file && (
              <div className="w-full items-center flex justify-center my-[1rem] ">
                <div onClick={() => setFile(null)} className="w-fit px-2 py-1 rounded-full border-red-500 text-red-500 cursor-pointer">
                  Remove Image
                </div>
              </div>
            )}
            <div>
              <UploadAdvFile
                label="Upload Interior"
                setUploadedFile={setFile}
                supportedFiles="Supported files: JPG, PNG, SVG | Max Size: 50 MB"
              />
            </div>
          </div>
        )}
        <div className="mt-[2rem] flex w-full items-center justify-end">
          <GradientButton
            text="Save Profile"
            additionalCss="!text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;