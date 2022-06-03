import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

export const Player = () => {
  const [audio, setAudio] = useState(" - ");

  return (
    <div className="absolute bg-black w-full h-full flex flex-col items-center justify-center pt-40 pb-40">
      <h1 className="text-xl lg:text-4xl text-amber-500 font-extrabold">{audio}</h1>
      <div className="overflow-auto flex flex-col w-full max-w-4xl m-4">
        {[1, 2, "Payaso", 4, 5, 6, 7, "Daleva", 9, 10, 11, 12, 13, 14, 15, 16].map((m, idx) => (
          <button
            onClick={(e) => setAudio(m.toString())}
            className="text-sky-500 text-left flex-1 w-full text-2xl bg-amber-500 p-4 hover:bg-amber-600 cursor-pointer font-semibold"
            key={m}
          >
            {idx + 1} - {m.toString().length > 3 ? m : "Falopa"}
          </button>
        ))}
      </div>
      <div className="max-w-4xl w-full font-semibold">
        <AudioPlayer src={`/audio/${audio}.ogg`} onPlay={(e) => console.log("onPlay")} />
      </div>
    </div>
  );
};

