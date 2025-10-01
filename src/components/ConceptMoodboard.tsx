import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cloud, Users, TrendingUp, Shield, Handshake, Zap } from 'lucide-react';

export function ConceptMoodboard() {
  return (
    <Card className="p-8">
      <h3 className="text-center mb-8">Visual Inspiration & Moodboard</h3>
      
      {/* Hero Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="aspect-square rounded-lg overflow-hidden relative group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbGxhYm9yYXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc1OTM0NzgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Zusammenarbeit</p>
          </div>
        </div>
        
        <div className="aspect-square rounded-lg overflow-hidden relative group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758598497505-b5479091c1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwZ3Jvd3RofGVufDF8fHx8MTc1OTM0NzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business Growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Wachstum</p>
          </div>
        </div>
        
        <div className="aspect-square rounded-lg overflow-hidden relative group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTkzNDc4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="IT Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Beratung</p>
          </div>
        </div>
        
        <div className="aspect-square rounded-lg overflow-hidden relative group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkzNDc4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cloud Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Cloud Tech</p>
          </div>
        </div>
        
        <div className="aspect-square rounded-lg overflow-hidden relative group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1518876204695-602a80a9c6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc1OTM0NzgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Partnership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Partnerschaft</p>
          </div>
        </div>
        
        <div className="aspect-square rounded-lg overflow-hidden relative group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1726065235158-d9c3f817f331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTkyNjcxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital Transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">Transformation</p>
          </div>
        </div>
      </div>

      {/* Mood Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-blue-900">Cloud & Digital</h4>
          </div>
          <div className="space-y-2 text-blue-800 text-sm">
            <p>• Moderne Technologie-Aesthetik</p>
            <p>• Saubere, minimale Interfaces</p>
            <p>• Blau-Töne für Vertrauen</p>
            <p>• Abstrakte Tech-Patterns</p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-gray-900">Business Professional</h4>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>• Seriöse Office-Umgebungen</p>
            <p>• Handshakes & Meetings</p>
            <p>• Anzug-Business-Look</p>
            <p>• Neutrale, professionelle Farben</p>
          </div>
        </div>

        <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-orange-900">Startup Spirit</h4>
          </div>
          <div className="space-y-2 text-orange-700 text-sm">
            <p>• Dynamische Team-Situationen</p>
            <p>• Casual, moderne Arbeitsplätze</p>
            <p>• Energie & Bewegung</p>
            <p>• Warme, einladende Atmosphäre</p>
          </div>
        </div>
      </div>

      {/* Visual Keywords */}
      <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg mb-8">
        <h4 className="text-center text-gray-900 mb-6">Visual Keywords & Stimmung</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-gray-900 mb-2">Technologie</h5>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>Cloud-Infrastrukturen</p>
              <p>Netzwerk-Verbindungen</p>
              <p>Digitale Interfaces</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-gray-900 mb-2">Wachstum</h5>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>Erfolgreiche Teams</p>
              <p>Steigende Diagramme</p>
              <p>Expansion & Skalierung</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-gray-900 mb-2">Partnership</h5>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>Vertrauensvolle Gespräche</p>
              <p>Gemeinsame Projektarbeit</p>
              <p>Langfristige Beziehungen</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-gray-900 mb-2">Sicherheit</h5>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>Geschützte Daten</p>
              <p>Stabile Systeme</p>
              <p>Vertrauenswürdigkeit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Emotions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-lg text-center">
          <h5 className="mb-2">Primärfarben</h5>
          <p className="text-blue-100 text-sm">Vertrauen • Technologie • Professionalität</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-400 text-white rounded-lg text-center">
          <h5 className="mb-2">Akzentfarben</h5>
          <p className="text-orange-100 text-sm">Energie • Innovation • Dynamik</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-lg text-center">
          <h5 className="mb-2">Neutrale Töne</h5>
          <p className="text-gray-300 text-sm">Stabilität • Klarheit • Balance</p>
        </div>
      </div>
    </Card>
  );
}