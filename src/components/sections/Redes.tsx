import { EmailIcon } from "../../assets/Email";
import { InstagramIcon } from "../../assets/Instagram";

export const Redes = () => {
  return (
    <div className="absolute w-full h-full py-32 flex-col lg:flex-row flex items-center lg:justify-center">
      <a
        className="redes-link w-full flex flex-col items-center justify-center m-3 lg:p-4 lg:m-8 text-amber-500 text-sm sm:text-lg lg:text-2xl font-black"
        href="https://www.instagram.com/lxs__primxs/ "
      >
        <InstagramIcon />
        @lxs__primxs
      </a>
      <a
        className="redes-link w-full flex flex-col items-center justify-center m-3 lg:p-4 lg:m-8 text-amber-500  text-sm sm:text-lg lg:text-2xl font-black"
        href="mailto:lxsprimxs909@gmail.com"
      >
        <EmailIcon />
        <span>lxsprimxs909@gmail.com</span>
      </a>
    </div>
  );
};

