import { useState } from "react";

import progect1 from "../images/progect1.jpg";
import progect2 from "../images/progect2.jpg";
import progect3 from "../images/progect3.jpg";
import progect4 from "../images/progect4.jpg";
import progect5 from "../images/progect5.jpg";
import progect6 from "../images/progect6.jpg";

import ProgectList from "../components/progectcomponent/ProgectList";
import ProgectsDetails from "../components/progectcomponent/ProgectsDetails";

function Progect() {
  const [progectNumber, setProgectNumber] = useState(1);
  const [showdetails, setShowdetails] = useState(false);
  const progectsDetails = [
    {
      id: 1,
      Name: "Travilrest",
      Link: "https://travilrest.com",
      Start: "2022-03-15",
      Finished: "2022-07-10",
      Pages: 10,
      Completed: true,
      image: progect1,
    },
    {
      id: 2,
      Name: "ShopEase",
      Link: "https://shopease.com",
      Start: "2023-05-10",
      Finished: "2023-09-25",
      Pages: 15,
      Completed: true,
      image: progect2,
    },
    {
      id: 3,
      Name: "TechNova",
      Link: "https://technova.com",
      Start: "2021-08-01",
      Finished: "2022-01-15",
      Pages: 20,
      Completed: false,
      image: progect3,
    },
    {
      id: 4,
      Name: "FoodieHub",
      Link: "https://foodiehub.com",
      Start: "2023-02-20",
      Finished: "2023-06-30",
      Pages: 12,
      Completed: true,
      image: progect4,
    },
    {
      id: 5,
      Name: "FitLife",
      Link: "https://fitlife.com",
      Start: "2020-11-05",
      Finished: "2021-04-10",
      Pages: 8,
      Completed: true,
      image: progect5,
    },
    {
      id: 6,
      Name: "EduSmart",
      Link: "https://edusmart.com",
      Start: "2022-09-01",
      Finished: "2023-01-20",
      Pages: 18,
      Completed: false,
      image: progect6,
    },
  ];

  const viewProgect = progectsDetails.filter(
    (progect) => progect.id === progectNumber
  )[0];

  return (
    <div className="w-full h-[665px] flex gap-4 overflow-x-hidden ">
      <div
        className={`${
          showdetails ? "w-[80%] navbar_animation" : "w-[100%] navbar_animation"
        } h-[665px] flex flex-col items-center p-4 `}
      >
        <div className="w-[90%] h-20  mb-2 flex border-b-[0.5px] border-[#302e2ee6] justify-center items-center gap-4">
          <button className="text-lg text-[#969696] w-32 h-10 border border-[#2680EB] font-semibold py-1 rounded-md">
            Wordpress
          </button>
          <button className="text-lg text-[#969696] w-32 h-10 border border-[#AFA459] font-semibold py-1 rounded-md">
            React
          </button>
        </div>
        <div className="w-[90%] h-[580px] flex justify-center gap-x-16 gap-y-5 pt-4 flex-wrap">
          <ProgectList
            progectsDetails={progectsDetails}
            setProgectNumber={setProgectNumber}
            setShowdetails={setShowdetails}
            showdetails={showdetails}
          />
        </div>
      </div>
      <div
        className={`${
          showdetails ? "w-[20%] h-[665px]  bg-primary navbar_animation" : "w-0 h-0 navbar_animation"
        }   flex flex-col items-center pt-2 border-t border-black`}
      >
        {showdetails ? <ProgectsDetails viewProgect={viewProgect} setShowdetails={setShowdetails} />:''}
      </div>
    </div>
  );
}

export default Progect;
