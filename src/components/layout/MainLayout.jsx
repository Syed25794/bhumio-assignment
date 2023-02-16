import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
