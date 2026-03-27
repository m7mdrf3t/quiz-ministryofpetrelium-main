import { Trophy, RotateCcw, Star } from "lucide-react";

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const EndScreen = ({ score, totalQuestions, onRestart }: EndScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage >= 90) return "ممتاز! أنت خبير بترول! 🏆";
    if (percentage >= 70) return "أحسنت! أداء رائع! 🌟";
    if (percentage >= 50) return "جيد! يمكنك التحسن أكثر 💪";
    return "حاول مرة أخرى! 📚";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="text-center max-w-lg">
        <div className="mx-auto w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center mb-8 animate-pulse-glow">
          {percentage >= 70 ? (
            <Trophy className="w-14 h-14 text-primary" />
          ) : (
            <Star className="w-14 h-14 text-primary" />
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-black mb-4 text-primary text-glow">
          انتهت المسابقة!
        </h1>

        <p className="text-xl text-muted-foreground mb-8">{getMessage()}</p>

        {/* Score circle */}
        <div className="relative mx-auto w-44 h-44 mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" className="stroke-secondary" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="42" fill="none"
              className="stroke-primary"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.64} 264`}
              style={{ transition: "stroke-dasharray 1s ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-primary">{score}</span>
            <span className="text-sm text-muted-foreground">من {totalQuestions}</span>
          </div>
        </div>

        <p className="text-2xl font-bold mb-10">
          النتيجة: <span className="text-primary">{percentage}%</span>
        </p>

        <button
          onClick={onRestart}
          className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-xl
                     hover:brightness-110 transition-all duration-300
                     shadow-lg shadow-primary/30 hover:shadow-primary/50
                     active:scale-95 inline-flex items-center gap-3"
        >
          <RotateCcw className="w-5 h-5" />
          حاول مرة أخرى
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
