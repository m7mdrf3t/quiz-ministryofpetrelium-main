import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ar: {
    "title": "مسابقة البترول",
    "subtitle": "اختبر معلوماتك عن عالم النفط والطاقة",
    "questionInfo": "١٥ سؤال • ٣ اختيارات لكل سؤال",
    "startQuiz": "ابدأ المسابقة",
    "result": "النتيجة:",
    "from": "من",
    "goBack": "العودة للبداية",
    "winMessage": "مبروك الفوز",
    "loseMessage": "حظ اوفر المرك القادمة",
    "notFound": "الصفحة غير موجودة",
    "question": "سؤال",
    "score": "نقطة",
  },
  en: {
    "title": "Petroleum Quiz",
    "subtitle": "Test your knowledge about the world of oil and energy",
    "questionInfo": "15 Questions • 3 Options per Question",
    "startQuiz": "Start Quiz",
    "result": "Result:",
    "from": "out of",
    "goBack": "Back to Start",
    "winMessage": "Congratulations!",
    "loseMessage": "Better luck next time!",
    "notFound": "Page Not Found",
    "question": "Question",
    "score": "Point",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
