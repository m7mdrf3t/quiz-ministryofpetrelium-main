export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
}

export interface MultilingualQuestion {
  ar: Question;
  en: Question;
}

export interface QuizModel {
  name: string;
  nameEn: string;
  questions: MultilingualQuestion[];
}

export type Language = "ar" | "en";

const model1: QuizModel = {
  name: "النموذج ١",
  nameEn: "Model 1",
  questions: [
    {
      ar: { question: "ما الوحدة المستخدمة عالمياً لقياس البترول؟", options: ["اللتر", "البرميل", "الكيلو"], correctAnswer: 1 },
      en: { question: "What is the globally used unit for measuring oil?", options: ["Liter", "Barrel", "Kilogram"], correctAnswer: 1 },
    },
    {
      ar: { question: "أين يتكون البترول في الطبيعة؟", options: ["الصخور الرسوبية", "الصخور النارية", "التربة الزراعية"], correctAnswer: 0 },
      en: { question: "Where is oil naturally formed?", options: ["Sedimentary rocks", "Igneous rocks", "Agricultural soil"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما اسم المكان الذي يتم فيه تكرير البترول؟", options: ["المصفاة", "الميناء", "المخزن"], correctAnswer: 0 },
      en: { question: "What is the name of the place where oil is refined?", options: ["Refinery", "Port", "Storage facility"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما معنى OPEC؟", options: ["منظمة الدول المصدرة للبترول", "منظمة الطاقة العالمية", "اتحاد شركات النفط"], correctAnswer: 0 },
      en: { question: "What does OPEC stand for?", options: ["Organization of Petroleum Exporting Countries", "Global Energy Organization", "Oil Companies Union"], correctAnswer: 0 },
    },
    {
      ar: { question: "عملية البحث عن البترول تسمى؟", options: ["التكرير", "التنقيب", "الاستكشاف"], correctAnswer: 2 },
      en: { question: "What is the process of searching for oil called?", options: ["Refining", "Drilling", "Exploration"], correctAnswer: 2 },
    },
    {
      ar: { question: "ما اسم منصة استخراج البترول من البحر؟", options: ["منصة الحفر", "محطة بحرية", "ناقلة نفط"], correctAnswer: 0 },
      en: { question: "What is the name of the offshore structure used to extract oil?", options: ["Drilling platform", "Offshore station", "Oil tanker"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما الاستخدام الرئيسي للبترول على مستوى العالم؟", options: ["الوقود", "الزراعة", "البناء"], correctAnswer: 0 },
      en: { question: "What is the largest use of oil worldwide?", options: ["Fuel", "Agriculture", "Construction"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي وقود يستخدم في الطائرات؟", options: ["الكيروسين", "البنزين", "الديزل"], correctAnswer: 0 },
      en: { question: "Which fuel is used in aircraft?", options: ["Kerosene", "Gasoline", "Diesel"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما الوسيلة التي تنقل البترول في البحر؟", options: ["ناقلة بترول", "سفينة ركاب", "سفينة شحن عام"], correctAnswer: 0 },
      en: { question: "What is used to transport oil at sea?", options: ["Oil tanker", "Passenger ship", "General cargo ship"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي دولة من أكبر منتجي البترول؟", options: ["السعودية", "المغرب", "اليونان"], correctAnswer: 0 },
      en: { question: "Which country is one of the largest oil producers?", options: ["Saudi Arabia", "Morocco", "Greece"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي بحر يحتوي على أكبر عدد من حقول الغاز في مصر؟", options: ["البحر المتوسط", "البحر الأحمر", "بحر قزوين"], correctAnswer: 0 },
      en: { question: "Which sea contains the largest number of Egypt's gas fields?", options: ["Mediterranean Sea", "Red Sea", "Caspian Sea"], correctAnswer: 0 },
    },
    {
      ar: { question: "أكبر حقل غاز في مصر هو؟", options: ["ظهر", "غرب الدلتا", "بلطيم"], correctAnswer: 0 },
      en: { question: "What is the largest gas field in Egypt?", options: ["Zohr", "West Delta Deep Marine", "Baltim"], correctAnswer: 0 },
    },
    {
      ar: { question: "في أي مدينة تأسست أوبك؟", options: ["بغداد", "فيينا", "طهران"], correctAnswer: 0 },
      en: { question: "In which country is OPEC headquartered?", options: ["Austria", "France", "Italy"], correctAnswer: 0 },
    },
    {
      ar: { question: "يعد البترول من؟", options: ["الهيدروكربونات", "الحديد", "الفوسفات"], correctAnswer: 0 },
      en: { question: "Oil is classified as:", options: ["Hydrocarbons", "Iron", "Phosphate"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما اسم عملية تحويل البترول لمنتجات؟", options: ["التكرير", "التنقيب", "الحفر"], correctAnswer: 0 },
      en: { question: "What is the process of converting crude oil into products called?", options: ["Refining", "Exploration", "Drilling"], correctAnswer: 0 },
    },
  ],
};

const model2: QuizModel = {
  name: "النموذج ٢",
  nameEn: "Model 2",
  questions: [
    {
      ar: { question: "البيتومين يستخدم في؟", options: ["رصف الطرق", "الزراعة", "الأدوية"], correctAnswer: 0 },
      en: { question: "Bitumen is used in:", options: ["Road paving", "Agriculture", "Medicine"], correctAnswer: 0 },
    },
    {
      ar: { question: "من منتجات النفط؟", options: ["البلاستيك", "القطن", "الخشب"], correctAnswer: 0 },
      en: { question: "Which of the following is a petroleum product?", options: ["Plastic", "Cotton", "Wood"], correctAnswer: 0 },
    },
    {
      ar: { question: "الغاز البترولي المسال يرمز له؟", options: ["LPG", "LNG", "CNG"], correctAnswer: 0 },
      en: { question: "Liquefied petroleum gas is abbreviated as:", options: ["LPG", "LNG", "CNG"], correctAnswer: 0 },
    },
    {
      ar: { question: "أكبر مستهلك للطاقة عالمياً؟", options: ["الولايات المتحدة", "مصر", "كندا"], correctAnswer: 0 },
      en: { question: "The world's largest energy consumer is:", options: ["United States", "Egypt", "Canada"], correctAnswer: 0 },
    },
    {
      ar: { question: "الفحم مصدر طاقة؟", options: ["غير متجدد", "متجدد", "غير قابلة للنفاذ"], correctAnswer: 0 },
      en: { question: "Coal is a:", options: ["Non-renewable energy source", "Renewable energy source", "Inexhaustible resource"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي دولة من أكبر منتجي البترول؟", options: ["السعودية", "المغرب", "اليونان"], correctAnswer: 0 },
      en: { question: "The largest oil exporter is generally:", options: ["Saudi Arabia", "Jordan", "Sudan"], correctAnswer: 0 },
    },
    {
      ar: { question: "الوقود الحيوي ينتج من؟", options: ["النباتات", "الفحم", "اليورانيوم"], correctAnswer: 0 },
      en: { question: "Biofuel is produced from:", options: ["Plants", "Coal", "Uranium"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي منتج يستخدم في صناعة الشموع؟", options: ["البرافين", "القطن", "الزجاج"], correctAnswer: 0 },
      en: { question: "Which product is used in candle manufacturing?", options: ["Paraffin", "Cotton", "Glass"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما لون الغاز المسال؟", options: ["أصفر", "أبيض", "عديم اللون"], correctAnswer: 2 },
      en: { question: "What is the color of liquefied gas?", options: ["Yellow", "White", "Colorless"], correctAnswer: 2 },
    },
    {
      ar: { question: "في أي دولة تم حفر أول بئر بترول تجاري؟", options: ["روسيا", "الولايات المتحدة", "إيران"], correctAnswer: 1 },
      en: { question: "In which country was the first oil well drilled?", options: ["Russia", "United States", "Iran"], correctAnswer: 1 },
    },
    {
      ar: { question: "من هو رائد صناعة النفط الذي حفر أول بئر نفط؟", options: ["جون روكفلر", "إدوين دريك", "ألفريد نوبل"], correctAnswer: 1 },
      en: { question: "Who pioneered the oil industry by drilling the first commercial oil well?", options: ["John Rockefeller", "Edwin Drake", "Alfred Nobel"], correctAnswer: 1 },
    },
    {
      ar: { question: "في أي ولاية أمريكية تم اكتشاف أول بئر بترول تجاري؟", options: ["تكساس", "بنسلفانيا", "كاليفورنيا"], correctAnswer: 1 },
      en: { question: "In which U.S. state was the first commercial oil well discovered?", options: ["Texas", "Pennsylvania", "California"], correctAnswer: 1 },
    },
    {
      ar: { question: "أي شركة أسسها جون روكفلر؟", options: ["Standard Oil", "Shell", "BP"], correctAnswer: 0 },
      en: { question: "Which company was founded by John Rockefeller?", options: ["Standard Oil", "Shell", "BP"], correctAnswer: 0 },
    },
    {
      ar: { question: "في أي عام تأسست أوبك؟", options: ["1960", "1950", "1970"], correctAnswer: 0 },
      en: { question: "In which year was OPEC established?", options: ["1960", "1950", "1970"], correctAnswer: 0 },
    },
    {
      ar: { question: "في أي مدينة تأسست أوبك؟", options: ["بغداد", "فيينا", "طهران"], correctAnswer: 0 },
      en: { question: "In which city was OPEC founded?", options: ["Baghdad", "Vienna", "Tehran"], correctAnswer: 0 },
    },
  ],
};

const model3: QuizModel = {
  name: "النموذج ٣",
  nameEn: "Model 3",
  questions: [
    {
      ar: { question: "أي شركة تعتبر من أقدم شركات النفط؟", options: ["شل", "أرامكو", "إكسون موبيل"], correctAnswer: 0 },
      en: { question: "Which company is one of the oldest oil companies in the world?", options: ["Shell", "Aramco", "ExxonMobil"], correctAnswer: 0 },
    },
    {
      ar: { question: "في أي دولة اكتشف النفط بكميات كبيرة أولاً في الشرق الأوسط؟", options: ["إيران", "العراق", "السعودية"], correctAnswer: 0 },
      en: { question: "In which country was oil first discovered in large quantities in the Middle East?", options: ["Iran", "Iraq", "Saudi Arabia"], correctAnswer: 0 },
    },
    {
      ar: { question: "متى بدأ إنتاج البترول في مصر؟", options: ["1886", "1910", "1930"], correctAnswer: 1 },
      en: { question: "When did oil production begin in Egypt?", options: ["1886", "1910", "1930"], correctAnswer: 1 },
    },
    {
      ar: { question: "أين اكتشف أول حقل بترول في مصر؟", options: ["جمسة", "رأس غارب", "السويس"], correctAnswer: 0 },
      en: { question: "Where was the first oil field discovered in Egypt?", options: ["Gemsa", "Ras Gharib", "Suez"], correctAnswer: 0 },
    },
    {
      ar: { question: "في أي منطقة تقع أول الحقول؟", options: ["خليج السويس", "المتوسط", "الصحراء الغربية"], correctAnswer: 0 },
      en: { question: "Where are Egypt's earliest oil fields located?", options: ["Gulf of Suez", "Mediterranean Sea", "Western Desert"], correctAnswer: 0 },
    },
    {
      ar: { question: "متى تأسست الهيئة المصرية العامة للبترول؟", options: ["1962", "1955", "1970"], correctAnswer: 0 },
      en: { question: "When was the Egyptian General Petroleum Corporation established?", options: ["1962", "1955", "1970"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي شركة من أوائل الشركات العاملة في مصر؟", options: ["شل", "إيني", "توتال"], correctAnswer: 0 },
      en: { question: "Which company was among the earliest operating in Egypt's oil sector?", options: ["Shell", "ENI", "Total"], correctAnswer: 0 },
    },
    {
      ar: { question: "متى بدأ إنتاج الغاز الطبيعي بكميات كبيرة في مصر؟", options: ["التسعينيات", "الستينيات", "السبعينيات"], correctAnswer: 2 },
      en: { question: "When did natural gas production significantly expand in Egypt?", options: ["1990s", "1960s", "1970s"], correctAnswer: 2 },
    },
    {
      ar: { question: "أي دولة تمتلك أكبر احتياطي بترول؟", options: ["فنزويلا", "السعودية", "روسيا"], correctAnswer: 0 },
      en: { question: "Which country has the largest proven oil reserves in the world?", options: ["Venezuela", "Saudi Arabia", "Russia"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي مادة تدخل في صناعة الإطارات؟", options: ["المطاط الصناعي", "القطن", "النحاس"], correctAnswer: 0 },
      en: { question: "Which material used in tire manufacturing comes from petroleum?", options: ["Synthetic rubber", "Cotton", "Copper"], correctAnswer: 0 },
    },
    {
      ar: { question: "منتج غير متوقع من النفط؟", options: ["أحمر الشفاه", "السكر", "الأرز"], correctAnswer: 0 },
      en: { question: "Which unexpected product is made from petroleum derivatives?", options: ["Lipstick", "Sugar", "Rice"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي مادة تستخدم في الملابس الرياضية؟", options: ["البوليستر", "القطن", "الصوف"], correctAnswer: 0 },
      en: { question: "Which material used in sportswear is derived from petroleum?", options: ["Polyester", "Cotton", "Wool"], correctAnswer: 0 },
    },
    {
      ar: { question: "أين يقع أكبر حقل نفطي في العالم؟", options: ["السعودية", "روسيا", "أمريكا"], correctAnswer: 0 },
      en: { question: "Where is the largest oil field in the world located?", options: ["Saudi Arabia", "Russia", "United States"], correctAnswer: 0 },
    },
    {
      ar: { question: "أي شركة اكتشفت حقل ظهر؟", options: ["إيني الايطالية", "شيفرون", "بي بي"], correctAnswer: 0 },
      en: { question: "Which company discovered the Zohr gas field?", options: ["ENI", "Chevron", "BP"], correctAnswer: 0 },
    },
    {
      ar: { question: "ما اسم أكبر حقل نفطي في العالم؟", options: ["الغوار", "برقان", "السفانية"], correctAnswer: 0 },
      en: { question: "What is the name of the largest oil field in the world?", options: ["Ghawar", "Burgan", "Safaniya"], correctAnswer: 0 },
    },
  ],
};

export const quizModels: QuizModel[] = [model1, model2, model3];

export function getRandomModel(language: Language = "ar"): QuizModel {
  const index = Math.floor(Math.random() * quizModels.length);
  const model = quizModels[index];
  return {
    ...model,
    questions: model.questions.map((q) => ({
      ar: q.ar,
      en: q.en,
    })),
  };
}

export function getQuestionsInLanguage(model: QuizModel, language: Language): Question[] {
  return model.questions.map((q) => q[language]);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
