import { Icon } from "@iconify-icon/react";

function Sociallinks() {
  const socialsmedia = [
    { link: "", icon: "codicon:github", size: 35 },
    { link: "", icon: "jam:linkedin-circle", size: 42 },
    { link: "", icon: "stash:telegram", size: 42 },
    { link: "", icon: "jam:fiverr-circle", size: 42 },
  ];

  return (
    <>
      {socialsmedia.map((item, index) => {
        return (
          <Icon
            className="hover:opacity-90 cursor-pointer opacity-45"
            icon={item.icon}
            width={item.size}
            height={item.size}
            style={{ color: "#fff" }}
          />
        );
      })}
    </>
  );
}
export default Sociallinks;
