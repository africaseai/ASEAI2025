import { Card, CardContent } from "@/components/ui/card";

const Program = () => {
  const schedule = [
    {
      time: "9:00 - 10:30",
      wednesday: {
        title: "Registration & Welcome Ceremony",
      },
      thursday: {
        speaker: "Moataz Chouchen",
        title: "Towards understanding code review practices",
      },
      friday: {
        speaker: "Makram Soui",
        title: "AI for user experience design",
      },
    },
    {
      time: "10:30 - 11:00",
      wednesday: { title: "Coffee Break" },
      thursday: { title: "Coffee Break" },
      friday: { title: "Coffee Break" },
    },
    {
      time: "11:00 - 12:30",
      wednesday: {
        speaker: "Ali Ouni",
        title: "AI-Powered Solutions for Software Engineering in the Era of Generative AI",
      },
      thursday: {
        speaker: "Latifa Ben Arfa",
        title: "Génie logiciel augmenté : l'évolution des outils à l'ère de l'IA",
      },
      friday: {
        title: "REGNOLOGY Inspiring Use Cases",
      },
    },
    {
      time: "12:30 - 13:30",
      wednesday: { title: "Lunch" },
      thursday: { title: "Lunch" },
      friday: { title: "Lunch" },
    },
    {
      time: "13:30 - 15:00",
      wednesday: {
        speaker: "Mohamed Tounsi",
        title: "AI Applied to Software Engineering: Future Trends",
      },
      thursday: {
        speaker: "Med Wiem Mkaouer",
        title: "Bridging the Gap: AI-Driven Software Testing and Quality Assurance",
      },
      friday: {
        title: "Student Panel Session",
      },
    },
    {
      time: "15:00 - 16:30",
      wednesday: {
        speaker: "Montassar Ben Messaoud",
        title: "AI-Driven Bug Management: From Detection to Resolution",
      },
      thursday: {
        speaker: "Meriem Zhioua",
        title: "VERMEG: A Vision for AI",
      },
      friday: {
        title: "Closing Ceremony",
      },
    },
    {
      time: "16:30 - 17:30",
      wednesday: {
        title: "VERMEG Inspiring Use Cases",
      },
      thursday: {
        title: "Research Panel Session",
      },
      friday: null,
    },
  ];

  return (
    <section id="program" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Summer School Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold border border-border">Time</th>
                  <th className="p-4 text-left font-semibold border border-border">Wednesday 11/06</th>
                  <th className="p-4 text-left font-semibold border border-border">Thursday 12/06</th>
                  <th className="p-4 text-left font-semibold border border-border">Friday 13/06</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium border border-border bg-muted/30">
                      {row.time}
                    </td>
                    <td className="p-4 border border-border">
                      {row.wednesday && (
                        <div>
                          {row.wednesday.speaker && (
                            <div className="font-semibold text-primary mb-1">
                              {row.wednesday.speaker}
                            </div>
                          )}
                          <div className={row.wednesday.speaker ? "text-sm" : ""}>
                            {row.wednesday.title}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-border">
                      {row.thursday && (
                        <div>
                          {row.thursday.speaker && (
                            <div className="font-semibold text-primary mb-1">
                              {row.thursday.speaker}
                            </div>
                          )}
                          <div className={row.thursday.speaker ? "text-sm" : ""}>
                            {row.thursday.title}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border border-border">
                      {row.friday && (
                        <div>
                          {row.friday.speaker && (
                            <div className="font-semibold text-primary mb-1">
                              {row.friday.speaker}
                            </div>
                          )}
                          <div className={row.friday.speaker ? "text-sm" : ""}>
                            {row.friday.title}
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-8">
            {["Wednesday 11/06", "Thursday 12/06", "Friday 13/06"].map((day, dayIndex) => (
              <Card key={day} className="border-0 shadow-lg" style={{ boxShadow: "var(--card-shadow)" }}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{day}</h3>
                  <div className="space-y-4">
                    {schedule.map((row, rowIndex) => {
                      const dayData = dayIndex === 0 ? row.wednesday : dayIndex === 1 ? row.thursday : row.friday;
                      if (!dayData) return null;
                      return (
                        <div key={rowIndex} className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-muted-foreground mb-1">
                            {row.time}
                          </div>
                          {dayData.speaker && (
                            <div className="font-semibold text-primary">
                              {dayData.speaker}
                            </div>
                          )}
                          <div className="text-sm">{dayData.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
