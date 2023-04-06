import { Grid,Box ,Stack,IconButton} from '@mui/material';
import React from 'react';
import TitlePage from '../../components/TitlePage';
import Transaction from './components/Transactionprops';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import { useAppSelector } from '../../store/hooks';
import { TransactionType, selectAllTransactions } from '../../store/modules/TransactionsSlice';

const Home: React.FC = () => {
  const transactions = useAppSelector(selectAllTransactions);
  return (
    <>
      <Grid container spacing={4}>
        <Grid item>
          <TitlePage title="Transações" />
        </Grid>
        <Grid item xs={12}>
          {transactions?.map((t) => (
            <Transaction key={t.id} mode={t.type} description={t.descripition} value={t.value}/>
          
          ))}
        </Grid>
      </Grid>
      <Box>
        <Stack direction="row" spacing={1}> 
          <IconButton  aria-label="transacao">
            <AddchartRoundedIcon sx={{cursor: 'pointer'}}/>
          </IconButton>      
        </Stack>
      </Box>
    </>
  );
};

export default Home;
