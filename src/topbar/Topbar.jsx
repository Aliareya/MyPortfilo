import { Icon } from "@iconify-icon/react";
import { useLocation } from "react-router-dom";

function Topbar({setShowNavbar ,showNavbar}) {
 const location = useLocation();
 const mylocation = location.pathname.split('/');

  return (
    <div className="w-full h-16 bg-primary flex ">
      <div className="w-1/12 h-16 flex items-center pl-0.5">
        <Icon
          onClick={()=>setShowNavbar(!showNavbar)}
          icon={`${showNavbar ? "line-md:menu-fold-left" : 'line-md:menu-fold-right'}`}
          width={37}
          height={37}
          style={{ color: "#808080" , cursor:'pointer' }}
        />
      </div>
      <div className="w-[92%] h-16 flex gap-3 justify-end items-center pr-2">
        <div className="w-3/4 h-16 flex justify-center items-center pl-24 ">
          <h1 className="text-2xl italic text-[#AFA459]  ">
            {mylocation[1]=== "" ? "Home":mylocation}
          </h1>
        </div>
        <div className="w-2/5 flex gap-5 justify-end items-center">
          <Icon
            icon="meteocons:sunset-fill"
            width={40}
            height={40}
            style={{ color: "#808080" }}
          />
          <Icon
            icon="quill:chat"
            width={35}
            height={35}
            style={{ color: "#808080" }}
          />
          <Icon
            icon="mi:notification"
            width={35}
            height={35}
            style={{ color: "#808080" }}
          />
          <Icon
            icon="material-symbols:language"
            width={35}
            height={35}
            style={{ color: "#808080" }}
          />
          <Icon
            icon="solar:user-circle-bold-duotone"
            width={38}
            height={38}
            style={{ color: "#808080" }}
          />
          <button className="text-lg text-[#969696] w-32 h-10 border border-[#AFA459] font-semibold py-1  rounded-md ">
              Download CV
            </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
