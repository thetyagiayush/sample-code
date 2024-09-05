
function OverviewCard({ 
  middleText, middleTextCss, bottomText, bottomTextCss, 
  topText, topTextCss, backgroundColor,
}) {
  return (
    <div className={`lg:w-fit ${backgroundColor ?? ''} cursor-pointer rounded-xl min-h-[7rem] min-w-[10rem] border border-slate-300 p-[1rem] flex flex-col items-center justify-center`}>
      <div className={`${topTextCss ?? ''}`}>
        {topText}
      </div>
      <div className={`myfont-bold text-lg ${middleTextCss ?? ''}`}>
        {middleText}
      </div>
      <div className={`text-xs text-white ${bottomTextCss ?? ''}`}>
        {bottomText}
      </div>
    </div>
  );
}

export default OverviewCard;