import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const SchedulingSection = () => {
  const { theme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"reuniao-samsung"});
      cal("ui", {"theme": theme,"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [theme]);

  return (
    <section className="bg-background py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4">
              Schedule a Demonstration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best time to discover Samsung products and see how Galaxy AI can transform your digital experience.
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-card rounded-2xl shadow-lg border border-card-border overflow-hidden">
            <Cal 
              namespace="reuniao-samsung"
              calLink="alexandre-pereira/reuniao-samsung"
              style={{width:"100%",height:"600px",overflow:"scroll"}}
              config={{"layout":"month_view","theme":theme}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;