import { Image } from "@/components/UI";
import { FC } from "react";

interface IntroImageProps {}

const IntroImage: FC<IntroImageProps> = () => {
  return (
    <div className="intro-image">
      <Image rootClassName="image-avatar" imgWidth={300} src="/avatar-filter.png" />
      <div className="image-dots">
        {[...Array(25)].map((_, idx) => (
          <div key={idx} className="dots-item" />
        ))}
      </div>
    </div>
  );
};

export default IntroImage;
