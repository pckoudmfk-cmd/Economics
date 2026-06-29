import type { Exercise } from './types'

const wishConditionalsTheory = `I wish / If only / Mixed Conditionals

• I wish + Past Perfect = сожаление о прошлом: I wish the bank had adopted a digital strategy earlier.
• If only + Past Perfect = то же, с большей эмоциональностью: If only we had invested in cybersecurity!
• Mixed Conditional: If + Past Perfect, would + Infinitive = условие в прошлом, результат в настоящем.
  Пример: If we had invested two years ago, we wouldn't be facing this problem now.

Типичные ошибки:
  ✗ I wish I was more proactive (прошлое) → ✓ I wish I had been more proactive.
  ✗ If he had better skills, he would have caught... → ✓ If he had had better skills, he would have caught...
  ✗ they will be leading → ✓ they would be leading (Mixed: прошедшее условие + настоящий результат)`

const nonFiniteTheory = `Non-Finite Forms of the Verb (Неличные формы глагола)

• Infinitive (to + V): цель/намерение; после want / decide / need / allow sb to do; после It is + adj + to
  The bank decided to adopt IFRS 9. | It is important to be accurate.
• Gerund (V+ing): после предлогов (on, for, of, about); в роли подлежащего; после insist on / avoid / apologize for / consider / suggest
  The manager insisted on reviewing the documents. | Maintaining records is essential.
• Present Participle (V+ing): одновременное действие или определение к существительному
  The data appearing in the balance sheet seems inconsistent.
• Past Participle (V3): пассивное определение (действие совершено и описывает существительное)
  The loan agreement, signed by both parties, came into effect.
• Perfect Participle (Having + V3): предшествующее действие
  Having completed the audit, the auditors submitted their report.`

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
    theory: wishConditionalsTheory,
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
    theory: wishConditionalsTheory,
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
    theory: wishConditionalsTheory,
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

  // New: Non-Finite Forms of the Verb
  {
    id: 'gr-nf-mc',
    module: 'grammar',
    title: 'Неличные формы глагола — тест с выбором ответа',
    instructions: 'Определите вид неличной формы глагола в каждом предложении',
    theory: nonFiniteTheory,
    max_score: 8,
    content: {
      type: 'multiple_choice',
      questions: [
        {
          question: 'Identify the non-finite form: "The bank\'s objective is to increase its loan portfolio by 15% this year."',
          options: [
            { label: 'A', text: 'Present Participle' },
            { label: 'B', text: 'Gerund' },
            { label: 'C', text: 'Infinitive' },
            { label: 'D', text: 'Past Participle' },
          ],
          answer: 'C',
        },
        {
          question: 'Identify the non-finite form: "Having completed the external audit, the auditors submitted their report to the board."',
          options: [
            { label: 'A', text: 'Perfect Gerund' },
            { label: 'B', text: 'Perfect Participle' },
            { label: 'C', text: 'Passive Infinitive' },
            { label: 'D', text: 'Simple Infinitive' },
          ],
          answer: 'B',
        },
        {
          question: 'Identify the non-finite form: "Maintaining accurate records is essential for banking compliance."',
          options: [
            { label: 'A', text: 'Gerund Phrase (subject)' },
            { label: 'B', text: 'Infinitive Phrase' },
            { label: 'C', text: 'Present Participial Phrase' },
            { label: 'D', text: 'Conditional Clause' },
          ],
          answer: 'A',
        },
        {
          question: 'Identify the non-finite form: "The loan agreement, signed by both parties, came into effect on 1 January."',
          options: [
            { label: 'A', text: 'Gerund' },
            { label: 'B', text: 'Present Participle' },
            { label: 'C', text: 'Past Participle' },
            { label: 'D', text: 'Perfect Infinitive' },
          ],
          answer: 'C',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '2 балла за каждый верный ответ' }],
  },
  {
    id: 'gr-nf-error',
    module: 'grammar',
    title: 'Неличные формы глагола — исправьте ошибки',
    instructions: 'Найдите и исправьте ошибку в использовании неличной формы',
    theory: nonFiniteTheory,
    max_score: 10,
    content: {
      type: 'error_correction',
      sentences: [
        {
          wrong: 'The compliance manager insisted on to review the KYC documents again.',
          correct: 'The compliance manager insisted on reviewing the KYC documents again.',
        },
        {
          wrong: 'It is important for a bank accountant being diligent and accurate.',
          correct: 'It is important for a bank accountant to be diligent and accurate.',
        },
        {
          wrong: 'He wants the new core banking system to be install by Friday.',
          correct: 'He wants the new core banking system to be installed by Friday.',
        },
        {
          wrong: 'The bank decided adopting IFRS 9 ahead of the regulatory deadline.',
          correct: 'The bank decided to adopt IFRS 9 ahead of the regulatory deadline.',
        },
        {
          wrong: 'Regulations require banks disclosing their capital adequacy ratios annually.',
          correct: 'Regulations require banks to disclose their capital adequacy ratios annually.',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждое верное исправление' }],
  },
  {
    id: 'gr-nf-transform',
    module: 'grammar',
    title: 'Неличные формы глагола — трансформация предложений',
    instructions: 'Перефразируйте предложение, используя указанную неличную форму',
    theory: nonFiniteTheory,
    max_score: 10,
    content: {
      type: 'transform',
      sentences: [
        {
          original: 'I must complete the loan loss provision calculation. It is my priority.',
          instruction: 'Combine using Gerund: "My priority is..."',
          answer: 'My priority is completing the loan loss provision calculation.',
        },
        {
          original: 'He completed the external audit. Then he submitted the report to the board.',
          instruction: 'Use Perfect Participle to combine the sentences',
          answer: 'Having completed the external audit, he submitted the report to the board.',
        },
        {
          original: 'He claimed that he had already reconciled the interbank accounts.',
          instruction: 'Rewrite using Perfect Infinitive: "He claimed..."',
          answer: 'He claimed to have already reconciled the interbank accounts.',
        },
        {
          original: 'Regulations require that banks disclose their capital adequacy ratios.',
          instruction: 'Rewrite using Infinitive: "Regulations require banks..."',
          answer: 'Regulations require banks to disclose their capital adequacy ratios.',
        },
        {
          original: 'The bank processed the wire transfer. It is now settled.',
          instruction: 'Rewrite using Past Participle: "The wire transfer,..."',
          answer: 'The wire transfer, processed by the bank, is now settled.',
        },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 10, description: '2 балла за каждое верное предложение' }],
  },
  {
    id: 'gr-nf-fill',
    module: 'grammar',
    title: 'Неличные формы глагола — герундий или инфинитив',
    instructions: 'Выберите правильную форму: герундий или инфинитив',
    theory: nonFiniteTheory,
    max_score: 8,
    content: {
      type: 'fill_blank',
      sentences: [
        {
          text: 'The bank decided ___ IFRS 9 ahead of the regulatory deadline.',
          answer: 'to adopt',
          options: ['to adopt', 'adopting'],
        },
        {
          text: '___ compliance with AML rules is a key part of the compliance officer\'s role.',
          answer: 'Ensuring',
          options: ['To ensure', 'Ensuring'],
        },
        {
          text: 'The software allows you ___ regulatory reports automatically.',
          answer: 'to generate',
          options: ['to generate', 'generating'],
        },
        {
          text: 'The compliance officer avoids ___ unencrypted client documents by email.',
          answer: 'sending',
          options: ['to send', 'sending'],
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

  // New vocab_match exercises
  {
    id: 'voc-corp-finance',
    module: 'vocabulary',
    title: 'Корпоративные финансы — соотнеси термин с определением',
    instructions: 'Сопоставьте каждый термин с его правильным определением. 15 пар.',
    max_score: 15,
    content: {
      type: 'vocab_match',
      words: [
        { term: 'Corporate Finance', definition: 'The field dealing with how companies manage their funding, investment decisions, and shareholder value.' },
        { term: 'Working Capital', definition: 'Current Assets minus Current Liabilities — a measure of short-term financial health.' },
        { term: 'Capital Structure', definition: 'The mix of equity and debt a company uses to finance its assets and operations.' },
        { term: 'Cost of Capital', definition: 'The rate a company must earn on its investments to satisfy its investors.' },
        { term: 'Leverage', definition: 'The use of borrowed money to potentially increase investment returns.' },
        { term: 'EBITDA', definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization — a measure of core operating profitability.' },
        { term: 'Free Cash Flow', definition: 'Cash generated by operations minus capital expenditures — money truly available to investors.' },
        { term: 'Dividend Policy', definition: 'The company\'s guidelines on how much profit to distribute to shareholders as dividends.' },
        { term: 'IPO (Initial Public Offering)', definition: 'The first time a company sells shares to the public on a stock exchange.' },
        { term: 'Debt Covenant', definition: 'A restriction in a loan agreement that the borrower must maintain certain financial ratios.' },
        { term: 'Equity Financing', definition: 'Raising money by selling shares to investors, thereby diluting existing ownership.' },
        { term: 'Debt Financing', definition: 'Raising money by borrowing (loans, bonds), which creates an obligation to repay with interest.' },
        { term: 'Capital Budgeting', definition: 'The process of evaluating and selecting long-term investment projects.' },
        { term: 'Return on Investment (ROI)', definition: 'A measure of profitability relative to the amount of money invested.' },
        { term: 'Financial Distress', definition: 'The situation when a company struggles to meet its financial obligations.' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 15, description: '1 балл за каждое верное сопоставление' }],
  },
  {
    id: 'voc-pub-finance',
    module: 'vocabulary',
    title: 'Государственные финансы и банковский надзор — соотнеси',
    instructions: 'Сопоставьте каждый термин с его правильным определением. 15 пар.',
    max_score: 15,
    content: {
      type: 'vocab_match',
      words: [
        { term: 'Ministry of Finance', definition: 'The government department responsible for budget planning, tax policy, and public expenditure.' },
        { term: 'Central Bank (Bank of Russia)', definition: 'The main monetary authority; issues currency, sets the key rate, regulates and supervises banks.' },
        { term: 'Federal Treasury', definition: 'The government body responsible for executing the budget and managing treasury accounts of ministries.' },
        { term: 'State Budget', definition: 'The overarching government financial plan showing expected revenues and expenditures.' },
        { term: 'Budget Deficit', definition: 'The situation where government spending exceeds government revenues in a given period.' },
        { term: 'Sovereign Debt', definition: 'The total amount of money the government owes to its creditors.' },
        { term: 'Key Interest Rate', definition: 'The rate set by the central bank at which it lends to or borrows from commercial banks overnight.' },
        { term: 'Currency Reserve', definition: 'Foreign currency and gold assets held by the central bank to support the national currency.' },
        { term: 'Deposit Insurance Agency (DIA)', definition: 'A state organization that guarantees the safety of retail deposits up to a statutory limit.' },
        { term: 'Banking Supervision', definition: 'The process by which the central bank monitors banks\' compliance with regulations and financial soundness.' },
        { term: 'Monetary Policy', definition: 'A set of tools used by the central bank to control the money supply and inflation.' },
        { term: 'Fiscal Policy', definition: 'Government decisions on taxation and public spending to influence the economy.' },
        { term: 'Bank Lending Channel', definition: 'The mechanism by which central bank interest rate changes affect the economy through banks\' willingness to lend.' },
        { term: 'Quantitative Easing (QE)', definition: 'A non-conventional monetary tool where the central bank purchases assets to inject liquidity into the economy.' },
        { term: 'Macro-Prudential Policy', definition: 'Policies aimed at ensuring the stability of the financial system as a whole (e.g., loan-to-value limits, capital buffers).' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 15, description: '1 балл за каждое верное сопоставление' }],
  },
  {
    id: 'voc-banks',
    module: 'vocabulary',
    title: 'Виды банков — соотнеси',
    instructions: 'Сопоставьте тип банка с его описанием. 8 пар.',
    max_score: 8,
    content: {
      type: 'vocab_match',
      words: [
        { term: 'Universal Bank', definition: 'Combines commercial and investment banking; serves individuals, businesses, and institutional clients — a one-stop financial shop.' },
        { term: 'Retail Bank', definition: 'Focused on serving individual consumers with savings accounts, personal loans, mortgages, and debit/credit cards.' },
        { term: 'Investment Bank', definition: 'Assists corporations and governments with raising capital through stock and bond issuance, M&A, and structured finance.' },
        { term: 'Central Bank', definition: 'The primary monetary authority: issues currency, sets key interest rates, supervises banks, manages foreign exchange reserves.' },
        { term: 'Online Bank (Neobank)', definition: 'Operates via digital channels without an extensive branch network; offers competitive rates and low fees due to lower costs.' },
        { term: 'Savings Bank', definition: 'Accepts savings deposits and provides mortgages; focused on encouraging home ownership and personal saving.' },
        { term: 'Cooperative Bank', definition: 'Owned and operated by its members; provides banking services with a focus on community development and member benefit.' },
        { term: 'Development Bank', definition: 'A government-backed institution that provides long-term financing for development projects — infrastructure, SMEs, strategic industries.' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '1 балл за каждое верное сопоставление' }],
  },
  {
    id: 'voc-services',
    module: 'vocabulary',
    title: 'Банковские услуги — соотнеси',
    instructions: 'Сопоставьте банковскую услугу с её описанием. 8 пар.',
    max_score: 8,
    content: {
      type: 'vocab_match',
      words: [
        { term: 'Letter of Credit (L/C)', definition: 'A document from the buyer\'s bank guaranteeing payment to the seller\'s bank upon presentation of specified trade documents.' },
        { term: 'Overdraft', definition: 'A short-term credit facility allowing a current account to go into a negative balance up to an agreed limit.' },
        { term: 'Escrow Account', definition: 'A neutral third-party account holding funds until specified conditions of a transaction are met.' },
        { term: 'Currency Swap', definition: 'A contract to exchange one currency for another at a set rate on a future date, used to hedge foreign exchange risk.' },
        { term: 'Factoring', definition: 'A financial arrangement where a company sells its receivables (invoices) to a bank at a discount for immediate cash.' },
        { term: 'Bank Guarantee', definition: 'A service where the bank undertakes to pay a third party on behalf of its client if the client fails to fulfill a contractual obligation.' },
        { term: 'Safe Deposit Box', definition: 'A secure physical vault at a bank where customers can store valuable documents, jewelry, or other valuables.' },
        { term: 'Correspondent Banking', definition: 'A relationship between two banks in different countries enabling transactions to be conducted on each other\'s behalf across borders.' },
      ],
    },
    rubric: [{ name: 'Точность', max_points: 8, description: '1 балл за каждое верное сопоставление' }],
  },

  // New reading exercises (from FOS exam tickets)
  {
    id: 'voc-read-russia',
    module: 'vocabulary',
    title: 'Чтение: Россия в мировой экономике',
    instructions: 'Прочитайте текст и ответьте на вопросы развёрнутыми предложениями',
    max_score: 15,
    content: {
      type: 'reading',
      text: `Russia is one of the world's largest economies, ranking among the top ten by GDP. The country is a major exporter of natural resources, including oil, gas, metals, and agricultural products. Russia is a member of several international organizations, including BRICS and the Shanghai Cooperation Organisation.

Russia's banking sector is regulated by the Central Bank of Russia (CBR), which controls monetary policy, supervises commercial banks, and maintains financial stability. The Ruble (RUB) is the national currency.`,
      questions: [
        { question: 'What is Russia\'s position in the world by GDP?', answer: 'Russia ranks among the top ten largest economies in the world by GDP.' },
        { question: 'What does Russia mainly export?', answer: 'Russia mainly exports natural resources: oil, gas, metals, and agricultural products.' },
        { question: 'What is the role of the Central Bank of Russia?', answer: 'The CBR controls monetary policy, supervises commercial banks, and maintains financial stability.' },
      ],
    },
    rubric: [{ name: 'Понимание текста', max_points: 15, description: '5 баллов за каждый полный и точный ответ' }],
  },
  {
    id: 'voc-read-banking',
    module: 'vocabulary',
    title: 'Чтение: Двухуровневая банковская система России',
    instructions: 'Прочитайте текст и ответьте на вопросы развёрнутыми предложениями',
    max_score: 15,
    content: {
      type: 'reading',
      text: `Russia has a two-tier banking system. The first tier is the Central Bank of Russia (CBR), which sets monetary policy, issues currency, and supervises all financial institutions. The second tier consists of commercial banks — both state-owned (such as Sberbank and VTB) and private banks.

Commercial banks offer a range of services: accepting deposits, issuing loans, performing currency exchange, and processing payments. Banks must comply with Basel III capital requirements and KYC/AML regulations to ensure financial stability and prevent money laundering.`,
      questions: [
        { question: 'Describe the two-tier banking system of Russia.', answer: 'The first tier is the CBR (sets monetary policy, issues currency, supervises banks). The second tier consists of commercial banks — state-owned (Sberbank, VTB) and private banks.' },
        { question: 'Name two state-owned banks mentioned in the text.', answer: 'Sberbank and VTB are the two state-owned banks mentioned in the text.' },
        { question: 'What regulations must banks comply with?', answer: 'Banks must comply with Basel III capital requirements and KYC/AML regulations.' },
      ],
    },
    rubric: [{ name: 'Понимание текста', max_points: 15, description: '5 баллов за каждый полный и точный ответ' }],
  },
  {
    id: 'voc-read-payments',
    module: 'vocabulary',
    title: 'Чтение: Международные расчёты и SWIFT',
    instructions: 'Прочитайте текст и ответьте на вопросы развёрнутыми предложениями',
    max_score: 15,
    content: {
      type: 'reading',
      text: `International settlements are payments between residents of different countries for goods, services, and financial transactions. The main forms of international settlement are: bank transfer (wire transfer), letter of credit (L/C), collection, and open account.

SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the global messaging network used by banks to securely transmit payment instructions. A SWIFT message contains information about the sending bank, receiving bank, amount, currency, and purpose of payment.`,
      questions: [
        { question: 'What are the main forms of international settlement?', answer: 'The main forms are: bank transfer (wire transfer), letter of credit (L/C), collection, and open account.' },
        { question: 'What is SWIFT and what does it do?', answer: 'SWIFT is the global messaging network used by banks to securely transmit payment instructions between banks worldwide.' },
        { question: 'What information does a SWIFT message contain?', answer: 'A SWIFT message contains: sending bank, receiving bank, amount, currency, and purpose of payment.' },
      ],
    },
    rubric: [{ name: 'Понимание текста', max_points: 15, description: '5 баллов за каждый полный и точный ответ' }],
  },
  {
    id: 'voc-read-products',
    module: 'vocabulary',
    title: 'Чтение: Банковские продукты и обслуживание клиентов',
    instructions: 'Прочитайте текст и ответьте на вопросы развёрнутыми предложениями',
    max_score: 15,
    content: {
      type: 'reading',
      text: `Banks offer a wide range of products for individual clients: savings accounts, current accounts, personal loans, mortgages, credit cards, debit cards, and insurance products. Corporate clients can access trade finance, cash management, and investment banking services.

Effective customer service is essential in banking. Relationship managers build long-term connections with clients, understand their financial needs, and recommend suitable products. Handling complaints professionally and respecting customer confidentiality are key responsibilities.`,
      questions: [
        { question: 'Name at least four banking products for individual clients.', answer: 'Savings accounts, current accounts, personal loans, mortgages, credit cards, debit cards, and insurance products.' },
        { question: 'What services do banks offer to corporate clients?', answer: 'Corporate clients can access trade finance, cash management, and investment banking services.' },
        { question: 'What is the role of a relationship manager?', answer: 'Relationship managers build long-term connections with clients, understand their financial needs, and recommend suitable products.' },
      ],
    },
    rubric: [{ name: 'Понимание текста', max_points: 15, description: '5 баллов за каждый полный и точный ответ' }],
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

  // New speaking exercises
  {
    id: 'sp-grammar-quiz-1',
    module: 'speaking',
    title: 'Устный грамматический квиз — Часть 1: Времена глагола',
    instructions: 'Преподаватель задаёт вопросы из списка ниже. Студент даёт полный грамматически верный ответ, используя требуемую глагольную форму.',
    max_score: 70,
    content: {
      type: 'speaking',
      topic: 'Grammar Oral Quiz: Active Voice Tenses in Banking Context',
      duration_min: 5,
      required_vocab: ['commercial bank', 'monetary policy', 'interest rate', 'banking operations', 'credit facility'],
      required_tenses: ['Present Simple', 'Past Continuous', 'Present Perfect', 'Future Simple', 'Past Simple', 'Present Perfect Continuous'],
      structure_hints: [
        '(Present Simple) What does a commercial bank usually offer to its clients?',
        '(Past Continuous) What were you studying yesterday at 3 p.m. related to banking?',
        '(Present Perfect) Have you ever opened a bank account in a foreign currency? Why / why not?',
        '(Future Simple) What will you do after graduating if a bank offers you a job?',
        '(Past Simple) When did Russia\'s Central Bank last change the key interest rate?',
        '(Present Perfect Continuous) How long have you been learning English for your professional career?',
      ],
    },
    rubric: [
      { name: 'Грамматическая точность', max_points: 70, description: 'Верное использование требуемого грамматического времени в полном ответе' },
      { name: 'Беглость и уверенность', max_points: 20, description: 'Способность ответить без долгих пауз' },
      { name: 'Понимание вопроса', max_points: 10, description: 'Правильное понимание и релевантность ответа' },
    ],
  },
  {
    id: 'sp-grammar-quiz-2',
    module: 'speaking',
    title: 'Устный грамматический квиз — Часть 2: Артикли и существительные',
    instructions: 'Преподаватель задаёт вопросы из списка. Студент отвечает полным предложением, демонстрируя знание артиклей и исчисляемости.',
    max_score: 80,
    content: {
      type: 'speaking',
      topic: 'Grammar Oral Quiz: Articles and Countable/Uncountable Nouns in Banking',
      duration_min: 5,
      required_vocab: ['credit', 'currency', 'Central Bank', 'Sberbank', 'bank transaction'],
      structure_hints: [
        'Use the word "credit" in a banking sentence. Is it countable or uncountable here? What article should be used?',
        'Is the word "money" countable or uncountable? Use it correctly in a sentence without the article "a".',
        'Make a sentence about "the Central Bank" and "Sberbank". Why do we say "the Central Bank" but not "the Sberbank"?',
        'Use "a number of" and "the number of" in two different sentences about bank clients.',
        'Use the word "currency" in a sentence. Is it countable or uncountable? What determiner can be used?',
      ],
    },
    rubric: [
      { name: 'Грамматическая точность', max_points: 80, description: 'Верное использование артиклей, понимание исчисляемости' },
      { name: 'Скорость и уверенность', max_points: 20, description: 'Способность ответить без чрезмерных колебаний' },
    ],
  },
  {
    id: 'sp-edu-quiz',
    module: 'speaking',
    title: 'Устный квиз: Образование и банковская карьера',
    instructions: 'Преподаватель задаёт по 2–3 вопроса каждому студенту. Даётся полный, грамматически правильный ответ.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Education and Professional Development in Banking',
      duration_min: 5,
      required_vocab: ['major in finance', 'vocational education', 'compulsory internship', 'scholarship', 'professional certification', 'CFA', 'ACCA', 'drop-out', 'placement'],
      structure_hints: [
        'Vocabulary questions: What does it mean to major in finance? | What is a compulsory internship and why is it important? | What is a drop-out, and what career risks might this create?',
        'Grammar questions: Transform into reported speech: "I am studying international banking," he said. | Fill in: "This textbook isn\'t mine; it\'s ___." | Join with a relative pronoun: "That is the professor. I told you about her research in digital finance."',
        'Answer all questions with complete sentences',
        'Use Present Perfect Continuous for a long-term study activity, Future Simple for career plans',
      ],
    },
    rubric: [
      { name: 'Точность лексики и грамматики', max_points: 70, description: 'Правильное использование лексики и грамматических форм' },
      { name: 'Беглость и уверенность', max_points: 20, description: 'Способность ответить без долгих колебаний' },
      { name: 'Понимание вопроса', max_points: 10, description: 'Понимание и релевантность ответа' },
    ],
  },
  {
    id: 'sp-salary-negotiation',
    module: 'speaking',
    title: 'Деловая игра: Переговоры о зарплате и условиях труда',
    instructions: 'Ролевая игра. Кандидат и HR-менеджер обсуждают условия трудоустройства на должность «Специалист банковских операций».',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Salary and Benefits Negotiation at a Bank',
      role: 'Candidate or HR Manager',
      duration_min: 5,
      required_vocab: ['salary', 'benefits', 'DMS (voluntary medical insurance)', 'professional certification', 'ACCA', 'flexible hours', 'probation period', 'salary review', 'working capital'],
      structure_hints: [
        'Candidate: desired salary 50,000 RUB | completed certified banking software course (1C: Bank) | 15% more transactions than average intern | wants DMS, ACCA reimbursement, flexible hours',
        'HR Manager: approved range 43,000–47,000 RUB | standard benefits: social insurance, 28 days leave | DMS after 6 months | professional development budget | flexible start 8:00–10:00 | can offer max of range + salary review after probation',
        'Candidate: prepare arguments justifying your expectations; be ready to negotiate alternatives',
        'HR: be flexible within the approved framework; explain what you can and cannot offer',
      ],
    },
    rubric: [
      { name: 'Выполнение роли и переговорные навыки', max_points: 40, description: 'Соблюдение роли, качество аргументов, способность к компромиссу' },
      { name: 'Профессиональная лексика', max_points: 30, description: 'Использование деловой и банковской терминологии' },
      { name: 'Беглость и коммуникация', max_points: 30, description: 'Естественность речи, профессиональный тон' },
    ],
  },
  {
    id: 'sp-dilemma',
    module: 'speaking',
    title: 'Деловая игра: Разрешение профессиональной дилеммы в банке',
    instructions: 'Группы по 2–3 человека обсуждают профессиональную дилемму. Затем каждая группа представляет своё решение и обоснование.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Resolving a Professional Dilemma: Non-Compliant Loan Application',
      duration_min: 10,
      required_vocab: ['credit policy', 'debt-to-income ratio', 'AML/KYC rules', 'CBR requirements', 'reputational risk', 'banking regulations', 'compliance', 'credit committee', 'SAR (Suspicious Activity Report)'],
      structure_hints: [
        'Scenario: Senior colleague asks you to approve a loan that exceeds the debt-to-income ratio threshold, suggesting you adjust the reported income figure',
        'Discuss: ethical and professional obligations | potential legal consequences (CBR, AML/KYC violations, reputational risk) | correct procedure for non-compliant loan applications | diplomatic way to refuse your colleague',
        'After group discussion (10–15 min): each group presents its solution and reasoning',
        'Assessment focuses on: analysis depth, reasoning, knowledge of regulations, teamwork and presentation',
      ],
    },
    rubric: [
      { name: 'Глубина анализа', max_points: 30, description: 'Понимание всех аспектов: этического, правового, профессионального' },
      { name: 'Аргументация', max_points: 30, description: 'Логическое обоснование выбранного решения' },
      { name: 'Знание регуляторных норм', max_points: 20, description: 'Ссылки на корректные банковские процедуры и нормы compliance' },
      { name: 'Командная работа и презентация', max_points: 20, description: 'Ясность изложения, умение работать в группе' },
    ],
  },
  {
    id: 'sp-tech-achievement',
    module: 'speaking',
    title: 'Презентация: Технологические достижения в банкинге',
    instructions: 'Подготовьте и представьте короткую презентацию (3–4 мин) об одном технологическом достижении, существенно повлиявшем на банковскую отрасль.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'A Technological Achievement That Transformed Banking',
      duration_min: 3,
      required_vocab: ['breakthrough', 'innovation', 'cutting-edge', 'FinTech', 'disruption', 'digital transformation', 'contactless', 'blockchain', 'to streamline', 'cybersecurity', 'scalability', 'adoption'],
      structure_hints: [
        'Introduction: Name the innovation and state why you chose it',
        'Description: Explain what it is and how it works in simple terms',
        'Impact on Banking: How has this innovation changed bank operations, client interaction, or financial transactions?',
        'Inventor/Developer: Briefly mention the key inventor, team, or company',
        'Conclusion: Summarize and give your personal view on its overall significance for the future of finance',
        'Possible topics: blockchain, contactless payments (NFC), open banking/APIs, AI in credit scoring, biometric authentication, CBDCs, robo-advisors',
      ],
    },
    rubric: [
      { name: 'Содержание и структура', max_points: 40, description: 'Ясность, логическая структура, полнота раскрытия темы' },
      { name: 'Использование языка', max_points: 30, description: 'Верное использование тематической лексики, грамматика, беглость' },
      { name: 'Подача и слайды', max_points: 30, description: 'Ясность речи, зрительный контакт, использование наглядных материалов' },
    ],
  },
  {
    id: 'sp-outstanding-figures',
    module: 'speaking',
    title: 'Устный доклад: Выдающиеся люди в банковской сфере',
    instructions: 'Подготовьте и представьте 3–4-минутный доклад о выдающейся личности в вашей будущей профессии.',
    max_score: 14,
    content: {
      type: 'speaking',
      topic: 'Outstanding People in Banking and Finance',
      duration_min: 3,
      required_vocab: ['pioneer', 'double-entry bookkeeping', 'to formulate a principle', 'to lay the groundwork', 'financial integrity', 'to adhere to a standard', 'financial oversight', 'to innovate', 'corporate transparency', 'regulatory framework', 'to ensure compliance', 'monetary policy', 'central banking', 'investment strategy', 'financial inclusion'],
      structure_hints: [
        'Suggested figures: Luca Pacioli, J.P. Morgan, Henry Thornton, Mayer Amschel Rothschild, Herman Gref, Elvira Nabiullina, Warren Buffett',
        'Structure: Introduction → Brief biography → Key contributions to banking/finance → Impact on the profession and economy → Personal reflection on lessons',
        'Language: Use at least 8–10 terms from active vocabulary',
        'Grammar: Use Participle I constructions ("Having founded the first central bank...") and Gerunds ("His work involved reforming the entire regulatory framework...")',
      ],
    },
    rubric: [
      { name: 'Содержание и структура', max_points: 4, description: 'Тема полностью раскрыта, отличная логическая структура, убедительные детали' },
      { name: 'Язык и лексика', max_points: 4, description: 'Широкое и точное использование активной лексики, верное использование причастий и герундия' },
      { name: 'Произношение и беглость', max_points: 3, description: 'Чёткая, хорошо выверенная, легко воспринимаемая речь' },
      { name: 'Невербальная коммуникация', max_points: 3, description: 'Уверенная подача, хороший зрительный контакт' },
    ],
  },
  {
    id: 'sp-skills-competition',
    module: 'speaking',
    title: 'Дискуссия: Участие в конкурсе профессионального мастерства',
    instructions: 'Групповая дискуссия. Представьте, что вас выбрали участвовать в национальном конкурсе банковских операций или финансового анализа. Обсудите вопросы ниже.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Skills Competition: Motivation, Preparation, and Professional Growth',
      duration_min: 10,
      required_vocab: ['professional skills', 'competence', 'competitive performance', 'milestone', 'gap analysis', 'mentor', 'benchmark', 'skill validation', 'career advancement', 'credit analysis', 'foreign exchange operations'],
      structure_hints: [
        'Initial Reaction: What would be your primary motivation? How does this align with your long-term career path?',
        'Preparation Phase: What is your first step? How do you analyze the gap between your current skills and competition requirements? Which specific banking skills would you prioritize?',
        'Competition Experience: How would you manage stress during time-constrained tasks? How would you demonstrate both technical excellence and soft skills?',
        'Outcomes and Reflection: What value would participation bring regardless of the result? How could you leverage the experience in a job interview?',
        'Use conditional structures: "If I participated..., I would..." / "If I had more time to prepare, I would have..."',
      ],
    },
    rubric: [
      { name: 'Релевантность и глубина ответов', max_points: 40, description: 'Содержательность и связность ответов на каждый из вопросов' },
      { name: 'Активное использование лексики', max_points: 30, description: 'Точное и уместное использование тематических терминов' },
      { name: 'Беглость и связность речи', max_points: 20, description: 'Естественность, логичность, темп речи' },
      { name: 'Использование условных конструкций', max_points: 10, description: 'Корректное применение условных предложений в контексте' },
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

  // New writing exercises
  {
    id: 'wr-regionbank',
    module: 'writing',
    title: 'Письменный анализ: Годовой отчёт RegionBank',
    instructions: 'Вы — младший финансовый аналитик. Подготовьте краткий письменный анализ (300–400 слов) на основе данных RegionBank.',
    max_score: 20,
    content: {
      type: 'writing',
      prompt: `Write a financial analysis (300–400 words) for RegionBank PJSC using the data below. Answer all four questions:

1. Performance Evaluation: Based on the Chairman's letter, what were the main achievements and challenges? If Net Interest Income = 2.8 billion RUB and Total Revenue = 4.1 billion RUB, what is the NII contribution? What does this tell you about the bank's core business?

2. Financial Health: If Total Assets = 85 billion RUB, Total Liabilities = 72 billion RUB, what is the equity? Calculate the leverage ratio. The NPL ratio rose from 3.2% to 5.1% — what does this indicate about credit risk management?

3. Strategic Outlook: What are the bank's stated future strategies (improving asset quality, expanding digital channels, strengthening capital base)? Evaluate their feasibility given the financial data.

4. Recommendation: Provide one specific recommendation based on your analysis.

Key data from the Chairman's letter: retail lending portfolio grew 12%; mobile banking app has 340,000 active users; corporate loan portfolio quality deteriorated; NPL ratio rose from 3.2% to 5.1%.

Use banking/financial terminology: NPL, Net Interest Income, Capital Adequacy, leverage ratio, provisions, loan portfolio.`,
      word_count_min: 300,
      word_count_max: 400,
    },
    rubric: [
      { name: 'Точность анализа и терминология', max_points: 8, description: 'Верное использование банковских/финансовых терминов, правильные расчёты' },
      { name: 'Глубина анализа', max_points: 6, description: 'Логичная интерпретация данных NPL, NII, капитала' },
      { name: 'Структура и профессионализм', max_points: 4, description: 'Логичное изложение, профессиональный стиль' },
      { name: 'Практичность рекомендации', max_points: 2, description: 'Конкретность и обоснованность рекомендации' },
    ],
  },
  {
    id: 'wr-starterbank',
    module: 'writing',
    title: 'Практическое задание: Финансовые отчёты StarterBank',
    instructions: 'Заполните упрощённые финансовые отчёты StarterBank и напишите краткое профессиональное описание (4–5 предложений).',
    max_score: 20,
    content: {
      type: 'writing',
      prompt: `Using the data below, complete the Balance Sheet and Income Statement for StarterBank, then write a short professional paragraph (4–5 sentences) describing the bank's financial position and performance.

DATA FOR STARTERBANK (in millions of RUB):
Balance Sheet: Cash and CBR balances: 1,200 | Net Loans to Clients: 8,500 | Securities Portfolio: 3,100 | Fixed Assets and Intangibles: 900 | Client Deposits: 10,200 | Interbank Borrowings: 2,100 | Share Capital: 800 | Retained Earnings: 600

Income Statement: Interest Income: 1,950 | Interest Expense: 890 | Fee and Commission Income: 420 | Operating Expenses (Staff + Admin): 780 | Loan Loss Provisions: 340

TASKS:
Part A — Balance Sheet: List all assets, total them. List all liabilities and equity, total them. Verify Assets = Liabilities + Equity.
Part B — Income Statement: Calculate Net Interest Income (NII = Interest Income − Interest Expense), Total Operating Income (NII + Fee Income), and Net Profit (Total Operating Income − Operating Expenses − Provisions).
Part C — Descriptive Paragraph: Use these standard phrases: "The bank's balance sheet reflects a loan-to-deposit ratio of..." | "The bank generated net interest income of..." | "Profitability was impacted by significant provisioning charges, resulting in a net profit of..."`,
      word_count_min: 100,
    },
    rubric: [
      { name: 'Точность расчётов', max_points: 8, description: 'Верное заполнение баланса и отчёта о прибылях и убытках; Assets = Liabilities + Equity' },
      { name: 'Структура отчётов', max_points: 4, description: 'Правильное форматирование и группировка статей' },
      { name: 'Профессиональная терминология', max_points: 4, description: 'Верное и беглое использование банковских терминов' },
      { name: 'Описательный абзац', max_points: 4, description: 'Способность делать базовые выводы из подготовленных данных' },
    ],
  },
  {
    id: 'wr-hsbc',
    module: 'writing',
    title: 'Письменный анализ: Отчётность HSBC Holdings plc (2023)',
    instructions: 'Используя данные годового отчёта HSBC, ответьте на аналитические вопросы в письменной форме.',
    max_score: 20,
    content: {
      type: 'writing',
      prompt: `Analyze the simplified financial data from HSBC Holdings plc (2023) and answer all four questions in writing (200–300 words total).

HSBC DATA (2023):
Income Statement: Net Interest Income: $35.8bn | Total Revenue (Net Operating Income): $66.1bn | Loan Impairment Charges: $(3.4)bn | Total Operating Expenses: $(32.1)bn | Net Profit: $22.4bn
Balance Sheet: Total Assets: $3,038.7bn | Customer Accounts (Deposits): $1,611.4bn | Total Equity: $198.8bn | Loans and Advances to Customers: $938.5bn

QUESTIONS:
1. Calculate HSBC's Net Interest Margin contribution: NII as a % of Total Revenue. What does this share tell you about HSBC's business model?
2. Calculate the Cost-to-Income ratio (Operating Expenses ÷ Total Revenue). How does this benchmark against typical industry norms (55–65%)?
3. Calculate the Loan-to-Deposit ratio (Loans ÷ Customer Deposits). Is HSBC more reliant on deposits or market funding?
4. Calculate the Equity-to-Assets ratio (Total Equity ÷ Total Assets). What does this imply about the bank's capital cushion?

Use appropriate banking terminology in your answers: NII, NIM, cost-to-income ratio, loan-to-deposit ratio, capital adequacy, leverage, business model.`,
      word_count_min: 200,
      word_count_max: 300,
    },
    rubric: [
      { name: 'Точность расчётов', max_points: 8, description: 'Верные финансовые коэффициенты для каждого вопроса' },
      { name: 'Интерпретация', max_points: 6, description: 'Корректная интерпретация коэффициентов и их банковских последствий' },
      { name: 'Использование терминологии', max_points: 4, description: 'Уместное использование профессиональной банковской лексики' },
      { name: 'Структура и связность', max_points: 2, description: 'Логичное и чёткое изложение анализа' },
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
  // New dialogue exercises
  {
    id: 'dia-ifrs-ras',
    module: 'dialogue',
    title: 'Дискуссия: МСФО vs. РСБУ в банковском секторе',
    instructions: 'Групповая дискуссия об основных различиях между МСФО и РСБУ применительно к банковскому сектору.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Key Differences Between IFRS and Russian Accounting Standards (RAS/RSBU)',
      duration_min: 15,
      required_vocab: ['IFRS', 'RAS', 'provisions', 'loan loss reserve', 'expected credit loss', 'ECL model', 'impairment', 'disclosure', 'fair value', 'deferred tax', 'capital adequacy'],
      structure_hints: [
        'What are the fundamental philosophical differences between IFRS (principles-based, global) and RAS (rules-based, tax-oriented)?',
        'Compare loan loss provisions: IFRS 9 ECL model (expected credit loss) vs. RAS incurred loss model. How does this affect reported profit and capital?',
        'Why might a foreign investor or correspondent bank prefer IFRS statements when evaluating a Russian bank?',
        'What practical challenges does an accountant face when preparing two sets of financial statements simultaneously?',
        'Use professional vocabulary: IFRS, RAS, provisions, expected credit loss, impairment, disclosure, fair value',
      ],
    },
    rubric: [
      { name: 'Техническая точность и глубина', max_points: 40, description: 'Точность и глубина технических знаний' },
      { name: 'Ясность и структура аргументов', max_points: 30, description: 'Ясность и структурированность аргументов' },
      { name: 'Взаимодействие с противоположными точками зрения', max_points: 20, description: 'Умение реагировать на позиции других участников' },
      { name: 'Профессиональная лексика', max_points: 10, description: 'Эффективное использование бухгалтерской и банковской терминологии' },
    ],
  },
  {
    id: 'dia-creative-accounting',
    module: 'dialogue',
    title: 'Круглый стол: Творческая отчётность — где заканчивается оптимизация?',
    instructions: 'Разбор кейса «RegioCredit Bank» и групповое обсуждение. Каждое предложение менеджмента оценивается по степени допустимости.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Ethical Dilemma Roundtable: Creative Accounting at RegioCredit Bank',
      duration_min: 20,
      required_vocab: ['capital adequacy ratio (CAR)', 'IFRS 9', 'loan loss provisions', 'Stage 1', 'Stage 2', 'NPL', 'sale-and-leaseback', 'revenue recognition', 'internal auditor', 'CBR', 'reputational risk'],
      structure_hints: [
        'Case: RegioCredit Bank is close to breaching its minimum CAR of 8%. Three proposals are on the table:',
        '1. Reclassify 50 loans from "doubtful" (Stage 2) to "standard" (Stage 1) — reduces provisions, inflates reported capital',
        '2. Sale-and-leaseback of HQ building to a related entity at inflated price — books gain as immediate income',
        '3. Delay recognition of several large NPLs until the next reporting period',
        'For each proposal: aggressive-but-acceptable / creative accounting / potential fraud? Which accounting principles are violated?',
        'What are the professional and ethical responsibilities of the internal auditor? What are the potential CBR/auditor consequences?',
        'As a group: propose an ethical solution to the capital adequacy shortfall',
      ],
    },
    rubric: [
      { name: 'Анализ креативного учёта', max_points: 30, description: 'Умение идентифицировать и анализировать манипуляции с отчётностью' },
      { name: 'Понимание регуляторных норм', max_points: 30, description: 'Связь между бухгалтерскими действиями, этикой и банковским регулированием' },
      { name: 'Качество этической аргументации', max_points: 25, description: 'Качество этического анализа и принятие решений' },
      { name: 'Командная работа и изложение', max_points: 15, description: 'Сотрудничество и чёткость изложения идей' },
    ],
  },
  {
    id: 'dia-fintech-ethics',
    module: 'dialogue',
    title: 'Групповая дискуссия: Этика и будущее финансовых технологий',
    instructions: 'Модерируемая дискуссия (4–5 студентов) об этических последствиях и перспективах инноваций в банковской сфере.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Ethics and the Future of Financial Technology',
      duration_min: 15,
      required_vocab: ['disruptive technology', 'regulatory sandbox', 'financial inclusion', 'decentralization', 'data privacy', 'algorithmic bias', 'digital sovereignty', 'DeFi', 'cryptocurrency', 'AI credit scoring'],
      structure_hints: [
        'Choose one prompt: (1) AI in credit scoring — efficiency vs. discrimination against certain borrower groups | (2) Cryptocurrency and DeFi — should governments regulate or restrict? | (3) Banking exhibitions — are they still relevant for genuine innovation?',
        'Prepare your initial position and arguments in advance',
        'Use discussion phrases: "In my opinion...", "I see your point, however...", "Another aspect to consider is...", "Could you elaborate on...?"',
        'Use topic vocabulary: disruptive technology, regulatory sandbox, financial inclusion, decentralization, data privacy, algorithmic bias, digital sovereignty',
      ],
    },
    rubric: [
      { name: 'Содержание и взаимодействие', max_points: 40, description: 'Качество аргументов, способность поддержать позицию, вовлечённость' },
      { name: 'Использование языка', max_points: 40, description: 'Беглость, тематическая лексика, дискуссионные фразы' },
      { name: 'Коммуникативные навыки', max_points: 20, description: 'Ясность, вежливость, умение слушать и отвечать' },
    ],
  },
  {
    id: 'dia-fintech-stand',
    module: 'dialogue',
    title: 'Ролевая игра: Стенд FinTech-компании на выставке',
    instructions: 'Парная работа. Симуляция разговора на банковской технологической выставке: представитель FinTech-компании и ИТ-директор банка.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'At the FinTech Exhibition Stand: AI Credit Scoring Platform',
      role: 'Student A (Stand Attendant — FinTech Representative) or Student B (Bank IT/Operations Manager)',
      duration_min: 5,
      required_vocab: ['AI credit scoring', 'accuracy rate', 'integration', 'data security', 'GDPR', 'implementation timeline', 'pilot project', 'proof of concept', 'scalable', 'to streamline', 'efficient', 'advantage'],
      structure_hints: [
        'Role A (FinTech Rep): Describe the AI credit scoring platform (key features, accuracy rates, integration capabilities) | Explain advantages over traditional scoring | Answer questions about price, security, implementation, support | Aim to "close the deal" with a pilot project proposal',
        'Role B (Bank IT/Ops Manager): Ask about platform\'s key features and performance | Inquire about data security and compliance (GDPR / Russian 152-FZ) | Ask about implementation timeline and costs | Ask about pilot project terms',
        'Use persuasive and technical language throughout',
      ],
    },
    rubric: [
      { name: 'Достижение цели роли', max_points: 40, description: 'Насколько эффективно каждый участник выполнил свою роль' },
      { name: 'Язык и лексика', max_points: 30, description: 'Профессиональный и тематический язык, беглость' },
      { name: 'Взаимодействие', max_points: 30, description: 'Реалистичность диалога, умение задавать и отвечать на вопросы, вежливость' },
    ],
  },
  {
    id: 'dia-crisis-suspicious',
    module: 'dialogue',
    title: 'Кризисный сценарий A: Подозрительная транзакция',
    instructions: 'Группа (2–3 чел.) разбирает кризисный сценарий, готовит анализ и план действий, затем представляет решение.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Crisis Scenario: The Suspicious Transaction (25 million RUB cash deposit)',
      duration_min: 10,
      required_vocab: ['SAR (Suspicious Activity Report)', 'AML', 'KYC', 'compliance officer', 'FinMonitoring', 'Rosfinmonitoring', 'internal escalation', 'client relationship', 'cash deposit', 'business purpose'],
      structure_hints: [
        'Situation: A long-standing business client makes an unusually large cash deposit (25 million RUB) with no clear documented business purpose. The client says it is "proceeds from a one-time deal."',
        'Discuss: Do you file a Suspicious Activity Report (SAR)? | How do you handle the client relationship? | Who do you notify internally? | What documentation do you request?',
        'Reference correct AML/KYC procedures and Rosfinmonitoring reporting requirements',
        'Present your group\'s analysis and proposed solution (10–15 min discussion, then presentation)',
      ],
    },
    rubric: [
      { name: 'Анализ рисков', max_points: 30, description: 'Оценка потенциальных последствий и регуляторных рисков' },
      { name: 'Знание процедур', max_points: 30, description: 'Ссылки на корректные процедуры AML/KYC и нормы FinMonitoring' },
      { name: 'Практичность решений', max_points: 25, description: 'Креативность и обоснованность предложенных решений' },
      { name: 'Ясность презентации', max_points: 15, description: 'Ясность и связность групповой презентации' },
    ],
  },
  {
    id: 'dia-crisis-outage',
    module: 'dialogue',
    title: 'Кризисный сценарий B: Сбой системы в день выплаты зарплаты',
    instructions: 'Группа (2–3 чел.) разбирает кризисный сценарий, готовит план действий, затем представляет решение.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Crisis Scenario: Core Banking System Crash on Payroll Day',
      duration_min: 10,
      required_vocab: ['contingency plan', 'core banking system', 'payroll', 'corporate clients', 'manual processing', 'regulatory obligation', 'CBR notification', 'critical system failure', 'communication strategy', 'business continuity'],
      structure_hints: [
        'Situation: The bank\'s core banking system crashes on the 25th of the month (the most common salary payment date). Thousands of corporate clients cannot process employee salary payments. Deadline: end of business day.',
        'Discuss: What is the contingency plan? | How does the bank communicate with affected clients? | Can any transactions be processed manually? | What is the regulatory obligation for notifying the Central Bank of a critical system failure?',
        'Consider: client communication templates, manual processing feasibility, CBR notification timelines, reputational risk management',
        'Present your group\'s analysis and proposed solution',
      ],
    },
    rubric: [
      { name: 'Оценка и приоритизация рисков', max_points: 30, description: 'Правильная оценка критичности ситуации и приоритетов' },
      { name: 'Реалистичность плана действий', max_points: 30, description: 'Практичность и выполнимость предложенного плана' },
      { name: 'Регуляторная осведомлённость', max_points: 25, description: 'Знание требований ЦБ к уведомлению о критических сбоях' },
      { name: 'Качество коммуникационной стратегии', max_points: 15, description: 'Ясность и профессионализм взаимодействия с клиентами' },
    ],
  },
  {
    id: 'dia-crisis-breach',
    module: 'dialogue',
    title: 'Кризисный сценарий C: Утечка персональных данных',
    instructions: 'Группа (2–3 чел.) разбирает кризисный сценарий утечки данных, готовит план действий, затем представляет решение.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Crisis Scenario: Data Breach — 500 Client Records Sent to Wrong Email',
      duration_min: 10,
      required_vocab: ['personal data law (152-FZ)', 'data breach', 'Roskomnadzor', 'GDPR', 'passport data', 'credit card data', 'notification obligation', 'remediation', 'reputational risk', 'disciplinary action', 'data protection officer'],
      structure_hints: [
        'Situation: An employee accidentally sends an Excel file containing personal data of 500 clients (names, passport numbers, credit card numbers) to an unintended external email address.',
        'Discuss: Assess the severity. | What are the legal consequences under Federal Law 152-FZ on Personal Data? | What is the notification obligation to Roskomnadzor and to affected clients? | What immediate containment steps are needed? | What are the internal HR consequences?',
        'Consider: notification timelines, containment measures, client communication, prevention of future incidents, disciplinary procedures',
        'Present your group\'s analysis and proposed solution',
      ],
    },
    rubric: [
      { name: 'Правовой анализ', max_points: 30, description: 'Точная оценка правовых последствий по 152-ФЗ' },
      { name: 'Практичность мер реагирования', max_points: 30, description: 'Логичность и реалистичность плана устранения последствий' },
      { name: 'Регуляторная осведомлённость', max_points: 25, description: 'Знание обязанностей по уведомлению регулятора и клиентов' },
      { name: 'Ясность презентации', max_points: 15, description: 'Ясность и связность групповой презентации' },
    ],
  },
  {
    id: 'dia-failed-bank',
    module: 'dialogue',
    title: 'Кейс-стади: Анализ статьи о проблемном банке NovaCreditBank',
    instructions: 'Прочитайте статью о NovaCreditBank и выполните письменный/устный анализ по четырём заданиям.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Case Study: The Decline of NovaCreditBank — Causes and Lessons',
      duration_min: 15,
      required_vocab: ['NPL ratio', 'NSFR (Net Stable Funding Ratio)', 'underwriting standards', 'loan loss provisions', 'liquidity', 'license revocation', 'Deposit Insurance Agency (DIA)', 'credit risk management', 'short-term deposits', 'long-term loans', 'structural mismatch'],
      structure_hints: [
        'Article summary: NovaCreditBank had its banking license revoked by the CBR. The bank funded long-term consumer loans (3–4 year terms) using short-term above-market deposits. NSFR was below minimum. NPL ratio deteriorated from 4.1% to 11.7% in five quarters. Management ignored early warning signals.',
        'Task 1 — Identification of Causes: List the key internal factors that led to license revocation.',
        'Task 2 — Financial Metrics: (a) What does NPL deterioration from 4.1% to 11.7% indicate? (b) Why was the funding strategy (short-term deposits → long-term loans) inherently risky? Link to NSFR.',
        'Task 3 — Conditional Analysis: Write one Third Conditional (past mistake), one Second Conditional (advice for a similar bank today), one First Conditional (likely future consequence).',
        'Task 4 — Recommendations: If hired 18 months before revocation, what two main recommendations would you make to the CEO? Use modal verbs: should have, ought to, must.',
      ],
    },
    rubric: [
      { name: 'Понимание и глубина анализа', max_points: 40, description: 'Точное выявление причин, верная интерпретация NPL, NSFR и провизий' },
      { name: 'Использование терминологии', max_points: 30, description: 'Верное использование банковской лексики (NPL, провизии, ликвидность, NSFR)' },
      { name: 'Грамматика и структура', max_points: 30, description: 'Точное использование условных предложений, модальных глаголов, формальный тон' },
    ],
  },
  {
    id: 'dia-corporate-finance',
    module: 'dialogue',
    title: 'Ролевая игра: Обсуждение вариантов финансирования корпоративного клиента',
    instructions: 'Групповая ролевая игра. Банковская команда консультирует IndustrialGroup по вариантам привлечения 300 млн руб. для строительства нового завода.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Corporate Finance Advisory: Debt vs. Equity Financing Options',
      role: 'Bank Relationship Manager / Credit Analyst / Investment Banking Advisor / Client CFO',
      duration_min: 15,
      required_vocab: ['equity financing', 'debt financing', 'cost of capital', 'leverage', 'debt covenant', 'dilution', 'free cash flow', 'ROI', 'cash flow', 'bond issue', 'private placement', 'IPO'],
      structure_hints: [
        'Bank Relationship Manager (Chairperson): Lead the discussion. Open: "Thank you for inviting us. We\'d like to walk you through three main financing options."',
        'Bank Credit Analyst: Advocate for debt financing (long-term corporate loan or bond). Argue: stable cash flow supports repayments; retaining full ownership is valuable.',
        'Investment Banking Advisor: Advocate for equity financing (private placement or IPO). Argue: strengthens balance sheet; avoids fixed debt repayments; attracts strategic investors.',
        'Client CFO: Be pragmatic. Ask probing questions about cost (interest rate vs. equity dilution), covenants, timeline, flexibility, loss of control.',
        'Use at least 8 vocabulary words. Use contrastive linkers: whereas, while, however. Aim for a recommended solution by the end.',
      ],
    },
    rubric: [
      { name: 'Профессиональная лексика', max_points: 30, description: 'Использование корпоративной финансовой терминологии' },
      { name: 'Убедительность аргументов', max_points: 30, description: 'Ясность и убедительность аргументов каждой роли' },
      { name: 'Сопоставление вариантов', max_points: 20, description: 'Использование контрастных связок, сравнение вариантов' },
      { name: 'Активное участие', max_points: 20, description: 'Профессиональная коммуникация всех участников' },
    ],
  },
  {
    id: 'dia-financial-position',
    module: 'dialogue',
    title: 'Презентация + дискуссия: Как улучшить финансовое положение компании',
    instructions: 'Презентация (3–4 мин) + групповая дискуссия/вопросы (5 мин). Выберите реальную или вымышленную компанию с финансовыми проблемами.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'How to Improve a Company\'s Financial Position',
      duration_min: 3,
      required_vocab: ['declining profit margins', 'high leverage', 'negative free cash flow', 'cost reduction', 'revenue enhancement', 'capital structure optimization', 'refinancing', 'strategic investor', 'non-core assets', 'debt-to-equity ratio'],
      structure_hints: [
        'Introduction (1 min): Describe the company and its main financial problems',
        'Main Body (2 min): Propose 2–3 strategies: (a) cost reduction (renegotiate debt, sell non-core assets), (b) revenue enhancement (new markets, improved pricing), (c) capital structure optimization (refinance high-cost debt, attract strategic investor)',
        'Conclusion (1 min): Summarize the plan and state the expected outcome for financial health',
        'Group Discussion (5 min): Audience asks at least 3 challenging questions; presenter responds using professional vocabulary',
        'Use at least 10 vocabulary words from corporate finance topics',
      ],
    },
    rubric: [
      { name: 'Содержание и лексика', max_points: 40, description: 'Релевантность и ясность стратегий, верное использование терминологии' },
      { name: 'Структура и подача', max_points: 30, description: 'Чёткая структура, беглость, произношение, тайм-менеджмент' },
      { name: 'Участие в дискуссии', max_points: 30, description: 'Убедительность ответов на вопросы аудитории' },
    ],
  },
  {
    id: 'dia-term-deposit',
    module: 'dialogue',
    title: 'Ролевая игра: Сравнение срочных вкладов двух банков',
    instructions: 'Парная работа. Клиент Ольга (2 млн руб.) и финансовый советник сравнивают вклады StableBank и DigitalFirst.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Comparing Term Deposit Products: StableBank vs. DigitalFirst',
      role: 'Financial Advisor or Client (Olga)',
      duration_min: 5,
      required_vocab: ['term deposit', 'interest rate', 'capitalization', 'compound interest', 'partial withdrawal', 'early termination', 'DIA insurance', 'effective annual yield', 'liquidity access', 'auto-renewal'],
      structure_hints: [
        'StableBank "Reliable Savings": 14.5% p.a. | 12 months | Min: 100,000 RUB | Capitalization: at maturity | No partial withdrawal | Early termination: 0.1% | DIA insured: Yes (up to 1.4M RUB per depositor)',
        'DigitalFirst "Smart Deposit": 14.0% p.a. | 12 months (auto-renewal) | Min: 50,000 RUB | Capitalization: monthly (compound) | Partial withdrawal: up to 30% without rate change | Early termination: 2/3 of rate | DIA insured: Yes | Digital-only',
        'Advisor: Explain monthly compounding at 14.0% produces higher effective yield than simple 14.5%. Highlight flexibility of DigitalFirst. Consider Olga\'s liquidity needs. Note that 2M exceeds DIA limit for a single bank.',
        'Client (Olga): Ask about DIA coverage limit (note: 2M > 1.4M limit), interest calculation, early withdrawal penalties, digital-only access, which bank is safer.',
      ],
    },
    rubric: [
      { name: 'Точность информации о продуктах', max_points: 35, description: 'Верное описание условий вклада и DIA страхования' },
      { name: 'Профессиональная лексика', max_points: 30, description: 'Верное использование банковской терминологии' },
      { name: 'Коммуникативные и консультационные навыки', max_points: 35, description: 'Умение анализировать потребности клиента, сравнивать варианты, давать обоснованные рекомендации' },
    ],
  },
  {
    id: 'dia-letter-of-credit',
    module: 'dialogue',
    title: 'Ролевая игра: Консультация по аккредитиву для экспортёра',
    instructions: 'Парная работа. MachineExport LLC впервые экспортирует оборудование в Казахстан на $500,000. Директор Сергей встречается со специалистом по торговому финансированию.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Trade Finance Consultation: Letter of Credit for Export to Kazakhstan',
      role: 'Trade Finance Specialist or Client (Sergei, Director of MachineExport LLC)',
      duration_min: 5,
      required_vocab: ['letter of credit (L/C)', 'issuing bank', 'confirming bank', 'advising bank', 'shipping documents', 'discrepancy', 'irrevocable L/C', 'confirmed L/C', 'bank guarantee', 'advance payment', 'trade finance fee'],
      structure_hints: [
        'Specialist: Explain what an L/C is and how it protects MachineExport | Describe the L/C process: buyer\'s bank (Kazakhstan) issues → MachineExport\'s bank confirms → goods shipped → documents presented → bank pays | Explain types: irrevocable, confirmed (extra protection if Kazakh bank defaults) | Discuss fees (issuance, confirmation, document-processing) and timelines | Propose alternatives: bank guarantee or advance payment — compare pros and cons',
        'Client (Sergei): Ask how payment is guaranteed | Ask what documents to present and what happens with minor document discrepancies | Ask about cost and whether fees can be passed to the buyer | Ask how long the whole process takes from L/C issuance to receiving funds',
      ],
    },
    rubric: [
      { name: 'Точность объяснения продукта', max_points: 35, description: 'Верное описание механизма аккредитива и защиты экспортёра' },
      { name: 'Профессиональная лексика', max_points: 30, description: 'Точное использование терминологии торгового финансирования' },
      { name: 'Консультационные навыки', max_points: 35, description: 'Умение анализировать потребности клиента, отвечать на вопросы профессионально' },
    ],
  },
  {
    id: 'dia-client-chooses',
    module: 'dialogue',
    title: 'Деловая игра: Клиент выбирает банк и услуги',
    instructions: 'Групповая ролевая игра. Три клиента с разными потребностями консультируются у финансового советника на банковском форуме.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'A Client Chooses a Bank and Its Banking Services',
      role: 'Bank Consultant / Financial Advisor (and rotating Client roles)',
      duration_min: 15,
      required_vocab: ['current account', 'wire transfer', 'business loan', 'online banking', 'fixed-term deposit', 'DIA insurance', 'OFZ bonds', 'letter of credit', 'FX conversion', 'trade finance', 'correspondent banking', 'fee', 'customer service'],
      structure_hints: [
        'Client 1 — Maria (small bakery, ~3M RUB monthly turnover): Needs current account, wire transfers, small business loan, online banking. Compare universal bank (Sberbank/VTB — full service, branch network) vs. neobank (Tochka, Modulbank — low fees, digital, fast account opening).',
        'Client 2 — Alexei (saving 1.5M RUB for apartment in 2 years): Compare savings bank (fixed-term deposit, DIA-insured) vs. investment broker (OFZ bonds, equity mutual funds — higher potential return, market risk).',
        'Client 3 — GlobalExport LLC (exporter to EU and China): Needs FX conversions, letters of credit, correspondent banking. Compare bank with strong international trade finance platform vs. purely domestic bank.',
        'Advisor: provide balanced, client-focused advice for each; use relevant vocabulary; tailor advice to each client\'s specific needs',
      ],
    },
    rubric: [
      { name: 'Consultant: ясность и полнота совета', max_points: 35, description: 'Ясность совета, использование релевантной лексики, адаптация к потребностям клиента' },
      { name: 'Client: релевантность вопросов', max_points: 25, description: 'Глубина и релевантность вопросов клиента' },
      { name: 'Язык и лексика', max_points: 25, description: 'Естественность использования английского языка, банковская терминология' },
      { name: 'Взаимодействие', max_points: 15, description: 'Качество диалога, достижение цели консультации' },
    ],
  },
  {
    id: 'dia-tax-audit',
    module: 'dialogue',
    title: 'Ролевая игра: Встреча с налоговым аудитором',
    instructions: 'Парная работа. Встреча CFO банка «PrivatBank-Region» с внешним налоговым аудитором в рамках предварительного проверочного визита.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Pre-Audit Meeting: CFO and External Tax Auditor',
      role: 'CFO of PrivatBank-Region or External Tax Auditor',
      duration_min: 10,
      required_vocab: ['profit tax', 'VAT exemption', 'deferred tax', 'withholding tax', 'deductible expenses', 'provisions', 'tax base', 'to file a return', 'compliance', 'non-deductible provisions', 'timing differences', 'cross-border payments'],
      structure_hints: [
        'Opening (2–3 min): Exchange greetings, state the purpose of the meeting',
        'CFO Presentation (3–4 min): (a) Tax accounting & record-keeping: separate tax records, timing differences between accounting profit and taxable profit, deferred tax | (b) Key banking tax issues: non-deductibility of certain loan loss provisions for profit tax; VAT exemption for core banking services; withholding tax on cross-border payments to non-resident counterbanks | (c) Risk mitigation: use of tax advisors, staff training',
        'Auditor Questions (3–4 min): "How do you distinguish deductible from non-deductible loan loss provisions?" | "How does the bank determine VAT-exempt vs. taxable services?" | "Describe your withholding tax compliance process for interest payments to non-resident counterbanks." | "Have you identified any areas of potential tax uncertainty in internal reviews?"',
        'Conclusion (1–2 min): Summarize discussion, agree on next steps (document list, audit timeline)',
      ],
    },
    rubric: [
      { name: 'Содержание и профессиональные знания', max_points: 40, description: 'Точность и релевантность информации о банковских налоговых аспектах; глубина стратегий управления рисками' },
      { name: 'Коммуникация и использование языка', max_points: 40, description: 'Беглость, ясность, уверенность; верное использование времён для описания процессов и намерений' },
      { name: 'Выполнение задания и взаимодействие', max_points: 20, description: 'Оба участника остаются в роли; сбалансированный двусторонний обмен; структура встречи соблюдена' },
    ],
  },
  {
    id: 'dia-explain-banking',
    module: 'dialogue',
    title: 'Ролевая игра: Объяснение российской банковской системы иностранному инвестору',
    instructions: 'Парная работа. Российский банковский эксперт из консалтинговой компании объясняет иностранному инвестору особенности российской банковской системы.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Explaining Russia\'s Banking System to a Foreign Investor',
      role: 'Russian Banking Expert or Foreign Investor (European holding company)',
      duration_min: 5,
      required_vocab: ['two-tier banking system', 'CBR', 'state-owned bank', 'private bank', 'monetary policy', 'banking supervision', 'DIA (ASV)', 'capital adequacy (N1.0)', 'OFZ bonds', 'key interest rate', 'currency conversion', 'profit repatriation'],
      structure_hints: [
        'Expert covers: Structure of Russian banking system (two tiers: CBR + commercial banks, state-owned vs. private) | Role of CBR (monetary policy, supervision, key rate, FX interventions) | Deposit protection: DIA guarantees up to 1.4M RUB per depositor per bank | Key regulatory requirements (min capital, N1.0, liquidity ratios) | Key players: Sberbank, VTB, Gazprombank (state-owned) vs. Alfa-Bank, T-Bank (private)',
        'Investor questions: "How stable is the Russian banking system?" | "Is my company\'s money protected if a Russian bank fails?" | "What is the current key interest rate?" | "What is the difference between a state-owned and private bank in Russia?" | "Are there restrictions on currency conversion and repatriation of profits?"',
      ],
    },
    rubric: [
      { name: 'Точность и ясность информации', max_points: 35, description: 'Точность предоставленной информации о банковской системе' },
      { name: 'Профессиональная лексика', max_points: 30, description: 'Верное и уместное использование профессиональных терминов' },
      { name: 'Инвестор: качество вопросов', max_points: 20, description: 'Релевантность и глубина вопросов иностранного инвестора' },
      { name: 'Беглость и профессионализм', max_points: 15, description: 'Естественность взаимодействия, профессиональный тон' },
    ],
  },
  {
    id: 'dia-kpis-meeting',
    module: 'dialogue',
    title: 'Ролевая игра: Квартальное совещание по KPI — RegionBank',
    instructions: 'Групповая ролевая игра (10–15 мин). Квартальное совещание по итогам в RegionBank: CFO, руководитель розницы, руководитель риск-менеджмента, CEO.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Quarterly KPI Review Meeting at RegionBank',
      role: 'CFO (Presenter) / Head of Retail / Head of Risk Management / CEO (Moderator)',
      duration_min: 10,
      required_vocab: ['Net Interest Income', 'Cost-to-Income ratio', 'NPL ratio', 'Return on Equity (ROE)', 'capital adequacy', 'provisions', 'mortgage growth', 'new clients', 'profitability', 'action points'],
      structure_hints: [
        'CFO (Presenter): Present key KPIs — NII, Cost-to-Income ratio, NPL ratio, ROE, number of new clients. Use RegionBank data: NII 2.8B RUB, Total Revenue 4.1B RUB, NPL rose from 3.2% to 5.1%, retail lending +12%, mobile app has 340,000 active users.',
        'Head of Retail (Questioner): Ask how retail mortgage growth contributed to revenue; propose new product ideas.',
        'Head of Risk (Questioner): Ask about the deteriorating NPL ratio and what provisions have been made.',
        'CEO (Moderator): Lead the meeting, ask strategic questions about profitability and capital adequacy, summarize action points.',
        'Each participant must ask at least two relevant questions. After the role-play, each student submits a short paragraph from their character\'s perspective.',
      ],
    },
    rubric: [
      { name: 'Беглость и уместность профессионального английского', max_points: 30, description: 'Естественность и профессиональность речи' },
      { name: 'Точность финансовых концепций', max_points: 30, description: 'Верное представление и обсуждение финансовых KPI' },
      { name: 'Активное слушание и релевантность вопросов', max_points: 25, description: 'Качество вопросов и ответов каждого участника' },
      { name: 'Достижение ролевых целей', max_points: 15, description: 'Насколько каждый участник выполнил задачи своей роли' },
    ],
  },
  {
    id: 'dia-investor-briefing',
    module: 'dialogue',
    title: 'Ролевая игра: Инвестиционный брифинг — RegionBank',
    instructions: 'Парная работа. Финансовый аналитик RegionBank представляет ключевые результаты потенциальному инвестору, рассматривающему покупку миноритарной доли.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'The Investor Briefing: RegionBank PJSC Annual Results',
      role: 'Financial Analyst (RegionBank) or Investor',
      duration_min: 5,
      required_vocab: ['Total Assets', 'Net Profit', 'NPL Ratio', 'Return on Equity (ROE)', 'Capital Adequacy Ratio (CAR)', 'provisions', 'asset quality', 'dividend policy', 'cost of capital', 'sector average'],
      structure_hints: [
        'RegionBank data: Total Assets 95B RUB (up from 82B) | Net Profit 3.2B RUB (up from 2.1B) | NPL Ratio 4.8% (up from 3.9%) | ROE 14.2% | CAR 12.1% (CBR minimum: 8%)',
        'Analyst: Welcome the investor and state the purpose | Present 2–3 positive highlights (asset growth, profit growth, solid CAR) | Proactively address the rising NPL ratio and explain management\'s strategy | Conclude with a confident outlook',
        'Investor follow-up questions: "The NPL ratio has risen — how confident are you that provisions are sufficient?" | "Your ROE is 14.2% — how does this compare to sector average and your cost of capital?" | "What is your dividend policy and when can investors expect a return?"',
      ],
    },
    rubric: [
      { name: 'Ясность и структура презентации', max_points: 35, description: 'Чёткость, структурированность и профессионализм изложения' },
      { name: 'Использование банковской лексики', max_points: 30, description: 'Точное и эффективное использование финансовой терминологии (NPL, CAR, ROE, провизии)' },
      { name: 'Убедительность нарратива', max_points: 20, description: 'Умение перевести цифры в убедительную бизнес-историю' },
      { name: 'Работа с вопросами', max_points: 15, description: 'Уверенность и компетентность при ответах на вопросы инвестора' },
    ],
  },
  {
    id: 'dia-financial-advisor',
    module: 'dialogue',
    title: 'Ролевая игра: Финансовый советник для состоятельного клиента',
    instructions: 'Парная работа. Финансовый советник банка консультирует клиента с 10 млн руб. по продуктам с разным уровнем риска и доходности.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Financial Advisory for a High-Net-Worth Client: 10 Million RUB Portfolio',
      role: 'Financial Advisor or Client (concerned about risk)',
      duration_min: 10,
      required_vocab: ['deposit insurance (ASV/DIA)', 'OFZ bonds', 'equity risk', 'diversification', 'risk-return principle', 'inflation hedge', 'structured product', 'credit risk', 'market risk', 'liquidity risk', 'inflation risk', 'portfolio'],
      structure_hints: [
        'Advisor: Explain fundamental differences between key products (deposits, bonds, equity investments, structured products) | Explain associated risks (credit, market, liquidity, inflation) | Explain the risk-return trade-off | Propose a suitable balanced portfolio concept | Use modal verbs for advice: "You should...", "This might...", "You could consider..."',
        'Client: Has 10M RUB from selling a business | Primary goal is safety, understands need for growth to protect against inflation | Ask many questions about risks, guarantees, expected returns | Use phrases: "I\'m particularly concerned about...", "Could you clarify...", "What happens if...?"',
        'Discussion points: DIA insurance covers only up to 1.4M RUB | OFZ bond yields vs. inflation | Difference between mutual funds and direct equity investment | Structured products: what is the capital protection element?',
      ],
    },
    rubric: [
      { name: 'Профессиональные знания', max_points: 40, description: 'Точное объяснение ключевых концепций: DIA, ОФЗ, рынок акций, диверсификация, принцип риск/доходность' },
      { name: 'Коммуникация и использование языка', max_points: 40, description: 'Беглость, эффективное использование модальных глаголов, профессиональный и эмпатичный тон' },
      { name: 'Выполнение задания и взаимодействие', max_points: 20, description: 'Оба участника остаются в роли; диалог охватывает ключевые темы' },
    ],
  },
  {
    id: 'dia-digital-doc',
    module: 'dialogue',
    title: 'Презентация: Цифровая трансформация банковского документооборота',
    instructions: 'Подготовьте и представьте структурированную презентацию (5–7 мин) об изменении роли банковских специалистов в условиях цифровой трансформации документооборота.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Digital Transformation of Bank Document Management',
      duration_min: 5,
      required_vocab: ['digital transformation', 'electronic document management (EDMS)', 'e-signature', 'KYC', 'optical character recognition (OCR)', 'cloud storage', 'data security', 'regulatory compliance', 'to automate', 'to streamline', 'paperless banking'],
      structure_hints: [
        'Content areas: What does digital transformation mean for bank document management (paper → EDMS)? | Specific changes: e-signatures, digital KYC, automated document routing for loans, digital archiving, paperless branches | Evolving role of banking professionals (from document handlers to digital process controllers and data analysts) | Opportunities (speed, accuracy, cost reduction, client convenience) AND challenges (cybersecurity, regulatory acceptance, staff training, legacy systems)',
        'Structure: Introduction → Main Body → Conclusion. Use visual aids (PowerPoint slides).',
        'Guiding questions: What does "paperless banking" mean in practice? | Which traditional document-intensive processes are being digitized? | What new digital skills are required? | What are the main regulatory and security challenges?',
      ],
    },
    rubric: [
      { name: 'Содержание и релевантность', max_points: 40, description: 'Ясное объяснение цифровой трансформации, конкретные примеры, анализ возможностей и вызовов, роль банковских специалистов' },
      { name: 'Язык и лексика', max_points: 30, description: 'Верное и уместное использование тематической лексики, грамматическая точность, причастные конструкции' },
      { name: 'Подача и слайды', max_points: 30, description: 'Эффективное использование наглядных материалов, зрительный контакт, уверенность, соблюдение регламента' },
    ],
  },
  {
    id: 'dia-edms-pitch',
    module: 'dialogue',
    title: 'Питч-презентация: Внедрение системы электронного документооборота (СЭД)',
    instructions: 'Выступите в роли технологического консультанта. Подготовьте убедительный питч (3–4 мин) руководителю операционного блока банка для получения одобрения пилотного проекта СЭД.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Implementing an Electronic Document Management System (EDMS) in Our Bank',
      duration_min: 3,
      required_vocab: ['to pitch an idea', 'to boost productivity', 'to mitigate risks', 'proof of concept', 'ROI', 'to monitor performance', 'digital workflow', 'automated routing', 'document processing time', 'error reduction', 'upfront cost', 'data migration'],
      structure_hints: [
        'Opening: Capture attention with a statistic. E.g.: "Our bank currently processes 12,000 paper loan documents per month. Each takes 35 minutes to manually review."',
        'Problem statement: Clearly identify the current inefficiency',
        'Solution: Present your EDMS and how it works',
        'Key arguments and benefits: E.g., "could reduce document processing time by 70%, reduce errors by 85%, save 40 staff hours per week"',
        'Acknowledge and rebut concerns: upfront cost, data migration, staff training, CBR approval for e-signatures',
        'Call to action: Request approval for a 3-month pilot in the mortgage department',
      ],
    },
    rubric: [
      { name: 'Убедительность и аргументация', max_points: 40, description: 'Ясность проблемы, сила аргументов, эффективное опровержение возражений, чёткий призыв к действию' },
      { name: 'Язык и лексика', max_points: 30, description: 'Эффективное использование убедительного языка и питч-лексики, грамматические конструкции для усиления аргументов' },
      { name: 'Подача и воздействие', max_points: 30, description: 'Уверенность, энтузиазм, темп, невербальная коммуникация, соблюдение регламента' },
    ],
  },
  {
    id: 'dia-pub-finance-pres',
    module: 'dialogue',
    title: 'Презентация + экспертная дискуссия: Проблемы и реформы государственных финансов России',
    instructions: 'Подготовьте структурированную презентацию (4–5 мин) и участвуйте в экспертной дискуссии после.',
    max_score: 100,
    content: {
      type: 'speaking',
      topic: 'Key Problems and Reforms in Russia\'s Public Finances and Banking System',
      duration_min: 4,
      required_vocab: ['budget deficit', 'sovereign debt', 'monetary policy', 'banking supervision', 'key interest rate', 'fiscal consolidation', 'sanction-resistant infrastructure', 'financial stability', 'regulatory reform', 'state-owned bank', 'dependence on', 'reform of', 'investment in', 'revenue from', 'compliance with'],
      structure_hints: [
        'Introduction (1 min): State the topic\'s importance. Briefly outline main problems and reform directions.',
        'Body Part 1 — Problems (1.5–2 min): Analyze 2–3 core challenges: (a) Budget dependence on oil and gas revenues ("Dutch disease" risk) | (b) Dominance of state-owned banks reducing competition and efficiency | (c) Impact of international sanctions on access to foreign capital markets and correspondent banking',
        'Body Part 2 — Reforms (1.5–2 min): Explain key reform measures — banking sector cleanup by the CBR, development of domestic capital market, reduction of external financing dependency',
        'Conclusion (1 min): Summarize the interconnected nature of problems and reforms. Brief outlook.',
        'Expert Panel Discussion: "Which problem is most critical?" | "Has the CBR banking sector cleanup made the system safer or less competitive?" | "Long-term risks of state-owned bank dominance?"',
        'Language: Use at least 10 vocabulary items. Pay attention to prepositions: dependence on, reform of, investment in, revenue from, compliance with.',
      ],
    },
    rubric: [
      { name: 'Презентация — содержание и структура', max_points: 30, description: 'Глубина анализа проблем и реформ, логичная структура' },
      { name: 'Презентация — лексика и язык', max_points: 20, description: 'Верное использование тематической лексики, грамматика, предлоги' },
      { name: 'Презентация — подача', max_points: 20, description: 'Беглость, произношение, уверенность' },
      { name: 'Участие в экспертной дискуссии', max_points: 30, description: 'Умение ответить на вопросы аудитории, развить аргументы, взаимодействовать с другими участниками' },
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
