// src/pages/HomePage.tsx
import { Box, Paper } from "@mui/material";

import CustomTypography from "../components/CustomTypography";

export default function HomePage() {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <CustomTypography variant="h4" gutterBottom>
          Bem-vindo ao Projeto de Cadastro de Empresas
        </CustomTypography>

        <CustomTypography>
          Este projeto foi desenvolvido como parte do teste técnico para a vaga
          de Desenvolvedor Full Stack na KPMG.
        </CustomTypography>

        <CustomTypography>
          A aplicação tem como objetivo permitir o cadastro, visualização,
          edição e exclusão de empresas.
        </CustomTypography>

        <CustomTypography>
          As empresas cadastradas devem conter os seguintes campos obrigatórios:
        </CustomTypography>

        <ul>
          <li>
            <CustomTypography variant="body2">Nome</CustomTypography>
          </li>
          <li>
            <CustomTypography variant="body2">CNPJ</CustomTypography>
          </li>
          <li>
            <CustomTypography variant="body2">Nome Fantasia</CustomTypography>
          </li>
          <li>
            <CustomTypography variant="body2">Endereço</CustomTypography>
          </li>
        </ul>

        <CustomTypography variant="body1" mt={2}>
          Use o menu de navegação para acessar as rotas de listagem ou cadastro
          de empresas.
        </CustomTypography>
      </Paper>
    </Box>
  );
}
