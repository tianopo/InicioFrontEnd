import { HTMLAttributes } from "react";

interface ISkeletonX extends HTMLAttributes<HTMLDivElement> {
  count?: number
}

export const SkeletonX = ({ className }: ISkeletonX) => {

  return (
    <div className={`skeleton_div-primaria`}>
      <div className={`${className} bg-gray-300 rounded`}></div>
    </div>
  );
};
