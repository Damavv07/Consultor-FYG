
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface MedicationDetailProps {
  medication: {
    name: string;
    manufacturer: string;
    activeIngredient: string;
    sideEffects: string[];
    substitutes: string[];
    description: string;
  };
  onClose: () => void;
}

const MedicationDetail = ({ medication, onClose }: MedicationDetailProps) => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onClose}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="w-4 h-4 mr-2 rotate-90" />
          Volver
        </Button>

        <Card className="bg-card border-border mb-6">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground">{medication.name}</CardTitle>
                <p className="text-muted-foreground">{medication.manufacturer}</p>
                <Badge variant="outline" className="mt-2">{medication.activeIngredient}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{medication.description}</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border mb-6">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Efectos Secundarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {medication.sideEffects.map((effect, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-yellow-400 mt-1">⚠️</span>
                  <span className="text-muted-foreground">{effect}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Sustitutos Genéricos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {medication.substitutes.map((substitute, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-foreground font-medium">{substitute}</span>
                  <Badge variant="secondary">Genérico</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicationDetail;
