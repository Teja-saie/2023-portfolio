import React from 'react';

interface Props {
  Prop1: React.ComponentType<any>;
  Prop2: React.ComponentType<any>;
  Title?:string
}

const Flex = ({ Prop1, Prop2,Title }: Props) => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center w-full lg:w-screen md:mb-4 sm:mb-3 mt-[20px]">
      <div className="lg:w-1/2 sm:w-full md:w-full  mb-[15px]">
        <Prop1 />
      </div>
      <div className="lg:w-1/2 flex sm:w-full md:w-full justify-center mb-[15px]">
        <Prop2 />
      </div>
    </div>
    </>
  );
};

export default Flex;
