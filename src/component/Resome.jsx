import { Icon } from '@iconify/react';

const Resome = () => {
  return (
    <div className="w-full h-[800px] bg-[#080808] flex flex-col items-center" id="resome">
      <h1 className="w-[11%] border-b border-[#ff8000] text-3xl text-[#d1d1d1] text-center pt-[50px]" id="resome-title">My Resome</h1>
      <div className="w-full flex justify-center mt-[50px]" >
        <div className="w-[37%] h-[500px]">
          <div className="pb-[33px]">
            <h1 className="text-[#d1d1d1] flex gap-[11px] text-[40px]">
              <Icon icon="fluent-mdl2:education" style={{ color: '#ff8000' }} />Education
            </h1>
          </div>
          <div className="text-[#f8f8f8]">
            {['', '', ''].map((_, index) => (
              <div key={index} className="flex relative">
                <div className="relative group">
                  <div className="w-[15px] h-[15px] bg-[#464646] rounded-full absolute left-[30px] top-0 transition-colors group-hover:bg-[#ff7800]" />
                  <div className="pl-[33px] ml-[37px] border-l border-[#232935] pb-[17px]">
                    <h2 className="text-[#f4b400] mt-[13px] mb-[10px]">Senior UX/UI Designer</h2>
                    <p className="text-[#bbbbbb] italic mb-[5px]">Jan 2020 - Present</p>
                    <h3 className="pb-[12px]">Bergnaum, Hills and Howe</h3>
                    <p className="text-[#dddddd]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[35%] h-[500px]">
          <div className="pb-[33px]">
            <h1 className="text-[#d1d1d1] flex gap-[11px] text-[40px]">
              <Icon icon="fluent-emoji-high-contrast:briefcase" style={{ color: '#ff8000' }} />Experience
            </h1>
          </div>
          <div className="text-[#f8f8f8]">
            {['', '', ''].map((_, index) => (
              <div key={index} className="flex relative">
                <div className="relative group">
                  <div className="w-[15px] h-[15px] bg-[#464646] rounded-full absolute left-[30px] top-0 transition-colors group-hover:bg-[#ff7800]" />

                  <div className="pl-[33px] ml-[37px] border-l border-[#232935] pb-[17px]">
                    <h2 className="text-[#f4b400] mt-[13px] mb-[10px]">Senior UX/UI Designer</h2>
                    <p className="text-[#bbbbbb] italic mb-[5px]">Jan 2020 - Present</p>
                    <h3 className="pb-[12px]">Bergnaum, Hills and Howe</h3>
                    <p className="text-[#dddddd]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resome;