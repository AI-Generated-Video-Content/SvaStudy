import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

interface PlaceholderImageProps {
  text: string;
  width?: number;
  height?: number;
  className?: string;
  subject?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  text, 
  width = 600, 
  height = 400,
  className = '',
  subject = ''
}) => {
  const generateGradient = (text: string) => {
    // Generate a deterministic gradient based on the text
    const hash = text.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    // Generate color for dark theme - more vibrant and darker
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 60) % 360;
    
    return `linear-gradient(135deg, hsl(${h1}, 80%, 30%), hsl(${h2}, 80%, 15%))`;
  };

  return (
    <div 
      className={`flex items-center justify-center relative overflow-hidden ${className}`}
      style={{ 
        width, 
        height,
        background: generateGradient(subject || text) 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      <FaPlayCircle className="absolute text-purple-300 opacity-80 text-5xl z-10" />
      <div className="text-white text-center p-4 z-10 absolute bottom-0 left-0 right-0">
        <p className="text-lg font-semibold truncate">{text}</p>
      </div>
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>
    </div>
  );
};

export default PlaceholderImage; 