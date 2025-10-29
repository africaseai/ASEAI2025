import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Program = () => {
  const schedule = [
    {
      day: "Day 1 - Monday, Nov 24, 2025",
      sessions: [
        { time: "08:30–09:00", title: "Registration & Welcome Coffee", speaker: "", type: "" },
        { time: "09:00–09:15", title: "Opening Remarks", speaker: "", type: "" },
        { time: "09:15–10:15", title: "Keynote - The AIware Revolution: Forging the Future of Agentic Software Engineering", speaker: "Ahmed E. Hassan", type: "In-person" },
        { time: "10:15–10:45", title: "Coffee Break", speaker: "", type: "" },
        { time: "10:45–11:45", title: "How to Write a Great Research Paper?", speaker: "Simon Peyton Jones", type: "Remote" },
        { time: "11:45–12:30", title: "On Hard and Soft Skills for Surviving Your PhD Journey", speaker: "Walid Maalej", type: "In-person" },
        { time: "12:30–12:45", title: "Gathering and Group Photo", speaker: "", type: "" },
        { time: "12:45–14:00", title: "Lunch", speaker: "", type: "" },
        { time: "14:00–14:45", title: "Navigating Graduate School and Beyond", speaker: "Sarah Nadi", type: "Remote" },
        { time: "14:45–15:30", title: "Keynote - Towards a framework for the development of SPAs (smart process applications)", speaker: "Hafedh Mili", type: "In-person" },
        { time: "15:30–16:00", title: "Coffee Break", speaker: "", type: "" },
        { time: "16:00–16:30", title: "Panel Discussion – open (students mentoring, best research practices, AI and SE in the Next Decade)", speaker: "", type: "In-person" },
        { time: "16:30–17:15", title: "Human in the Loop: Responsible Use of Generative AI Tools in Software Engineering Practice", speaker: "Bruce Maxim", type: "Remote" },
        { time: "17:15–18:00", title: "LLM-Based Agents for Software Engineering: Benefits and Drawbacks", speaker: "Fatemeh Fard", type: "Remote" },
        { time: "18:00–20:30", title: "Cultural Evening & Tunisian Dinner", speaker: "", type: "" },
      ]
    },
    {
      day: "Day 2 - Tuesday, Nov 25, 2025",
      sessions: [
        { time: "08:30–09:30", title: "Keynote - No Size Fits All: Goal-Driven Alignment of LLMs for Software Engineering Tasks", speaker: "Houari Sahraoui", type: "In-person" },
        { time: "09:30–10:30", title: "Keynote - Generative Requirements Engineering and Design", speaker: "Walid Maalej", type: "In-person" },
        { time: "10:30–11:00", title: "Coffee Break", speaker: "", type: "" },
        { time: "11:00–11:30", title: "Ask me anything: How to integrate AI into computer science and SE curriculum at the undergraduate levels", speaker: "Ahmed E. Hassan", type: "In-person" },
        { time: "11:30–12:30", title: "Keynote - On Software Architecture", speaker: "Michel Chaudron", type: "In-person" },
        { time: "12:30–13:45", title: "Lunch", speaker: "", type: "" },
        { time: "13:45–14:30", title: "The Chronicles of a Professor", speaker: "Sarah Nadi", type: "Remote" },
        { time: "14:30–15:30", title: "Keynote - Automated Testing and Safety Analysis of Deep Learning Systems", speaker: "Lionel Briand", type: "Remote" },
        { time: "15:30–16:00", title: "Coffee Break", speaker: "", type: "" },
        { time: "16:00–16:45", title: "System assurance in the era of Large Language Models", speaker: "Alvine B. Belle", type: "Remote" },
        { time: "16:45–17:30", title: "11 steps to structuring a manuscript", speaker: "Prasun Lala", type: "Remote" },
        { time: "17:30–18:15", title: "Think like a reviewer", speaker: "Prasun Lala", type: "Remote" },
      ]
    },
    {
      day: "Day 3 - Wednesday, Nov 26, 2025",
      sessions: [
        { time: "08:30–09:15", title: "From Monolith to Microservices — A Journey Powered by LLMs and the Open Challenges Ahead", speaker: "Mohamed Aymen Saied", type: "In-person" },
        { time: "09:15–10:00", title: "Automating Code Review: From Heuristics to Agentic AI", speaker: "Moataz Chouchen", type: "In-person" },
        { time: "10:00–10:30", title: "Coffee Break", speaker: "", type: "" },
        { time: "10:30–11:00", title: "Code Clones and Beyond: My Reflections on Software Engineering Research", speaker: "Katsuro Inoue", type: "Remote" },
        { time: "11:00–11:45", title: "Phinally Done: Life Beyond the Ivory Tower", speaker: "Zadia Codabux", type: "In-person" },
        { time: "11:45–12:30", title: "Collaborations Result in Diverse Thinking, Novelty and Different Perspectives", speaker: "Raula Gaikovina Kula", type: "Remote" },
        { time: "12:30–14:00", title: "Lunch", speaker: "", type: "" },
        { time: "14:00–15:00", title: "About Empirical Studies on Software Quality", speaker: "Yann-Gaël Guéhéneuc", type: "Remote" },
        { time: "15:00–16:00", title: "Ensuring Trust: Testing and Safety Monitoring of Deep Learning-based Systems", speaker: "Manel Abdellatif", type: "Remote" },
        { time: "16:00–16:30", title: "Coffee Break", speaker: "", type: "" },
        { time: "16:30–17:30", title: "Kickstart Your AI Journey with NVIDIA's Free Learning Resources", speaker: "Fatima Tambajang", type: "Remote" },
        { time: "17:30–17:45", title: "Closing Remarks & Certificates", speaker: "", type: "" },
        { time: "17:45–18:00", title: "Farewell Coffee", speaker: "", type: "" },
      ]
    },
    {
      day: "Day 4 - Thursday, Nov 27, 2025",
      sessions: [
        { time: "10:00–11:00", title: "NVIDIA Certifications (Building RAG Agents with LLMs and Building Conversational AI applications)", speaker: "Maha KHEMAJA", type: "Remote", description: "Building RAG Agents with LLMs: Agents powered by large language models (LLMs) have shown great retrieval capability. This certificate explains how to deploy an agent system in practice with the flexibility to scale the system to meet the demands of users and customers.\n\nBuilding Conversational AI applications: Learn how to quickly build and deploy a conversational AI pipeline including transcription, NLP, and Speech" },
      ]
    }
  ];

  const isBreakOrEvent = (title: string) => {
    const keywords = ["Coffee Break", "Lunch", "Registration", "Opening Remarks", "Gathering", "Cultural Evening", "Closing Remarks", "Farewell"];
    return keywords.some(keyword => title.includes(keyword));
  };

  return (
    <section id="program" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Winter School Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              Four-day intensive program featuring keynotes, workshops, and networking events
            </p>
          </div>

          {/* Schedule by Day */}
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary sticky top-0 bg-background/95 backdrop-blur py-4 z-10 border-b">
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <Card 
                    key={sessionIndex}
                    className={`${isBreakOrEvent(session.title) ? 'bg-muted/50' : 'bg-card'} hover:shadow-lg transition-shadow`}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Time */}
                        <div className="md:w-32 flex-shrink-0">
                          <Badge variant="outline" className="font-mono text-sm">
                            {session.time}
                          </Badge>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <h4 className={`${isBreakOrEvent(session.title) ? 'text-base font-medium' : 'text-lg font-semibold'}`}>
                            {session.title}
                          </h4>
                          
                          {session.speaker && (
                            <p className="text-muted-foreground">
                              <span className="font-medium text-foreground">Speaker:</span> {session.speaker}
                            </p>
                          )}
                          
                          {session.description && (
                            <p className="text-sm text-muted-foreground whitespace-pre-line mt-2">
                              {session.description}
                            </p>
                          )}
                        </div>

                        {/* Type Badge */}
                        {session.type && (
                          <div className="flex-shrink-0">
                            <Badge 
                              variant={session.type === "In-person" ? "default" : "secondary"}
                              className="whitespace-nowrap"
                            >
                              {session.type}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
