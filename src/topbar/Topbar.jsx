import { Icon } from "@iconify-icon/react";

function Topbar() {
  return (
    <div className="w-full h-16 bg-primary flex ">
      <div className="w-1/12 h-16 flex items-center pl-0.5">
        <Icon
          icon="line-md:menu-fold-left"
          width={37}
          height={37}
          style={{ color: "#808080" }}
        />
      </div>
      <div className="w-[92%] h-16 flex gap-3 justify-end items-center pr-2">
         <div className="w-3/4 flex justify-end items-center pr-10">
            {/* <div className="w-80 h-9 bg-[#808080] rounded-lg flex items-center justify-end px-1">
               <input
                  type="text"
                  className="w-72 h-7 text-lg pl-1 font-semibold bg-[#808080] border-none outline-none "
               />
               <Icon
                  icon="fluent:search-12-filled"
                  width={28}
                  height={28}
                  style={{ color: "#000" }}
               />
            </div> */}
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
        </div>
      </div>
    </div>
  );
}

export default Topbar;
