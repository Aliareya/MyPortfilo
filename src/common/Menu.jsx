import { Icon } from "@iconify-icon/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menus, setMenus] = useState([
    { title: "Home", icon: "ic:outline-home", link: "/", select: false },
    { title: "About", icon: "qlementine-icons:user-16", link: "/about", select: false },
    { title: "Resume", icon: "simple-icons:wheniwork", link: "/resome", select: false },
    { title: "Skills", icon: "cib:skillshare", link: "/skill", select: false },
    { title: "Project", icon: "mdi:facebook-workplace", link: "/progect", select: false },
  ]);

  useEffect(() => {
    setMenus((prevMenus) =>
      prevMenus.map((item) => ({
        ...item,
        select: item.link === location.pathname, 
      }))
    );
  }, [location.pathname]);

  return (
    <>
      {menus.map((items, index) => {
        return (
          <div key={index} onClick={()=>{navigate(`${items.link}`)}}
           className={`bg-${items.select && 'black border border-[#2680EB]'}
            w-full h-11 flex gap-2 items-center pl-1.5 rounded-xl cursor-pointer`}>
            <Icon
              icon={items.icon}
              width={items.size || '25'}
              height={items.size || '25'}
              style={{ color: `${items.select ? "#fff" : "#606060"}`}}
              className={`${items.title==="Home"&&'border border-[#828282] rounded-full'}`}
            />
            <p className="text-2xl italic text-[#AFA459]">{items.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Menu;
