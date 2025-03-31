import { useParams } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Paper, Box, Grid } from '@mui/material';

import CustomGrid from '../components/CustomGrid';
import CustomButton from '../components/CustomButton';
import CustomTextField from '../components/CustomTextField';
import MaskedTextField from '../components/MaskedTextField';
import CustomTypography from '../components/CustomTypography';
import CustomCircularProgress from '../components/CustomCircularProgress';

import { CompanyFormData } from '../schemas/companySchema';
import { useCompanyForm } from '../hooks/company/useCompanyForm';
import { useLoadingStore } from '../stores/loading.store';

export default function CompanyFormPage() {
  const { id } = useParams(); // se tiver ID, está editando
  const isEditMode = !!id;

  const { control, errors, handleSubmit, onSubmit, formFields } =
    useCompanyForm();

  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <CustomTypography preset="title" gutterBottom textAlign="center" mb={8}>
        {isEditMode ? 'Atualizar Empresa' : 'Cadastro de Empresas'}
      </CustomTypography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomGrid>
          {formFields.map((field, index) => (
            <Grid key={`${field.name}-${index}`}>
              {field.mask ? (
                <MaskedTextField<CompanyFormData>
                  name={field.name}
                  label={field.label}
                  control={control}
                  mask={field.mask}
                  errorMessage={errors[field.name]}
                />
              ) : (
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: controllerField }) => (
                    <CustomTextField
                      label={field.label}
                      {...controllerField}
                      errorMessage={errors[field.name]}
                    />
                  )}
                />
              )}
            </Grid>
          ))}
        </CustomGrid>

        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, minWidth: 160 }}
          disabled={isLoading}
          startIcon={isLoading ? <CustomCircularProgress /> : null}
        >
          {isLoading
            ? isEditMode
              ? 'Atualizando...'
              : 'Salvando...'
            : isEditMode
              ? 'Alterar Empresa'
              : 'Salvar Empresa'}
        </CustomButton>
      </Box>
    </Paper>
  );
}
