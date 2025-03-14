import { Icon } from "@iconify-icon/react";
import logo from "../images/logo.png";
import Myphoto from "../images/ali.jpg";
import Sociallinks from "../common/Sociallinks";
import Menu from "../common/Menu";

function Navbar() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-16 flex justify-center items-center border-r border-black">
        <img src={logo} alt="logo" className="w-[4/5] h-16" />
      </div>
      <div className="w-full flex flex-col items-center  justify-center pt-5 border-t border-black">
        <div className="w-[80%] h-48 bg-slate-700 rounded-full bg-center bg-cover"
          style={{ backgroundImage: `url(${Myphoto})` }}>
         </div>

        {/* Sociallinks Part */}
        <div className="w-[85%] h-16 flex gap-3 justify-between items-center mt-1">
          <Sociallinks />
        </div>

        {/* Menu Part */}
        <div className="w-[85%] mt-3 flex flex-col gap-3">
          <Menu />
        </div>

        {/* Logout Out Part */}
        <div className="w-full h-14  mt-10 border-t border-black flex items-center pl-5">
          <div className='w-full h-11 flex gap-3 items-center pl-1.5 rounded-xl cursor-pointer ' >
            <Icon icon="uiw:logout" style={{ color: "#606060" }} width={25} height={25}/>
            <p className="text-2xl italic text-[#AFA459]">logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
