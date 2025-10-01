import { Card } from './ui/card';
import { Cloud, Shield, Headphones, Cog, ArrowRight } from 'lucide-react';

export function ServiceAreas() {
  return (
    <Card className="p-8">
      <h3 className="text-center mb-8">Unsere Service-Bereiche</h3>
      
      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 border-2 border-blue-200 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-blue-900">Cloud-Migration & -Beratung</h4>
          </div>
          <p className="text-blue-800 mb-4">
            Strategische Planung und sichere Umsetzung Ihres Weges in die Cloud.
          </p>
          <ul className="space-y-2 text-blue-700 text-sm mb-4">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Cloud-Readiness Assessment
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Migrationsstrategie & -planung
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              AWS, Azure, Google Cloud Setup
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Hybrid- & Multi-Cloud Architekturen
            </li>
          </ul>
          <p className="text-blue-600 text-sm italic">
            "Von On-Premise in die Cloud – sicher, strategisch, skalierbar."
          </p>
        </div>

        <div className="p-6 border-2 border-green-200 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-green-900">IT-Security & Compliance</h4>
          </div>
          <p className="text-green-800 mb-4">
            Umfassende Sicherheitslösungen für Ihre digitale Infrastruktur.
          </p>
          <ul className="space-y-2 text-green-700 text-sm mb-4">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Security Audits & Penetration Tests
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              GDPR & ISO 27001 Compliance
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Backup & Disaster Recovery
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Endpoint & Network Security
            </li>
          </ul>
          <p className="text-green-600 text-sm italic">
            "Ihre Daten und Systeme in sicheren Händen."
          </p>
        </div>

        <div className="p-6 border-2 border-orange-200 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-orange-900">IT-Support & Managed Services</h4>
          </div>
          <p className="text-orange-800 mb-4">
            Proaktive Betreuung und reaktiver Support für Ihre IT-Landschaft.
          </p>
          <ul className="space-y-2 text-orange-700 text-sm mb-4">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              24/7 Monitoring & Support
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Proaktive Wartung & Updates
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Help Desk & User Support
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Performance Monitoring
            </li>
          </ul>
          <p className="text-orange-600 text-sm italic">
            "Ihre IT läuft – wir sorgen dafür."
          </p>
        </div>

        <div className="p-6 border-2 border-purple-200 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-400 rounded-lg flex items-center justify-center">
              <Cog className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-purple-900">Individuelle IT-Lösungen</h4>
          </div>
          <p className="text-purple-800 mb-4">
            Maßgeschneiderte Lösungen für spezielle Anforderungen.
          </p>
          <ul className="space-y-2 text-purple-700 text-sm mb-4">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Custom Software Development
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              API Integrationen
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Workflow Automatisierung
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              DevOps & CI/CD Pipelines
            </li>
          </ul>
          <p className="text-purple-600 text-sm italic">
            "Einzigartige Herausforderungen brauchen einzigartige Lösungen."
          </p>
        </div>
      </div>

      {/* Service Process */}
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="text-center text-gray-900 mb-6">Unser Service-Ansatz</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">1</div>
            <h5 className="text-gray-900 mb-2">Analyse</h5>
            <p className="text-gray-600 text-sm">Wir verstehen Ihre Situation und Ziele</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">2</div>
            <h5 className="text-gray-900 mb-2">Strategie</h5>
            <p className="text-gray-600 text-sm">Maßgeschneiderte Lösungskonzepte entwickeln</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">3</div>
            <h5 className="text-gray-900 mb-2">Umsetzung</h5>
            <p className="text-gray-600 text-sm">Professionelle Implementation mit minimalen Ausfällen</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">4</div>
            <h5 className="text-gray-900 mb-2">Betreuung</h5>
            <p className="text-gray-600 text-sm">Langfristige Partnerschaft und kontinuierliche Optimierung</p>
          </div>
        </div>
      </div>
    </Card>
  );
}