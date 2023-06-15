const PrimaryButton = ({ text }) => {
  return (
    <button className="bg-sideMenuBg cursor-pointer text-bodyBg font-semibold px-4 py-2 rounded-[5px] hover:bg-[#55545e] transition-all">
      {text}
    </button>
  );
};

export default PrimaryButton;
