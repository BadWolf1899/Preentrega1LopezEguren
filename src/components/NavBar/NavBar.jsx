import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';



const NavBar = () => {
    return (
      <AppBar  className="navbar" sx={{ width: '100%' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            className="logo"
          >
            <SportsBaseballIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Segundo Saque
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" className="menu-item">
              Raquetas
            </Button>
            <Button color="inherit" className="menu-item">
              Pelotas
            </Button>
            <Button color="inherit" className="menu-item">
              Vestimenta
            </Button>
            <Button color="inherit" className="menu-item">
              Varios
            </Button>
          </Stack>
        <CartWidget />

        </Toolbar>
      </AppBar>
    );
  }
  

export default NavBar;
