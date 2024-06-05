import React from 'react';
import { Typography } from '@mui/material';
import { PaletteMode } from '@mui/material';

interface HomePageProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}
const HomePage = ({ mode, toggleColorMode }: HomePageProps) => {
  return (
    <Typography variant="h4" gutterBottom>
      홈 컴포넌트
    </Typography>
  );
};

export default HomePage;
