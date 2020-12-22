import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import UserRoutes from "../../routes/UserRoutes";
import Footer from "../../components/Footer/Footer";
import useWinSize from "../../utils/hooks/useWinSize";

const UserAppPage = () => {
  const { width: winWidth } = useWinSize();

  return (
    <>
      <MainHeader />
      <UserRoutes />
      {winWidth > 640 && <Footer />}
    </>
  );
};

export default UserAppPage;