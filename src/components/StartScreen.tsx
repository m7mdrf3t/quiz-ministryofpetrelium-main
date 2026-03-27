import { Droplets } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="text-center max-w-lg">
        <div className="mx-auto w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-8 animate-pulse-glow">
          <Droplets className="w-12 h-12 text-primary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-4 text-glow text-primary">
          مسابقة البترول
        </h1>

        <p className="text-lg text-muted-foreground mb-2">
          اختبر معلوماتك عن عالم النفط والطاقة
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          ١٥ سؤال • ٣ اختيارات لكل سؤال
        </p>

        <button
          onClick={onStart}
          className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-xl 
                     hover:brightness-110 transition-all duration-300 
                     shadow-lg shadow-primary/30 hover:shadow-primary/50
                     active:scale-95"
        >
          ابدأ المسابقة
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
