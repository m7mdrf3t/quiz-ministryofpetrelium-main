export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
}

export interface QuizModel {
  name: string;
  questions: Question[];
}

const model1: QuizModel = {
  name: "النموذج ١",
  questions: [
    { question: "ما الوحدة المستخدمة عالمياً لقياس البترول؟", options: ["اللتر", "البرميل", "الكيلو"], correctAnswer: 1 },
    { question: "ما الاستخدام الرئيسي للبترول على مستوى العالم؟", options: ["الوقود", "الزراعة", "البناء"], correctAnswer: 0 },
    { question: "ما اسم المكان الذي يتم فيه تكرير البترول؟", options: ["المصفاة", "الميناء", "المخزن"], correctAnswer: 0 },
    { question: "أي وقود يستخدم في الطائرات؟", options: ["الكيروسين", "البنزين", "الديزل"], correctAnswer: 0 },
    { question: "ما الوسيلة التي تنقل البترول في البحر؟", options: ["ناقلة بترول", "سفينة ركاب", "سفينة شحن عام"], correctAnswer: 0 },
    { question: "أين يتكون البترول في الطبيعة؟", options: ["الصخور الرسوبية", "الصخور النارية", "التربة الزراعية"], correctAnswer: 0 },
    { question: "ما معنى OPEC؟", options: ["منظمة الدول المصدرة للبترول", "منظمة الطاقة العالمية", "اتحاد شركات النفط"], correctAnswer: 0 },
    { question: "عملية البحث عن البترول تسمى؟", options: ["التكرير", "التنقيب", "الاستكشاف"], correctAnswer: 2 },
    { question: "الغاز البترولي المسال يرمز له؟", options: ["LPG", "LNG", "CNG"], correctAnswer: 0 },
    { question: "الفحم مصدر طاقة؟", options: ["غير متجدد", "متجدد", "غير قابلة للنفاذ"], correctAnswer: 0 },
    { question: "في أي دولة تم حفر أول بئر بترول تجاري؟", options: ["روسيا", "الولايات المتحدة", "إيران"], correctAnswer: 1 },
    { question: "من هو رائد صناعة النفط الذي حفر أول بئر نفط؟", options: ["جون روكفلر", "إدوين دريك", "ألفريد نوبل"], correctAnswer: 1 },
    { question: "في أي ولاية أمريكية تم اكتشاف أول بئر بترول تجاري؟", options: ["تكساس", "بنسلفانيا", "كاليفورنيا"], correctAnswer: 1 },
    { question: "في أي عام تأسست أوبك؟", options: ["1960", "1950", "1970"], correctAnswer: 0 },
    { question: "في أي مدينة تأسست أوبك؟", options: ["بغداد", "فيينا", "طهران"], correctAnswer: 0 },
  ],
};

const model2: QuizModel = {
  name: "النموذج ٢",
  questions: [
    { question: "البيتومين يستخدم في؟", options: ["رصف الطرق", "الزراعة", "الأدوية"], correctAnswer: 0 },
    { question: "من منتجات النفط؟", options: ["البلاستيك", "القطن", "الخشب"], correctAnswer: 0 },
    { question: "أي منتج يستخدم في صناعة الشموع؟", options: ["البرافين", "القطن", "الزجاج"], correctAnswer: 0 },
    { question: "ما لون الغاز المسال؟", options: ["أصفر", "أبيض", "عديم اللون"], correctAnswer: 2 },
    { question: "الوقود الحيوي ينتج من؟", options: ["النباتات", "الفحم", "اليورانيوم"], correctAnswer: 0 },
    { question: "أي دولة من أكبر منتجي البترول؟", options: ["السعودية", "المغرب", "اليونان"], correctAnswer: 0 },
    { question: "أكبر مستهلك للطاقة عالمياً؟", options: ["الولايات المتحدة", "مصر", "كندا"], correctAnswer: 0 },
    { question: "يعد البترول من؟", options: ["الهيدروكربونات", "الحديد", "الفوسفات"], correctAnswer: 0 },
    { question: "ما اسم منصة استخراج البترول من البحر؟", options: ["منصة الحفر", "محطة بحرية", "ناقلة نفط"], correctAnswer: 0 },
    { question: "ما اسم عملية تحويل البترول لمنتجات؟", options: ["التكرير", "التنقيب", "الحفر"], correctAnswer: 0 },
    { question: "أي شركة أسسها جون روكفلر؟", options: ["Standard Oil", "Shell", "BP"], correctAnswer: 0 },
    { question: "أي شركة تعتبر من أقدم شركات النفط؟", options: ["شل", "أرامكو", "إكسون موبيل"], correctAnswer: 0 },
    { question: "أي دولة تمتلك أكبر احتياطي بترول؟", options: ["فنزويلا", "السعودية", "روسيا"], correctAnswer: 0 },
    { question: "ما اسم أكبر حقل نفطي في العالم؟", options: ["الغوار", "برقان", "السفانية"], correctAnswer: 0 },
    { question: "أين يقع أكبر حقل نفطي في العالم؟", options: ["السعودية", "روسيا", "أمريكا"], correctAnswer: 0 },
  ],
};

const model3: QuizModel = {
  name: "النموذج ٣",
  questions: [
    { question: "أكبر حقل غاز في مصر هو؟", options: ["ظهر", "غرب الدلتا", "بلطيم"], correctAnswer: 0 },
    { question: "أي بحر يحتوي على أكبر عدد من حقول الغاز في مصر؟", options: ["البحر المتوسط", "البحر الأحمر", "بحر قزوين"], correctAnswer: 0 },
    { question: "أي مادة تدخل في صناعة الإطارات؟", options: ["المطاط الصناعي", "القطن", "النحاس"], correctAnswer: 0 },
    { question: "أي مادة تستخدم في الملابس الرياضية؟", options: ["البوليستر", "القطن", "الصوف"], correctAnswer: 0 },
    { question: "منتج غير متوقع من النفط؟", options: ["أحمر الشفاه", "السكر", "الأرز"], correctAnswer: 0 },
    { question: "متى بدأ إنتاج البترول في مصر؟", options: ["1886", "1910", "1930"], correctAnswer: 1 },
    { question: "أين اكتشف أول حقل بترول في مصر؟", options: ["جمسة", "رأس غارب", "السويس"], correctAnswer: 0 },
    { question: "في أي منطقة تقع أول الحقول؟", options: ["خليج السويس", "المتوسط", "الصحراء الغربية"], correctAnswer: 0 },
    { question: "متى تأسست الهيئة المصرية العامة للبترول؟", options: ["1962", "1955", "1970"], correctAnswer: 0 },
    { question: "أي شركة اكتشفت حقل ظهر؟", options: ["إيني الايطالية", "شيفرون", "بي بي"], correctAnswer: 0 },
    { question: "في أي دولة اكتشف النفط بكميات كبيرة أولاً في الشرق الأوسط؟", options: ["إيران", "العراق", "السعودية"], correctAnswer: 0 },
    { question: "متى بدأ إنتاج الغاز الطبيعي بكميات كبيرة في مصر؟", options: ["التسعينيات", "الستينيات", "السبعينيات"], correctAnswer: 2 },
    { question: "أي شركة من أوائل الشركات العاملة في مصر؟", options: ["شل", "إيني", "توتال"], correctAnswer: 0 },
    { question: "أين يقع أكبر حقل غاز مصري (ظهر)؟", options: ["البحر المتوسط", "خليج السويس", "البحر الأحمر"], correctAnswer: 0 },
    { question: "أي دولة من أكبر مصدري النفط عالمياً؟", options: ["السعودية", "الأردن", "السودان"], correctAnswer: 0 },
  ],
};

export const quizModels: QuizModel[] = [model1, model2, model3];

export function getRandomModel(): QuizModel {
  const index = Math.floor(Math.random() * quizModels.length);
  return quizModels[index];
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
