import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTema } from "src/hooks/configuracao/useTema";

export const SkeletonX = () => {
  const { tema } = useTema();

  return (
    <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F0F0F0">
      <Skeleton count={3} />
    </SkeletonTheme>
  );
};
