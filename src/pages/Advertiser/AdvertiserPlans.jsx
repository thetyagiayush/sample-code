import { useEffect, useState } from "react";
import PlanCard from "../../components/Advertiser/PlanCard";
import ColouredIconButton from "../../components/common/ColouredIconButton";
import { IoMdAdd } from "react-icons/io";
import SimpleModal from "../../components/common/SimpleModal";
import UploadAdvFile from "../../components/Signin/UploadAdvFile";
import GradientButton from "../../components/common/GradientButton";
import FileCard from "../../components/Advertiser/FileCard";
import PricingCard from "../../components/Home/PricingCard";

function AdvertiserPlans() {
  const [selected, setSelected] = useState('Current Plan');
  const [planSelect, setPlanSelect] = useState('Monthly');
  const [showAddFile, setShowAddFile] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [editingFile, setEditingFile] = useState(null);
  const [allFiles, setAllFiles] = useState([]);

  const features = [
    "60 days of Ad display",
    "Upto 10 hosts",
    "50,000 impressions",
  ];

  const dropDownOptions = [
    {
      name: 'Stop Plan',
      onClick: () => console.log('Upgrade'),
    },
    {
      name: 'Renew Plan',
      onClick: () => console.log('Downgrade'),
    },
    {
      name: 'Change Plan',
      onClick: () => console.log('Delete'),
    },
  ];

  const dropDownOptionsPrevious = [
    {
      name: 'Start Plan',
      onClick: () => console.log('Upgrade'),
    },
    {
      name: 'Renew Plan',
      onClick: () => console.log('Downgrade'),
    },
    {
      name: 'Change Plan',
      onClick: () => console.log('Delete'),
    },
  ];


  useEffect(() => {
    if (!showAddFile) {
      setUploadedFile(null);
    }
  }, [showAddFile]);

  useEffect(() => {
    if (editingFile) {
      setShowAddFile(true);
    }
  }, [editingFile]);

  useEffect(() => {
    if (uploadedFile && editingFile && editingFile.file) {
      setEditingFile({ file: null, index: editingFile.index });
    }
  }, [uploadedFile, editingFile]);

  const PricingCardContent = [
    { name: "Basic", locations: 120, price: 50, monthly: 50, weekly: 15, yearly: 500, features: ["30 days of Ad display", "Upto 5 hosts", "10,000 impressions"] },
    { name: "Standard", locations: 120, price: 100, monthly: 100, current: 'Monthly', weekly: 30, yearly: 1000, features: ["60 days of Ad display", "Upto 10 hosts", "50,000 impressions"] },
    { name: "Premium", locations: 120, price: 200, monthly: 200, weekly: 60, yearly: 2000, features: ["90 days of Ad display", "Unlimited hosts", "100,000 impressions"] },
    { name: "Enterprise", locations: 120, price: "Custom", features: ["All features in Premium Plan", "Dedicated account manager", "Priority customer support", "Exclusive Ad placements"] },
  ];

  return (
    <div className="mt-[3rem] border border-slate-300 rounded-xl p-[1.5rem] min-h-[80vh]">
      <div className="md:flex gap-4 items-center">
        <div className="text-lg myfont-bold">
          Plans
        </div>
      </div>
      <div className="w-full text-sm text-slate-500 mt-[1rem]">
        Manage your plans here
      </div>
      <div className="w-full flex flex-row items-center justify-center myfont-regular text-[1rem]">
        <div className="w-fit rounded-full border mt-[1rem] p-1 flex bg-slate-100 flex-row text-slate-600 items-center gap-2 text-xs">
          <div onClick={() => setSelected('Current Plan')} className={`p-2 cursor-pointer rounded-full ${selected === 'Current Plan' ? 'text-white bg-black' : 'hover:bg-slate-100'}`}>
            Current Plan
          </div>
          <div onClick={() => setSelected('New Plan')} className={`p-2 cursor-pointer rounded-full ${selected === 'New Plan' ? 'text-white bg-black' : 'hover:bg-slate-100'}`}>
            New Plan
          </div>
          <div onClick={() => setSelected('Previous Plan')} className={`p-2 cursor-pointer rounded-full ${selected === 'Previous Plan' ? 'text-white bg-black' : 'hover:bg-slate-100'}`}>
            Previous Plan
          </div>
        </div>
      </div>
      {selected === 'Current Plan' && (
        <div className="mt-[1.5rem] flex flex-col w-full items-center justify-center">
          <PlanCard
            name="Standard Plan"
            price="$100/mo"
            isActive
            features={features}
            dropDownOptions={dropDownOptions}
          />
          <div className="flex items-center w-full justify-between max-w-[450px] mt-[2rem]">
            <div className="flex flex-col items-start justify-center space-y-2">
              <div className="text-black">
                Your Advertisement Files
              </div>
              <div className="text-xs text-slate-500">
                Manage your advertisement files here
              </div>
            </div>
            <div>
              <ColouredIconButton
                text="New File"
                color="bg-[#7A66FB]"
                icon={<IoMdAdd className="text-slate-500" size={12} />}
                handleClick={() => setShowAddFile(true)}
              />
            </div>
          </div>
          {allFiles.length !== 0 && (
            <div className="w-full max-w-[450px] mt-[1.5rem] flex flex-col items-center justify-center">
              {allFiles.map((file, index) => (
                <FileCard
                  key={index}
                  data={file}
                  handleDelete={() => setAllFiles((prevState) => prevState.filter((_, i) => i !== index))}
                  handleEdit={() => setEditingFile({ file, index })}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {selected === 'New Plan' && (
        <>
          <div className="w-full flex flex-row items-center justify-center myfont-regular text-[1rem] mt-[2rem]">
            <div className="w-fit rounded-full border mt-[1rem] border-dashed border-slate-500 p-1 flex flex-row text-slate-600 items-center gap-2 text-xs">
              <div onClick={() => setPlanSelect('Weekly')} className={`p-2 cursor-pointer rounded-full ${planSelect === 'Weekly' ? 'text-white bg-black' : 'hover:bg-slate-100'}`}>
                Weekly
              </div>
              <div onClick={() => setPlanSelect('Monthly')} className={`p-2 cursor-pointer rounded-full ${planSelect === 'Monthly' ? 'text-white bg-black' : 'hover:bg-slate-100'}`}>
                Monthly
              </div>
              <div onClick={() => setPlanSelect('Yearly')} className={`p-2 cursor-pointer rounded-full ${planSelect === 'Yearly' ? 'text-white bg-black' : 'hover:bg-slate-100'}`}>
                Yearly
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-[3rem] w-full">
            {PricingCardContent.map((item, index) => (
              <PricingCard
                key={index}
                name={item.name}
                current={item.current}
                locations={item.locations}
                planSelect={planSelect}
                price={planSelect === 'Monthly' ? item.monthly : planSelect === 'Weekly' ? item.weekly : item.yearly}
                features={item.features}
                onButtonClick={() => navigate(`/adv-signup/${planSelect === 'Monthly' ? 'm' : planSelect === 'Weekly' ? 'w' : 'y'}/${index}`)}
              />
            ))}
          </div>
        </>
      )}
      {selected === 'Previous Plan' && (
         <div className="mt-[1.5rem] flex flex-col w-full items-center justify-center">
          <PlanCard
            name="Standard Plan"
            price="$100/mo"
            features={features}
            dropDownOptions={dropDownOptionsPrevious}
          />
          </div>
      )}
      <SimpleModal
        showModal={showAddFile}
        setShowModal={setShowAddFile}
      >
        <div className="w-full md:min-w-[450px] items-center justify-center flex flex-col">
          <div className="w-full flex items-center justify-center myfont-bold">
            Add New Advertisement File
          </div>
          {uploadedFile && (
            <div className="w-full mt-[1.5rem]">
              <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded File" className="w-full h-[200px] object-contain" />
            </div>
          )}
          {editingFile?.file && (
            <div className="w-full mt-[1.5rem]">
              <img src={URL.createObjectURL(editingFile.file)} alt="Uploaded File" className="w-full h-[200px] object-contain" />
            </div>
          )}
          <div className="w-full mt-[1.5rem]">
            <UploadAdvFile
              label="Upload Advertisement File"
              supportedFiles="Xls, PDF, Word, JPG, PNG, SVG | Max Size 50MB"
              setUploadedFile={setUploadedFile}
            />
          </div>
          <div className="w-full mt-[1.5rem]">
            <GradientButton
              text={editingFile ? "Save Editing File" : "Add File"}
              additionalCss={`!w-full !p-2 !text-sm !bg-gradient-to-l ${(uploadedFile || editingFile?.file) ? '' : 'from-slate-200 to-slate-200 cursor-not-allowed'} !rounded-full`}
              onClick={() => {
                if ((editingFile?.file == null || editingFile?.file == undefined) && uploadedFile) {
                  if ((editingFile?.index != null || editingFile?.index != undefined)) {
                    const newFiles = [...allFiles];
                    newFiles[editingFile.index] = uploadedFile;
                    setAllFiles(newFiles);
                    setEditingFile(null);
                  } else {
                    setAllFiles((prevState) => [...prevState, uploadedFile]);
                  }
                }
                setEditingFile(null)
                setUploadedFile(null);
                setShowAddFile(false);
              }}
            />
          </div>
        </div>
      </SimpleModal>
    </div>
  );
}

export default AdvertiserPlans;