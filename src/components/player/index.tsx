import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

const audios: Record<string, string> = {
  "Corashe REMIX":
    "https://firebasestorage.googleapis.com/v0/b/lxsprimxsweb.appspot.com/o/Corashe%20REMIX%20Lxs%20Primxs.wav?alt=media&token=37fd8c9a-63aa-4056-b923-189524714b35",
  "Dance Crip Coolo REMIX":
    "https://firebasestorage.googleapis.com/v0/b/lxsprimxsweb.appspot.com/o/Dance%20Crip%20Coolo%20REMIX.wav?alt=media&token=e41682cf-2b40-4411-9485-f9d2e74b3ee9",
  "My Humps REMIX":
    "https://firebasestorage.googleapis.com/v0/b/lxsprimxsweb.appspot.com/o/Lxs%20Primxs%20-%20My%20Humps%20REMIX.wav?alt=media&token=f2f22533-f61f-49e6-a136-a0e2473f27bb",
  "Opa REMIX":
    "https://firebasestorage.googleapis.com/v0/b/lxsprimxsweb.appspot.com/o/Opa%20REMIX.mp3?alt=media&token=30f8c1d2-7156-4d05-ac90-29af2e0cc75f",
  "Carismatico Yegua REMIX":
    "https://firebasestorage.googleapis.com/v0/b/lxsprimxsweb.appspot.com/o/carismatico%20yegua%20REMIX.mp3?alt=media&token=dcfee674-7619-4ee6-ac88-72789ffedde1",
};

export const Player = () => {
  const [audio, setAudio] = useState(" - ");

  return (
    <div className="absolute bg-black w-full h-full flex flex-col items-center justify-start pt-8 pb-40">
      <h1 className="text-xl lg:text-4xl text-amber-500 font-extrabold">{audio}</h1>
      <div className="overflow-auto flex flex-col w-full max-w-4xl m-4">
        {Object.keys(audios).map((m, idx) => (
          <button
            onClick={(e) => setAudio(m.toString())}
            className="text-black text-left flex-1 w-full 2xl:text-2xl my-2 bg-amber-500 p-2 2xl:p-4 hover:bg-amber-600 cursor-pointer font-semibold"
            key={idx}
          >
            {idx + 1} - {m.toString().length > 3 ? m : "Falopa"}
          </button>
        ))}
      </div>
      <div className="max-w-4xl w-full font-semibold xl:mt-4">
        <AudioPlayer src={audios[audio]} onPlay={(e) => console.log("onPlay")} />
      </div>
    </div>
  );
};
