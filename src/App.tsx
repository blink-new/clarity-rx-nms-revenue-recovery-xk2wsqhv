import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Upload, FileText, Download, Mail, Star, Pill, CheckCircle } from 'lucide-react';

interface MissedClaim {
  drugName: string;
  dispenseDate: string;
  patientRef: string;
  reason: string;
  estimatedValue: number;
}

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockMissedClaims: MissedClaim[] = [
    { drugName: "Atorvastatin 20mg", dispenseDate: "2024-01-15", patientRef: "PT001", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Metformin 500mg", dispenseDate: "2024-01-14", patientRef: "PT002", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Amlodipine 5mg", dispenseDate: "2024-01-13", patientRef: "PT003", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Omeprazole 20mg", dispenseDate: "2024-01-12", patientRef: "PT004", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Simvastatin 40mg", dispenseDate: "2024-01-11", patientRef: "PT005", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Lisinopril 10mg", dispenseDate: "2024-01-10", patientRef: "PT006", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Levothyroxine 100mcg", dispenseDate: "2024-01-09", patientRef: "PT007", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Salbutamol 100mcg", dispenseDate: "2024-01-08", patientRef: "PT008", reason: "No claim submitted", estimatedValue: 28 },
    { drugName: "Paracetamol 500mg", dispenseDate: "2024-01-07", patientRef: "PT009", reason: "No claim submitted", estimatedValue: 28 }
  ];

  const totalMissedRevenue = mockMissedClaims.reduce((sum, claim) => sum + claim.estimatedValue, 0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleAnalysis = () => {
    if (!uploadedFile) return;
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const testimonials = [
    { name: "Sarah Mitchell", pharmacy: "Mitchell's Pharmacy, Manchester", quote: "Found £460 of missed claims in 2 minutes!" },
    { name: "David Thompson", pharmacy: "Thompson Chemist, Birmingham", quote: "Finally a tool that helps with compliance and money." },
    { name: "Emma Roberts", pharmacy: "Roberts Pharmacy, Leeds", quote: "ClarityRx is now part of our daily routine." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-500 rounded-full flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">ClarityRx</span>
            </div>
            <Button onClick={() => document.getElementById('file-upload')?.click()}>
              <Upload className="w-4 h-4 mr-2" />
              Upload CSV
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-violet-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  💷 Recover Missed NHS Revenue Instantly
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Upload your PMR export file and get a report of missed NMS claims in seconds.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload CSV File
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-violet-100 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-violet-500 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600">Professional pharmacy data analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workflow UI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Your PMR Data</h2>
            <p className="text-lg text-gray-600">Supports CSV, Excel, and TXT files from all major PMR systems</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>PMR File Upload</CardTitle>
              <CardDescription>Upload your daily PMR export file to analyze missed NMS opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="file-upload">PMR Export File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls,.txt"
                  onChange={handleFileUpload}
                  className="mt-2"
                />
                {uploadedFile && (
                  <p className="text-sm text-green-600 mt-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {uploadedFile.name} uploaded successfully
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="nms-list">NMS Drug List (Optional)</Label>
                <Input
                  id="nms-list"
                  type="file"
                  accept=".pdf,.xlsx,.docx"
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave empty to use the default NHS BSA drug list
                </p>
              </div>

              <Button 
                onClick={handleAnalysis}
                disabled={!uploadedFile || isAnalyzing}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Run Analysis
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📋 Missed NMS Opportunities</h2>
              
              {/* Summary Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">{mockMissedClaims.length}</div>
                      <div className="text-sm text-gray-600">Missed Claims</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">£{totalMissedRevenue}</div>
                      <div className="text-sm text-gray-600">Potential Revenue</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">£{Math.round(totalMissedRevenue / mockMissedClaims.length)}</div>
                      <div className="text-sm text-gray-600">Avg per Claim</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium">
                  You missed {mockMissedClaims.length} claims = ~£{totalMissedRevenue} in potential revenue
                </p>
              </div>
            </div>

            {/* Results Table */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug Name</TableHead>
                      <TableHead>Dispense Date</TableHead>
                      <TableHead>Patient Ref</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead className="text-right">Est. Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMissedClaims.map((claim, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{claim.drugName}</TableCell>
                        <TableCell>{claim.dispenseDate}</TableCell>
                        <TableCell>{claim.patientRef}</TableCell>
                        <TableCell>
                          <Badge variant="destructive">{claim.reason}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">£{claim.estimatedValue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Export PDF Report
              </Button>
              <Button variant="outline" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Send to my inbox
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by UK Pharmacists</h2>
            <p className="text-lg text-gray-600">See what independent pharmacists are saying about ClarityRx</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium text-gray-900 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">{testimonial.name}</div>
                    <div>{testimonial.pharmacy}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Try It Free</h2>
          <p className="text-lg text-gray-600 mb-8">Start with a 2-week free trial. Then only £29/month.</p>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">£29</div>
              <div className="text-gray-600 mb-6">per month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Unlimited PMR file uploads
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Automated NMS claim detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  PDF & email reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-500 hover:from-blue-700 hover:to-violet-600" size="lg">
                Start Free Trial
              </Button>
              <p className="text-sm text-gray-500 mt-4">No credit card required</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-500 rounded-full flex items-center justify-center">
                  <Pill className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">ClarityRx</span>
              </div>
              <p className="text-gray-400">
                Helping UK pharmacists recover missed NHS revenue through intelligent PMR analysis.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="md:flex md:justify-between md:items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 ClarityRx. All rights reserved.
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Contact Us</h4>
              <div className="space-y-2">
                <Textarea 
                  placeholder="Your message..." 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button variant="outline" className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;