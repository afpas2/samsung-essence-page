import { useEffect } from 'react';

const SchedulingSection = () => {
  useEffect(() => {
    // Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.onload = () => {
      (window as any).Cal('init', { origin: 'https://cal.com' });
      (window as any).Cal('inline', { 
        elementOrSelector: '#my-cal-inline', 
        calLink: 'alexandre-pereira' 
      });
    };
    
    // Initialize Cal function if it doesn't exist
    if (!(window as any).Cal) {
      (window as any).Cal = function () {
        const cal = (window as any).Cal;
        const args = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          cal.q.push(args);
          return;
        }
        const api = function () {
          const f = cal.ns[args[0]];
          if (f) {
            f.apply(this, args);
          } else {
            cal.q.push(args);
          }
        };
        const iframe = document.querySelector('#my-cal-inline');
        api.call(iframe);
      };
    }

    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Agende uma demonstração
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve um horário com nossos especialistas para conhecer melhor os produtos Galaxy
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div 
              id="my-cal-inline" 
              className="w-full h-[600px] overflow-auto"
              style={{ minHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;