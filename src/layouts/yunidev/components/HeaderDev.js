import React from 'react';
import { AppBar, Box, Button, Container, 
  IconButton, Menu, MenuItem, Toolbar, 
  Typography,
} from '@mui/material';
import pathName from 'routes/pathName';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const {main} = pathName;

const pages = [
  {text:'Home', link:'#home'},
  {text:'About', link:'#about'},
  {text:'Portofolio', link:'#portofolio'},
  {text:'Contact', link:'#contact'},
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  return (
    <div className='page-header'>
        <AppBar position='fixed' color='transparent'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <Link to={main} style={{textDecoration:"none", color:"#1a2027"}}>
                  <img className='app-logo' alt="logo" src='/images/logo.png'/>
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                    keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    color:"#1a2027"
                  }}
                >
                  {pages.map((page,idx) => (
                    <MenuItem key={idx} onClick={handleCloseNavMenu}>
                      <Link to={page.link} style={{textAlign:"center"}}>{page.text}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap:'20px', justifyContent:'flex-end'}}>
                {pages.map((page,idx) => (
                  <Link className='menu-navigation'
                    key={idx}
                    to={page.link}
                  >
                    {page.text}
                  </Link>
                ))}
                <Button>Icon</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  );
};

export default Header;
