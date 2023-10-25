import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MasterLayout from "../pages/theme/MasterLayout";
import { ROUTERS } from "../utils/router";
import DichVu from "../pages/DichVu/index";

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
