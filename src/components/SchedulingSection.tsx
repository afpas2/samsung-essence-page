import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const SchedulingSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"reuniao-samsung"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="section-title text-samsung-black mb-4">
              Agende uma Demonstração
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Escolha o melhor horário para conhecer os produtos Samsung e descobrir como a Galaxy AI pode transformar sua experiência digital.
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <Cal 
              namespace="reuniao-samsung"
              calLink="alexandre-pereira/reuniao-samsung"
              style={{width:"100%",height:"600px",overflow:"scroll"}}
              config={{"layout":"month_view","theme":"light"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;