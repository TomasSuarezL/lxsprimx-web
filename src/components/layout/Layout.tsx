import { ParticlesBackground } from "../../assets/Particles";
import { Navbar } from "./NavBar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative bg-slate-900 overflow-hidden"
          style={{
            minHeight: "100vh",
          }}
        >
          {/* <ParticlesBackground /> */}
          {children}
        </div>
      </main>
    </>
  );
};

