import ParallaxGrid from "@/app/App_Chunks/Components/ParallaxGrid";
const GridSection = ({data}) => {


  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 w-full mt-12">
        {data.map((e, idx) => (
          <ParallaxGrid key={idx} e={e} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default GridSection;

