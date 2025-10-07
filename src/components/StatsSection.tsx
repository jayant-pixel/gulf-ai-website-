import { Button } from "@/components/ui/button";

const stats = [
  { company: "Platform", value: 79, color: "bg-blue-600" },
  { company: "Freshdesk", value: 6, color: "bg-blue-400" },
  { company: "ZohoDesk", value: 4, color: "bg-blue-300" },
  { company: "Hubspot", value: 1, color: "bg-blue-200" },
  { company: "Zendesk", value: 0, color: "bg-gray-300" }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  We're leading the competition in every single category
                </h2>
                <p className="text-lg text-muted-foreground">
                  In G2's most recent User Satisfaction Ratings for Customer Service, Platform rates highest across the board. Based on over 19,000 reviews from real customers.
                </p>
                <Button variant="default" size="lg">
                  Read the G2 Report
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Number of categories won</h3>
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-medium">
                        <span>{stat.company}</span>
                        <span className="font-bold text-lg">{stat.value}</span>
                      </div>
                      <div className="h-8 bg-muted/20 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${stat.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-4 text-white font-bold`}
                          style={{
                            width: stat.value > 0 ? `${(stat.value / 79) * 100}%` : '2%',
                            minWidth: stat.value > 0 ? '50px' : '20px'
                          }}
                        >
                          {stat.value > 0 && stat.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
