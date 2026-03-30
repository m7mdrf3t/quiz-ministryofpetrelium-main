import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2">
      <button
        onClick={() => setLanguage("ar")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          language === "ar"
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          language === "en"
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
