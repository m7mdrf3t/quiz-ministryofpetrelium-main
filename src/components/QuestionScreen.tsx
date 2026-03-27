import { useState } from "react";
import type { Question } from "@/data/quizData";

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionScreen = ({ question, questionNumber, totalQuestions, score, onAnswer }: QuestionScreenProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
    const isCorrect = index === question.correctAnswer;
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedIndex(null);
      setAnswered(false);
    }, 1200);
  };

  const getOptionStyle = (index: number) => {
    if (!answered || selectedIndex === null) {
      return "bg-secondary hover:bg-secondary/80 border-border text-secondary-foreground";
    }
    if (index === question.correctAnswer) {
      return "bg-success/20 border-success text-success-foreground ring-2 ring-success";
    }
    if (index === selectedIndex && index !== question.correctAnswer) {
      return "bg-wrong/20 border-wrong text-wrong-foreground ring-2 ring-wrong";
    }
    return "bg-secondary/50 border-border text-muted-foreground opacity-50";
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6 animate-fade-in" key={questionNumber}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm text-muted-foreground font-semibold">
          سؤال {questionNumber} / {totalQuestions}
        </span>
        <div className="flex items-center gap-2 bg-primary/15 px-4 py-2 rounded-full">
          <span className="text-primary font-bold text-lg">{score}</span>
          <span className="text-primary/70 text-sm">نقطة</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-secondary rounded-full mb-10 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-relaxed">
          {question.question}
        </h2>

        {/* Options */}
        <div className="w-full space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={answered}
              className={`w-full p-5 rounded-lg border-2 text-lg font-semibold 
                         transition-all duration-300 text-right
                         ${getOptionStyle(index)}
                         ${!answered ? "cursor-pointer active:scale-[0.98]" : "cursor-default"}`}
            >
              <span className="text-muted-foreground/60 ml-3">
                {["أ", "ب", "ج"][index]})
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
