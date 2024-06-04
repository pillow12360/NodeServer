import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const menuItems = [
    { text: '홈', path: '/' },
    { text: '프로젝트', path: '/project' },
    { text: 'Contact', path: '/contact' },
    { text: '로그인/회원가입', path: '/signin' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4" // 제목 사이즈 조정
            noWrap
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ color: 'white', fontSize: '1.5rem' }} // 폰트 크기 증가
            >
              한동찬 포트폴리오
            </Button>
          </Typography>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{ color: 'white', display: 'block' }}
            >
              {item.text}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* AppBar에 의해 차지된 높이를 보정 */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
