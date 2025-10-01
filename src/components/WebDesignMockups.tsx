import { Card } from './ui/card';
import { Button } from './ui/button';
import { Cloud, Network, Shield, Zap, ArrowRight, Menu } from 'lucide-react';

export function WebDesignMockups() {
  return (
    <Card className="p-6">
      <h3 className="mb-6">Web Design Konzepte</h3>
      
      {/* Landing Page Header */}
      <div className="mb-8">
        <h4 className="mb-4">Landing Page Header</h4>
        <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
          {/* Navigation */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl tracking-tight">
                  <span className="font-semibold text-gray-900">Iman</span>{' '}
                  <span className="font-light text-blue-600">Cloud</span>
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Über uns</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Kontakt</a>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                  Beratung buchen
                </Button>
              </div>
              <Menu className="md:hidden w-6 h-6 text-gray-600" />
            </div>
          </div>
          
          {/* Hero Section */}
          <div className="px-6 py-12 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Cloud-Lösungen für die 
                <span className="text-blue-600"> digitale Zukunft</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Wir sind drei Gründerfreunde, die Ihr Unternehmen mit modernen 
                IT-Services und Cloud-Technologien in die digitale Zukunft führen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-600">
                  Services entdecken
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-8">
        <h4 className="mb-4">Services Übersicht</h4>
        <div className="border-2 border-gray-200 rounded-lg bg-white p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von der strategischen Beratung bis zur technischen Implementierung - 
              wir begleiten Sie auf Ihrem Weg in die Cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Sichere und effiziente Migration Ihrer Infrastruktur in die Cloud.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Security</h3>
              <p className="text-gray-600 mb-4">
                Umfassende Sicherheitslösungen für Ihre digitale Infrastruktur.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps</h3>
              <p className="text-gray-600 mb-4">
                Automatisierung und Optimierung Ihrer Entwicklungsprozesse.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Mehr erfahren <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout Preview */}
      <div>
        <h4 className="mb-4">Mobile Ansicht</h4>
        <div className="max-w-sm border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded">
                  <Cloud className="w-4 h-4 text-white m-1" />
                </div>
                <span className="font-semibold text-gray-900">Iman Cloud</span>
              </div>
              <Menu className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Cloud-Lösungen für Ihr Business
            </h2>
            <p className="text-gray-600 mb-4">
              Moderne IT-Services von drei erfahrenen Gründerfreunden.
            </p>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-2">
              Beratung anfragen
            </Button>
            <Button variant="outline" className="w-full border-blue-200 text-blue-600">
              Services ansehen
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}