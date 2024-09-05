import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosAddCircleOutline, IoIosClose } from "react-icons/io";
import GradientButton from "../common/GradientButton";
import InputBar from "../common/InputBar";
import BankCard from "../Host/BankCard";
import SimpleModal from "../common/SimpleModal";

function Payments({ tempData, setTempData, bankName, setBankName,
  swiftCode, setSwiftCode, firstName, setFirstName, lastName, setLastName,
  accountNumber, setAccountNumber, expiry, setExpiry, cvc, setCvc, usedFor,
  showModal, setShowModal,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[3rem] border border-slate-300 rounded-xl p-[1.5rem] min-h-[80vh]">
        <div className="w-full sm:flex items-center justify-between space-y-4 sm:space-y-0">
          <div className="md:flex gap-4 items-center">
            <div className="text-lg myfont-bold">
              Profile
            </div>
          </div>
        </div>
        <div className="md:flex w-full mt-[3rem]">
          <div className="md:w-[35%] flex md:flex-col items-start px-[4%] md:px-[10%] md:space-y-5 gap-[2rem] md:gap-0 mb-[1.5rem] md:mb-0 justify-center md:justify-start lg:px-[20%]">
            <div onClick={() => navigate(`/${usedFor}/profile`)} className="cursor-pointer text-slate-500 text-sm hover:text-black">
              Account
            </div>
            <div className="cursor-pointer text-[#7A66FB] myfont-bold text-sm">
              Payment
            </div>
          </div>
          <div className="md:w-[75%] px-[5%] md:px-0 md:pr-[10%] lg:pr-[20%]">
            {tempData.map((data, index) => (
              <BankCard
                key={index}
                index={index}
                data={data}
                isDefault={index === 0}
                handleDelete={() => setTempData(tempData.filter((_, i) => i !== index))}
              />
            ))}
            <div className={`text-sm text-slate-500 ${tempData.length !== 0 && 'mt-[1.5rem]'}`}>
              {tempData.length === 0 ? 'Add Payment Method' : 'Add Another Payment Method'}
            </div>
            <div onClick={() => setShowModal(true)} className="mt-[1rem] gap-2 cursor-pointer border border-dashed border-slate-300 hover:bg-slate-50 rounded-xl p-[1.2rem] flex items-center justify-start">
              <div>
                <IoIosAddCircleOutline size={25} className="text-[#7A66FB]" />
              </div>
              <div className="text-sm text-[#7A66FB]">
                Bank Details
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimpleModal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <>
          <div className="w-full items-center justify-center flex myfont-bold text-lg ">
            Bank Details
          </div>
          <div className="w-full mt-[2rem] md:min-w-[500px] lg:min-w-[650px] max-w-[500px]">
            <div className="flex w-full items-center justify-between gap-5">
              <InputBar
                label="SWIFT Code"
                placeholder="Enter SWIFT Code"
                usedFor="profile"
                value={swiftCode}
                setValue={setSwiftCode}
              />
              <InputBar
                label="Bank Name"
                placeholder="Enter Bank Name"
                usedFor="profile"
                value={bankName}
                setValue={setBankName}
              />
            </div>
            <div className="flex w-full items-center justify-between gap-5 mt-[1.5rem]">
              <InputBar
                label="First Name"
                placeholder="Enter First Name"
                usedFor="profile"
                value={firstName}
                setValue={setFirstName}
              />
              <InputBar
                label="Last Name"
                placeholder="Enter Last Name"
                usedFor="profile"
                value={lastName}
                setValue={setLastName}
              />
            </div>
            <div className="flex w-full items-center justify-between gap-5 mt-[1.5rem]">
              <InputBar
                label="Account Number"
                placeholder="Enter Account Number"
                usedFor="profile"
                value={accountNumber}
                setValue={setAccountNumber}
              />
              <div className="flex items-center justify-between gap-5">
                <InputBar
                  label="Expiry"
                  placeholder="MM/YY"
                  usedFor="profile"
                  value={expiry}
                  setValue={setExpiry}
                />
                <InputBar
                  label="CVC"
                  placeholder="CVC"
                  usedFor="profile"
                  value={cvc}
                  setValue={setCvc}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-b mt-[2rem]">
            <GradientButton
              text="Add Bank Details"
              additionalCss="!text-sm !w-full !py-2 !bg-gradient-to-l"
              onClick={() => {
                setTempData([
                  ...tempData,
                  {
                    swiftCode,
                    bankName,
                    firstName,
                    lastName,
                    accountNumber,
                    expiry,
                    cvc,
                  },
                ]);
                setShowModal(false);
              }}
            />
          </div>
        </>
      </SimpleModal>
    </>
  );
}

export default Payments;