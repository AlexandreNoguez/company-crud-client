import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CompanyListPage from '../pages/CompanyListPage';
import CompanyFormPage from '../pages/CompanyFormPage';
import NotFoundPage from '../pages/NotFoundPage';

import {
  ROUTE_HOME,
  ROUTE_COMPANY,
  ROUTE_COMPANY_CREATE,
  ROUTE_COMPANY_EDIT,
  ROUTE_NOT_FOUND,
} from '../../shared/constants/headerRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route path={ROUTE_COMPANY} element={<CompanyListPage />} />
      <Route path={ROUTE_COMPANY_CREATE} element={<CompanyFormPage />} />
      <Route path={ROUTE_COMPANY_EDIT} element={<CompanyFormPage />} />
      <Route path={ROUTE_NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
