import { MdErrorOutline, MdOutlineCheckCircleOutline } from "react-icons/md";

const Alert = ({ type, message }) => (
    <div className={`w-full mt-4 bg-${type === 'error' ? 'red' : 'green'}-100 p-2 rounded-lg text-${type === 'error' ? 'red' : 'green'}-500 text-sm flex items-center`}>
      {type === 'error' ? <MdErrorOutline className="mr-1" /> : <MdOutlineCheckCircleOutline className="mr-1" />}
      {message}
    </div>
);

export default Alert;
  