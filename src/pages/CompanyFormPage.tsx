import { Button, Paper, Box, Grid } from '@mui/material';
import { useCompanyForm } from '../hooks/useCompanyForm';

import CustomTypography from '../components/CustomTypography';
import CustomTextField from '../components/CustomTextField';
import MaskedTextField from '../components/MaskedTextField';
import CustomGrid from '../components/CustomGrid';
import { Controller } from 'react-hook-form';
import { CompanyFormData } from '../schemas/companySchema';

export default function CompanyFormPage() {
  const { control, errors, handleSubmit, onSubmit, formFields } =
    useCompanyForm();

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
          sx={{ mt: 3 }}
        >
          Salvar Empresa
        </Button>
      </Box>
    </Paper>
  );
}
