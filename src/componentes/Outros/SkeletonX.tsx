import { HTMLAttributes } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface ISkeletonX extends HTMLAttributes<HTMLDivElement> {
  count?: number
}

export const SkeletonX = ({ className, count = 1 }: ISkeletonX) => {

  return (
    <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F0F0F0">
      <Skeleton count={count} className={`${className}`} />
    </SkeletonTheme>
  );
};
