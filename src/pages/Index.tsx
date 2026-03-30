import { useState, useCallback } from "react";
import { getRandomModel, shuffleArray, getQuestionsInLanguage, type Question } from "@/data/quizData";
import StartScreen from "@/components/StartScreen";
import QuestionScreen from "@/components/QuestionScreen";
import EndScreen from "@/components/EndScreen";
import { useFullscreen } from "@/hooks/useFullscreen";
import { useLanguage } from "@/context/LanguageContext";

type Screen = "start" | "quiz" | "end";

const Index = () => {
  useFullscreen();
  const { language } = useLanguage();
  const [screen, setScreen] = useState<Screen>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = useCallback(() => {
    const model = getRandomModel(language);
    const questionsInLanguage = getQuestionsInLanguage(model, language);
    setQuestions(shuffleArray(questionsInLanguage));
    setCurrentIndex(0);
    setScore(0);
    setScreen("quiz");
  }, [language]);

  const handleRestart = useCallback(() => {
    setScreen("start");
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
    <div className="min-h-screen" dir={language === "ar" ? "rtl" : "ltr"}>
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
        <EndScreen score={score} totalQuestions={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Index;
