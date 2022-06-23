import { EmailIcon } from "../../assets/Email";
import { InstagramIcon } from "../../assets/Instagram";
import { SoundcloudIcon } from "../../assets/Soundcloud";
import { YouTubeIcon } from "../../assets/Youtube";

export const Redes = () => {
  return (
    <div className="absolute overflow-auto w-full h-full py-32 flex-col lg:flex-wrap lg:flex-row flex items-center lg:justify-center">
      <a
        className="redes-link w-full flex flex-col items-center justify-center m-3 lg:p-4 lg:m-8 text-amber-500 text-sm sm:text-lg  font-black"
        href="https://www.instagram.com/lxs__primxs/ "
      >
        <InstagramIcon />
        @lxs__primxs
      </a>
      <a
        className="redes-link w-full flex flex-col items-center justify-center m-3 lg:p-4 lg:m-8 text-amber-500  text-sm sm:text-lg font-black"
        href="mailto:lxsprimxs909@gmail.com"
      >
        <EmailIcon />
        <span>lxsprimxs909@gmail.com</span>
      </a>
      <a
        className="redes-link w-full flex flex-col items-center justify-center m-3 lg:p-4 lg:m-8 text-amber-500 text-sm sm:text-lg  font-black"
        href="https://www.youtube.com/channel/UCnbiRo5b05-os-yOILyWXCQ"
      >
        <YouTubeIcon />
        Lxs Primxs
      </a>
      <a
        className="redes-link w-full flex flex-col items-center justify-center m-3 lg:p-4 lg:m-8 text-amber-500  text-sm sm:text-lg  font-black"
        href="https://soundcloud.com/lxsprimxs"
      >
        <SoundcloudIcon />
        <span>lxsprimxs</span>
      </a>
    </div>
  );
};

