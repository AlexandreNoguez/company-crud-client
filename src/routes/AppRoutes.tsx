import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompanyListPage from "../pages/CompanyListPage";
import CompanyFormPage from "../pages/CompanyFormPage";
import NotFoundPage from "../pages/NotFoundPage";

import {
  ROUTE_HOME,
  ROUTE_EMPRESAS,
  ROUTE_EMPRESAS_CADASTRAR,
  ROUTE_EMPRESAS_EDITAR,
  ROUTE_NOT_FOUND,
} from '../constants/headerRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route path={ROUTE_EMPRESAS} element={<CompanyListPage />} />
      <Route path={ROUTE_EMPRESAS_CADASTRAR} element={<CompanyFormPage />} />
      <Route path={ROUTE_EMPRESAS_EDITAR} element={<CompanyFormPage />} />
      <Route path={ROUTE_NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
