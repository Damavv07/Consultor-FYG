
import React, { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import SearchBar from '@/components/SearchBar';
import PharmacyCard from '@/components/PharmacyCard';
import MedicationDetail from '@/components/MedicationDetail';
import ReminderCard from '@/components/ReminderCard';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('search');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedMedication, setSelectedMedication] = useState<any>(null);
  const { toast } = useToast();

  const mockPharmacies = [
    {
      name: 'Farmacia San Rafael',
      address: 'Av. Libertador 1234',
      distance: '0.5 km',
      price: 25.90,
      availability: 'available' as const,
      rating: 4.5
    },
    {
      name: 'Farmacia Central',
      address: 'Calle Principal 567',
      distance: '1.2 km',
      price: 23.50,
      availability: 'limited' as const,
      rating: 4.2
    },
    {
      name: 'Farmacia La Esperanza',
      address: 'Plaza Mayor 89',
      distance: '2.1 km',
      price: 0,
      availability: 'out-of-stock' as const,
      rating: 4.8
    }
  ];

  const mockMedication = {
    name: 'Paracetamol 500mg',
    manufacturer: 'Laboratorios ABC',
    activeIngredient: 'Acetaminofén',
    description: 'Analgésico y antipirético para el alivio del dolor leve a moderado y la fiebre.',
    sideEffects: [
      'Náuseas leves',
      'Dolor de cabeza ocasional',
      'Reacciones alérgicas raras',
      'Daño hepático en dosis altas'
    ],
    substitutes: [
      'Acetaminofén Genérico 500mg',
      'Panadol 500mg',
      'Dolex 500mg',
      'Winadol 500mg'
    ]
  };

  const mockReminders = [
    {
      id: 1,
      medication: 'Paracetamol 500mg',
      time: '08:00',
      frequency: 'Cada 8 horas',
      nextDose: 'Hoy, 4:00 PM',
      isActive: true
    },
    {
      id: 2,
      medication: 'Omeprazol 20mg',
      time: '07:30',
      frequency: 'Una vez al día',
      nextDose: 'Mañana, 7:30 AM',
      isActive: true
    },
    {
      id: 3,
      medication: 'Ibuprofeno 400mg',
      time: '12:00',
      frequency: 'Según necesidad',
      nextDose: 'Pausado',
      isActive: false
    }
  ];

  const handleSearch = (query: string) => {
    setSearchResults(mockPharmacies);
    toast({
      title: "Búsqueda realizada",
      description: `Encontramos ${mockPharmacies.length} farmacias con ${query}`,
    });
  };

  const handleNotifyMe = () => {
    toast({
      title: "Notificación activada",
      description: "Te notificaremos cuando el medicamento esté disponible.",
    });
  };

  const handleViewMedicationDetail = () => {
    setSelectedMedication(mockMedication);
  };

  const handleToggleReminder = (id: number) => {
    toast({
      title: "Recordatorio actualizado",
      description: "El estado del recordatorio ha sido cambiado.",
    });
  };

  if (showWelcome) {
    return <WelcomeScreen onStart={() => setShowWelcome(false)} />;
  }

  if (selectedMedication) {
    return (
      <MedicationDetail 
        medication={selectedMedication} 
        onClose={() => setSelectedMedication(null)} 
      />
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return (
          <div className="space-y-6">
            <div className="flex justify-center">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            {searchResults.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Farmacias cercanas</h2>
                {searchResults.map((pharmacy, index) => (
                  <PharmacyCard
                    key={index}
                    {...pharmacy}
                    onNotifyMe={handleNotifyMe}
                    onViewDetails={handleViewMedicationDetail}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case 'alerts':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Alertas</h2>
              <Bell className="w-6 h-6 text-primary" />
            </div>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Medicamentos disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <span className="text-foreground">Ibuprofeno 400mg ya está disponible en Farmacia Central</span>
                    <span className="text-xs text-green-400">Hace 2h</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <span className="text-foreground">Nuevo precio más bajo para Paracetamol en Farmacia San Rafael</span>
                    <span className="text-xs text-blue-400">Hace 1d</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'reminders':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Recordatorios</h2>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Agregar
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockReminders.map((reminder) => (
                <ReminderCard
                  key={reminder.id}
                  {...reminder}
                  onToggle={() => handleToggleReminder(reminder.id)}
                  onEdit={() => toast({ title: "Función en desarrollo", description: "La edición de recordatorios estará disponible pronto." })}
                />
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Perfil</h2>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Usuario Demo</h3>
                    <p className="text-muted-foreground">usuario@ejemplo.com</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Medicamentos guardados</span>
                    <span className="text-primary font-medium">5</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Farmacias favoritas</span>
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground">Alertas activas</span>
                    <span className="text-primary font-medium">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
