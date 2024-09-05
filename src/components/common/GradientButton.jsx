
const GradientButton = ({ text, additionalCss, onClick }) => {
  return (
    <button type="button" aria-label="Button" onClick={onClick} className={`py-1 px-3 rounded-full text-white ${!additionalCss?.includes('bg-') && 'bg-gradient-to-r'} from-pink-400 to-indigo-500 ${additionalCss}`}>
      {text}
    </button>
  );
};

export default GradientButton;