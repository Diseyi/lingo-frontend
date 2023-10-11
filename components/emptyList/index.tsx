import React from "react";

type Props = {
  text: string;
  src?: string;
};

const EmptyList = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center dark:text-[#546A81] h-[600px] text-[#D7DEE4] font-medium text-xl text-center p-4 ">
      {text}
    </div>
  );
};

export default EmptyList;
