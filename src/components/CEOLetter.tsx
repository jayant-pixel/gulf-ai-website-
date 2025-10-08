const CEOLetter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                A note from our founder: building AI-first enterprises in the Gulf
              </h2>
              
              <div className="space-y-4 text-lg text-black/80">
                <p>
                  At GulfAI, we believe AI adoption is not about replacing teams — it's about amplifying human intelligence.
                </p>
                <p>
                  Our mission is to help Gulf enterprises deploy AI systems that respect cultural context, support bilingual experiences, and deliver measurable ROI.
                </p>
                <p>
                  From healthcare to finance to manufacturing, GulfAI builds tools that are fast to deploy, easy to scale, and built for lasting impact.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <img 
                src="https://res.cloudinary.com/dslutbftw/image/upload/v1759914875/CEO_letter-Photoroom_ktxkv5.png" 
                alt="CEO Letter Illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOLetter;
