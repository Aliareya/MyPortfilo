import { Icon } from "@iconify-icon/react";


function Contact() {
  return (
    <div className="w-full h-[665px] flex ">
      <div className="w-4/5 h-[665px]  flex justify-center items-center">
        <div className="w-[60%] h-[580px] bg-primary rounded-xl px-9">
          <div className="w-full h-24 flex justify-center items-center">
            <h1 className="text-4xl text-[#AFA459]">Send your message</h1>
          </div>
          <form action="" className="w-full flex flex-col gap-2 ">
            <div className="relative w-full h-20 flex flex-col justify-center gap-1.5 ">
              <label htmlFor="name" className="text-xl text-[#AFA459]">
                Name
              </label>
              <input type="text" className="pl-1.5 text-lg text-white bg-[#222222] w-full h-9 border rounded-md" />
              <Icon icon="lets-icons:user" width="20" height="20"  style={{color: '#AFA459'}}
              className="absolute right-2 top-[70%] transform -translate-y-1/2" />
            </div>
            <div className="w-full relative  h-20 flex flex-col justify-center gap-1.5 ">
              <label htmlFor="name" className="text-xl text-[#AFA459]">
                Email
              </label>
              <input type="text" className="pl-1.5 text-lg text-white bg-[#222222] w-full h-9 border rounded-md" />
              <Icon icon="mdi:email-outline" width="20" height="20"  style={{color: '#AFA459'}}
              className="absolute right-2 top-[70%] transform -translate-y-1/2" />
            </div>
            <div className="w-full h-46 flex flex-col justify-center gap-1.5 ">
              <label htmlFor="name" className="text-xl text-[#AFA459]">
                Message
              </label>
              <textarea className="pl-1.5 text-lg text-white bg-[#222222] border w-full min-h-40 rounded-tr-xl rounded-b-xl"></textarea>
            </div>
            <div className="w-full h-20 flex flex-col justify-center gap-1.5 ">
              <button className="hover:bg-[#464545] bg-[#222222] w-full h-10 rounded-md border  text-2xl text-[#AFA459]">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/5 bg-primary h-[665px] border-t border-black"></div>
    </div>
  );
}

export default Contact;
