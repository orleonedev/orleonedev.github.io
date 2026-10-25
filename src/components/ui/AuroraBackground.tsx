import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

// Palette as RGB triplets so alpha can vary per draw call.
const palette = {
  white: '255 255 255',
  accent: '227 168 75',
  indigo: '129 140 248',
  violet: '167 139 250',
  teal: '45 212 191',
};

// Most dots are white; a few are tinted so the glass above them picks up some colour.
const dotColors = [
  palette.white, palette.white, palette.white, palette.white,
  palette.accent, palette.indigo, palette.violet, palette.teal,
];

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
}

interface Wave {
  color: string;
  baseY: number; // fraction of viewport height
  amplitude: number;
  wavelength: number;
  speed: number;
  offset: number;
}

const waves: Wave[] = [
  { color: palette.accent, baseY: 0.28, amplitude: 60, wavelength: 900, speed: 0.00012, offset: 0 },
  { color: palette.indigo, baseY: 0.55, amplitude: 90, wavelength: 1300, speed: -0.00008, offset: 2 },
  { color: palette.teal, baseY: 0.8, amplitude: 50, wavelength: 700, speed: 0.0001, offset: 4 },
];

const SCROLL_PARALLAX = 0.12;

const createDots = (width: number, height: number): Dot[] => {
  const count = Math.round(Math.min(130, Math.max(40, (width * height) / 11000)));
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.006 + Math.random() * 0.014; // px per ms
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: 0.6 + Math.random() * 1.3,
      color: dotColors[Math.floor(Math.random() * dotColors.length)],
      phase: Math.random() * Math.PI * 2,
    };
  });
};

const waveY = (wave: Wave, x: number, height: number, t: number) =>
  wave.baseY * height +
  Math.sin((x / wave.wavelength) * Math.PI * 2 + wave.offset + t * wave.speed * Math.PI * 2) * wave.amplitude +
  Math.sin((x / (wave.wavelength * 0.43)) * Math.PI * 2 + t * wave.speed * 3) * wave.amplitude * 0.25;

/**
 * Background of slowly drifting dots that link up with thin lines when they're close,
 * plus a few flowing wave lines with a light travelling along each.
 */
const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let frame = 0;
    let last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = createDots(width, height);
    };

    const draw = (t: number) => {
      const dt = Math.min(t - last, 50);
      last = t;
      ctx.clearRect(0, 0, width, height);

      // Flowing wave lines
      for (const wave of waves) {
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgb(${wave.color} / 0)`);
        gradient.addColorStop(0.5, `rgb(${wave.color} / 0.28)`);
        gradient.addColorStop(1, `rgb(${wave.color} / 0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 8) {
          const y = waveY(wave, x, height, t);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // A small light travelling along the wave
        const travel = ((t * Math.abs(wave.speed) * 1.6 + wave.offset / 6) % 1) * width;
        const px = wave.speed > 0 ? travel : width - travel;
        const py = waveY(wave, px, height, t);
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 14);
        glow.addColorStop(0, `rgb(${wave.color} / 0.9)`);
        glow.addColorStop(1, `rgb(${wave.color} / 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fill();
      }

      // Drift dots and wrap them around the edges
      for (const dot of dots) {
        dot.x += dot.vx * dt;
        dot.y += dot.vy * dt;
        if (dot.x < -20) dot.x = width + 20;
        else if (dot.x > width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = height + 20;
        else if (dot.y > height + 20) dot.y = -20;
      }

      // Scroll parallax: the field slides slower than the content
      const shift = (window.scrollY * SCROLL_PARALLAX) % (height + 40);
      const positions = dots.map((dot) => {
        let y = dot.y - shift;
        if (y < -20) y += height + 40;
        return { x: dot.x, y };
      });

      // Thin lines between nearby dots
      const maxDist = width < 768 ? 110 : 150;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            ctx.strokeStyle = `rgb(${dots[i].color} / ${(1 - dist / maxDist) * 0.22})`;
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(positions[j].x, positions[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots, with a gentle twinkle
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const alpha = 0.45 + Math.sin(t * 0.0015 + dot.phase) * 0.3;
        ctx.fillStyle = `rgb(${dot.color} / ${alpha})`;
        ctx.beginPath();
        ctx.arc(positions[i].x, positions[i].y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion) {
        draw(last);
      } else {
        last = performance.now();
        frame = requestAnimationFrame(loop);
      }
    };

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };

    const handleResize = () => {
      resize();
      if (reduceMotion) draw(last);
    };

    // With reduced motion the frame is static, so redraw on scroll to keep the parallax in step.
    const handleScroll = () => {
      if (reduceMotion) draw(last);
    };

    resize();
    start();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink pointer-events-none">
      {/* Neutral grey light falloff, so the glass has some tonal variation to pick up */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgb(255_255_255/0.06),transparent_65%),radial-gradient(ellipse_60%_50%_at_100%_60%,rgb(255_255_255/0.03),transparent_60%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Vignette keeps text readable at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(10_10_10/0.7)_100%)]" />
    </div>
  );
};

export default AuroraBackground;
