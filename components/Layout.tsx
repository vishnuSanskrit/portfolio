import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="break-words bg-orange-50 leading-6 text-zinc-900 transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-300">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
