import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// The theme is now fixed to dark mode.
const getDesignTokens = (): ThemeOptions => ({
  palette: {
    mode: 'dark',
    // Palette values for a high-contrast, developer-focused dark mode
    primary: {
      main: '#D49D3A',
      contrastText: '#000000',
    },
    secondary: {
      main: '#94A3B8',
      contrastText: '#000000',
    },
    background: {
      default: '#0D1117', // A deep, near-black like GitHub's dark mode
      paper: '#161B22',   // A slightly lighter paper color
    },
    text: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
    },
    divider: '#374151',
  },
  shape: {
    borderRadius: 8, // A slightly less rounded, more professional corner
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Modern UI font
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 700, fontSize: '2.25rem' },
    h3: { fontWeight: 600, fontSize: '2rem' },
    h4: { fontWeight: 600, fontSize: '1.75rem' },
    button: {
        textTransform: 'none',
        fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Flat contained buttons for a minimal look
        containedPrimary: {
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none',
            }
        },
        containedSecondary: {
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none',
            }
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none',
          // Use a semi-opaque background color from the palette for a more solid look
          backgroundColor: 'rgba(22, 27, 34, 0.85)', // #161B22 with 85% opacity
          backdropFilter: 'blur(8px)', // The blur effect remains
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
        }),
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                backgroundImage: 'none', // Ensure no gradient from MUI
            }
        }
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                border: '1px solid',
                borderColor: theme.palette.divider,
            })
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: ({ theme }) => ({
                // Modern input field style
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                },
            }),
            notchedOutline: ({ theme }) => ({
                borderColor: theme.palette.divider,
            }),
        }
    }
  },
});


// The main ThemeRegistry component, now simplified for a single mode
interface ThemeRegistryProps {
  children: React.ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  // The theme is now created once and memoized.
  const theme = useMemo(() => {
    let baseTheme = createTheme(getDesignTokens());
    
    return createTheme(baseTheme, {
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // No transition needed for body since the theme doesn't change
            },
          },
        },
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
