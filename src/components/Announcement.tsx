const Announcement = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            🎉🌍 Big News for ASEAI 2025 Participants! ❄️🤖
          </h3>
          
          <div className="space-y-2 text-sm md:text-base">
            <p>
              We are excited to announce that the African Winter School on Software Engineering & AI (ASEAI 2025) is now offering a limited number of <strong>free and reduced registration fees</strong> for in-person attendees! 💡
            </p>
            
            <p>
              🎓 These financial aids are designed to support students, early-career researchers, and participants who are eager to join us onsite in Sousse, Tunisia.
              <br />
              💻 Everyone can participate and learn from our world-class lineup of speakers 🌎
            </p>
            
            <div className="pt-2">
              <p className="font-semibold">📅 Event Dates: November 24–26, 2025</p>
              <p className="font-semibold">📍 Venue: Novation City, Sousse, Tunisia (Hybrid)</p>
            </div>
            
            <div className="pt-3 space-y-2">
              <p>
                📝 <a 
                  href="https://lnkd.in/ejQmzGMs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:no-underline font-semibold"
                >
                  Apply now for a waived or reduced in-person registration fee
                </a>
              </p>
              <p>⏰ <strong>Deadline: 10 November 2025</strong> — don't miss your chance!</p>
              <p>
                🌍 <a 
                  href="https://lnkd.in/d9T9-dPs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  For more details
                </a>
              </p>
            </div>
            
            <p className="pt-2 font-semibold italic">
              Let's make history together at Africa's first Winter School on Software Engineering & AI — building bridges, empowering researchers, and shaping the future! 💪✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
