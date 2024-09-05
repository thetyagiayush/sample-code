import { IoIosClose } from "react-icons/io";

function SimpleModal({ showModal, children, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -translate-y-[10%]"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div onClick={(e) => e.stopPropagation()} className="border-0 rounded-xl shadow-lg relative p-[2rem] flex flex-col w-full bg-white outline-none focus:outline-none">
                {children}
              </div>
              <div onClick={() => setShowModal(false)} className="absolute top-[5%] right-[5%] cursor-pointer border rounded-full p-2 shadow">
                <IoIosClose size={22} />
              </div>
            </div>
          </div>
          <div onClick={() => setShowModal(false)} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default SimpleModal;