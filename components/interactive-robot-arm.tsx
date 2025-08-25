'use client';

import { useEffect, useRef, useState } from 'react';

export function InteractiveRobotArm() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 300 });
  const [isWelding, setIsWelding] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 800;
        const y = ((e.clientY - rect.top) / rect.height) * 600;
        setMousePosition({ x, y });
        setIsWelding(true);

        // Stop welding effect after a short delay
        setTimeout(() => setIsWelding(false), 200);
      }
    };

    const svg = svgRef.current;
    if (svg) {
      svg.addEventListener('mousemove', handleMouseMove);
      return () => svg.removeEventListener('mousemove', handleMouseMove);
    }
    // Return empty cleanup function if no svg
    return () => {};
  }, []);

  // Calculate arm angle based on mouse position
  const pivotX = 400;
  const pivotY = 200;
  const dx = mousePosition.x - pivotX;
  const dy = mousePosition.y - pivotY;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;

  // Calculate torch position
  const length = 120;
  const rad = (angle + 90) * (Math.PI / 180);
  const torchX = pivotX + Math.cos(rad) * length;
  const torchY = pivotY + Math.sin(rad) * length;

  return (
    <div className='w-full h-64 md:h-80 bg-gray-900 rounded-2xl overflow-hidden relative'>
      <svg
        ref={svgRef}
        viewBox='0 0 800 600'
        className='w-full h-full cursor-crosshair'
      >
        {/* Base */}
        <rect x='390' y='200' width='20' height='150' fill='#666' />

        {/* Arm Group */}
        <g transform={`rotate(${angle} ${pivotX} ${pivotY})`}>
          <rect x='395' y='200' width='10' height='120' fill='#999' />

          {/* Torch */}
          <circle cx='400' cy='320' r='5' fill='#f00' />
        </g>

        {/* Welding Effects */}
        {isWelding && (
          <g>
            {/* Sparks */}
            <polygon
              points={`${torchX},${torchY} ${torchX - 5},${torchY + 10} ${torchX + 5},${torchY + 10}`}
              fill='yellow'
              opacity='0.8'
            />
            <polygon
              points={`${torchX - 3},${torchY} ${torchX - 8},${torchY + 8} ${torchX + 2},${torchY + 8}`}
              fill='orange'
              opacity='0.6'
            />

            {/* Smoke */}
            <ellipse
              cx={torchX}
              cy={torchY}
              rx='8'
              ry='8'
              fill='rgba(200,200,200,0.4)'
            />

            {/* Bright welding light */}
            <circle
              cx={torchX}
              cy={torchY}
              r='15'
              fill='rgba(255,255,255,0.3)'
            />
          </g>
        )}

        {/* Grid lines for industrial feel */}
        <defs>
          <pattern
            id='grid'
            width='50'
            height='50'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M 50 0 L 0 0 0 50'
              fill='none'
              stroke='rgba(255,255,255,0.1)'
              strokeWidth='1'
            />
          </pattern>
        </defs>
        <rect width='800' height='600' fill='url(#grid)' />
      </svg>

      {/* Instructions */}
      <div className='absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm'>
        Mouse ile robot kolunu kontrol edin
      </div>
    </div>
  );
}
