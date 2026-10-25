import React from 'react';

interface MultilineHighlighterProps {
  text: string;
  highlightPhrases?: string[];
  className?: string;
  highlightClassName?: string;
}

const escapeRegex = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

/**
 * Renders text split into paragraphs on blank lines, highlighting the given phrases.
 */
export const MultilineHighlightedTypography: React.FC<MultilineHighlighterProps> = ({
  text,
  highlightPhrases = [],
  className = '',
  highlightClassName = 'text-accent font-semibold',
}) => {
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const pattern = [...highlightPhrases]
    .sort((a, b) => b.length - a.length) // match longer phrases first
    .map(escapeRegex)
    .join('|');
  const regex = pattern ? new RegExp(`(${pattern})`, 'gi') : null;
  const isHighlight = (part: string) =>
    highlightPhrases.some((phrase) => phrase.toLowerCase() === part.toLowerCase());

  return (
    <div className={className}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-5 last:mb-0">
          {regex
            ? paragraph.split(regex).map((part, j) =>
                isHighlight(part) ? (
                  <span key={j} className={highlightClassName}>{part}</span>
                ) : (
                  <React.Fragment key={j}>{part}</React.Fragment>
                ),
              )
            : paragraph}
        </p>
      ))}
    </div>
  );
};
