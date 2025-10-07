const testimonials = [
  {
    company: "Lightspeed",
    quote: null,
    color: "bg-green-800",
    hasImage: true
  },
  {
    company: "Frameo",
    quote: null,
    color: "bg-secondary",
    hasImage: false
  },
  {
    company: "Zappt",
    quote: "Never have I seen a piece of technology so seamless to integrate.",
    author: "Sam Forde",
    role: "Merchant Support Manager, Zappt",
    color: "bg-pink-400",
    hasImage: false
  },
  {
    company: "Coda",
    quote: null,
    color: "bg-secondary",
    hasImage: false
  },
  {
    company: "Infer",
    quote: null,
    color: "bg-secondary",
    hasImage: false
  },
  {
    company: "NOO",
    quote: null,
    color: "bg-accent",
    hasImage: true
  },
  {
    company: "Zilch",
    quote: null,
    color: "bg-secondary",
    hasImage: false
  },
  {
    company: "Avazie",
    quote: "Platform has been a game-changer for us at Avazie!",
    author: "Jeff Cardoso",
    role: "Vice President Operations, Avazie",
    color: "bg-cyan-400",
    hasImage: false
  },
  {
    company: "H&R Block",
    quote: null,
    color: "bg-secondary",
    hasImage: false
  },
  {
    company: "Culture Amp",
    quote: null,
    color: "bg-accent",
    hasImage: true
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              The results speak for themselves,
              <br />
              <span className="block mt-2">so do our customers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-2xl p-6 flex flex-col justify-between min-h-[200px] transition-transform hover:scale-105 ${
                  item.quote ? 'col-span-2 row-span-2' : ''
                }`}
              >
                {item.quote ? (
                  <div className="space-y-4 text-white">
                    <p className="text-lg font-medium italic">{item.quote}</p>
                    <div className="mt-auto">
                      <p className="font-semibold">{item.author}</p>
                      <p className="text-sm opacity-90">{item.role}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-2xl font-bold text-foreground">{item.company}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
