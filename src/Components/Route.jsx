import { Route, Routes } from "react-router-dom";
import { CreateEntity } from "./CreateEntity";
import { Entity } from "./Entity";
import { Home } from "./Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<Entity />} />
        <Route path="/listing/create" element={<CreateEntity />} />
      </Routes>
    </>
  );
};
