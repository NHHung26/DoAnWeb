import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MasterLayout from "../pages/theme/MasterLayout";
import { ROUTERS } from "../utils/router";
import DichVu from "../pages/DichVu/index";
import Products from "../pages/Products/index";
import Cart from "../pages/Cart/index";
import ProductDetail from "../pages/ProductDetail/index";
import LoginPage from "../pages/Auth/Login";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/Auth/Signup";
import UpdateUser from "../pages/user";

const RenderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HomePage,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.DichVu,
      component: <DichVu />,
    },
    {
      path: ROUTERS.USER.Products,
      component: <Products />,
    },
    {
      path: ROUTERS.USER.Cart,
      component: <Cart />,
    },
    {
      path: `products/${ROUTERS.USER.ProductDetail}/:id`,
      component: <ProductDetail />,
    },
    {
      path: ROUTERS.USER.LoginPage,
      component: <LoginPage />,
    },
    {
      path: ROUTERS.USER.SignUpPage,
      component: <SignUpPage />,
    },
    {
      path: ROUTERS.USER.AboutPage,
      component: <AboutPage />,
    },
    {
      path: ROUTERS.USER.UpdateUser,
      component: <UpdateUser />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return RenderUserRouter();
};
export default RouterCustom;
