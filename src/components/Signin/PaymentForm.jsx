import { MdOutlineAlternateEmail, MdDateRange } from "react-icons/md";
import { GoNumber } from "react-icons/go";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import InputBar from "../common/InputBar";

const PaymentForm = () => {
  // Add your component logic here

  return (
    <div className="w-full rounded-xl border border-slate-300 p-4">
      <div className="w-full border-b pb-[0.3rem] border-slate-100 text-slate-700 myfont-bold">
        Enter Payment Details
      </div>
      <div className="mt-[1rem]">
        <InputBar
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          icon={<MdOutlineAlternateEmail />}
          additionalInputCss="!py-2"
        />
      </div>
      <div className="mt-[1rem]">
        <InputBar
          label="Card Information"
          type="text"
          placeholder="Enter Card Information"
          icon={<CiCreditCard1 />}
          additionalInputCss="!py-2"
        />
      </div>
      <div className="mt-[1rem] flex items-center justify-between gap-4">
        <InputBar
          label="Expiry Date"
          type="text"
          placeholder="Card Expiry Date"
          icon={<MdDateRange />}
          additionalInputCss="!py-2"
        />
        <InputBar
          label="CVV"
          type="text"
          placeholder="Card CVV"
          icon={<GoNumber />}
          additionalInputCss="!py-2"
        />
      </div>
      <div className="mt-[1rem]">
        <InputBar
          label="Card Holder Name"
          type="text"
          placeholder="Enter Card Holder Name"
          icon={<LuUser />}
          additionalInputCss="!py-2"
        />
      </div>
      <div className="flex items-center mt-[1rem]">
        <AiOutlineSafetyCertificate className="text-green-500 mr-2 " />
        <span className="text-slate-500 text-xs">
          All of your transactions are secure and fast
        </span>
      </div>
    </div>
  );
};

export default PaymentForm;