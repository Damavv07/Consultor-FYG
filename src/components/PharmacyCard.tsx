
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PharmacyCardProps {
  name: string;
  address: string;
  distance: string;
  price: number;
  availability: 'available' | 'limited' | 'out-of-stock';
  rating?: number;
  onNotifyMe?: () => void;
  onViewDetails?: () => void;
}

const PharmacyCard = ({ 
  name, 
  address, 
  distance, 
  price, 
  availability, 
  rating,
  onNotifyMe,
  onViewDetails 
}: PharmacyCardProps) => {
  const getAvailabilityColor = () => {
    switch (availability) {
      case 'available': return 'bg-green-500';
      case 'limited': return 'bg-yellow-500';
      case 'out-of-stock': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getAvailabilityText = () => {
    switch (availability) {
      case 'available': return 'Disponible';
      case 'limited': return 'Stock limitado';
      case 'out-of-stock': return 'Agotado';
      default: return 'Sin información';
    }
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
            <p className="text-muted-foreground text-sm">{address}</p>
            <p className="text-accent text-sm font-medium">{distance}</p>
          </div>
          {rating && (
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Badge className={`${getAvailabilityColor()} text-white`}>
              {getAvailabilityText()}
            </Badge>
            {availability === 'available' && (
              <span className="text-2xl font-bold text-primary">${price}</span>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          {availability === 'out-of-stock' && onNotifyMe && (
            <Button 
              variant="outline" 
              onClick={onNotifyMe}
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Notificarme
            </Button>
          )}
          {onViewDetails && (
            <Button 
              onClick={onViewDetails}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Ver detalles
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PharmacyCard;
