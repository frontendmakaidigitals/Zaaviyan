import React from "react";

const About = () => {
  return (
    <div className="w-full my-20">
      <div className="container grid grid-cols-2 gap-6">
        <div className="w-full ">
          <h2 className="text-6xl font-Primary font-bold">
            Some Short but{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 bg-clip-text text-transparent">
              meaningful
            </span>{" "}
            heading
          </h2>
          <p className="mt-7 text-xl leading-relaxed">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis egestas velit vivamus lorem himenaeos class nibh magnis. Litora suspendisse risus cursus platea feugiat facilisis. Consequat purus amet; venenatis placerat posuere sociosqu fames pretium est. Suscipit penatibus maximus massa egestas amet efficitur litora odio consectetur. Vulputate ullamcorper vitae mi nullam tempus tellus. Gravida platea finibus ultrices nisi dignissim sit vitae. Nam dis arcu cubilia elementum penatibus platea nisi nam. Rhoncus proin sem volutpat nec eros commodo laoreet.
          </p>
        </div>
        <div className="aspect-square w-full bg-red-300">
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            />
            </div>
        </div>
      </div> 
  );
};

export default About;
