import GradientButton from "../common/GradientButton";
import InputBar from "../common/InputBar";
import MyMapComponent from "../Home/MyMapComponent";

function HostSelectionForm({
  companyName,
  setCompanyName,
  dropdownValue,
  setDropdownValue,
  SampleHostsData,
  handleClickNext
}) {
  return (
    <div className="w-full mt-[4rem]">
      <div className="md:hidden w-full h-[200px] mb-[1rem]">
        <MyMapComponent />
      </div>
      <div className="myfont-bold flex w-full items-center justify-center text-xl mb-[1rem]">
        Hosts Selection
      </div>
      <div className="w-full ">
        <InputBar
          label="Host Platform"
          type="text"
          value={companyName}
          setValue={setCompanyName}
          placeholder="Please select the hosts you'd like to target"
          isDropdown
          dropDownData={SampleHostsData}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
      </div>
      {dropdownValue.length !== 0 ? (
        <div className="w-full mt-[1rem]">
          <div className="w-full text-sm text-slate-500">
            Host Selected
          </div>
          {dropdownValue.map((item, index) => (
            <div key={index} className="w-full">
              <div>
                <div className="flex gap-4 items-center text-sm w-full rounded-lg bg-[#7A66FB1A] p-2 mt-[1rem]">
                  <div className="w-fit text-sm">
                    Host {index + 1}
                  </div>
                  <div>
                    <span className="text-xs text-slate-500">
                      Platform:
                    </span>
                    {' '}
                    <span className="text-xs text-slate-800 myfont-bold">
                      {item}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-[1rem]">
          <div className="w-full text-sm text-slate-500">
            Example
          </div>
          <div className="w-full">
            <div className="w-fit rounded-lg bg-[#7A66FB1A] p-2 mt-[1rem]">
              <div className="w-full text-sm">
                Host 1
              </div>
              <div>
                <span className="text-xs text-slate-500">
                  Platform:
                </span>
                {' '}
                <span className="text-xs text-slate-800 myfont-bold">
                  The New York Times Website
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full mt-[4rem]">
        <GradientButton text="Next" additionalCss="w-full !py-2" onClick={handleClickNext} />
      </div>
    </div>
  );
}

export default HostSelectionForm;