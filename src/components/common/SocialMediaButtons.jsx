const SocialMediaButtons = ({ icon, addiCss, link }) => (
  <div
    onClick={() => window.open(link, '__blank')}
    className={`rounded-full border shadow p-2 cursor-pointer ${addiCss ?? ''}`}
  >
    {icon}
  </div>
);

export default SocialMediaButtons;