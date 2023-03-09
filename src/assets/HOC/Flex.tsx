import React from 'react';

interface Props {
  Prop1: React.ComponentType<any>;
  Prop2: React.ComponentType<any>;
  Title:string
}

const Flex = ({ Prop1, Prop2,Title }: Props) => {
  return (
    <>
          <h2 className='text-white'>{Title}</h2>
    <div className="flex flex-wrap justify-center items-center w-screen">

      <div className="flex-1 flex justify-center">
      <Prop1 />
      </div>
      <div className="flex-1 flex justify-center">
      <Prop2 />
      </div>
    </div>
    </>
  );
};

export default Flex;
