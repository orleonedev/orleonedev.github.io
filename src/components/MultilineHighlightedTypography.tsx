import React from 'react';
import { Typography, Box } from '@mui/material';
import type { TypographyProps } from '@mui/material/Typography';

interface MultilineHighlighterProps extends TypographyProps {
  text: string;
  highlightPhrases?: string[];
  highlightColor?: string;
  highlightWeight?: 'bold' | 'normal' | number;
}

/**
 * Reusable component that:
 * - Renders multiline text (respects \n)
 * - Highlights specified phrases
 */
export const MultilineHighlightedTypography: React.FC<MultilineHighlighterProps> = ({
  text,
  highlightPhrases = [],
  highlightColor = 'yellow',
  highlightWeight = 'bold',
  ...typographyProps
}) => {
  const renderText = () => {
    if (highlightPhrases.length === 0) return text;

    // Escape regex characters in phrases
    const escapeRegex = (s: string) =>
      s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    // Create one big regex with all phrases
    const pattern = highlightPhrases
      .map(escapeRegex)
      .sort((a, b) => b.length - a.length) // Match longer phrases first
      .join('|');

    const regex = new RegExp(`(${pattern})`, 'gi');

    // Split text into lines
    const lines = text.split('\n');

    return lines.map((line, i) => {
      const parts = line.split(regex);
      return (
        <React.Fragment key={i}>
          {parts.map((part, j) => {
            const isMatch = highlightPhrases.some(
              phrase => phrase.toLowerCase() === part.toLowerCase()
            );
            return isMatch ? (
              <Box
                key={j}
                component="span"
                sx={{
                  color: highlightColor,
                  fontWeight: highlightWeight,
                  display: 'inline',
                }}
              >
                {part}
              </Box>
            ) : (
              <React.Fragment key={j}>{part}</React.Fragment>
            );
          })}
          <br />
        </React.Fragment>
      );
    });
  };

  return <Typography {...typographyProps}>{renderText()}</Typography>;
};
