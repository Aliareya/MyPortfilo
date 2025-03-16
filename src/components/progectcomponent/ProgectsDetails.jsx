import { Icon } from "@iconify-icon/react";

function ProgectsDetails({viewProgect ,setShowdetails}) {
  const data = [viewProgect];
  
  return (
    <> 
      <span className="w-full flex justify-start cursor-pointer ">
         <Icon onClick={()=>setShowdetails(false)} icon="famicons:close" width="25" height="25"  style={{color: '#a8a6a4'}} />
      </span>
      <div
        className="w-52 h-52 navbar_animation rounded-xl bg-cover bg-center  border border-[bg-primary]"
        style={{ backgroundImage: `url(${viewProgect.image})` }}
      ></div>
      <div className="w-56 pt-4 flex flex-col gap-1">
        <h1 className="text-lg text-[#AFA459]">
          Websit Name :<span className="text-lg text-white">{viewProgect.Name}</span>
        </h1>
        <h1 className="text-lg text-[#AFA459]">
          Link :
          <span className="text-lg text-blue-600"> {viewProgect.Link}</span>
        </h1>
        <h1 className="text-lg text-[#AFA459]">
          Start date :<span className="text-lg text-white"> {viewProgect.Start}</span>
        </h1>
        <h1 className="text-lg text-[#AFA459]">
          Finished date :<span className="text-lg text-white"> {viewProgect.Finished}</span>
        </h1>
        <h1 className="text-lg text-[#AFA459]">
          Pages:
          <span className="text-lg text-white"> {viewProgect.Pages}</span>
        </h1>
        <h1 className="text-lg text-[#AFA459]">
          Completed :<span className="text-lg text-green-700">{viewProgect.Completed ?"Yes" : "In Progress"} </span>
        </h1>
        <h1 className="text-lg text-[#AFA459]">
          Details :
          <span className="text-lg text-white">
            This website consists of approximately 10 pages, including a shop
            page designed for selling products online.
          </span>
        </h1>
        <button className="w-full text-lg text-white h-10 border-2 rounded-lg border-blue-600 mt-2">
          View Site
        </button>
      </div>
    </>
  );
}
export default ProgectsDetails;
