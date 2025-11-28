import { useMusicStore } from "@/stores/useMusicStore";
import FeaturedGridSkeleton from "./skeletons/FeaturedGridSkeleton";

const FeaturedSection = () => {
    const {isLoading, featuredSongs, error} = useMusicStore();
    
    if (isLoading) return <FeaturedGridSkeleton />;
  return <div>FeaturedSection</div>;
};

export default FeaturedSection;
