import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Registration = () => {
  const fees = [
    { category: "Student / Postdoc", fee: "200 DT" },
    { category: "Academic", fee: "300 DT" },
    { category: "Industry professional", fee: "400 DT" },
  ];

  return (
    <section id="registration" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Registration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Registration Fees */}
          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Registration Fees (Including Taxes - TTC)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Category</th>
                      <th className="text-right py-3 px-4 font-semibold">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((item, index) => (
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

              <div className="bg-primary/10 p-6 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Special Offer</Badge>
                </div>
                <p className="text-sm">
                  A limited number of <span className="font-semibold">discounted registrations</span> will be
                  offered to selected students
                </p>
                <p className="text-sm font-medium">
                  Deadline for student support application: <span className="text-primary">31/05/2025</span>
                </p>
                <p className="text-xs text-muted-foreground italic">
                  * Applications will be evaluated based on academic merit and motivation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium">
                Bank transfer or Order Form to the Association Smart Marketing Advisors
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 bg-muted/50 p-6 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Bank Name</p>
                  <p className="font-semibold">UNION INTERNATIONALE DES BANQUES (UIB)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Branch</p>
                  <p className="font-semibold">AGENCE PLACE DE L'ASSEMBLE NATIONAL</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Account Holder</p>
                  <p className="font-semibold">ASSOCIATION SMART MARKETING</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">RIB</p>
                  <p className="font-mono text-sm">12 008 0000093007287 24</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">IBAN</p>
                  <p className="font-mono text-sm">TN59 12 008 0000093007287 24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Deadline */}
          <div className="text-center">
            <Card className="inline-block border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardContent className="p-6">
                <p className="text-lg">
                  <span className="text-muted-foreground">Registration deadline:</span>{" "}
                  <span className="font-bold text-primary text-xl">06/06/2025</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
