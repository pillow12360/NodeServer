import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Footer from './layout/Footer';
import AppAppBar from './layout/AppAppBar';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          paddingTop: '64px', // AppBar height adjustment
          paddingBottom: '64px', // Extra padding if needed
        }}
      >
        <Router>
          <CssBaseline />
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
