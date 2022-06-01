import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const Player = () => {
  const [audio, setAudio] = useState("");

  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center pt-40 pb-40">
      <h1 className="text-7xl text-sky-400">DAAAAALEEEEE ..... VAAAAAAAAAA</h1>
      <div className="overflow-auto flex flex-col w-full max-w-4xl m-4">
        {[1, 2, "payaso.ogg", 4, 5, 6, 7, "daleva.ogg", 9, 10, 11, 12, 13, 14, 15, 16].map((m) => (
          <button
            onClick={(e) => setAudio(`/audio/${m}`)}
            className="text-amber-500 flex-1 w-full text-2xl bg-sky-500 p-4 hover:bg-amber-600 cursor-pointer"
            key={m}
          >
            {m} - Falopa
          </button>
        ))}
      </div>
      <div className="max-w-4xl w-full">
        <AudioPlayer src={audio} onPlay={(e) => console.log("onPlay")} />
      </div>
    </div>
  );
};

