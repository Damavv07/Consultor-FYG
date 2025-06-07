
import React from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse-medical"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-secondary rounded-full animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent rounded-full animate-pulse-medical" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Radar scanning effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
        <div className="relative w-full h-full border border-primary rounded-full">
          <div className="absolute inset-0 border border-primary rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-48 bg-gradient-to-t from-primary to-transparent origin-bottom animate-radar-sweep transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Logo placeholder - centered */}
      <div className="z-10 mb-8">
        <div className="w-32 h-32 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary/30 backdrop-blur-sm">
          <div className="text-4xl font-bold text-primary">FYG</div>
        </div>
      </div>

      {/* App title */}
      <h1 className="text-4xl font-bold text-center mb-2 z-10">
        Consultor FYG
      </h1>
      
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-sm z-10">
        Tu asistente inteligente para medicamentos y farmacias
      </p>

      {/* Scanning line effect */}
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scanning"></div>

      {/* Start button */}
      <Button 
        onClick={onStart}
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-2xl z-10 shadow-lg transition-all duration-300 hover:scale-105"
      >
        Comenzar
      </Button>

      {/* Bottom pulse indicators */}
      <div className="absolute bottom-8 flex space-x-4 z-10">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
