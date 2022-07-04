import { images } from "../assets";

export function Hero() {
  return (
    <div>
      <img
        src={images.heroMobile}
        srcSet={`${images.heroMobile} 750w, ${images.heroDesktop} 960w`}
        alt=''
      />
    </div>
  );
}
