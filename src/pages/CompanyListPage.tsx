import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { IconButton, Paper, TableCell } from '@mui/material';

import { useBreakpoints } from '../hooks/useBreakpoints';
import { useFetchCompanies } from '../hooks/company/useFetchCompanies';
import CustomTypography from '../components/CustomTypography';
import { CustomExpandableTable } from '../components/CustomExpandableTable';

import { Company } from '../@types/CompanyTypes';
import { toBrasiliaTime } from '../utils/dateFormater';

export default function CompanyListPage() {
  const { data: companies = [] } = useFetchCompanies();
  const { isMobile } = useBreakpoints();
  const navigate = useNavigate();

  const columns = isMobile ? ['ID', 'Nome'] : ['ID', 'Nome', 'CNPJ'];

  return !companies.length ? (
    <Paper>
      <CustomTypography variant="h6" textAlign="center" my={4}>
        Nenhuma empresa cadastrada
      </CustomTypography>
    </Paper>
  ) : (
    <CustomExpandableTable<Company>
      rows={companies}
      columns={columns}
      getRowId={(company) => company.id}
      renderMainRow={(company) => (
        <>
          <TableCell>{company.id}</TableCell>
          <TableCell>{company.name}</TableCell>
          {!isMobile && <TableCell>{company.cnpj}</TableCell>}
          <TableCell align="right">
            <IconButton
              aria-label="edit"
              color="primary"
              onClick={() => navigate(`/empresas/editar/${company.id}`)}
            >
              <Edit />
            </IconButton>
          </TableCell>
        </>
      )}
      renderCollapseContent={(company) => (
        <>
          <CustomTypography variant="subtitle1" gutterBottom>
            Detalhes
          </CustomTypography>
          <CustomTypography>
            Nome Fantasia: {company.tradeName}
          </CustomTypography>
          <CustomTypography>Endereço: {company.address}</CustomTypography>
          <CustomTypography>
            Criada em:{' '}
            {format(toBrasiliaTime(company.createdAt), 'dd/MM/yyyy HH:mm', {
              locale: ptBR,
            })}
          </CustomTypography>
          <CustomTypography>
            Atualizada em:{' '}
            {format(toBrasiliaTime(company.updatedAt), 'dd/MM/yyyy HH:mm', {
              locale: ptBR,
            })}
          </CustomTypography>
        </>
      )}
    />
  );
}
