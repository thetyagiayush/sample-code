function ColouredIconButton({ icon, text, color, handleClick, reversed }) {
    return (
        <div onClick={handleClick} className={`!w-fit p-1  !cursor-pointer rounded-full shadow ${color} flex ${reversed ? 'flex-row-reverse pl-[1rem]' : 'flex-row pr-[1rem]'} items-center border border-slate-400`}>
            <span className={`text-white cursor-pointer p-2 flex rounded-full border border-slate-300 bg-white ${reversed ? 'ml-2' : 'mr-2'}`}>
                {icon}
            </span>
            <span className="text-xs text-white cursor-pointer truncate">
                {text}
            </span>
        </div>
    );
}

export default ColouredIconButton;