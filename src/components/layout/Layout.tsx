import { Navbar } from "./NavBar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="relative bg-black overflow-hidden"
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
};

