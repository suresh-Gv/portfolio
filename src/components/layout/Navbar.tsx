import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiMoon, HiSun, HiX } from 'react-icons/hi';
import { useThemeMode } from '../../context/ThemeContext';
import { navItems } from '../../data/portfolioData';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../utils/scrollTo';

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const activeId = useScrollSpy(sectionIds);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <HiX size={24} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            selected={activeId === item.href.replace('#', '')}
            sx={{ mx: 1, borderRadius: 2 }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled
            ? mode === 'light'
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(15, 23, 42, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? 1 : 0,
          borderColor: 'divider',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            SG
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => {
                const isActive = activeId === item.href.replace('#', '');
                return (
                  <Box
                    key={item.href}
                    component="button"
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      px: 1.5,
                      py: 1,
                      fontFamily: 'inherit',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'primary.main' : 'text.secondary',
                      position: 'relative',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item.label}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 20,
                            height: 3,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </Box>
                );
              })}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton onClick={toggleTheme} aria-label="Toggle theme" color="inherit">
              {mode === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
            </IconButton>
            {isMobile && (
              <IconButton onClick={() => setMobileOpen(true)} aria-label="Open menu" color="inherit">
                <HiMenuAlt3 size={24} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
