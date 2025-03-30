import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { IconButton, Paper, TableCell } from '@mui/material';

import { useBreakpoints } from '../hooks/useBreakpoints';
import { useFetchCompanies } from '../hooks/company/useFetchCompanies';
import CustomTypography from '../components/CustomTypography';
import { CustomExpandableTable } from '../components/CustomExpandableTable';

import { Company } from '../@types/CompanyTypes';
import { toBrasiliaTime } from '../utils/dateFormater';
import { useSoftRemoveCompany } from '../hooks/company/useSoftRemoveCompany';
import { useConfirmDialog } from '../hooks/modals/useConfirmDialog';
import ConfirmDialog from '../components/ConfirmDialog';
import { REMOVE_CONFIRM, REMOVE_CONTENT } from '../constants/dialogMessages';

export default function CompanyListPage() {
  const navigate = useNavigate();
  const { data: companies = [] } = useFetchCompanies();
  const { mutate: softRemove } = useSoftRemoveCompany();
  const { isOpen, openConfirm, closeConfirm, onConfirm } = useConfirmDialog();
  const { isMobile } = useBreakpoints();

  const [selectedCompanyName, setSelectedCompanyName] = useState<string>('');

  const columns = isMobile ? ['ID', 'Nome'] : ['ID', 'Nome', 'CNPJ'];

  const handleDelete = (id: number, name: string) => {
    setSelectedCompanyName(name);
    openConfirm(() => softRemove(id));
  };

  return !companies.length ? (
    <Paper>
      <CustomTypography variant="h6" textAlign="center" my={4}>
        Nenhuma empresa cadastrada
      </CustomTypography>
    </Paper>
  ) : (
    <>
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
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => handleDelete(company.id, company.name)}
              >
                <Delete />
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
      <ConfirmDialog
        open={isOpen}
        onClose={closeConfirm}
        onConfirm={() => {
          onConfirm();
          closeConfirm();
        }}
        title={REMOVE_CONFIRM(selectedCompanyName)}
        content={REMOVE_CONTENT}
      />
    </>
  );
}
