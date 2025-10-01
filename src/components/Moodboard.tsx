import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cloud, Users, Zap, Shield, Network, Lightbulb } from 'lucide-react';

export function Moodboard() {
  return (
    <Card className="p-6">
      <h3 className="mb-6">Moodboard & Brand Spirit</h3>
      
      {/* Visual Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="aspect-square rounded-lg overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5Mjk3NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cloud Computing Technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTkzMTkyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Office Team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaWdpdGFsJTIwbmV0d29yayUyMGFic3RyYWN0fGVufDF8fHx8MTc1OTMxMzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital Network Abstract" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzU5MzQ2ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Startup Team Working" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Brand Values */}
      <div className="mb-8">
        <h4 className="mb-4">Brand Values & Stimmung</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="font-medium text-blue-900">Cloud-First</p>
            <p className="text-sm text-blue-700">Moderne Technologie</p>
          </div>
          <div className="p-4 bg-cyan-50 rounded-lg text-center">
            <Users className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
            <p className="font-medium text-cyan-900">Team Spirit</p>
            <p className="text-sm text-cyan-700">Drei Gründerfreunde</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="font-medium text-orange-900">Energie</p>
            <p className="text-sm text-orange-700">Startup Dynamik</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <Shield className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <p className="font-medium text-gray-900">Vertrauen</p>
            <p className="text-sm text-gray-700">Professionalität</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <Network className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-medium text-green-900">Vernetzung</p>
            <p className="text-sm text-green-700">Connectivity</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <Lightbulb className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="font-medium text-purple-900">Innovation</p>
            <p className="text-sm text-purple-700">Zukunftsorientiert</p>
          </div>
        </div>
      </div>

      {/* Style Keywords */}
      <div className="mb-8">
        <h4 className="mb-4">Style Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'Modern', 'Clean', 'Minimalistisch', 'Professionell', 'Vertrauenswürdig',
            'Nahbar', 'Tech-Expertise', 'Startup-Spirit', 'Innovativ', 'Dynamisch',
            'Cloud-Native', 'Digital-First', 'Beratung', 'Freundschaftlich'
          ].map((keyword) => (
            <span key={keyword} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Design Elements */}
      <div>
        <h4 className="mb-4">Design-Elemente</h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-medium text-gray-900 mb-3">Formen & Patterns</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg"></div>
                <span className="text-sm text-gray-600">Abgerundete Ecken</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Fließende Verläufe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-blue-400 border-dashed rounded"></div>
                <span className="text-sm text-gray-600">Gestrichelte Linien</span>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-3">Texturen & Effekte</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white border border-gray-200 rounded shadow-sm"></div>
                <span className="text-sm text-gray-600">Subtile Schatten</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-50 rounded"></div>
                <span className="text-sm text-gray-600">Viel Weißraum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded"></div>
                <span className="text-sm text-gray-600">Sanfte Hintergründe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}