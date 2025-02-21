import { ReactNode } from "react";
import Header from "../components/Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
    return(
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;