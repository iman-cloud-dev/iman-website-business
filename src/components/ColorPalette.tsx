import { Card } from './ui/card';

export function ColorPalette() {
  const primaryColors = [
    { name: 'Cloud Blue', hex: '#3B82F6', rgb: 'rgb(59, 130, 246)' },
    { name: 'Ocean Cyan', hex: '#06B6D4', rgb: 'rgb(6, 182, 212)' },
    { name: 'Deep Blue', hex: '#1E40AF', rgb: 'rgb(30, 64, 175)' },
    { name: 'Sky Blue', hex: '#0EA5E9', rgb: 'rgb(14, 165, 233)' },
  ];

  const neutralColors = [
    { name: 'Pure White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)' },
    { name: 'Light Gray', hex: '#F8FAFC', rgb: 'rgb(248, 250, 252)' },
    { name: 'Medium Gray', hex: '#64748B', rgb: 'rgb(100, 116, 139)' },
    { name: 'Dark Gray', hex: '#1E293B', rgb: 'rgb(30, 41, 59)' },
  ];

  const accentColors = [
    { name: 'Energy Orange', hex: '#F97316', rgb: 'rgb(249, 115, 22)' },
    { name: 'Success Green', hex: '#10B981', rgb: 'rgb(16, 185, 129)' },
    { name: 'Warning Amber', hex: '#F59E0B', rgb: 'rgb(245, 158, 11)' },
  ];

  const ColorSection = ({ title, colors }: { title: string; colors: typeof primaryColors }) => (
    <div className="mb-6">
      <h4 className="mb-3">{title}</h4>
      <div className="space-y-3">
        {colors.map((color) => (
          <div key={color.name} className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-lg border border-gray-200 shadow-sm"
              style={{ backgroundColor: color.hex }}
            />
            <div>
              <p className="font-medium text-gray-900">{color.name}</p>
              <p className="text-sm text-gray-600">{color.hex}</p>
              <p className="text-xs text-gray-500">{color.rgb}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="p-6">
      <h3 className="mb-6">Farbpalette</h3>
      
      <ColorSection title="Primärfarben" colors={primaryColors} />
      <ColorSection title="Neutrale Farben" colors={neutralColors} />
      <ColorSection title="Akzentfarben" colors={accentColors} />

      {/* Color Combinations */}
      <div className="mt-8">
        <h4 className="mb-4">Farbkombinationen</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
            <p className="text-white font-medium">Primary Gradient</p>
            <p className="text-blue-100 text-sm">Haupt-Verlauf für CTAs</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border">
            <p className="text-gray-900 font-medium">Neutral Background</p>
            <p className="text-gray-600 text-sm">Für Hintergründe</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-400 rounded-lg">
            <p className="text-white font-medium">Accent Gradient</p>
            <p className="text-orange-100 text-sm">Für Highlights</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg">
            <p className="text-white font-medium">Tech Gradient</p>
            <p className="text-blue-100 text-sm">Für Tech-Elemente</p>
          </div>
        </div>
      </div>
    </Card>
  );
}