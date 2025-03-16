function ProgectList({ progectsDetails, setProgectNumber ,showdetails ,setShowdetails}) {
  const setProgectId = (id) => {
    setShowdetails(true);
    setProgectNumber(id);
  };

  return (
    <>
      {progectsDetails.map((items, index) => {
        return (
          <div
            key={index}
            onClick={() => setProgectId(items.id)}
            className="w-64 h-64 bg-primary flex justify-center items-end pb-6 cursor-pointer rounded-xl bg-cover bg-center border border-[bg-primary] "
            style={{ backgroundImage: `url(${items.image})` }}
          >
            <div className="w-4/5 h-16 border border-[#b3a45a] bg-[#1b1b1ba1] rounded-2xl flex justify-center items-center">
              <span className="text-2xl text-white"> {items.Name}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ProgectList;
