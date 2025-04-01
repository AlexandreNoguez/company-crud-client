import { toast } from 'react-toastify';
import api from '../libs/axios';
import CustomButton from './CustomButton';
import { Block } from '@mui/icons-material';

export default function SeedButton() {
  const handleClick = async () => {
    try {
      await api.post('http://localhost:3000/seed/companies');
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
