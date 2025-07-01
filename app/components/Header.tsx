import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';  // Sun icon
import Brightness2Icon from '@mui/icons-material/Brightness2';  // Moon icon

interface HeaderProps {
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
}

export default function Header({ onToggleTheme, isDarkMode }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
