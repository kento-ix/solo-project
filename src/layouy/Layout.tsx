import Header from "../components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
