import Moblie from "./mobile";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-header h-auto flex justify-center">
          <div className="p-5">
            <a href="/" className="hover:underline">
              Etusivu
            </a>
          </div>
          <div className="p-5">
            <a href="/shows" className="hover:underline">
              Esitykset
            </a>
          </div>
        </div>
      </div>

      <Moblie />
    </>
  );
};
export default Header;
