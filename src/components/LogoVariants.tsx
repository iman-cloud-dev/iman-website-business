import { Cloud, Network, Layers, Zap } from 'lucide-react';
import { Card } from './ui/card';

export function LogoVariants() {
  return (
    <Card className="p-6">
      <h3 className="mb-6">Logo-Varianten</h3>
      
      {/* Primary Logo - Symbol + Text */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-4">Primäres Logo</p>
        <div className="flex items-center gap-3 p-4 bg-white border rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-2xl tracking-tight text-gray-900">
              <span className="font-semibold">Iman</span>{' '}
              <span className="font-light text-blue-600">Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Logos */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-sm text-muted-foreground mb-4">Alternative 1</p>
          <div className="flex items-center gap-3 p-4 bg-white border rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
              <Network className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl tracking-tight">
              <span className="text-cyan-600">Iman</span>
              <span className="text-gray-700">Cloud</span>
            </span>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-4">Alternative 2</p>
          <div className="flex items-center gap-3 p-4 bg-white border rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-500 rounded">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl tracking-tight text-gray-800">IMAN CLOUD</span>
          </div>
        </div>
      </div>

      {/* Icon Only Versions */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">Icon-Varianten</p>
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
            <Cloud className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
            <Network className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-500 rounded">
            <Layers className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg">
            <Zap className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

      {/* Typography Only */}
      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-4">Nur Typografie</p>
        <div className="space-y-3">
          <div className="text-3xl tracking-tight">
            <span className="text-blue-600">IMAN</span>{' '}
            <span className="text-gray-700">CLOUD</span>
          </div>
          <div className="text-2xl">
            <span className="text-cyan-500">iman</span>
            <span className="text-gray-600">cloud</span>
          </div>
          <div className="text-2xl font-light">
            <span className="text-blue-700">Iman</span>{' '}
            <span className="text-gray-800">Cloud</span>
          </div>
        </div>
      </div>
    </Card>
  );
}