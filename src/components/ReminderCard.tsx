
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlarmClock } from 'lucide-react';

interface ReminderCardProps {
  medication: string;
  time: string;
  frequency: string;
  nextDose: string;
  isActive: boolean;
  onToggle: () => void;
  onEdit: () => void;
}

const ReminderCard = ({ 
  medication, 
  time, 
  frequency, 
  nextDose, 
  isActive, 
  onToggle, 
  onEdit 
}: ReminderCardProps) => {
  return (
    <Card className={`bg-card border-border transition-all duration-300 ${isActive ? 'border-primary/50' : 'border-border'}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary/20' : 'bg-muted'}`}>
              <AlarmClock className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{medication}</h3>
              <p className="text-muted-foreground text-sm">{frequency}</p>
            </div>
          </div>
          <Badge variant={isActive ? "default" : "secondary"}>
            {isActive ? 'Activo' : 'Pausado'}
          </Badge>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Próxima dosis</p>
            <p className="font-medium text-foreground">{nextDose}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Hora</p>
            <p className="font-medium text-primary">{time}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            onClick={onToggle}
            className={`flex-1 ${isActive ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}
          >
            {isActive ? 'Pausar' : 'Activar'}
          </Button>
          <Button 
            variant="outline" 
            onClick={onEdit}
            className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            Editar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
