import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

const audios: Record<string, string> = {
  "Corashe REMIX":
    "https://firebasestorage.googleapis.com/v0/b/lxsprimxsweb.appspot.com/o/Corashe%20REMIX%20Lxs%20Primxs.wav?alt=media&token=37fd8c9a-63aa-4056-b923-189524714b35",
  Daleva:
    "https://firebasestorage.googleapis.com/v0/b/elyulian-web.appspot.com/o/Daaaleeee%20Tucutucutucutuctu%20VAAA.ogg?alt=media&token=1f30db84-343d-459c-af4c-95525ec728d9",
  Payaso:
    "https://firebasestorage.googleapis.com/v0/b/elyulian-web.appspot.com/o/Que%20Te%20Pensas%20Que%20Soy%20Payaso%20De%20Circo%20De%20Rodeo.ogg?alt=media&token=c65e8979-a2dd-4b0a-b6d5-123ca7f714c8",
};

export const Player = () => {
  const [audio, setAudio] = useState(" - ");

  return (
    <div className="absolute bg-black w-full h-full flex flex-col items-center justify-center pt-36 pb-40">
      <h1 className="text-xl lg:text-4xl text-amber-500 font-extrabold">{audio}</h1>
      <div className="overflow-auto flex flex-col w-full max-w-4xl m-4">
        {["Corashe REMIX", 2, "Payaso", 4, 5, 6, 7, "Daleva", 9, 10, 11, 12, 13, 14, 15, 16].map((m, idx) => (
          <button
            onClick={(e) => setAudio(m.toString())}
            className="text-sky-500 text-left flex-1 w-full 2xl:text-2xl my-2 bg-amber-500 p-2 2xl:p-4 hover:bg-amber-600 cursor-pointer font-semibold"
            key={idx}
          >
            {idx + 1} - {m.toString().length > 3 ? m : "Falopa"}
          </button>
        ))}
      </div>
      <div className="max-w-4xl w-full font-semibold">
        <AudioPlayer src={audios[audio]} onPlay={(e) => console.log("onPlay")} />
      </div>
    </div>
  );
};

