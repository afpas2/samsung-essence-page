import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const FloatingThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(10, Math.min(window.innerWidth - 60, e.clientX - dragOffset.x));
      const newY = Math.max(10, Math.min(window.innerHeight - 60, e.clientY - dragOffset.y));
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isDragging) {
      toggleTheme();
    }
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Set initial position to bottom-right corner
  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => ({
        x: Math.max(10, Math.min(window.innerWidth - 60, prev.x)),
        y: Math.max(10, Math.min(window.innerHeight - 60, prev.y))
      }));
    };

    // Set initial position to bottom-right
    setPosition({
      x: window.innerWidth - 70,
      y: window.innerHeight - 70
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      className={`
        fixed z-50 w-12 h-12 rounded-full shadow-lg
        bg-card border border-card-border
        hover:shadow-xl hover:scale-105
        transition-all duration-300 ease-in-out
        cursor-grab active:cursor-grabbing
        flex items-center justify-center
        ${isDragging ? 'scale-110' : ''}
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: 'none',
      }}
      variant="outline"
      size="sm"
    >
      {theme === 'light' ? (
        <Sun className="w-5 h-5 text-accent transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-accent transition-transform duration-300" />
      )}
    </Button>
  );
};

export default FloatingThemeToggle;