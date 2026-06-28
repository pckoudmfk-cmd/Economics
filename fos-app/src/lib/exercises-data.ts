import type { Exercise } from './types'

export const EXERCISES: Exercise[] = [
  // ─── GRAMMAR ───────────────────────────────────────────────────────────────
  {
    id: 'gr-fill-1',
    module: 'grammar',
    title: 'Предлоги в банковском контексте',
    instructions: 'Вставьте предлог: at, in, on, for, with, to, by',
    max_score: 5,
    content: {
      type: 'fill_blank',
      sentences: [
        { text: 'The interest will accrue ___ the end of the month.', answer: 'at' },
        { text: 'We are interested ___ your bank\'s mortgage products.', answer: 'in' },
        { text: 'Please reply ___ our email ___ Friday.', answer: 'to' },
        { text: 'Could you connect me ___ the corporate lending department?', answer: 'with' },
        { text: 'Our branch is located ___ the business district.', answer: 'in' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 5, description: '1 балл за каждый верный предлог' }],
  },
  {
    id: 'gr-fill-2',
    module: 'grammar',
    title: 'Времена глагола (Present Simple / Continuous / Future Simple)',
    instructions: 'Поставьте глагол в нужное время',
    max_score: 5,
    content: {
      type: 'fill_blank',
      sentences: [
        { text: 'Our bank usually ___ (hold) a credit committee meeting on Mondays.', answer: 'holds' },
        { text: 'Right now, the compliance officer ___ (review) the client\'s KYC documents.', answer: 'is reviewing' },
        { text: 'I think we ___ (reach) the loan approval threshold by next quarter.', answer: 'will reach' },
        { text: 'She ___ (not work) in retail banking; she transferred to corporate.', answer: 'doesn\'t work' },
        { text: 'The system ___ (update) the transaction records overnight.', answer: 'updates' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 5, description: '1 балл за каждую верную форму' }],
  },
  {
    id: 'gr-error-1',
    module: 'grammar',
    title: 'Исправьте ошибки в деловых фразах',
    instructions: 'Найдите и исправьте грамматическую ошибку в каждом предложении',
    max_score: 10,
    content: {
      type: 'error_correction',
      sentences: [
        { wrong: 'I look forward to hear from you regarding our credit application.', correct: 'I look forward to hearing from you regarding our credit application.' },
        { wrong: 'Please, find attached the bank statement.', correct: 'Please find attached the bank statement.' },
        { wrong: 'Could you please repeat again the account number?', correct: 'Could you please repeat the account number?' },
        { wrong: 'I am writing concerning about the unauthorized charge.', correct: 'I am writing concerning the unauthorized charge.' },
        { wrong: 'Let me to introduce our new relationship manager.', correct: 'Let me introduce our new relationship manager.' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждое верное исправление' }],
  },
  {
    id: 'gr-transform-1',
    module: 'grammar',
    title: 'Трансформация предложений — Косвенная речь',
    instructions: 'Переведите предложения в косвенную речь',
    max_score: 6,
    content: {
      type: 'transform',
      sentences: [
        {
          original: '"I am studying international banking," he said.',
          instruction: 'Reported speech',
          answer: 'He said that he was studying international banking.',
        },
        {
          original: '"We will launch a new digital product next year," the CEO announced.',
          instruction: 'Reported speech',
          answer: 'The CEO announced that they would launch a new digital product the following year.',
        },
        {
          original: '"The interest rate has increased," the analyst reported.',
          instruction: 'Reported speech',
          answer: 'The analyst reported that the interest rate had increased.',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 6, description: '2 балла за каждое верное предложение' }],
  },
  {
    id: 'gr-articles-1',
    module: 'grammar',
    title: 'Артикли и исчисляемость',
    instructions: 'Выберите правильный артикль или "no article" (∅)',
    max_score: 8,
    content: {
      type: 'fill_blank',
      sentences: [
        { text: 'She is ___ most experienced credit analyst in ___ department.', answer: 'the / the', options: ['a / a', 'the / the', 'the / a', '∅ / the'] },
        { text: '___ Central Bank sets ___ monetary policy for the country.', answer: 'The / ∅', options: ['A / a', 'The / ∅', 'The / the', '∅ / ∅'] },
        { text: 'I need ___ information about your loan products.', answer: '∅', options: ['a', 'the', '∅', 'an'] },
        { text: 'We received ___ number of applications last week.', answer: 'a', options: ['a', 'the', '∅', 'an'] },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '2 балла за каждый верный ответ' }],
  },

  // ─── VOCABULARY ────────────────────────────────────────────────────────────
  {
    id: 'voc-fill-1',
    module: 'vocabulary',
    title: 'Деловая переписка — слова в контексте',
    instructions: 'Вставьте подходящее слово из банка слов',
    max_score: 10,
    content: {
      type: 'fill_blank',
      sentences: [
        { text: 'Please ___ the account details before we proceed with the wire transfer.', answer: 'verify', options: ['verify', 'confirm', 'arrange', 'transfer'] },
        { text: 'Our compliance team must ensure that all documents ___ current AML regulations.', answer: 'comply with', options: ['comply with', 'look forward to', 'arrange', 'confirm'] },
        { text: 'Let\'s ___ a meeting to review the loan terms in detail.', answer: 'arrange', options: ['arrange', 'verify', 'transfer', 'confirm'] },
        { text: 'I am writing to ___ that we have received your signed agreement.', answer: 'confirm', options: ['confirm', 'arrange', 'verify', 'comply with'] },
        { text: 'We ___ hearing from you regarding your credit application decision.', answer: 'look forward to', options: ['look forward to', 'arrange', 'verify', 'confirm'] },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждый верный ответ' }],
  },
  {
    id: 'voc-match-1',
    module: 'vocabulary',
    title: 'Банковская терминология — Соотнеси термин с определением',
    instructions: 'Сопоставьте термин с его определением',
    max_score: 10,
    content: {
      type: 'vocab_match',
      words: [
        { term: 'Monetary policy', definition: 'Actions by a central bank to control the money supply and interest rates' },
        { term: 'Liquidity', definition: 'The ease with which an asset can be converted into cash' },
        { term: 'Capital adequacy', definition: 'A measure of a bank\'s financial strength expressed as a ratio of capital to risk' },
        { term: 'Financial intermediation', definition: 'The process of channelling funds from savers to borrowers' },
        { term: 'Credit facility', definition: 'A pre-approved loan arrangement that allows a borrower to draw funds as needed' },
        { term: 'Correspondent bank', definition: 'A bank that performs services on behalf of another bank in a foreign country' },
        { term: 'Regulatory compliance', definition: 'Adherence to laws, regulations, and guidelines set by financial authorities' },
        { term: 'Diversification', definition: 'Spreading investments or activities to reduce risk' },
        { term: 'Interest rate', definition: 'The proportion of a loan charged as interest per period' },
        { term: 'Foreign exchange', definition: 'The conversion of one currency into another' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '1 балл за каждое верное сопоставление' }],
  },
  {
    id: 'voc-fill-2',
    module: 'vocabulary',
    title: 'Профессиональная лексика — образование в банковской сфере',
    instructions: 'Вставьте слово по смыслу',
    max_score: 8,
    content: {
      type: 'fill_blank',
      sentences: [
        { text: 'Students who ___ in finance specialize in banking and financial markets.', answer: 'major', options: ['major', 'study', 'graduate', 'enroll'] },
        { text: 'A ___ placement at a commercial bank gives students hands-on experience.', answer: 'compulsory', options: ['compulsory', 'optional', 'academic', 'digital'] },
        { text: 'Professional ___ such as CFA can advance a banking career significantly.', answer: 'certification', options: ['certification', 'scholarship', 'internship', 'enrollment'] },
        { text: 'She was ___ to start her practical placement at the investment bank.', answer: 'anxious', options: ['anxious', 'reluctant', 'certified', 'enrolled'] },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '2 балла за каждый верный ответ' }],
  },

  // ─── SPEAKING ──────────────────────────────────────────────────────────────
  {
    id: 'sp-pres-1',
    module: 'speaking',
    title: 'Презентация: Банковский сектор России',
    instructions: 'Подготовьте и произнесите структурированную презентацию (1–2 мин). Используйте обязательную лексику.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Russia\'s Banking Sector in the Global Economy',
      duration_min: 1,
      required_vocab: [
        'Central Bank', 'monetary policy', 'interest rate', 'commercial bank',
        'credit facility', 'foreign exchange', 'financial stability', 'liquidity',
        'regulatory framework', 'state-owned bank', 'digital payment', 'FinTech',
        'capital adequacy', 'sanctions', 'diversification',
      ],
      required_tenses: ['Present Simple', 'Past Simple', 'Future Simple'],
      structure_hints: [
        'Introduction: Greet the audience and state the topic',
        'Body: Describe key features → identify 2 challenges → explain responses',
        'Conclusion: Summarize and give a short outlook',
      ],
    },
    rubric: [
      { name: 'Содержание и структура', max_points: 40, description: 'Введение, логичное развитие идей, примеры, выводы' },
      { name: 'Языковая компетенция', max_points: 40, description: 'Верное использование лексики и грамматических времён' },
      { name: 'Навыки коммуникации', max_points: 20, description: 'Беглость, чёткое произношение, уверенность' },
    ],
  },
  {
    id: 'sp-dialogue-1',
    module: 'speaking',
    title: 'Диалог: Банковский сектор vs. Реальная экономика',
    instructions: 'Вы выбираете роль и ведёте дискуссию. Студент A защищает банковский сектор, Студент B — реальную экономику.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Banking vs. Other Industries: Which Drives the Economy?',
      role: 'Student A: Banking sector advocate',
      duration_min: 3,
      required_vocab: [
        'provide credit', 'capital allocation', 'financial intermediation',
        'interest income', 'economic growth', 'support the real sector',
        'banking supervision',
      ],
      structure_hints: [
        'Open the discussion naturally',
        'Present your viewpoint with arguments',
        'Respond to counter-arguments',
        'Seek common ground or summarize differences',
      ],
    },
    rubric: [
      { name: 'Взаимодействие и содержание', max_points: 50, description: 'Логика аргументов, ведение диалога, вопросы/ответы' },
      { name: 'Языковая компетенция', max_points: 30, description: 'Точность лексики и грамматики, профессиональная лексика' },
      { name: 'Беглость и произношение', max_points: 20, description: 'Естественность речи, темп, произношение' },
    ],
  },
  {
    id: 'sp-career-1',
    module: 'speaking',
    title: 'Диалог: Выбор карьеры в банковской сфере',
    instructions: 'Структурированный диалог (3–5 мин). Роль A — практические аргументы (зарплата, карьерный рост). Роль B — личные мотивы (интерес, интеллектуальный вызов).',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'What Determines the Choice of a Career in Banking?',
      role: 'Student A or B (your choice)',
      duration_min: 3,
      required_vocab: [
        'income', 'career advancement', 'risk assessment', 'financial advisory',
        'client-facing role', 'job security', 'to be keen on', 'challenge', 'opportunity',
      ],
      structure_hints: [
        'Start naturally: "So, have you thought about whether you want to work in a bank?"',
        'Present your viewpoint and respond to arguments',
        'Find common ground or summarize key differences',
      ],
    },
    rubric: [
      { name: 'Выполнение задания и взаимодействие', max_points: 40, description: 'Соблюдение роли, качество взаимодействия' },
      { name: 'Содержание и аргументация', max_points: 30, description: 'Ясность и убедительность аргументов' },
      { name: 'Использование языка', max_points: 30, description: 'Диапазон и точность лексики, грамматика, беглость' },
    ],
  },

  // ─── WRITING ───────────────────────────────────────────────────────────────
  {
    id: 'wr-email-1',
    module: 'writing',
    title: 'Написание делового письма корпоративному клиенту',
    instructions: 'Напишите деловое письмо клиенту Mr. David Clarke, чтобы договориться о встрече для обсуждения условий кредита. Используйте профессиональные фразы.',
    max_score: 15,
    content: {
      type: 'writing',
      prompt: 'Write a formal business email to Mr. David Clarke to arrange a meeting to discuss loan terms.',
      template: `Subject: [Complete the subject line]

Dear Mr. Clarke,

I am writing to [state your purpose: arrange a meeting to discuss terms].

Would [day and time] be convenient for you?

Please [add a closing action or request].

[Add appropriate closing and signature]`,
      word_count_min: 80,
      word_count_max: 150,
    },
    rubric: [
      { name: 'Содержание и цель', max_points: 5, description: 'Чётко сформулированная цель, все необходимые детали' },
      { name: 'Язык и вежливость', max_points: 5, description: 'Профессиональные фразы, формальный тон' },
      { name: 'Грамматика и лексика', max_points: 5, description: 'Точность грамматики и использования слов' },
    ],
  },
  {
    id: 'wr-essay-1',
    module: 'writing',
    title: 'Эссе: Роль английского языка в банковской карьере',
    instructions: 'Напишите аргументированное эссе о роли английского языка для банковских профессионалов.',
    max_score: 20,
    content: {
      type: 'writing',
      prompt: 'Write a structured essay: "The Role of English Language Skills in Modern Banking". Include: introduction with thesis, 2–3 arguments with examples (SWIFT, Basel III, international clients), counter-argument, conclusion.',
      word_count_min: 200,
      word_count_max: 300,
    },
    rubric: [
      { name: 'Структура', max_points: 5, description: 'Введение, основная часть, заключение' },
      { name: 'Аргументация', max_points: 8, description: 'Ясные аргументы с примерами, контраргумент' },
      { name: 'Язык', max_points: 7, description: 'Лексика, грамматика, связность текста' },
    ],
  },

  // ─── DIALOGUE (Round Table) ────────────────────────────────────────────────
  {
    id: 'dia-roundtable-1',
    module: 'dialogue',
    title: 'Круглый стол: Системы образования для банковской профессии',
    instructions: 'Групповая презентация (до 10 мин) + модерируемая дискуссия. Выберите тему для вашей группы.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Banking Education: Global Models and Personal Trajectories',
      duration_min: 10,
      required_vocab: [
        'vocational education', 'higher academic education', 'compulsory internship',
        'scholarship', 'professional certification', 'CFA', 'ACCA', 'drop-out',
        'financial literacy', 'continuous professional development',
      ],
      structure_hints: [
        'Group 1: Comparative Analysis — Russia, UK, USA, Germany',
        'Group 2: Financial Literacy and Professional Education',
        'Group 3: Is a Finance Degree Worth It?',
        'Discussion: Answer moderator questions, formulate 3–5 key theses',
      ],
    },
    rubric: [
      { name: 'Групповая презентация', max_points: 50, description: 'Содержание/исследование (20) + структура/ясность (15) + язык/подача (15)' },
      { name: 'Индивидуальное участие в дискуссии', max_points: 50, description: 'Вовлечённость (20) + качество аргументов (15) + язык (15)' },
    ],
  },
]

export const MODULE_LABELS: Record<string, string> = {
  grammar: 'Грамматика',
  vocabulary: 'Лексика',
  speaking: 'Говорение',
  writing: 'Письмо',
  dialogue: 'Диалоги',
}

export const MODULE_COLORS: Record<string, string> = {
  grammar: 'bg-blue-100 text-blue-800 border-blue-200',
  vocabulary: 'bg-green-100 text-green-800 border-green-200',
  speaking: 'bg-purple-100 text-purple-800 border-purple-200',
  writing: 'bg-amber-100 text-amber-800 border-amber-200',
  dialogue: 'bg-rose-100 text-rose-800 border-rose-200',
}
