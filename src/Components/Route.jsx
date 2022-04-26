import { Route, Routes } from "react-router-dom";
import { AdminLogin } from "./Admin/adminLogin";
import { CreateEntity } from "./CreateEntity";
import { Entity } from "./Entity";
import { Home } from "./Home";
import { LoginPage } from "./userLogin";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<Entity />} />
        <Route path="/listing/create" element={<CreateEntity />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
