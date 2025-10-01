import { Card } from './ui/card';

export function TypographySection() {
  return (
    <Card className="p-6">
      <h3 className="mb-6">Typografie</h3>
      
      {/* Primary Font */}
      <div className="mb-8">
        <h4 className="mb-4">Hauptschrift: Inter</h4>
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-3xl font-bold text-gray-900">Cloud-Lösungen für die Zukunft</p>
            <p className="text-sm text-gray-500 mt-1">Heading 1 - Bold, 30px</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">Professionelle IT-Services</p>
            <p className="text-sm text-gray-500 mt-1">Heading 2 - Semibold, 24px</p>
          </div>
          <div>
            <p className="text-xl font-medium text-gray-800">Beratung & Implementierung</p>
            <p className="text-sm text-gray-500 mt-1">Heading 3 - Medium, 20px</p>
          </div>
          <div>
            <p className="text-base text-gray-700">Wir bieten moderne Cloud-Lösungen für Unternehmen jeder Größe. Unsere Expertise umfasst Beratung, Implementierung und Support.</p>
            <p className="text-sm text-gray-500 mt-1">Body Text - Regular, 16px</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Drei Gründerfreunde mit einer Mission</p>
            <p className="text-sm text-gray-500 mt-1">Caption - Regular, 14px</p>
          </div>
        </div>
      </div>

      {/* Secondary Font */}
      <div className="mb-8">
        <h4 className="mb-4">Akzentschrift: Space Grotesk</h4>
        <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
          <div style={{ fontFamily: 'monospace' }}>
            <p className="text-2xl font-bold text-blue-900">IMAN CLOUD</p>
            <p className="text-sm text-blue-600 mt-1">Logo & Headlines - Bold</p>
          </div>
          <div style={{ fontFamily: 'monospace' }}>
            <p className="text-lg font-medium text-blue-800">TECH SOLUTIONS</p>
            <p className="text-sm text-blue-600 mt-1">Subheadings - Medium</p>
          </div>
        </div>
      </div>

      {/* Font Combinations */}
      <div>
        <h4 className="mb-4">Schrift-Kombinationen</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <div style={{ fontFamily: 'monospace' }}>
              <p className="text-xl font-bold text-blue-600 mb-2">CLOUD SERVICES</p>
            </div>
            <p className="text-gray-700">Moderne Infrastrukturen für Ihr Unternehmen. Skalierbar, sicher und zuverlässig.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div style={{ fontFamily: 'monospace' }}>
              <p className="text-xl font-bold text-cyan-600 mb-2">IT CONSULTING</p>
            </div>
            <p className="text-gray-700">Strategische Beratung und maßgeschneiderte Lösungen für Ihre digitale Transformation.</p>
          </div>
        </div>
      </div>

      {/* Typography Scale */}
      <div className="mt-8">
        <h4 className="mb-4">Typografie-Skala</h4>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-gray-900">Aa</div>
          <div className="text-3xl font-semibold text-gray-800">Aa</div>
          <div className="text-2xl font-medium text-gray-700">Aa</div>
          <div className="text-xl text-gray-700">Aa</div>
          <div className="text-lg text-gray-600">Aa</div>
          <div className="text-base text-gray-600">Aa</div>
          <div className="text-sm text-gray-500">Aa</div>
          <div className="text-xs text-gray-500">Aa</div>
        </div>
      </div>
    </Card>
  );
}