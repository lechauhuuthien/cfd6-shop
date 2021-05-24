import {
  Horizontal,
  Vertical,
  ResetPassword,
  Search,
  Product,
  ShoppingCart,
  Sidebar,
  SizeChart,
  WaistList,
} from "../../components/Modals";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <>
      {/* Modal */}
      <Horizontal />
      <Vertical />
      <ResetPassword />
      <Search />
      <Product />
      <ShoppingCart />
      <Sidebar />
      <SizeChart />
      <WaistList />
      {/* END */}

      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
