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
    instructions: 'Выберите правильный артикль или "∅" (нет артикля)',
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
  {
    id: 'gr-conditional-1',
    module: 'grammar',
    title: 'Смешанные условные / I wish / If only',
    instructions: 'Поставьте глаголы в нужную форму (смешанный условный, I wish, If only)',
    max_score: 10,
    content: {
      type: 'fill_blank',
      sentences: [
        {
          text: 'I wish the bank ___ (adopt) a digital strategy earlier; we ___ (not lose) so many clients to FinTech competitors.',
          answer: 'had adopted / wouldn\'t have lost',
        },
        {
          text: 'If only the compliance officer ___ (review) the loan files more carefully; the regulator ___ (not issue) a fine.',
          answer: 'had reviewed / wouldn\'t have issued',
        },
        {
          text: 'They wish the board ___ (communicate) the restructuring plan more clearly; there ___ (not be) so much uncertainty among staff.',
          answer: 'had communicated / wouldn\'t have been',
        },
        {
          text: 'If we ___ (invest) in cybersecurity two years ago, we ___ (not face) this data breach situation now.',
          answer: 'had invested / wouldn\'t be facing',
        },
        {
          text: 'He wishes he ___ (be) more assertive during the credit committee meeting; the bad loan ___ (not be approved).',
          answer: 'had been / wouldn\'t have been approved',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждый верный ответ' }],
  },
  {
    id: 'gr-error-2',
    module: 'grammar',
    title: 'Исправьте ошибки — I wish / условные предложения',
    instructions: 'Найдите и исправьте грамматическую ошибку в каждом предложении',
    max_score: 10,
    content: {
      type: 'error_correction',
      sentences: [
        {
          wrong: 'I wish I was more proactive in identifying the NPL risk early.',
          correct: 'I wish I had been more proactive in identifying the NPL risk early.',
        },
        {
          wrong: 'If he had better risk management skills, he would have caught the fraud last quarter.',
          correct: 'If he had had better risk management skills, he would have caught the fraud last quarter.',
        },
        {
          wrong: 'She wishes she knows about the regulatory changes before submitting the report.',
          correct: 'She wishes she had known about the regulatory changes before submitting the report.',
        },
        {
          wrong: 'If the team had communicated more effectively, they will be leading the market expansion now.',
          correct: 'If the team had communicated more effectively, they would be leading the market expansion now.',
        },
        {
          wrong: 'We wish we didn\'t approve the loan without proper collateral assessment.',
          correct: 'We wish we hadn\'t approved the loan without proper collateral assessment.',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждое верное исправление' }],
  },
  {
    id: 'gr-transform-2',
    module: 'grammar',
    title: 'Трансформация предложений — I wish / If / If only',
    instructions: 'Перефразируйте предложение, используя указанную конструкцию',
    max_score: 10,
    content: {
      type: 'transform',
      sentences: [
        {
          original: 'The bank didn\'t implement two-factor authentication, so the fraud occurred.',
          instruction: 'Use: I wish',
          answer: 'I wish the bank had implemented two-factor authentication.',
        },
        {
          original: 'Poor internal controls caused the audit failure last month.',
          instruction: 'Use: If',
          answer: 'If the internal controls had been better, the audit failure wouldn\'t have occurred.',
        },
        {
          original: 'We don\'t have a contingency plan, so we are struggling with the system outage.',
          instruction: 'Use: If only',
          answer: 'If only we had a contingency plan, we wouldn\'t be struggling with the system outage.',
        },
        {
          original: 'The manager ignored the early warning signs in the credit portfolio, and now provisions are very high.',
          instruction: 'Use: I wish',
          answer: 'I wish the manager hadn\'t ignored the early warning signs in the credit portfolio.',
        },
        {
          original: 'They are not transparent with stakeholders, so investors made the wrong decision yesterday.',
          instruction: 'Use: If (mixed conditional)',
          answer: 'If they were transparent with stakeholders, investors wouldn\'t have made the wrong decision yesterday.',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждое верное предложение' }],
  },
  {
    id: 'gr-fill-3',
    module: 'grammar',
    title: 'Степени сравнения прилагательных и наречий',
    instructions: 'Вставьте правильную форму прилагательного или наречия',
    max_score: 8,
    content: {
      type: 'fill_blank',
      sentences: [
        {
          text: 'This quarterly report is ___ (detailed) than the last one, but it is still not ___ (comprehensive) report we have.',
          answer: 'more detailed / the most comprehensive',
        },
        {
          text: 'FinTech startups process loan applications ___ (quickly) than traditional banks.',
          answer: 'more quickly',
        },
        {
          text: 'Our new mobile banking app is ___ (reliable) than the previous version.',
          answer: 'more reliable',
        },
        {
          text: 'Sberbank is one of ___ (large) banks in Eastern Europe.',
          answer: 'the largest',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '2 балла за каждый верный ответ' }],
  },
  {
    id: 'gr-fill-4',
    module: 'grammar',
    title: 'Местоимения и притяжательные конструкции',
    instructions: 'Вставьте верное местоимение или форму',
    max_score: 8,
    content: {
      type: 'fill_blank',
      sentences: [
        {
          text: 'This textbook isn\'t mine; it\'s ___.',
          answer: 'hers',
          options: ['her', 'hers', 'their', 'theirs'],
        },
        {
          text: 'Do you have ___ experience in working with banking software?',
          answer: 'any',
          options: ['some', 'any', 'no', 'few'],
        },
        {
          text: 'That is the professor ___ research in digital finance I told you about.',
          answer: 'whose',
          options: ['who', 'whose', 'which', 'whom'],
        },
        {
          text: 'This strategic decision was ___.',
          answer: 'mine',
          options: ['my', 'mine', 'me', 'I'],
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '2 балла за каждый верный ответ' }],
  },

  // ─── VOCABULARY ────────────────────────────────────────────────────────────
  {
    id: 'voc-fill-1',
    module: 'vocabulary',
    title: 'Деловая переписка — слова в контексте',
    instructions: 'Вставьте подходящее слово из банка слов: confirm, verify, arrange, comply with, look forward to, convenient',
    max_score: 10,
    content: {
      type: 'fill_blank',
      sentences: [
        { text: 'Please ___ the account details before we proceed with the wire transfer.', answer: 'verify', options: ['verify', 'confirm', 'arrange', 'transfer'] },
        { text: 'Our compliance team must ensure that all documents ___ current AML regulations.', answer: 'comply with', options: ['comply with', 'look forward to', 'arrange', 'confirm'] },
        { text: 'Let\'s ___ a meeting to review the loan terms in detail.', answer: 'arrange', options: ['arrange', 'verify', 'transfer', 'confirm'] },
        { text: 'I am writing to ___ that we have received your signed agreement.', answer: 'confirm', options: ['confirm', 'arrange', 'verify', 'comply with'] },
        { text: 'We ___ hearing from you regarding your credit application decision.', answer: 'look forward to', options: ['look forward to', 'arrange', 'verify', 'confirm'] },
        { text: 'Is Thursday at 10 a.m. ___ for you to visit our branch?', answer: 'convenient', options: ['convenient', 'available', 'arranged', 'verified'] },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '1,5 балла за каждый верный ответ (округление)' }],
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
  {
    id: 'voc-match-2',
    module: 'vocabulary',
    title: 'FinTech и цифровой банкинг — термины',
    instructions: 'Сопоставьте термин с его определением',
    max_score: 8,
    content: {
      type: 'vocab_match',
      words: [
        { term: 'KYC (Know Your Client)', definition: 'The process of verifying a client\'s identity and assessing their risk profile' },
        { term: 'AML (Anti-Money Laundering)', definition: 'Regulations and procedures to prevent criminals from disguising illegally obtained funds' },
        { term: 'SWIFT', definition: 'An international messaging network used for secure interbank financial communication' },
        { term: 'Digital platform', definition: 'An online infrastructure enabling financial transactions and services remotely' },
        { term: 'Credit scoring', definition: 'A statistical method used to evaluate the creditworthiness of a borrower' },
        { term: 'Open banking', definition: 'A system allowing third-party developers to access financial data via APIs' },
        { term: 'Cybersecurity', definition: 'Practices protecting banking systems and client data from digital attacks' },
        { term: 'Basel III', definition: 'International regulatory framework setting capital and liquidity requirements for banks' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '1 балл за каждое верное сопоставление' }],
  },
  {
    id: 'voc-fill-3',
    module: 'vocabulary',
    title: 'Инвестиции и управление рисками',
    instructions: 'Вставьте подходящее слово из банка слов',
    max_score: 10,
    content: {
      type: 'fill_blank',
      sentences: [
        {
          text: 'A bank deposit offers low returns but virtually no ___ risk.',
          answer: 'credit',
          options: ['credit', 'market', 'liquidity', 'inflation'],
        },
        {
          text: 'The concept of ___ means spreading investments across different asset classes to reduce risk.',
          answer: 'diversification',
          options: ['diversification', 'leverage', 'securitization', 'hedging'],
        },
        {
          text: 'The ratio of a bank\'s capital to its risk-weighted assets is called ___.',
          answer: 'capital adequacy ratio',
          options: ['capital adequacy ratio', 'loan-to-value ratio', 'debt-to-income ratio', 'liquidity ratio'],
        },
        {
          text: 'Under IFRS 9, banks must recognize loan losses using the ___ credit loss model.',
          answer: 'expected',
          options: ['expected', 'incurred', 'deferred', 'projected'],
        },
        {
          text: 'A structured product combines a ___ element with a derivative to tailor risk and return.',
          answer: 'fixed income',
          options: ['fixed income', 'equity', 'commodity', 'currency'],
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждый верный ответ' }],
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
      role: 'Student A: Banking sector advocate / Student B: Real economy advocate',
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
  {
    id: 'sp-english-banking-1',
    module: 'speaking',
    title: 'Диалог: Английский язык в современном банкинге',
    instructions: 'Парная работа (4–5 мин). Студент A — сторонник английского языка в банковской карьере, Студент B — скептик.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'The Connection Between Foreign Language Skills and a Career in Banking',
      role: 'Student A (Pro-English) or Student B (Skeptical)',
      duration_min: 4,
      required_vocab: [
        'correspondent bank', 'regulatory compliance', 'SWIFT', 'Basel III',
        'international client', 'foreign exchange', 'risk assessment',
        'professional development', 'language barrier',
      ],
      structure_hints: [
        'Student A arguments: SWIFT messages, Basel III, CFA/ACCA materials, foreign clients',
        'Student B arguments: Russian software, local regulations, professional translators',
        'Use discussion phrases: "But don\'t you think that...?", "What about...?"',
        'Try to reach a balanced conclusion',
      ],
    },
    rubric: [
      { name: 'Взаимодействие и содержание', max_points: 50, description: 'Качество аргументов, ведение диалога' },
      { name: 'Языковая компетенция', max_points: 30, description: 'Точность лексики, грамматика' },
      { name: 'Беглость и произношение', max_points: 20, description: 'Естественность, темп' },
    ],
  },
  {
    id: 'sp-interview-1',
    module: 'speaking',
    title: 'Деловая игра: Собеседование на должность кредитного аналитика',
    instructions: 'Ролевая игра (5–7 мин). Студент-кандидат проходит собеседование на должность Junior Credit Analyst в CapitalBank.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Job Interview: Junior Credit Analyst at CapitalBank',
      role: 'Candidate or Head of Retail Lending Department',
      duration_min: 5,
      required_vocab: [
        'credit scoring', 'creditworthiness', 'financial ratio', 'collateral',
        'loan documentation', 'credit committee', 'risk assessment',
        'DTI (debt-to-income)', 'LTV (loan-to-value)', 'CRM system',
      ],
      structure_hints: [
        'Candidate: prepare a 2–3 min self-presentation (education, internship, skills, motivation)',
        'Candidate: prepare 2–3 questions for the employer about the team or career path',
        'Employer: ask 5–7 questions on hard skills and soft skills',
        'Employer: provide brief feedback at the end',
      ],
    },
    rubric: [
      { name: 'Самопрезентация и профессиональные знания', max_points: 40, description: 'Структура, содержание, знание кредитной аналитики' },
      { name: 'Коммуникативные навыки', max_points: 30, description: 'Убедительность, умение отвечать на вопросы' },
      { name: 'Использование языка', max_points: 30, description: 'Лексика, грамматика, беглость' },
    ],
  },
  {
    id: 'sp-complaint-1',
    module: 'speaking',
    title: 'Диалог: Работа с жалобой клиента',
    instructions: 'Ролевая игра (3–5 мин). Клиент жалуется на несанкционированное списание и задержку перевода. Сотрудник банка должен урегулировать ситуацию.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Handling a Client Complaint: Unauthorized Charge and Delayed Transfer',
      role: 'Client (Mr./Ms. Ivanov) or Bank Client Service Specialist',
      duration_min: 3,
      required_vocab: [
        'unauthorized charge', 'investigation', 'provisional credit',
        'resolution', 'escalate', 'de-escalate', 'loyal client',
        'international wire transfer', 'refund', 'compensation',
      ],
      structure_hints: [
        'Client phrases: "I demand an explanation...", "This is completely unacceptable..."',
        'Specialist phrases: "I understand your concern completely...", "Let me look into this..."',
        'Specialist: listen → apologize → verify → explain process → propose solution → escalate if needed',
        'Aim for a professional and empathetic resolution',
      ],
    },
    rubric: [
      { name: 'Достижение цели роли', max_points: 40, description: 'Насколько студент выполнил свою задачу в диалоге' },
      { name: 'Профессиональная лексика и этикет', max_points: 30, description: 'Использование банковских терминов и делового тона' },
      { name: 'Беглость и взаимодействие', max_points: 30, description: 'Естественность диалога, реакция на реплики партнёра' },
    ],
  },

  // ─── WRITING ───────────────────────────────────────────────────────────────
  {
    id: 'wr-email-1',
    module: 'writing',
    title: 'Завершите деловое письмо корпоративному клиенту',
    instructions: 'Заполните пропуски в деловом письме клиенту Mr. David Clarke, чтобы договориться о встрече для обсуждения условий кредита.',
    max_score: 15,
    content: {
      type: 'writing',
      prompt: 'Complete the formal business email to Mr. David Clarke to arrange a meeting to discuss loan terms. Fill in the blanks with appropriate professional phrases.',
      template: `Subject: ___ [Regarding the Meeting / Loan Terms Discussion]

Dear Mr. Clarke,

I am writing to ___ [state purpose: arrange a meeting / discuss terms].

Would ___ [day and time] be convenient for you?

Please ___ [ask for a reply or confirmation].

Best regards,
[Your Name]
Relationship Manager`,
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
  {
    id: 'wr-report-1',
    module: 'writing',
    title: 'Отчёт о посещении выставки банковских технологий',
    instructions: 'Напишите официальный отчёт (200–250 слов) для вашего руководителя о посещении банковской технологической выставки.',
    max_score: 20,
    content: {
      type: 'writing',
      prompt: 'Write a formal report for your manager summarizing your visit to a banking technology exhibition (e.g., "FinTech Forum 2025" or "Sibos Conference"). Structure: Heading, Introduction (purpose), Main Body (2–3 interesting exhibits/innovations), Conclusions and Recommendations (e.g., piloting a new KYC platform). Use at least 8 of these terms: exhibition, participants, to display, innovative solution, cutting-edge, to attract attention, to negotiate, advantage, efficient, to integrate, digital platform, artificial intelligence, to automate.',
      word_count_min: 200,
      word_count_max: 250,
    },
    rubric: [
      { name: 'Содержание и соответствие формату', max_points: 8, description: 'Соблюдение структуры отчёта, полнота рекомендаций' },
      { name: 'Лексика и грамматика', max_points: 7, description: 'Правильное и уместное использование профессиональной лексики' },
      { name: 'Связность и стиль', max_points: 5, description: 'Логика изложения, связующие слова, формальный регистр' },
    ],
  },
  {
    id: 'wr-letter-1',
    module: 'writing',
    title: 'Деловое письмо: Официальный запрос о торговом финансировании',
    instructions: 'Вы — финансовый директор экспортной компании. Напишите официальное письмо в отдел торгового финансирования банка GlobalTrade Bank (150–200 слов).',
    max_score: 15,
    content: {
      type: 'writing',
      prompt: 'Write a formal business letter (150–200 words) as CFO of a medium-sized export company to GlobalTrade Bank\'s Trade Finance Department. Include: (1) Introduce your company and express interest in letter of credit services for export operations. (2) Request information about trade finance products, fees, required documentation, and processing timelines. (3) Inquire about preferential terms for companies with strong export track records.',
      word_count_min: 150,
      word_count_max: 200,
    },
    rubric: [
      { name: 'Соответствие формату делового письма', max_points: 5, description: 'Обращение, структура, завершение письма' },
      { name: 'Содержание', max_points: 5, description: 'Все три ключевых пункта отражены ясно и логично' },
      { name: 'Язык и профессиональный тон', max_points: 5, description: 'Профессиональная лексика, грамматическая точность' },
    ],
  },
  {
    id: 'wr-letter-2',
    module: 'writing',
    title: 'Деловое письмо: Официальная претензия по несанкционированному списанию',
    instructions: 'Вы — директор AlphaLogistics Ltd. Напишите письмо-претензию в CapitalBank о несанкционированном списании и неудавшемся международном переводе (150–200 слов).',
    max_score: 15,
    content: {
      type: 'writing',
      prompt: 'Write a formal complaint letter (150–200 words) as Director of AlphaLogistics Ltd. to CapitalBank. Include: (1) Formally describe both issues (unauthorized fee and failed international wire transfer) with approximate dates. (2) Reference your business relationship ("We have maintained a corporate account with your bank for six years"). (3) State the financial impact (penalties, reputational damage). (4) Propose a solution: immediate refund, compensation for transfer failure, and a dedicated relationship manager.',
      word_count_min: 150,
      word_count_max: 200,
    },
    rubric: [
      { name: 'Соответствие формату и тон', max_points: 5, description: 'Формальный, профессиональный тон; стандартная структура письма-претензии' },
      { name: 'Содержание', max_points: 5, description: 'Все четыре пункта отражены полно и чётко' },
      { name: 'Язык', max_points: 5, description: 'Правильное использование деловой лексики и грамматики' },
    ],
  },

  // ─── DIALOGUE (Round Table / Business Games) ──────────────────────────────
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
        'Group 1: Banking Education in Russia, UK, USA, Germany — Comparative Analysis',
        'Group 2: Financial Literacy and Professional Education: Building the Banker of Tomorrow',
        'Group 3: Is a Finance Degree Worth It? Arguments and Counterarguments',
        'Discussion: Answer moderator questions, formulate 3–5 key theses',
      ],
    },
    rubric: [
      { name: 'Групповая презентация', max_points: 50, description: 'Содержание/исследование (20) + структура/ясность (15) + язык/подача (15)' },
      { name: 'Индивидуальное участие в дискуссии', max_points: 50, description: 'Вовлечённость (20) + качество аргументов (15) + язык (15)' },
    ],
  },
  {
    id: 'dia-phone-1',
    module: 'dialogue',
    title: 'Диалог: Телефонный звонок — запрос о бизнес-кредите',
    instructions: 'Парная работа (2–3 мин). Студент A — владелец малого бизнеса, Студент B — менеджер по корпоративному кредитованию.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Telephone Call: Business Loan Inquiry',
      role: 'Student A (Business Owner) or Student B (Corporate Lending Manager)',
      duration_min: 2,
      required_vocab: [
        'working capital loan', 'interest rate', 'required documents',
        'approval timeline', 'collateral', 'creditworthiness',
        'annual revenue', 'credit history', 'application form',
      ],
      structure_hints: [
        'Role A: Greet → state need (5M ruble working capital loan) → ask about rates/documents/timeline → express concern about collateral → propose next step',
        'Role B: Answer politely → ask clarifying questions (legal form, revenue, credit history) → provide general info → address collateral concern → propose next step',
        'Use polite telephone phrases: "Could I speak with...", "I\'m calling to inquire about..."',
      ],
    },
    rubric: [
      { name: 'Достижение цели коммуникации', max_points: 40, description: 'Обе роли выполнены, ключевые вопросы/ответы отражены' },
      { name: 'Профессиональная лексика', max_points: 30, description: 'Уместное использование банковских терминов' },
      { name: 'Беглость и вежливость', max_points: 30, description: 'Деловой тон, естественность диалога' },
    ],
  },
  {
    id: 'dia-account-1',
    module: 'dialogue',
    title: 'Диалог: Открытие корпоративного счёта в банке',
    instructions: 'Парная работа (2–3 мин). Студент A — директор ООО, Студент B — менеджер по обслуживанию клиентов.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Meeting at a Bank Branch: Opening a Corporate Account',
      role: 'Student A (Corporate Client - LLC Manager) or Student B (Account Manager)',
      duration_min: 2,
      required_vocab: [
        'corporate current account', 'charter', 'certificate of registration',
        'monthly service charge', 'online banking fee', 'account activation',
        'tariff plan', 'director\'s ID', 'document readiness',
      ],
      structure_hints: [
        'Role A: Greet → explain purpose → ask about required documents → ask about fees → ask about activation timeline',
        'Role B: Greet warmly → explain process → list documents (charter, registration cert, director\'s ID) → explain tariff plans → set realistic expectations → offer follow-up call',
      ],
    },
    rubric: [
      { name: 'Выполнение роли', max_points: 40, description: 'Все ключевые пункты роли отражены в диалоге' },
      { name: 'Лексика и профессиональный тон', max_points: 30, description: 'Терминология открытия счёта, вежливость' },
      { name: 'Взаимодействие', max_points: 30, description: 'Естественность диалога, реакция на реплики партнёра' },
    ],
  },
  {
    id: 'dia-conference-1',
    module: 'dialogue',
    title: 'Диалог: Знакомство на банковской конференции',
    instructions: 'Парная работа (2–3 мин). Студент A — представитель российского банка, Студент B — иностранный банковский партнёр на международном форуме.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Networking at an International Banking Forum',
      role: 'Student A (Russian Bank Representative) or Student B (Foreign Banking Partner)',
      duration_min: 2,
      required_vocab: [
        'retail banking', 'corporate banking', 'trade finance',
        'correspondent banking', 'potential cooperation', 'partnership',
        'small talk', 'networking', 'financial services',
      ],
      structure_hints: [
        'Role A: Greet warmly → introduce yourself and your bank → make small talk → describe bank\'s focus → transition to discussing potential cooperation',
        'Role B: Respond to greeting → introduce yourself → engage in small talk → describe your institution → express interest in cooperation',
        'Small talk examples: "How did you find the morning session?", "Is this your first time here?"',
      ],
    },
    rubric: [
      { name: 'Содержание и цели коммуникации', max_points: 40, description: 'Знакомство, small talk, обсуждение сотрудничества' },
      { name: 'Язык', max_points: 30, description: 'Профессиональная лексика, грамматика' },
      { name: 'Беглость и естественность', max_points: 30, description: 'Темп, произношение, уверенность' },
    ],
  },
  {
    id: 'dia-digital-1',
    module: 'dialogue',
    title: 'Групповая дискуссия: Риски цифровизации банковского документооборота',
    instructions: 'Модерируемая групповая дискуссия (20–25 мин). Все участники должны активно вносить вклад.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Risks of Digitalization of Banking Document Flow',
      duration_min: 20,
      required_vocab: [
        'cybersecurity', 'data breach', 'system failure', 'regulatory compliance',
        'digital document storage', 'algorithmic error', 'data privacy',
        'phased implementation', 'staff training', 'vendor due diligence',
        'FinMonitoring', 'CBR requirements',
      ],
      structure_hints: [
        'Technical and security risks: cyberattacks, data breaches, system failures, vendor dependency',
        'Regulatory risks: CBR and FinMonitoring requirements for document storage, legal validity',
        'Ethical risks: over-reliance on AI, data privacy concerns',
        'Mitigation strategies: phased implementation, staff training, cybersecurity audits',
      ],
    },
    rubric: [
      { name: 'Содержание и критическое мышление', max_points: 40, description: 'Выявление и анализ различных типов рисков, качество предложенных решений' },
      { name: 'Коммуникация и взаимодействие', max_points: 40, description: 'Активное участие, реакция на аргументы других участников' },
      { name: 'Язык', max_points: 20, description: 'Профессиональная лексика, грамматика, беглость' },
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
