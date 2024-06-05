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
import Three from './components/ThreeComponent/Three';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import getLPTheme from './theme/getLPTheme';

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={showCustomTheme}
      onChange={toggleCustomTheme}
      aria-label="Platform"
      sx={{
        backgroundColor: 'background.default',
        '& .Mui-selected': {
          pointerEvents: 'none',
        },
      }}
    >
      <ToggleButton value>
        <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
        커스텀 테마
      </ToggleButton>
      <ToggleButton value={false}>Material Design 2</ToggleButton>
    </ToggleButtonGroup>
  );
}

const App: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          paddingTop: '15%', // AppBar height adjustment
          paddingBottom: '60px', // Extra padding if needed
          bgcolor: 'background.default',
        }}
      >
        <Router>
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

          <CssBaseline />
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage mode={mode} toggleColorMode={toggleColorMode} />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/three.js" element={<Three />} />
          </Routes>
          <Footer mode={mode} toggleColorMode={toggleColorMode} />
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
