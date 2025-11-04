import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import registrationQR from "@/assets/registration-qr.png";

const Registration = () => {
  const nonResidentFees = [
    { category: "Virtual Attendance", fee: "Free" },
  ];

  const residentFees = [
    { category: "🎓 Student or Postdoctoral Fellow", fee: "250 TND" },
    { category: "🧑‍🏫 Faculty / Researcher", fee: "350 TND" },
    { category: "🏢 Industry Participant", fee: "500 TND" },
  ];

  return (
    <section id="registration" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Registration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-4">
              Secure your spot at Africa's premier AI & Software Engineering event
            </p>
          </div>

          {/* Registration CTA */}
          <Card className="border-2 border-primary/20 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Register?</h3>
                  <p className="text-muted-foreground">
                    Fill out our registration form to join this transformative event. 
                    Early registration is recommended as spots are limited.
                  </p>
                  <Button 
                    size="lg" 
                    className="gap-2"
                    asChild
                  >
                    <a 
                      href="https://forms.gle/VAE3EkRv3TdjWbdE8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href="https://forms.gle/VAE3EkRv3TdjWbdE8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <img 
                        src={registrationQR} 
                        alt="Registration Form QR Code" 
                        className="w-32 h-32 md:w-40 md:h-40"
                      />
                      <p className="text-xs text-center mt-2 text-muted-foreground">Scan to register</p>
                    </div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Fees */}
          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Registration Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Non-residents */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Non-residents in Tunisia</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Category</th>
                        <th className="text-right py-3 px-4 font-semibold">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nonResidentFees.map((item, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4">{item.category}</td>
                          <td className="py-3 px-4 text-right font-semibold text-primary">
                            {item.fee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Residents */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Residents in Tunisia</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Category</th>
                        <th className="text-right py-3 px-4 font-semibold">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {residentFees.map((item, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4">{item.category}</td>
                          <td className="py-3 px-4 text-right font-semibold text-primary">
                            {item.fee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg space-y-3">
                <h4 className="font-semibold">What's Included</h4>
                <p className="text-sm">
                  The registration fee covers participation in all sessions, access to materials and certificates, 
                  welcome kit, coffee breaks, lunch, and networking events.
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Note: Participants are responsible for their own travel and accommodation expenses unless 
                  otherwise indicated by a sponsorship grant.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Registration Deadline */}
          <div className="text-center">
            <Card className="inline-block border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardContent className="p-6 space-y-4">
                <p className="text-lg">
                  <span className="text-muted-foreground">Extended registration deadline:</span>{" "}
                  <span className="font-bold text-primary text-xl">7 November 2025</span>
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    ⚠️ Note: We have a limited number of places. The registration for in-person attendance will be closed as soon as the number of available places is filled.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Admitted participants will be notified via email by November 9th, 2025
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Payment Method */}
          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Bank Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 bg-muted/50 p-6 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Bank Name</p>
                  <p className="font-semibold">STB BANK (Société Tunisienne de Banque)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bank Address</p>
                  <p className="font-semibold">SOUSSE MEDINA agency, Av. Sadok MKADDEM, 4054 Sahloul Sousse</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Beneficiary Account Name</p>
                  <p className="font-semibold">ASSOCIATION ATPU</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Beneficiary Address</p>
                  <p className="font-semibold">INSTITUT SUP DES SCIENCES APPLIQUES, 4000 ULA</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">MaF</p>
                  <p className="font-mono text-sm">1925409 X P/N 000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Swift Code</p>
                  <p className="font-mono text-sm">STBKTNTT</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">IBAN</p>
                  <p className="font-mono text-sm">TN59 1050 8051 1060 7277 8878</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Currency</p>
                  <p className="font-semibold">TND (Tunisian Dinar)</p>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm font-medium">
                  Please send a copy of the payment receipt to:{" "}
                  <a href="mailto:africa.aseai@gmail.com" className="text-primary hover:underline">
                    africa.aseai@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Registration;
