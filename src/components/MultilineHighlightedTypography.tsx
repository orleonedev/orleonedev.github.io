import React from 'react';

interface MultilineHighlighterProps {
  text: string;
  highlightPhrases?: string[];
  highlightColor?: string;
  highlightWeight?: 'bold' | 'normal' | string | number;
  className?: string;
}

/**
 * Reusable component that:
 * - Renders multiline text (respects \n)
 * - Highlights specified phrases
 */
export const MultilineHighlightedTypography: React.FC<MultilineHighlighterProps> = ({
  text,
  highlightPhrases = [],
  highlightColor = '#D49D3A',
  highlightWeight = 'bold',
  className = '',
}) => {
  const renderText = () => {
    if (highlightPhrases.length === 0) {
        return text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {line}
                <br />
            </React.Fragment>
        ));
    }

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
              <span
                key={j}
                style={{
                  color: highlightColor,
                  fontWeight: highlightWeight as any,
                }}
                className="inline"
              >
                {part}
              </span>
            ) : (
              <React.Fragment key={j}>{part}</React.Fragment>
            );
          })}
          <br />
        </React.Fragment>
      );
    });
  };

  return <p className={className}>{renderText()}</p>;
};
