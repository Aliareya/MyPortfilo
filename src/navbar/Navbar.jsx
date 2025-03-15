import { Icon } from "@iconify-icon/react";
import logo from "../images/logo.png";
import Myphoto from "../images/ali.jpg";
import Sociallinks from "../common/Sociallinks";
import Menu from "../common/Menu";

function Navbar({ showNavbar }) {
  console.log(showNavbar, "test");

  return (
    <div className="w-full h-screen overflow-y-hidden overflow-x-hidden">
      <div className="w-full h-16 flex justify-center items-center border-r border-black">
        {!showNavbar ? 
        <h1 className="text-xl text-[#AFA459]">Alireza</h1>:
        <img src={logo} alt="logo" className="h-16" />
        }
      </div>
      <div className="w-full flex flex-col items-center  justify-center pt-5 border-t border-black">
        <div
          className={`${
            !showNavbar && "hidden"
          } w-[80%] h-48 bg-slate-700 rounded-full bg-center bg-cover`}
          style={{ backgroundImage: `url(${Myphoto})` }}
        ></div>

        {/* Sociallinks Part */}
        <div
          className={`w-[85%] h-16 flex gap-3 justify-between items-center mt-1 navbar_animation
          ${!showNavbar && "h-64 justify-around navbar_animation flex-col "}`}
        >
          <Sociallinks />
        </div>

        {/* Menu Part */}
        <div
          className={`w-[85%] mt-3 flex flex-col gap-3 navbar_animation
          ${!showNavbar && " navbar_animation items-center"}`}
        >
          <Menu showNavbar={showNavbar} />
        </div>

        {/* Logout Out Part */}
        <div className="w-full h-14  mt-10 border-t border-black flex items-center pl-5">
          <div className="w-full h-11 flex gap-3 items-center pl-1.5 rounded-xl cursor-pointer ">
            <Icon
              icon="uiw:logout"
              style={{ color: !showNavbar ? "#fff" : "#606060" }}
              width={showNavbar ? 25 : 30}
              height={showNavbar ? 25 : 30} 
            />

            {!showNavbar ? (
              ""
            ) : (
              <p className="text-2xl italic text-[#AFA459]">logout</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
