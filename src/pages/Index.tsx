import { useState, useCallback } from "react";
import { getRandomModel, shuffleArray, type Question } from "@/data/quizData";
import StartScreen from "@/components/StartScreen";
import QuestionScreen from "@/components/QuestionScreen";
import EndScreen from "@/components/EndScreen";
import { useFullscreen } from "@/hooks/useFullscreen";

type Screen = "start" | "quiz" | "end";

const Index = () => {
  useFullscreen();
  const [screen, setScreen] = useState<Screen>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = useCallback(() => {
    const model = getRandomModel();
    setQuestions(shuffleArray(model.questions));
    setCurrentIndex(0);
    setScore(0);
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) setScore((s) => s + 1);
    if (currentIndex + 1 >= questions.length) {
      setScreen("end");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, questions.length]);

  return (
    <div className="min-h-screen bg-background">
      {screen === "start" && <StartScreen onStart={handleStart} />}
      {screen === "quiz" && questions[currentIndex] && (
        <QuestionScreen
          key={currentIndex}
          question={questions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          score={score}
          onAnswer={handleAnswer}
        />
      )}
      {screen === "end" && (
        <EndScreen score={score} totalQuestions={questions.length} onRestart={handleStart} />
      )}
    </div>
  );
};

export default Index;
