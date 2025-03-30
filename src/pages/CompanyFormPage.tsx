import { Controller } from 'react-hook-form';
import { Button, Paper, Box, Grid } from '@mui/material';
import { useCompanyForm } from '../hooks/company/useCompanyForm';

import CustomGrid from '../components/CustomGrid';
import CustomTextField from '../components/CustomTextField';
import CustomTypography from '../components/CustomTypography';
import CustomCircularProgress from '../components/CustomCircularProgress';
import MaskedTextField from '../components/MaskedTextField';
import { CompanyFormData } from '../schemas/companySchema';
import { useLoadingStore } from '../stores/loading.store';

export default function CompanyFormPage() {
  const { control, errors, handleSubmit, onSubmit, formFields } =
    useCompanyForm();

  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <CustomTypography preset="title" gutterBottom textAlign="center" mb={8}>
        Cadastro de Empresas
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

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3, minWidth: 160 }}
          disabled={isLoading}
          startIcon={isLoading ? <CustomCircularProgress /> : null}
        >
          {isLoading ? 'Salvando...' : 'Salvar Empresa'}
        </Button>
      </Box>
    </Paper>
  );
}
