import { toast } from 'react-toastify';
import { Block } from '@mui/icons-material';

import CustomButton from './CustomButton';
import api from '../../infra/http/axios';

export default function SeedButton() {
  const handleClick = async () => {
    try {
      await api.post('/seed/companies');
      toast.success(`Seed criada com sucesso: empresas inseridas!`);
    } catch (err) {
      console.error(err);
      toast.error('Erro ao popular banco');
    }
  };

  return (
    <CustomButton onClick={handleClick} color="error" variant="contained">
      <Block />
    </CustomButton>
  );
}
