import darkMode from "../assets/icons/dark-mode.png";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between w-full">
      <h1 className="font-black text-text-light text-2xl">
        GitHub Profile Finder
      </h1>
      <button className="flex items-center gap-2 font-semibold text-secondary cursor-pointer">
        <span className="text-[14px]">DARK</span>
        <img src={darkMode} />
      </button>
    </div>
  );
};

export default Header;
