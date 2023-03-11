import React from 'react';

interface Props {
  Prop1: React.ComponentType<any>;
  Prop2: React.ComponentType<any>;
  Title?:string;
  bg1?:string;
  bg2?:string;
}

const Flex = ({ Prop1, Prop2,Title,bg1,bg2}: Props) => {
  return (
    <div className="grid grid_t grid-flow-col lg:auto-cols-fr mt-[20px] h-full align-middle items-center w-screen snap-start">
      <div className='lg:border-r-2 sm:pb-8 md:pb-8 border-l-second_blue'>
        <Prop1 />
      </div>
      <div className={`bg-${bg2??'to-blue-400'} my-5 align-middle items-center text-center`}>
        <Prop2 />
      </div>
      <style>{`
        @media (max-width: 1028px) {
          .grid_t {
            display: block;
            width: 80%;
          }
        }
        @media (max-width: 480px) {
          .grid_t {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default Flex;
