import Image from "next/image";
import banner from "./banner_style.module.css";
import colorText from "../styles/color_text.module.css";
const Banner = () => {
  return (
    <div className={banner.banner}>
      <div className={banner.bannerDescription}>
        <span>
          <span className={[colorText.color_text, colorText.red].join(" ")}>Brutal#1</span> is out here, check
          now
        </span>
        <p>
          Artes com formas agressivas, linhas retas e cores intensas de impacto visual e imponente. Estética
          marcante e ousada, transmitindo poder e presença.
        </p>
      </div>
      <div className={banner.bannerImage}>
        <Image src="/free_download_diablo.svg" width={300} height={300} alt="freeSvg" />
      </div>
    </div>
  );
};
export default Banner;
