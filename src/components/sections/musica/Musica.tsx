import { MusicaNav } from "./MusicaNav";

export const MusicaLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <MusicaNav />
      <main>
        <div
          className="absolute w-full bg-black overflow-hidden"
          style={{
            minHeight: "80vh",
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
};

