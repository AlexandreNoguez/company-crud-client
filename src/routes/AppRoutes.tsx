import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompanyListPage from "../pages/CompanyListPage";
import CompanyFormPage from "../pages/CompanyFormPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/empresas" element={<CompanyListPage />} />
      <Route path="/empresas/cadastrar" element={<CompanyFormPage />} />
      <Route path="/empresas/editar/:id" element={<CompanyFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
