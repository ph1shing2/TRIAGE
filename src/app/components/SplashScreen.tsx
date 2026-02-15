import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center cursor-pointer transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="relative inline-block">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="animate-pulse-slow"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="#FFD700"
              stroke="#FFA500"
              strokeWidth="3"
            />

            <g className={`transition-all duration-200 ${isBlinking ? 'opacity-0' : 'opacity-100'}`}>
              <circle cx="70" cy="80" r="8" fill="#000" />
              <circle cx="130" cy="80" r="8" fill="#000" />
            </g>

            <g className={`transition-all duration-200 ${isBlinking ? 'opacity-100' : 'opacity-0'}`}>
              <line x1="60" y1="80" x2="80" y2="80" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              <line x1="120" y1="80" x2="140" y2="80" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            </g>

            <path
              d="M 60 120 Q 100 160 140 120"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="animate-pulse-smile"
            />
          </svg>
        </div>

        <p className="mt-8 text-2xl font-semibold text-gray-700 animate-fade-in">
          Welcome to TRIAGE
        </p>
        <p className="mt-2 text-sm text-gray-500 animate-fade-in-delay">
          Click anywhere to continue
        </p>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pulse-smile {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-pulse-smile {
          animation: pulse-smile 1.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
