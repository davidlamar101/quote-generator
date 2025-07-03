import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';

interface HeaderProps {
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
}

export default function Header({ onToggleTheme, isDarkMode }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
              <a href="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>
                My Favorite Quotes
              </a>
            </MenuItem>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quote Generator
          </Typography>

          {onToggleTheme && (
            <Button
              color="inherit"
              onClick={onToggleTheme}
              startIcon={isDarkMode ? <Brightness7Icon /> : <Brightness2Icon />}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
