import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>Home</Typography>
    </Layout>
  )
}

export default HomePage;
