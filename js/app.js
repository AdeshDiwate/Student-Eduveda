/* ============================================
   EDUVEDA - APP LOGIC
   ============================================ */

(function () {
  'use strict';

  // ===== DATA =====
  const subjects = [
    { name: 'Mathematics', icon: '\uD83D\uDCD0' },
    { name: 'Science', icon: '\uD83D\uDD2C' },
    { name: 'English', icon: '\uD83D\uDCD6' },
    { name: 'Social Science', icon: '\uD83C\uDFDB\uFE0F' },
    { name: 'Marathi', icon: '\uD83D\uDCDD' },
    { name: 'Hindi', icon: '\uD83D\uDCDA' },
    { name: 'General Knowledge', icon: '\uD83C\uDF10' },
    { name: 'Current Affairs', icon: '\uD83D\uDCF0' },
    { name: 'Personality Dev', icon: '\u2728' },
  ];
  const chapters = {
    Mathematics: [
      { num: 1, title: 'Rational and Irrational numbers', progress: 100 },
      { num: 2, title: 'Parallel Lines and Transversals', progress: 100 },
      { num: 3, title: 'Indices and Cube Root', progress: 60 },
      { num: 4, title: 'Altitudes and Medians of a Triangle', progress: 20 },
      { num: 5, title: 'Expansion Formulae', progress: 0 },
      { num: 6, title: 'Factorisation of Algebraic Expressions', progress: 0 },
      { num: 7, title: 'Variation', progress: 0 },
      { num: 8, title: 'Quadrilateral: Constructions and Types', progress: 0 },
      { num: 9, title: 'Discount and Commission', progress: 0 },
      { num: 10, title: 'Division of Polynomials', progress: 0 },
      { num: 11, title: 'Statistics', progress: 0 },
      { num: 12, title: 'Equations in One Variable', progress: 0 },
      { num: 13, title: 'Congruence of Triangles', progress: 0 },
      { num: 14, title: 'Compound Interest', progress: 0 },
      { num: 15, title: 'Area', progress: 0 },
      { num: 16, title: 'Surface Area and Volume', progress: 0 },
      { num: 17, title: 'Circle: Chord and Arc', progress: 0 },
    ],
    Science: [
      { num: 1, title: 'Living World and Classification of Microbes', progress: 80 },
      { num: 2, title: 'Health and Diseases', progress: 50 },
      { num: 3, title: 'Force and Pressure', progress: 35 },
      { num: 4, title: 'Current Electricity and Magnetism', progress: 0 },
      { num: 5, title: 'Inside the Atom', progress: 0 },
      { num: 6, title: 'Composition of Matter', progress: 0 },
      { num: 7, title: 'Metals and Nonmetals', progress: 0 },
      { num: 8, title: 'Pollution', progress: 0 },
      { num: 9, title: 'Disaster Management', progress: 0 },
      { num: 10, title: 'Cell and Cell Organelles', progress: 0 },
      { num: 11, title: 'Human Body and Organ System', progress: 0 },
      { num: 12, title: 'Introduction to Acid and Base', progress: 0 },
      { num: 13, title: 'Chemical Change and Chemical Bond', progress: 0 },
      { num: 14, title: 'Measurement and Effects of Heat', progress: 0 },
      { num: 15, title: 'Sound', progress: 0 },
      { num: 16, title: 'Reflection of Light', progress: 0 },
      { num: 17, title: 'Man-made Materials', progress: 0 },
      { num: 18, title: 'Ecosystems', progress: 0 },
      { num: 19, title: 'Life Cycle of Stars', progress: 0 },
    ],
    English: [
      { num: 1, title: 'A Time To Believe', progress: 90 },
      { num: 2, title: 'Dick Whittington and His Cat', progress: 70 },
      { num: 3, title: 'The Pilgrim', progress: 50 },
      { num: 4, title: "Revathi's Musical Plants", progress: 0 },
      { num: 5, title: 'Vocation', progress: 0 },
      { num: 6, title: 'Nature Created Man and Woman as Equals', progress: 0 },
      { num: 7, title: 'The Worm', progress: 0 },
      { num: 8, title: 'Three Visions for India', progress: 0 },
      { num: 9, title: 'The Happy Prince', progress: 0 },
      { num: 10, title: 'The Plate of Gold', progress: 0 },
      { num: 11, title: 'The Kite Festival', progress: 0 },
      { num: 12, title: 'The Last Leaf', progress: 0 },
      { num: 13, title: 'Leisure', progress: 0 },
      { num: 14, title: 'The Vet', progress: 0 },
      { num: 15, title: 'Revolutionary Steps in Surgery', progress: 0 },
      { num: 16, title: 'The Bees', progress: 0 },
      { num: 17, title: 'Ramanujan', progress: 0 },
      { num: 18, title: 'A Battle to Baffle', progress: 0 },
    ],
    'Social Science': [
      { num: 1, title: 'History: Sources of History', progress: 65 },
      { num: 2, title: 'History: Europe and India', progress: 35 },
      { num: 3, title: 'History: Effects of British Rule', progress: 20 },
      { num: 4, title: 'History: The Freedom Struggle of 1857', progress: 0 },
      { num: 5, title: 'History: Social and Religious Reforms', progress: 0 },
      { num: 6, title: 'History: Beginning of Freedom Movement', progress: 0 },
      { num: 7, title: 'History: Non-co-operation Movement', progress: 0 },
      { num: 8, title: 'History: Civil Disobedience Movement', progress: 0 },
      { num: 9, title: 'History: Last Phase of Struggle for Independence', progress: 0 },
      { num: 10, title: 'History: Armed Revolutionary Movement', progress: 0 },
      { num: 11, title: 'History: Struggle for Equality', progress: 0 },
      { num: 12, title: 'History: India Gains Independence', progress: 0 },
      { num: 13, title: 'History: Fulfillment of Struggle for Independence', progress: 0 },
      { num: 14, title: 'History: Formation of State of Maharashtra', progress: 0 },
      { num: 15, title: 'Civics: Introduction to the Parliamentary System', progress: 0 },
      { num: 16, title: 'Civics: The Indian Parliament', progress: 0 },
      { num: 17, title: 'Civics: The Union Executive', progress: 0 },
      { num: 18, title: 'Civics: The Indian Judicial System', progress: 0 },
      { num: 19, title: 'Civics: The State Government', progress: 0 },
      { num: 20, title: 'Civics: Bureaucracy', progress: 0 },
      { num: 21, title: 'Geography: Local Time and Standard Time', progress: 0 },
      { num: 22, title: 'Geography: Interior of the Earth', progress: 0 },
      { num: 23, title: 'Geography: Humidity and Clouds', progress: 0 },
      { num: 24, title: 'Geography: Structure of Ocean Floor', progress: 0 },
      { num: 25, title: 'Geography: Ocean Currents', progress: 0 },
      { num: 26, title: 'Geography: Land Use', progress: 0 },
      { num: 27, title: 'Geography: Population', progress: 0 },
      { num: 28, title: 'Geography: Industries', progress: 0 },
      { num: 29, title: 'Geography: Map Scale', progress: 0 },
      { num: 30, title: 'Geography: Field Visit', progress: 0 },
    ],
    Marathi: [
      { num: 1, title: 'आम्ही चालवू हा पुढे वारसा', progress: 75 },
      { num: 2, title: 'माझ्या देशावर माझे प्रेम आहे', progress: 45 },
      { num: 3, title: 'लाखाच्या कोटीच्या गप्पा', progress: 20 },
      { num: 4, title: 'नव्या युगाचे गाणे', progress: 0 },
      { num: 5, title: 'सुरांची जादुगिरी', progress: 0 },
      { num: 6, title: 'असा रंगारी श्रावण', progress: 0 },
      { num: 7, title: 'अण्णा भाऊंची भेट', progress: 0 },
      { num: 8, title: 'धाडसी कॅप्टन राधिका मेनन', progress: 0 },
      { num: 9, title: 'विद्याप्रशंसा', progress: 0 },
      { num: 10, title: 'लिओनार्दो दा विंची', progress: 0 },
      { num: 11, title: 'स्वामी विवेकानंदांची भारतयात्रा', progress: 0 },
      { num: 12, title: 'गोधडी', progress: 0 },
      { num: 13, title: 'पाड्यावरचा चहा', progress: 0 },
      { num: 14, title: 'फुलपाखरे', progress: 0 },
      { num: 15, title: 'आळशी', progress: 0 },
      { num: 16, title: 'चोच आणि चारा', progress: 0 },
      { num: 17, title: 'अन्नजाल', progress: 0 },
      { num: 18, title: 'जलदिंडी', progress: 0 },
      { num: 19, title: 'गे मायभू', progress: 0 },
      { num: 20, title: 'शब्दकोश', progress: 0 },
      { num: 21, title: 'संतवाणी', progress: 0 },
    ],
    Hindi: [
      { num: 1, title: 'हे मातृभूमि!', progress: 70 },
      { num: 2, title: 'वारिस कौन?', progress: 40 },
      { num: 3, title: 'नाखून क्यों बढ़ते हैं?', progress: 20 },
      { num: 4, title: 'गाँव-शहर', progress: 0 },
      { num: 5, title: 'मधुबन', progress: 0 },
      { num: 6, title: 'ज़रा प्यार से बोलना सीख लीजे', progress: 0 },
      { num: 7, title: 'मेरे रज़ा साहब', progress: 0 },
      { num: 8, title: 'पूर्ण विश्राम', progress: 0 },
      { num: 9, title: 'अनमोल वाणी', progress: 0 },
      { num: 10, title: 'धरती का आँगन महके', progress: 0 },
      { num: 11, title: 'दो लघुकथाएँ', progress: 0 },
      { num: 12, title: 'लकड़हारा और वन', progress: 0 },
      { num: 13, title: 'सौहार्द-सौमनस्य', progress: 0 },
      { num: 14, title: 'खेती से आई तब्दीलियाँ', progress: 0 },
      { num: 15, title: 'अंधायुग', progress: 0 },
      { num: 16, title: 'स्वराज्य मेरा जन्मसिद्ध अधिकार है', progress: 0 },
      { num: 17, title: 'मेरा विद्रोह', progress: 0 },
      { num: 18, title: 'नहीं कुछ इससे बढ़कर', progress: 0 },
    ],
    'General Knowledge': [
      { num: 1, title: 'India: States, Capitals and Symbols', progress: 70 },
      { num: 2, title: 'Major Rivers, Mountains and National Parks', progress: 40 },
      { num: 3, title: 'Important Days and National Events', progress: 20 },
      { num: 4, title: 'Famous Scientists and Inventors', progress: 0 },
      { num: 5, title: 'Books, Authors and Awards', progress: 0 },
      { num: 6, title: 'Sports, Cups and Trophies', progress: 0 },
      { num: 7, title: 'Indian Constitution Basics', progress: 0 },
      { num: 8, title: 'Space, Environment and Technology Facts', progress: 0 },
    ],
    'Current Affairs': [
      { num: 1, title: 'National News Round-up', progress: 80 },
      { num: 2, title: 'State News: Maharashtra Updates', progress: 45 },
      { num: 3, title: 'Science and Space Developments', progress: 30 },
      { num: 4, title: 'Sports Highlights and Tournaments', progress: 10 },
      { num: 5, title: 'Awards, Honours and Appointments', progress: 0 },
      { num: 6, title: 'Environment and Climate Updates', progress: 0 },
      { num: 7, title: 'Economy and Budget Basics', progress: 0 },
      { num: 8, title: 'International News for Students', progress: 0 },
    ],
    'Personality Dev': [
      { num: 1, title: 'Self-awareness and Goal Setting', progress: 60 },
      { num: 2, title: 'Effective Communication Skills', progress: 35 },
      { num: 3, title: 'Confidence Building', progress: 15 },
      { num: 4, title: 'Time Management and Study Habits', progress: 0 },
      { num: 5, title: 'Teamwork and Leadership Basics', progress: 0 },
      { num: 6, title: 'Problem Solving and Decision Making', progress: 0 },
      { num: 7, title: 'Digital Etiquette and Responsibility', progress: 0 },
      { num: 8, title: 'Public Speaking and Presentation', progress: 0 },
    ],
  };
  const recentChapters = [
    { subject: 'Math', chapter: 'Ch 3 - Triangles', color: '#0ea5e9' },
    { subject: 'Science', chapter: 'Ch 1 - Chemical Reactions', color: '#22c55e' },
    { subject: 'English', chapter: 'Ch 2 - Grammar', color: '#f59e0b' },
  ];

  const quizQuestionsBySubject = {
    Mathematics: [
      { q: 'In a right-angled triangle, if the two sides containing the right angle are 3 cm and 4 cm, what is the length of the hypotenuse?', opts: ['5 cm', '6 cm', '7 cm', '8 cm'], correct: 0 },
      { q: 'The sum of all interior angles of a triangle is:', opts: ['90°', '180°', '270°', '360°'], correct: 1 },
      { q: 'An equilateral triangle has:', opts: ['All sides equal', 'Two sides equal', 'No sides equal', 'One right angle'], correct: 0 },
      { q: 'The longest side of a right triangle is called the:', opts: ['Base', 'Perpendicular', 'Hypotenuse', 'Median'], correct: 2 },
      { q: 'If two triangles are similar, their corresponding angles are:', opts: ['Supplementary', 'Complementary', 'Equal', 'Unrelated'], correct: 2 },
    ],
    Physics: [
      { q: 'The SI unit of electric current is:', opts: ['Volt', 'Ohm', 'Ampere', 'Watt'], correct: 2 },
      { q: 'Which of these is a vector quantity?', opts: ['Mass', 'Speed', 'Velocity', 'Temperature'], correct: 2 },
      { q: 'The acceleration due to gravity on Earth is approximately:', opts: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '11.2 m/s²'], correct: 1 },
      { q: 'Light waves are:', opts: ['Longitudinal', 'Transverse', 'Both', 'Neither'], correct: 1 },
      { q: "Ohm's law relates voltage, current and:", opts: ['Power', 'Resistance', 'Charge', 'Energy'], correct: 1 },
    ],
    Chemistry: [
      { q: 'The chemical symbol for Gold is:', opts: ['Go', 'Gd', 'Au', 'Ag'], correct: 2 },
      { q: 'The pH of pure water is:', opts: ['0', '7', '10', '14'], correct: 1 },
      { q: 'Which gas is most abundant in the atmosphere?', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 2 },
      { q: 'Baking soda is chemically:', opts: ['NaCl', 'NaHCO₃', 'Na₂CO₃', 'NaOH'], correct: 1 },
      { q: 'The process of rusting involves:', opts: ['Reduction', 'Oxidation', 'Neutralisation', 'Sublimation'], correct: 1 },
    ],
    Biology: [
      { q: 'The powerhouse of the cell is:', opts: ['Ribosome', 'Nucleus', 'Mitochondria', 'Lysosome'], correct: 2 },
      { q: 'Which blood cells help fight infection?', opts: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], correct: 1 },
      { q: 'Photosynthesis mainly occurs in:', opts: ['Roots', 'Stems', 'Leaves', 'Flowers'], correct: 2 },
      { q: 'The basic unit of heredity is:', opts: ['Cell', 'Gene', 'Tissue', 'Organ'], correct: 1 },
      { q: 'Humans have how many pairs of chromosomes?', opts: ['22', '23', '24', '46'], correct: 1 },
    ],
    English: [
      { q: 'Which of these is a noun?', opts: ['Quickly', 'Beautiful', 'Happiness', 'Running'], correct: 2 },
      { q: 'Choose the correctly spelled word:', opts: ['Recieve', 'Receive', 'Receeve', 'Receve'], correct: 1 },
      { q: 'The past tense of "go" is:', opts: ['Goed', 'Gone', 'Went', 'Going'], correct: 2 },
      { q: '"Break the ice" means:', opts: ['Smash ice cubes', 'Start a conversation', 'Feel cold', 'End a friendship'], correct: 1 },
      { q: 'Which is a pronoun?', opts: ['Run', 'She', 'Big', 'Quickly'], correct: 1 },
    ],
    Computer: [
      { q: 'HTML stands for:', opts: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyperlink Markup Logic', 'Hyper Transfer Machine Language'], correct: 0 },
      { q: 'Which of these is NOT a programming language?', opts: ['Python', 'HTML', 'Java', 'C++'], correct: 1 },
      { q: 'RAM stands for:', opts: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Memory', 'Read Archive Memory'], correct: 1 },
      { q: 'Which data structure uses LIFO order?', opts: ['Queue', 'Stack', 'Array', 'Tree'], correct: 1 },
      { q: 'In Python, which keyword defines a function?', opts: ['func', 'function', 'def', 'define'], correct: 2 },
    ],
    Economics: [
      { q: 'The law of demand states that as price increases, demand:', opts: ['Increases', 'Decreases', 'Remains same', 'Doubles'], correct: 1 },
      { q: 'GDP stands for:', opts: ['Gross Domestic Product', 'General Domestic Price', 'Gross Direct Payment', 'Global Demand Point'], correct: 0 },
      { q: 'A market with one seller is called:', opts: ['Oligopoly', 'Duopoly', 'Monopoly', 'Perfect competition'], correct: 2 },
      { q: 'Which is a factor of production?', opts: ['Money', 'Land', 'Profit', 'Demand'], correct: 1 },
      { q: 'Inflation refers to:', opts: ['Fall in prices', 'Rise in prices', 'Stable prices', 'Zero prices'], correct: 1 },
    ],
    Accountancy: [
      { q: 'The accounting equation is:', opts: ['Assets = Liabilities + Capital', 'Assets = Capital - Liabilities', 'Capital = Assets + Liabilities', 'Liabilities = Assets - Capital'], correct: 0 },
      { q: 'Journal is a book of:', opts: ['Final entry', 'Original entry', 'Secondary entry', 'Adjustment'], correct: 1 },
      { q: 'Depreciation is charged on:', opts: ['Current assets', 'Fixed assets', 'Liabilities', 'Capital'], correct: 1 },
      { q: 'A debit balance in cash book means:', opts: ['Bank overdraft', 'Cash in hand', 'Loss', 'Creditor'], correct: 1 },
      { q: 'Trial balance is prepared to check:', opts: ['Profit', 'Loss', 'Arithmetical accuracy', 'Tax'], correct: 2 },
    ],
    History: [
      { q: 'The Indus Valley Civilisation flourished along which river?', opts: ['Ganga', 'Yamuna', 'Indus', 'Narmada'], correct: 2 },
      { q: 'Who was the first Mughal emperor of India?', opts: ['Akbar', 'Humayun', 'Babur', 'Shah Jahan'], correct: 2 },
      { q: 'The Quit India Movement was launched in:', opts: ['1920', '1930', '1942', '1947'], correct: 2 },
      { q: 'Who wrote "Discovery of India"?', opts: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'B. R. Ambedkar', 'Sardar Patel'], correct: 1 },
      { q: 'The French Revolution began in:', opts: ['1689', '1789', '1889', '1989'], correct: 1 },
    ],
    'General Knowledge': [
      { q: 'Which planet is known as the Red Planet?', opts: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correct: 1 },
      { q: 'The capital of Australia is:', opts: ['Sydney', 'Melbourne', 'Canberra', 'Perth'], correct: 2 },
      { q: 'Who invented the telephone?', opts: ['Edison', 'Tesla', 'Graham Bell', 'Marconi'], correct: 2 },
      { q: 'The largest ocean in the world is:', opts: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3 },
      { q: 'The currency of Japan is:', opts: ['Won', 'Yen', 'Yuan', 'Rupiah'], correct: 1 },
    ],
    'Current Affairs': [
      { q: 'Which country hosted the most recent G20 summit (2023)?', opts: ['Japan', 'India', 'Indonesia', 'Italy'], correct: 1 },
      { q: 'ISRO recently achieved a historic landing with which mission?', opts: ['Mangalyaan', 'Chandrayaan-3', 'Gaganyaan', 'Aditya-L1'], correct: 1 },
      { q: 'Who is the current Secretary-General of the United Nations?', opts: ['Ban Ki-moon', 'Kofi Annan', 'António Guterres', 'Boutros-Ghali'], correct: 2 },
      { q: 'Which sport is associated with the Thomas Cup?', opts: ['Tennis', 'Badminton', 'Cricket', 'Football'], correct: 1 },
      { q: 'The World Environment Day is observed on:', opts: ['April 22', 'June 5', 'July 11', 'September 16'], correct: 1 },
    ],
    'Personality Dev': [
      { q: 'Active listening mainly involves:', opts: ['Interrupting often', 'Giving full attention', 'Checking phone', 'Looking away'], correct: 1 },
      { q: 'Time management best practice:', opts: ['Multitask everything', 'Prioritise important tasks', 'Delay deadlines', 'Avoid planning'], correct: 1 },
      { q: 'Body language includes:', opts: ['Tone only', 'Words only', 'Posture and gestures', 'Silence only'], correct: 2 },
      { q: 'A key trait of a good leader is:', opts: ['Ignoring team', 'Empathy', 'Taking all credit', 'Avoiding decisions'], correct: 1 },
      { q: 'Public speaking confidence improves with:', opts: ['Avoidance', 'Practice', 'Memorising word-for-word', 'Reading only'], correct: 1 },
    ],
  };

  function getQuizQuestions() {
    // Quiz entered from PDF Chat is about the Triangles PDF -> use Mathematics questions
    if (quizEntrySource === 'pdf') return quizQuestionsBySubject.Mathematics;
    return selectedSubject === 'Science' ? quizQuestionsBySubject.Physics : (quizQuestionsBySubject[selectedSubject] || quizQuestionsBySubject.Mathematics);
  }

  // Textbook PDFs mapped only for Class 8 books currently available in /assets/books/
  const textbooksBySubject = {
    Mathematics: { file: 'assets/books/Maths 8t class.pdf', title: 'Mathematics - Class 8', meta: 'Maharashtra State Board - Textbook' },
    Science: { file: 'assets/books/Science 8th class.pdf', title: 'Science - Class 8', meta: 'Maharashtra State Board - Textbook' },
    English: { file: 'assets/books/English 8th class.pdf', title: 'English - Class 8', meta: 'Maharashtra State Board - Textbook' },
    'Social Science': { file: 'assets/books/History book 8th class.pdf', title: 'Social Science - Class 8', meta: 'Maharashtra State Board - History Textbook' },
  };

  // Study notes keyed by subject - dummy AI-generated content for the demo
  const notesBySubject = {
    Mathematics: [
      { title: 'Key Concepts', body: '<p>Mathematics combines logic, structure, and creativity. Focus on understanding the <strong>why</strong> behind each formula rather than memorising it.</p>' },
      { title: 'Core Topics (Class 12)', items: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices and Determinants', 'Continuity and Differentiability', 'Integrals and Differential Equations', 'Vectors and 3-D Geometry', 'Linear Programming', 'Probability'] },
      { title: 'Quick Formulas', items: ['Area of triangle = 1/2 x base x height', 'Pythagoras: a² + b² = c²', 'Derivative of sin x = cos x', 'Integral of 1/x = ln|x| + C', 'P(A∪B) = P(A) + P(B) - P(A∩B)'] },
      { title: 'Study Tip', body: '<p>Practise at least <strong>5 problems per topic</strong> every day. Solving problems is far more effective than passive reading.</p>' },
    ],
    Physics: [
      { title: 'Key Concepts', body: '<p>Physics explains how the universe works. Master the <strong>core laws first</strong> - then derive everything else from them.</p>' },
      { title: 'Core Topics (Class 12)', items: ['Electric Charges and Fields', 'Current Electricity', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Optics (Ray & Wave)', 'Modern Physics (Photoelectric Effect, Atom, Nuclei)', 'Semiconductors'] },
      { title: 'Must-Know Formulas', items: ["Ohm's Law: V = IR", 'Lens formula: 1/f = 1/v - 1/u', 'Coulomb: F = kq₁q₂/r²', 'EMF = -dΦ/dt', 'Energy of photon: E = hf'] },
      { title: 'Study Tip', body: '<p>Always start with a <strong>free-body diagram</strong> or a clear circuit sketch. Label every quantity before writing equations.</p>' },
    ],
    English: [
      { title: 'Key Skills', body: '<p>Good English rests on three pillars: <strong>reading comprehension</strong>, <strong>grammar</strong>, and <strong>writing clarity</strong>.</p>' },
      { title: 'Core Areas (Class 12)', items: ['Prose and Poetry (Flamingo / Vistas)', 'Reading Comprehension', 'Note-Making and Summary', 'Formal Letters & Applications', 'Articles, Reports, Speeches', 'Grammar (Tenses, Voice, Reported Speech)', 'Vocabulary Building'] },
      { title: 'Writing Checklist', items: ['Open with a clear thesis', 'One idea per paragraph', 'Use active voice where possible', 'Vary sentence length', 'Proofread for grammar & spelling'] },
      { title: 'Study Tip', body: '<p>Read <strong>one newspaper editorial every day</strong>. Note down 5 new words and use them in your own sentences.</p>' },
    ],
    // Fallback for subjects without detailed notes
    _default: [
      { title: 'Study Notes', body: '<p>Detailed notes for this subject will be available soon. In the meantime, use the <strong>Chat</strong> tab to ask your AI tutor questions, or generate a quick <strong>Summary</strong> from the PDF Chat section.</p>' },
      { title: 'Tips', items: ['Read the chapter introduction first', 'Make a quick mind map', 'Quiz yourself after each topic', 'Revise your notes within 24 hours'] },
    ],
  };

  // Teacher-posted content for each section button
  const sectionContent = {
    notes: {
      title: 'Notes',
      items: [
        { title: 'Current Electricity - Key Notes', desc: 'Physics - Ch 2 - Handwritten notes PDF', by: 'Mrs. Sharma', time: '2 hours ago', badge: 'new', icon: '#0ea5e9', bg: '#e0f2fe', file: 'assets/books/Current Electricity Class 12 Physics Handwritten Notes PDF - Sci Phy.pdf', fileType: 'pdf', fileSize: '47 MB' },
        { title: 'Triangles - Theorem Proofs', desc: 'Mathematics - Ch 3 - Step-by-step proofs & PPT slides', by: 'Mr. Patil', time: 'Yesterday', badge: '', icon: '#0ea5e9', bg: '#e0f2fe' },
        { title: 'Grammar Rules Cheat Sheet', desc: 'English - Tenses, Voice, Narration', by: 'Ms. Joshi', time: '2 days ago', badge: '', icon: '#0ea5e9', bg: '#e0f2fe' },
        { title: 'Solid State Summary', desc: 'Chemistry - Ch 1 - Crystal types & packing', by: 'Mr. Deshmukh', time: '3 days ago', badge: '', icon: '#0ea5e9', bg: '#e0f2fe' },
      ],
    },
    test: {
      title: 'Tests',
      items: [
        { title: 'Unit Test - Solid State', desc: 'Chemistry - 30 marks - 45 min', by: 'Mr. Deshmukh', time: '5 hours ago', badge: 'due', icon: '#f59e0b', bg: '#fef3c7', file: 'assets/books/Unit Test class 8.pdf', fileType: 'pdf', fileSize: '8.9 MB' },
        { title: 'Weekly Quiz - Algebra', desc: 'Mathematics - 20 marks - 30 min', by: 'Mr. Patil', time: '1 day ago', badge: 'due', icon: '#f59e0b', bg: '#fef3c7' },
        { title: 'Surprise Test - Optics', desc: 'Physics - 15 marks - Completed', by: 'Mrs. Sharma', time: '4 days ago', badge: 'done', icon: '#0ea5e9', bg: '#e0f2fe' },
      ],
    },
    worksheet: {
      title: 'Worksheets',
      items: [
        { title: 'Triangles Practice Sheet', desc: 'Mathematics - 15 Questions - Solve all', by: 'Mr. Patil', time: '3 hours ago', badge: 'new', icon: '#8b5cf6', bg: '#ede9fe', file: 'assets/books/Class 8 Mathematics Worksheet - Factorisation.pdf', fileType: 'pdf', fileSize: '3.8 MB' },
        { title: 'Reading Comprehension', desc: 'English - 2 passages - Answer in brief', by: 'Ms. Joshi', time: 'Yesterday', badge: '', icon: '#8b5cf6', bg: '#ede9fe' },
        { title: 'Chemical Equations Balancing', desc: 'Chemistry - 10 equations to balance', by: 'Mr. Deshmukh', time: '3 days ago', badge: 'done', icon: '#0ea5e9', bg: '#e0f2fe' },
      ],
    },
    homework: {
      title: 'Homework',
      items: [
        { title: 'Solve Ex 3.2 - Triangles', desc: 'Mathematics - Q1 to Q15 - Submit by tomorrow', by: 'Mr. Patil', time: '1 hour ago', badge: 'due', icon: '#22c55e', bg: '#dcfce7', file: 'assets/books/class 8th - linear equations in one variable(ch-2).pdf', fileType: 'pdf', fileSize: '4.2 MB' },
        { title: 'Write Essay on Climate Change', desc: 'English - 300 words minimum - Submit by Friday', by: 'Ms. Joshi', time: '6 hours ago', badge: 'due', icon: '#22c55e', bg: '#dcfce7' },
        { title: "Lab Report - Ohm's Law", desc: 'Physics - With circuit diagram - Submit by Monday', by: 'Mrs. Sharma', time: '1 day ago', badge: '', icon: '#22c55e', bg: '#dcfce7' },
        { title: 'NCERT Back Exercises - Ch 1', desc: 'Chemistry - All intext + exercise questions', by: 'Mr. Deshmukh', time: '2 days ago', badge: 'done', icon: '#0ea5e9', bg: '#e0f2fe' },
      ],
    },
    competitive: {
      title: 'Competitive Exams',
      items: [
        {
          title: 'MHT-CET',
          desc: 'Entrance exam for engineering, pharmacy and related courses after class 12 in Maharashtra.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: 'new',
          icon: '#2563eb',
          bg: '#dbeafe',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v5l-4 7a4 4 0 0 0 3.5 6h5a4 4 0 0 0 3.5-6l-4-7V3"/><path d="M8 14h8"/></svg>',
          examTag: 'State Entrance',
          bestFor: 'Students aiming for engineering, pharmacy or professional science courses after class 12.',
          stage: 'Class 8-10 is a good time to strengthen PCM basics and understand future entrance options.',
          about:
            'MHT-CET is a major state-level entrance exam used for admission to engineering, pharmacy and some allied professional courses in Maharashtra. For school students, it becomes meaningful when you are curious about technical or science-based careers and want to build strong subject foundations early.',
          subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
          interests: ['Engineering', 'Problem Solving', 'Technology', 'Applied Science'],
          focus: [
            'Build strong class 8-10 concepts in Maths and Science.',
            'Practice speed, accuracy and chapter-wise MCQs.',
            'Learn to balance board-style understanding with objective questions.',
          ],
          path: 'It can lead to courses such as engineering, pharmacy, computer science, electronics and other technical degree options.',
        },
        {
          title: 'JEE',
          desc: 'National engineering entrance pathway for students interested in top IITs, NITs and technical careers.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: '',
          icon: '#f97316',
          bg: '#ffedd5',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 15.8 6.8 18.3l1-5.9L3.5 8.2l5.9-.9L12 2z"/></svg>',
          examTag: 'Engineering Entrance',
          bestFor: 'Students who enjoy Maths deeply and are excited by engineering, coding, design or analytical problem solving.',
          stage: 'Awareness can begin in class 8-10 by building strong PCM basics and disciplined study habits.',
          about:
            'JEE is one of the best-known engineering entrance routes in India. Students who later want to target IITs, NITs or other engineering colleges usually build their foundations early through strong concept learning in Maths, Physics and Chemistry.',
          subjects: ['Physics', 'Chemistry', 'Mathematics'],
          interests: ['Engineering', 'Maths', 'Coding', 'Innovation'],
          focus: [
            'Strengthen conceptual understanding instead of rote learning.',
            'Practice multi-step problem solving and time management.',
            'Develop comfort with higher-order numerical questions.',
          ],
          path: 'It can lead toward engineering, computer science, robotics, AI, electronics, civil, mechanical and many technical careers.',
        },
        {
          title: 'NEET',
          desc: 'Medical entrance pathway for students who dream about doctor, dentist or healthcare careers.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: '',
          icon: '#dc2626',
          bg: '#fee2e2',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-4.4-8.5-8A5 5 0 0 1 12 7a5 5 0 0 1 8.5 6c-2 3.6-8.5 8-8.5 8z"/><path d="M12 10v5"/><path d="M9.5 12.5h5"/></svg>',
          examTag: 'Medical Entrance',
          bestFor: 'Students interested in Biology, healthcare, medicine, nursing support paths or serving people through science.',
          stage: 'From class 8-10, it helps to build strong Biology understanding and disciplined science study routines.',
          about:
            'NEET is the main medical entrance route for students who want to pursue MBBS, BDS and several healthcare-related degree programs after class 12. Even in middle and secondary school, students can begin exploring whether they enjoy Biology, patient care and scientific study.',
          subjects: ['Biology', 'Physics', 'Chemistry'],
          interests: ['Medicine', 'Biology', 'Healthcare', 'Service'],
          focus: [
            'Build clear NCERT-style concepts in Biology and Science.',
            'Improve memory retention with diagrams, revision and practice tests.',
            'Develop consistency and patience for long-term preparation.',
          ],
          path: 'It can lead to medicine, dentistry, healthcare studies and related science-based professional careers.',
        },
        {
          title: 'SSC GD',
          desc: 'Government recruitment exam route for students interested in disciplined service and defence-style careers.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: '',
          icon: '#0f766e',
          bg: '#ccfbf1',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V7l7-4z"/><path d="m9.5 12 1.7 1.7 3.3-3.7"/></svg>',
          examTag: 'Government Job',
          bestFor: 'Students interested in uniformed service, government jobs, discipline, physical fitness and public duty.',
          stage: 'Class 8-10 students can begin by improving general awareness, reasoning, basic maths and fitness habits.',
          about:
            'SSC GD is associated with recruitment into general duty constable roles and often appeals to students who admire government service, security forces and physically active career paths. Early awareness helps students understand the mix of academics, discipline and physical readiness involved.',
          subjects: ['General Intelligence', 'General Knowledge', 'Mathematics', 'Language'],
          interests: ['Government Service', 'Discipline', 'Fitness', 'Public Duty'],
          focus: [
            'Strengthen basic arithmetic, reasoning and language skills.',
            'Read current affairs and general knowledge regularly.',
            'Maintain physical fitness and consistency in routine.',
          ],
          path: 'It can lead toward government security and defence-support roles, and it builds awareness for other service-based competitive exams too.',
        },
        {
          title: 'NDA',
          desc: 'Defence entrance path for students who aspire to join the armed forces as officers in the future.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: '',
          icon: '#7c3aed',
          bg: '#ede9fe',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.8 5.6 6.2.9-4.5 4.4 1.1 6.1L12 17.2 6.4 20l1.1-6.1L3 9.5l6.2-.9L12 3z"/><path d="M12 8v5"/></svg>',
          examTag: 'Defence Entrance',
          bestFor: 'Students inspired by leadership, defence service, discipline, patriotism and officer-level careers.',
          stage: 'Class 8-10 is the right stage to build fitness, maths confidence, English skills and general awareness.',
          about:
            'NDA is a well-known defence entry route for students who later want to join the armed forces as officers. For younger students, it represents a future path that combines academics, leadership, physical fitness and service to the nation.',
          subjects: ['Mathematics', 'English', 'General Knowledge', 'Current Affairs'],
          interests: ['Defence', 'Leadership', 'Fitness', 'Service'],
          focus: [
            'Build maths and English fundamentals carefully.',
            'Develop confidence, discipline and awareness of national and world events.',
            'Work on physical fitness and communication skills.',
          ],
          path: 'It can lead toward officer training and long-term defence careers in the army, navy or air force.',
        },
        {
          title: 'CUET',
          desc: 'A university entrance route for students exploring broad undergraduate options after school.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: '',
          icon: '#0891b2',
          bg: '#cffafe',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>',
          examTag: 'University Entrance',
          bestFor: 'Students exploring undergraduate options across arts, commerce, science, languages and social sciences.',
          stage: 'It is useful to understand from class 8-10 if you like multiple subjects and want flexible future degree options.',
          about:
            'CUET is associated with entry to many undergraduate university programs. It is especially useful for students who are still exploring their interests and want a broad academic route rather than a single professional entrance path.',
          subjects: ['Language', 'Domain Subjects', 'General Test'],
          interests: ['Humanities', 'Commerce', 'Science', 'Flexible Careers'],
          focus: [
            'Build strong school subject understanding and reading skills.',
            'Develop confidence in aptitude and general test patterns.',
            'Keep your options open by tracking your interests over time.',
          ],
          path: 'It can lead to university degree options in many streams and helps students explore a wide range of future careers.',
        },
        {
          title: 'Polytechnic Entrance',
          desc: 'A diploma-focused technical route for students interested in hands-on engineering and early specialization.',
          by: 'Career Guidance',
          time: 'Updated today',
          badge: '',
          icon: '#ea580c',
          bg: '#ffedd5',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a1.8 1.8 0 1 1-3.6 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a1.8 1.8 0 1 1 0-3.6h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a1.8 1.8 0 1 1 3.6 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a1.8 1.8 0 1 1 0 3.6h-.2a1 1 0 0 0-.9.6z"/></svg>',
          examTag: 'Diploma Route',
          bestFor: 'Students who like practical learning, technical subjects, machines, design and applied engineering.',
          stage: 'Awareness from class 8-10 is helpful if you are considering a diploma-based technical route after class 10.',
          about:
            'Polytechnic entrance pathways are relevant for students who want to move toward diploma education and hands-on technical fields earlier. It is often a strong option for students who enjoy practical problem solving and want a structured technical route after class 10.',
          subjects: ['Mathematics', 'Science', 'Technical Aptitude'],
          interests: ['Technical Skills', 'Practical Learning', 'Engineering', 'Design'],
          focus: [
            'Keep maths and science concepts clear and application-oriented.',
            'Explore technical curiosity through models, labs and practical examples.',
            'Understand diploma versus degree routes early.',
          ],
          path: 'It can lead toward diploma engineering, technical jobs, later degree entry and skill-based industry roles.',
        },
        {
          title: 'Olympiad Exams',
          desc: 'Subject-focused competitive exams that help school students test concepts in Maths, Science, English and more.',
          by: 'School Enrichment',
          time: 'Updated today',
          badge: '',
          icon: '#16a34a',
          bg: '#dcfce7',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v3a5 5 0 0 1-10 0V4z"/><path d="M7 5H5a2 2 0 0 0 0 4h2"/><path d="M17 5h2a2 2 0 0 1 0 4h-2"/></svg>',
          examTag: 'School-Level Competitions',
          bestFor: 'Class 8, 9 and 10 students who want to challenge themselves early and sharpen subject confidence.',
          stage: 'These are especially suitable while you are still in school and exploring strengths.',
          about:
            'Olympiad exams are among the most student-friendly competitive formats for school learners. They help students measure their conceptual strength and build confidence before larger future entrance exams.',
          subjects: ['Mathematics', 'Science', 'English', 'Reasoning', 'GK'],
          interests: ['Academic Growth', 'Subject Mastery', 'Confidence Building', 'Early Competition'],
          focus: [
            'Strengthen concepts chapter by chapter.',
            'Practice MCQs and logical thinking regularly.',
            'Use these exams to discover your stronger subjects early.',
          ],
          path: 'They build exam confidence, deeper understanding and early readiness for scholarships and later competitive exams.',
        },
        {
          title: 'Scholarship Exams',
          desc: 'Exams designed to reward strong students with recognition, financial support and academic confidence.',
          by: 'School Enrichment',
          time: 'Updated today',
          badge: '',
          icon: '#7c3aed',
          bg: '#ede9fe',
          iconSvg:
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="m15.5 5.5-7 7"/><path d="M8 10.5V14a4 4 0 0 0 8 0v-3.5"/><path d="M7 22h10"/></svg>',
          examTag: 'Merit Support',
          bestFor: 'Students who perform well academically and want motivation, recognition or financial encouragement.',
          stage: 'Great to explore from class 8-10 because they improve confidence and exam exposure early.',
          about:
            'Scholarship exams help students experience competitive patterns in a school-friendly way while also aiming for recognition, certificates or financial support. They are useful stepping stones for students building serious academic goals.',
          subjects: ['Mathematics', 'Science', 'Reasoning', 'Language', 'General Knowledge'],
          interests: ['Merit Growth', 'Academic Recognition', 'Confidence', 'Future Planning'],
          focus: [
            'Practice school concepts with accuracy and consistency.',
            'Use mock tests to improve confidence under time pressure.',
            'Track weaker chapters and revise smartly.',
          ],
          path: 'They can improve academic confidence, strengthen resumes and prepare students for larger future entrance routes.',
        },
      ],
    },
  };

  const chatResponses = {
    'Explain this chapter simply':
      'Triangles are shapes with 3 sides and 3 angles. The main types are equilateral (all sides equal), isosceles (two sides equal), and scalene (no sides equal). The most important rule: all angles always add up to 180°. The Pythagoras theorem (a² + b² = c²) works for right-angled triangles.',
    'Ask important questions':
      'Here are key questions for this chapter:\n\n1. What are the different types of triangles?\n2. State and prove the Pythagoras theorem.\n3. What are the criteria for triangle congruence?\n4. Explain the Basic Proportionality Theorem.\n5. How do you find the area of a triangle using Heron\'s formula?',
    'Make quiz from this topic':
      'I can generate a quiz for you! Head to the Quiz AI section from the Chapter Hub, or I can ask you questions right here. Would you like me to start with easy, medium, or hard questions?',
    'Give summary':
      'Chapter Summary - Triangles:\n\n• A triangle has 3 sides, 3 vertices, and 3 angles\n• Sum of angles = 180°\n• Types: Equilateral, Isosceles, Scalene, Right-angled\n• Pythagoras Theorem: In a right triangle, hypotenuse² = base² + height²\n• Congruence rules: SSS, SAS, ASA, AAS, RHS\n• Similarity: AA, SSS, SAS criteria',
    'Help me understand formulas':
      'Key formulas for Triangles:\n\n1. Area = 1/2 x base x height\n2. Pythagoras: a² + b² = c²\n3. Heron\'s formula: √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2\n4. Sine rule: a/sinA = b/sinB = c/sinC\n5. Cosine rule: c² = a² + b² - 2ab cosC\n\nWould you like me to explain any of these in detail?',
    'Tell me something interesting':
      'Here\'s something interesting: Many everyday devices like fans, lights, and phones work because of electricity. In fact, electric current is simply the movement of tiny charged particles called electrons, and it can power everything from a small bulb to a city!',
    'Share a simple example':
      'A simple example is a torch. When you connect the battery, wire, and bulb, electrons flow through the wire and bulb filament. This flow of electric charge is electric current, and it makes the bulb glow.',
    'Give me a quick explanation':
      'In short, electric current is the flow of electric charge through a conductor. It happens only in a complete circuit, and is measured in amperes. Think of it as water flowing through a pipe, but with electric charge instead of water.',
    'Suggest a study tip':
      'A good study tip is to break the topic into small parts, learn the key terms first, and then practice using simple examples. Revising the main ideas after a short break helps them stick better.',
    'What should I explore next?':
      'Next, try exploring related concepts like voltage and resistance, or see how electric current is used in simple circuits. Understanding these ideas will make the whole subject much easier to follow.',
  };

  const chapterSpecificChatResponses = {
    Science: {
      'Current Electricity and Magnetism': {
        'what is electric current explain with an example':
          'Electric current is the flow of electric charges through a conductor. In simple terms, it is the movement of electrons in a closed circuit. Electric current flows only when the circuit is complete. Its SI unit is Ampere (A).\n\nFor example, when we switch on a torch, the circuit gets completed and current flows from the battery to the bulb, causing it to glow.',
        'what is a magnetic field how is it produced':
          'A magnetic field is the region around a magnet or a current-carrying conductor in which magnetic effects can be observed. This field is represented by magnetic field lines which move from the north pole to the south pole.\n\nA magnetic field can be produced in two ways:\n\n1. By using a magnet\n2. By passing electric current through a conductor',
        'what is an electromagnet state its uses':
          'An electromagnet is a temporary magnet that is formed when electric current passes through a coil wound around a soft iron core. It shows magnetic properties only as long as current is flowing through it.\n\nElectromagnets are commonly used in electric bells, cranes for lifting heavy iron objects, and in devices such as relays and electric motors.',
      },
    },
  };

  const qaStorageKey = 'eduveda.qaDoubts';
  const qaSeedIds = new Set(['qa-1', 'qa-2', 'qa-3', 'qa-4']);

  function createDefaultQaDoubts() {
    return [];
  }

  function loadQaDoubts() {
    try {
      const raw = localStorage.getItem(qaStorageKey);
      if (!raw) {
        const empty = createDefaultQaDoubts();
        localStorage.setItem(qaStorageKey, JSON.stringify(empty));
        return empty;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return createDefaultQaDoubts();
      const filtered = parsed.filter((item) => !qaSeedIds.has(String(item.id || '')));
      if (filtered.length !== parsed.length) {
        localStorage.setItem(qaStorageKey, JSON.stringify(filtered));
      }
      return filtered;
    } catch (error) {
      return createDefaultQaDoubts();
    }
  }

  function saveQaDoubts() {
    try {
      localStorage.setItem(qaStorageKey, JSON.stringify(qaDoubts));
    } catch (error) {
      // Ignore storage failures in constrained browsers.
    }
  }

  // ===== STATE =====
  let currentScreen = 'screen-splash';
  let selectedSubject = 'Mathematics';
  let selectedChapter = { num: 3, title: 'Triangles' };
  let chatMode = 'ai';
  let qaFilter = 'all';
  let qaPendingAttachment = null;
  let qaDoubts = loadQaDoubts();
  const availableClasses = [8, 9, 10];
  let selectedClass = 8;
  let pickerIntent = null; // 'chat' | 'quiz' | null â€” tracks why the picker was opened
  let savedPickerIntent = null; // persists the last picker intent so chapters back can reopen the modal with the same context
  let chaptersEntrySource = null; // 'picker' | null â€” tracks how the user reached the chapters screen
  let quizEntrySource = null; // 'pdf' | 'picker' | null â€” tracks where the user came from into the quiz screen
  let chatEntrySource = null; // 'picker' | null â€” tracks where the user came from into the chat screen
  let quizState = { current: 0, answers: [], started: false, questions: [] };
  let savedItems = []; // { id, action, title, source, savedAt (Date), bodyHtml }
  let currentPdfResponseAction = null; // tracks which action's response is currently shown
  let carouselIndex = 0;
  let carouselTimer = null;
  const CAROUSEL_SLIDE_COUNT = 5;
  const CAROUSEL_INTERVAL_MS = 4000;

  // ===== DOM REFS =====
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ===== NAVIGATION =====
  function navigateTo(screenId, skipAnim) {
    if (screenId === currentScreen) return;

    const prev = $(`#${currentScreen}`);
    const next = $(`#${screenId}`);

    if (prev) {
      prev.classList.remove('active');
      prev.classList.add('exiting');
      setTimeout(() => prev.classList.remove('exiting'), 300);
    }

    if (next) {
      next.classList.add('active');
    }

    currentScreen = screenId;
    updateChrome();
  }

  function updateChrome() {
    const hideChromeScreens = ['screen-splash', 'screen-login', 'screen-chat'];
    if (hideChromeScreens.includes(currentScreen)) {
      document.body.classList.add('hide-chrome');
    } else {
      document.body.classList.remove('hide-chrome');
    }

    // Update nav active
    $$('.nav-item').forEach((item) => {
      item.classList.toggle('active', item.dataset.nav === currentScreen);
    });

    // Start the hub carousel when on the hub screen; stop it otherwise to save work.
    if (currentScreen === 'screen-hub') {
      startHubCarousel();
    } else {
      stopHubCarousel();
    }

    if (currentScreen === 'screen-qa') {
      renderQaBoard();
    }
  }

  // ===== PICKER FLOW =====
  // ===== PDF SUBSTATE =====
  function showPdfUploadState() {
    $('#pdfUploadState').classList.remove('hidden');
    $('#pdfLoadedState').classList.add('hidden');
    resetPdfResponse();
  }
  function showPdfLoadedState() {
    $('#pdfUploadState').classList.add('hidden');
    $('#pdfLoadedState').classList.remove('hidden');
    resetPdfResponse();
  }

  function resetPdfResponse() {
    $('#pdfAiResponse')?.classList.add('hidden');
    $('#pdfAiLoading')?.classList.add('hidden');
    $$('.pdf-action-card').forEach((c) => c.classList.remove('active'));
  }

  const pdfResponses = {
    summarize: {
      title: 'AI Summary',
      body: `
        <p>This chapter (<strong>Chapter_3_Triangles.pdf</strong>) covers the core properties of triangles - congruence, similarity, Pythagoras theorem, and area calculations. Key topics include:</p>
        <ul>
          <li>Types of triangles and their properties</li>
          <li>Congruence criteria (SSS, SAS, ASA, RHS)</li>
          <li>Basic Proportionality Theorem (Thales' theorem)</li>
          <li>Pythagoras theorem and its converse</li>
          <li>Area of triangles (Heron's formula)</li>
        </ul>
        <p>Overall, the PDF gives a strong conceptual foundation along with worked examples and practice problems.</p>
      `,
    },
    impq: {
      title: 'Important Questions',
      body: `
        <p>Based on <strong>Chapter_3_Triangles.pdf</strong>, here are the most likely exam questions:</p>
        <ol class="pdf-ai-ol">
          <li>State and prove the Basic Proportionality Theorem.</li>
          <li>Prove that the ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides.</li>
          <li>In a right-angled triangle, prove the Pythagoras theorem using similar triangles.</li>
          <li>If two triangles are similar, show that the ratio of their perimeters is equal to the ratio of their corresponding sides.</li>
          <li>Find the length of the hypotenuse when the two legs are 6 cm and 8 cm.</li>
          <li>Prove that the line joining the midpoints of two sides of a triangle is parallel to the third side and half of it.</li>
          <li>In triangle ABC, if DE ∥ BC and AD/DB = 3/4, find AE/EC.</li>
        </ol>
      `,
    },
  };

  function handlePdfAction(action, cardEl) {
    if (action === 'quiz') {
      // Route to the existing quiz screen, remembering the PDF origin for back nav
      quizEntrySource = 'pdf';
      showQuizSetupState();
      updateHubInfo();
      navigateTo('screen-quiz');
      return;
    }

    // Highlight active card
    $$('.pdf-action-card').forEach((c) => c.classList.remove('active'));
    cardEl?.classList.add('active');

    // Show loading, hide response
    $('#pdfAiResponse').classList.add('hidden');
    $('#pdfAiLoading').classList.remove('hidden');

    // Simulate async AI
    setTimeout(() => {
      const data = pdfResponses[action];
      if (!data) return;
      currentPdfResponseAction = action;
      $('#pdfAiResponseTitle').textContent = data.title;
      $('#pdfAiResponseBody').innerHTML = data.body;
      $('#pdfAiLoading').classList.add('hidden');
      $('#pdfAiResponse').classList.remove('hidden');
      // Reset save button state based on whether this item is already saved
      updateSaveBtnState();
      // Scroll response into view
      $('#pdfAiResponse').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 900);
  }

  // ===== SAVED ITEMS =====
  function saveCurrentPdfResponse() {
    if (!currentPdfResponseAction) return;
    const data = pdfResponses[currentPdfResponseAction];
    if (!data) return;

    // Check if already saved
    const existingIdx = savedItems.findIndex(
      (s) => s.action === currentPdfResponseAction && s.source === 'Chapter_3_Triangles.pdf'
    );
    if (existingIdx >= 0) return; // Already saved â€” do nothing

    savedItems.unshift({
      id: Date.now() + '-' + Math.random().toString(36).slice(2, 7),
      action: currentPdfResponseAction,
      title: data.title,
      source: 'Chapter_3_Triangles.pdf',
      savedAt: new Date(),
      bodyHtml: data.body,
    });
    updateSaveBtnState();
    renderSavedItems();
  }

  function updateSaveBtnState() {
    const btn = $('#pdfSaveBtn');
    if (!btn) return;
    const isSaved = savedItems.some(
      (s) => s.action === currentPdfResponseAction && s.source === 'Chapter_3_Triangles.pdf'
    );
    btn.classList.toggle('saved', isSaved);
    btn.querySelector('span').textContent = isSaved ? 'Saved' : 'Save';
  }

  function formatSavedAt(date) {
    const now = new Date();
    const diffMs = now - date;
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return mins + ' min ago';
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + ' hour' + (hrs > 1 ? 's' : '') + ' ago';
    const days = Math.floor(hrs / 24);
    return days + ' day' + (days > 1 ? 's' : '') + ' ago';
  }

  function renderSavedItems() {
    const list = $('#savedList');
    if (!list) return;
    if (savedItems.length === 0) {
      list.innerHTML = `
        <div class="saved-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
          <p>No saved items yet</p>
          <small>Tap the save icon on any AI response to save it here</small>
        </div>
      `;
      return;
    }
    list.innerHTML = savedItems
      .map((item) => `
        <div class="saved-item" data-saved-id="${item.id}">
          <div class="saved-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${item.action === 'summarize'
                ? '<line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="14" x2="3" y2="14"/>'
                : '<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/>'}
            </svg>
          </div>
          <div class="saved-item-info">
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.source)}</p>
            <small>${formatSavedAt(item.savedAt)}</small>
          </div>
          <button class="saved-item-delete" data-saved-delete="${item.id}" aria-label="Delete">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2"/></svg>
          </button>
        </div>
      `)
      .join('');
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[ch]));
  }

  function openSavedDetail(id) {
    const item = savedItems.find((s) => s.id === id);
    if (!item) return;
    $('#savedDetailTitle').textContent = item.title;
    $('#savedDetailMeta').textContent = `${item.source} - Saved ${formatSavedAt(item.savedAt)}`;
    $('#savedDetailBody').innerHTML = item.bodyHtml;
    $('#savedDetailOverlay').classList.add('show');
    $('#savedDetailSheet').classList.add('show');
  }
  function closeSavedDetail() {
    $('#savedDetailOverlay').classList.remove('show');
    $('#savedDetailSheet').classList.remove('show');
  }

  function deleteSavedItem(id) {
    savedItems = savedItems.filter((s) => s.id !== id);
    renderSavedItems();
    updateSaveBtnState();
  }

  function openSubjectPicker(intent) {
    pickerIntent = intent;
    $('#subjectSheetOverlay').classList.add('show');
    $('#subjectSheet').classList.add('show');
  }

  function closeSubjectPicker() {
    $('#subjectSheetOverlay').classList.remove('show');
    $('#subjectSheet').classList.remove('show');
  }

  function finishPickerFlow() {
    // Called when a chapter is selected â€” routes based on the original intent.
    if (pickerIntent === 'chat') {
      chatMode = 'ai';
      // Reset the chat tab to "Chat" and update the welcome topic to the selected chapter
      updateHubInfo();
      switchChatTab('chat');
      renderChatMode();
      chatEntrySource = 'picker';
      navigateTo('screen-chat');
    } else if (pickerIntent === 'qa') {
      navigateTo('screen-qa');
    } else if (pickerIntent === 'quiz') {
      // Fresh quiz from subject picker -> remember origin for step-back
      quizEntrySource = 'picker';
      showQuizSetupState();
      updateHubInfo();
      navigateTo('screen-quiz');
    } else {
      navigateTo('screen-hub');
    }
    pickerIntent = null;
  }

  // Called when a subject tile is tapped inside the modal - navigates to the chapters screen
  // but remembers that the user arrived there via the subject picker (so back reopens the modal).
  function openChaptersFromPicker() {
    chaptersEntrySource = 'picker';
    savedPickerIntent = pickerIntent;
    navigateTo('screen-chapters');
  }

  // ===== INIT RENDERS =====
  function renderSubjects() {
    const grid = $('#subjectsGrid');
    grid.innerHTML = subjects
      .map(
        (s) => `
      <div class="subject-card" data-subject="${s.name}">
        <div class="subject-icon">${s.icon}</div>
        <span>${s.name}</span>
      </div>
    `
      )
      .join('');
  }

  function renderRecentChapters() {
    const strip = $('#recentStrip');
    if (!strip) return;
    strip.innerHTML = recentChapters
      .map(
        (r) => `
      <div class="recent-chip">
        <span class="rc-dot" style="background:${r.color};"></span>
        <span>${r.subject} - ${r.chapter}</span>
      </div>
    `
      )
      .join('');
  }

  function renderChapters(subject) {
    const list = $('#chaptersList');
    const subjectChapters = chapters[subject] || chapters['Mathematics'];

    list.innerHTML = subjectChapters
      .map(
        (ch) => `
      <div class="chapter-card" data-chapter="${ch.num}" data-title="${ch.title}">
        <div class="chapter-num">${ch.num}</div>
        <div class="chapter-info">
          <h4>${ch.title}</h4>
          <p>${ch.progress > 0 ? ch.progress + '% complete' : 'Not started'}</p>
        </div>
        ${
          ch.progress > 0
            ? `<svg class="chapter-progress" width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#e0f2fe" stroke-width="3"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#0ea5e9" stroke-width="3"
              stroke-dasharray="88" stroke-dashoffset="${88 - (88 * ch.progress) / 100}"
              stroke-linecap="round" transform="rotate(-90 18 18)"/>
          </svg>`
            : ''
        }
      </div>
    `
      )
      .join('');
  }

  function renderClassGrid() {
    const grid = $('#classGrid');
    grid.innerHTML = availableClasses
      .map(
        (n) => `
      <div class="class-option ${n === selectedClass ? 'active' : ''}" data-class="${n}">
        Std ${n}
      </div>
    `
      )
      .join('');
  }

  // ===== SPLASH AUTO-TRANSITION =====
  function startSplashTimer() {
    setTimeout(() => {
      navigateTo('screen-login');
    }, 2500);
  }

  // ===== EVENT HANDLERS =====
  function bindEvents() {
    // Login
    $('#btn-login').addEventListener('click', () => navigateTo('screen-hub'));

    // Subject selection (inside subject picker modal)
    $('#subjectsGrid').addEventListener('click', (e) => {
      const card = e.target.closest('.subject-card');
      if (!card) return;
      selectedSubject = card.dataset.subject;
      $('#chapterSubjectTitle').textContent = selectedSubject;
      renderChapters(selectedSubject);
      // Remember the picker intent before closing the modal so back can reopen it.
      savedPickerIntent = pickerIntent;
      chaptersEntrySource = 'picker';
      closeSubjectPicker();
      navigateTo('screen-chapters');
    });

    // Subject picker overlay click â†’ cancel and close modal
    $('#subjectSheetOverlay').addEventListener('click', () => {
      pickerIntent = null;
      closeSubjectPicker();
    });

    // Chapter selection
    $('#chaptersList').addEventListener('click', (e) => {
      const card = e.target.closest('.chapter-card');
      if (!card) return;
      selectedChapter = { num: parseInt(card.dataset.chapter), title: card.dataset.title };
      updateHubInfo();
      finishPickerFlow();
    });

    // Home profile button

    // Hub actions
    $$('.hub-card').forEach((card) => {
      card.addEventListener('click', () => {
        const action = card.dataset.action;
        if (action === 'pdf') { showPdfUploadState(); navigateTo('screen-pdf'); }
        else if (action === 'quiz') openSubjectPicker('quiz');
        else if (action === 'chat') openSubjectPicker('chat');
        else if (action === 'qa') openSubjectPicker('qa');
      });
    });


    // Back buttons
    $$('.back-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.back;
        if (target) navigateTo(target);
      });
    });

    // Bottom nav
    $$('.nav-item').forEach((item) => {
      item.addEventListener('click', () => {
        navigateTo(item.dataset.nav);
      });
    });

    // Class selector
    $('#hubClassSelector').addEventListener('click', openClassSheet);
    $('#hubProfileBtn').addEventListener('click', () => navigateTo('screen-profile'));
    $('#classSheetOverlay').addEventListener('click', closeClassSheet);
    $('#classGrid').addEventListener('click', (e) => {
      const opt = e.target.closest('.class-option');
      if (!opt) return;
      selectedClass = parseInt(opt.dataset.class);
      $$('.class-selector span').forEach((s) => (s.textContent = `Std ${selectedClass}`));
      renderClassGrid();
      closeClassSheet();
    });

    // PDF upload â€” show loaded substate
    $('#pdfUploadArea').addEventListener('click', showPdfLoadedState);
    $('#pdfSelectBtn').addEventListener('click', showPdfLoadedState);

    // PDF action cards (Summarize / Quiz / Imp Questions)
    $$('.pdf-action-card').forEach((btn) => {
      btn.addEventListener('click', () => handlePdfAction(btn.dataset.pdfAction, btn));
    });

    // Save button in AI response
    $('#pdfSaveBtn').addEventListener('click', saveCurrentPdfResponse);

    // Saved list (open detail or delete)
    $('#savedList').addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('[data-saved-delete]');
      if (deleteBtn) {
        e.stopPropagation();
        deleteSavedItem(deleteBtn.dataset.savedDelete);
        return;
      }
      const item = e.target.closest('.saved-item');
      if (item) openSavedDetail(item.dataset.savedId);
    });

    // Saved detail sheet overlay close
    $('#savedDetailOverlay').addEventListener('click', closeSavedDetail);

    // PDF back button â€” step back through substates
    $('#pdfBackBtn').addEventListener('click', () => {
      const response = $('#pdfAiResponse');
      const loading = $('#pdfAiLoading');
      const loaded = $('#pdfLoadedState');
      const responseOpen = response && !response.classList.contains('hidden');
      const loadingOpen = loading && !loading.classList.contains('hidden');

      if (responseOpen || loadingOpen) {
        // Step 1: On loaded state with a response/loading open â†’ close it
        response.classList.add('hidden');
        loading.classList.add('hidden');
        $$('.pdf-action-card').forEach((c) => c.classList.remove('active'));
      } else if (loaded && !loaded.classList.contains('hidden')) {
        // Step 2: On loaded state (action cards) â†’ go back to upload state
        showPdfUploadState();
      } else {
        // Step 3: On upload state â†’ leave PDF Chat
        navigateTo('screen-hub');
      }
    });

    // Chapters back button â€” if user came from the subject picker, reopen the modal on hub
    $('#chaptersBackBtn').addEventListener('click', () => {
      if (chaptersEntrySource === 'picker') {
        const intentToReopen = savedPickerIntent;
        chaptersEntrySource = null;
        // Navigate to hub first, then reopen the modal with the same intent.
        navigateTo('screen-hub');
        if (intentToReopen) {
          // Slight delay so the screen transition completes before the sheet animates in.
          setTimeout(() => openSubjectPicker(intentToReopen), 60);
        }
      } else {
        navigateTo('screen-hub');
      }
    });

    // Chat back button â€” step back to chapters when opened via subject picker
    $('#chatBackBtn').addEventListener('click', () => {
      if (chatEntrySource === 'picker') {
        // Came from hub â†’ subject picker â†’ chapters â†’ chat
        // Step back to chapters so the user can step through each stage.
        // Re-mark chaptersEntrySource so the next Back press can reopen the picker modal.
        chatEntrySource = null;
        chaptersEntrySource = 'picker';
        // Always switch back to the "Chat" tab so a re-entry starts clean.
        switchChatTab('chat');
        navigateTo('screen-chapters');
      } else {
        navigateTo('screen-hub');
      }
    });

    // Quiz back button â€” step back through substates, then leave the screen
    $('#quizBackBtn').addEventListener('click', () => {
      const resultVisible = !$('#quizResult').classList.contains('hidden');
      const activeVisible = !$('#quizActive').classList.contains('hidden');

      if (resultVisible || activeVisible) {
        // Step 1: On result or active state â†’ go back to setup
        showQuizSetupState();
        return;
      }
      // Step 2: On setup state â†’ leave the quiz screen (context-aware)
      if (quizEntrySource === 'pdf') {
        quizEntrySource = null;
        navigateTo('screen-pdf');
        showPdfLoadedState();
      } else if (quizEntrySource === 'picker') {
        // Came from hub â†’ subject picker â†’ chapters â†’ quiz.
        // Step back to chapters so the user can step through each stage.
        // Re-mark chaptersEntrySource so the next Back press can reopen the picker modal.
        quizEntrySource = null;
        chaptersEntrySource = 'picker';
        navigateTo('screen-chapters');
      } else {
        navigateTo('screen-hub');
      }
    });

    // Profile
    bindProfile();

    // Chat
    bindChat();

    // Quiz
    bindQuiz();
  }

  function updateHubInfo() {
    $('#hubBadge').textContent = `${selectedSubject} - Ch ${selectedChapter.num}`;
    $('#hubChapterTitle').textContent = selectedChapter.title;
    $('#chatContextChip').textContent = `${selectedChapter.title} - Ch ${selectedChapter.num}`;
    // Quiz header badge reflects current context (chapter name)
    const quizBadge = $('#quizHeaderBadge');
    if (quizBadge) {
      quizBadge.textContent = quizEntrySource === 'pdf' ? 'Triangles' : selectedChapter.title;
    }
  }

  function renderChatMode() {
    const heading = $('#chatScreenTitle');
    const welcome = $('#chatWelcomeTopic');
    const intro = $('#chatWelcomeText');
    const input = $('#chatInput');
    const suggestions = $('#chatSuggestions');

    if (chatMode === 'qa') {
      if (heading) heading.textContent = 'Q&A with Teacher';
      if (welcome) welcome.textContent = selectedChapter?.title || selectedSubject;
      if (intro) intro.innerHTML = `Ask your doubt about <strong id="chatWelcomeTopic">${selectedChapter?.title || selectedSubject}</strong> and get teacher-style guidance.`;
      if (input) input.placeholder = 'Type your doubt here...';
      if (suggestions) {
        suggestions.innerHTML = `
          <button class="suggestion-pill">I am stuck on this topic</button>
          <button class="suggestion-pill">Can you explain this in simple words?</button>
          <button class="suggestion-pill">What should I study first?</button>
          <button class="suggestion-pill">Give me important questions</button>
          <button class="suggestion-pill">Check my understanding</button>
        `;
      }
      return;
    }

    if (heading) heading.textContent = 'AI Chat';
    if (welcome) welcome.textContent = selectedChapter?.title || selectedSubject;
    if (intro) intro.innerHTML = `Hi! I'm your AI tutor. Ask me anything about <strong id="chatWelcomeTopic">${selectedChapter?.title || selectedSubject}</strong>.`;
    if (input) input.placeholder = 'Ask anything...';
    if (suggestions) {
      suggestions.innerHTML = `
        <button class="suggestion-pill">Tell me something interesting</button>
        <button class="suggestion-pill">Share a simple example</button>
        <button class="suggestion-pill">Give me a quick explanation</button>
        <button class="suggestion-pill">Suggest a study tip</button>
        <button class="suggestion-pill">What should I explore next?</button>
      `;
    }
  }

  function formatQaTime(timestamp) {
    const diffMinutes = Math.max(1, Math.floor((Date.now() - timestamp) / 60000));
    if (diffMinutes < 60) return `${diffMinutes} min ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  }

  function getQaCounts() {
    return qaDoubts.reduce(
      (counts, item) => {
        counts.total += 1;
        counts[item.status] += 1;
        return counts;
      },
      { total: 0, open: 0, resolved: 0 }
    );
  }

  function renderQaBoard() {
    const counts = getQaCounts();
    const list = $('#qaList');
    const filteredItems = qaDoubts.filter((item) => qaFilter === 'all' || item.status === qaFilter);

    $('#qaCountAll').textContent = counts.total;
    $('#qaCountOpen').textContent = counts.open;
    $('#qaCountResolved').textContent = counts.resolved;
    $('#qaSubtitle').textContent = `${counts.open} open doubts`;
    $('#qaTotalBadge').textContent = counts.total;
    $('#qaSubjectTag').textContent = selectedSubject;
    $('#qaChapterTag').textContent = selectedChapter?.title || 'Current chapter';

    if (!filteredItems.length) {
      list.innerHTML = '<div class="qa-empty">No doubts in this filter yet. Send the first one below.</div>';
      return;
    }

    list.innerHTML = filteredItems
      .map((item) => {
        const reply = item.teacherReply
          ? `<div class="qa-answer-box">
              <span class="qa-answer-label">AI SUGGESTED ANSWER</span>
              <p>${escapeHtml(item.teacherReply)}</p>
            </div>`
          : '<div class="qa-answer-box qa-answer-pending"><span class="qa-answer-label">AI SUGGESTED ANSWER</span><p>Waiting for teacher response...</p></div>';

        return `
          <article class="qa-card qa-card-${item.status}" data-qa-id="${item.id}">
            <div class="qa-card-top">
              <div class="qa-avatar">${escapeHtml(item.initials)}</div>
              <div class="qa-card-main">
                <div class="qa-card-title-row">
                  <div>
                    <h3>${escapeHtml(item.studentName)}</h3>
                    <p class="qa-question">${escapeHtml(item.question)}</p>
                  </div>
                  <span class="qa-status-pill qa-status-${item.status}">${item.status === 'open' ? 'Open' : 'Resolved'}</span>
                </div>
                <div class="qa-meta-row">
                  <span class="qa-topic-pill">${escapeHtml(item.subject)}</span>
                  <span class="qa-meta-text">${escapeHtml(item.chapter)}</span>
                  <span class="qa-meta-text">${formatQaTime(item.createdAt)}</span>
                </div>
              </div>
            </div>
            <div class="qa-card-divider"></div>
            <div class="qa-question-block">
              <label>QUESTION</label>
              <p>${escapeHtml(item.question)}</p>
            </div>
            ${
              item.attachment
                ? `<div class="qa-attachment-card">
                    <span class="qa-attachment-label">ATTACHED FILE</span>
                    ${
                      item.attachment.kind === 'image'
                        ? `<img src="${item.attachment.dataUrl}" alt="${escapeHtml(item.attachment.name)}" class="qa-attachment-image">`
                        : ''
                    }
                    <a class="qa-attachment-link" href="${item.attachment.dataUrl}" target="_blank" rel="noopener">${escapeHtml(item.attachment.name)}</a>
                  </div>`
                : ''
            }
            ${reply}
          </article>
        `;
      })
      .join('');
  }

  function openQaComposer() {
    mountQaComposerPortal();
    renderQaBoard();
    updateQaAttachmentPreview();
    $('#qaComposeSheet').classList.remove('hidden');
    $('#qaComposeOverlay').classList.remove('hidden');
    document.body.classList.add('qa-compose-open');
  }

  function closeQaComposer(redirectToQa = false) {
    $('#qaComposeSheet').classList.add('hidden');
    $('#qaComposeOverlay').classList.add('hidden');
    document.body.classList.remove('qa-compose-open');
    if (redirectToQa) {
      navigateTo('screen-qa');
    }
  }

  function mountQaComposerPortal() {
    const overlay = $('#qaComposeOverlay');
    const sheet = $('#qaComposeSheet');
    if (overlay && overlay.parentElement !== document.body) {
      document.body.appendChild(overlay);
    }
    if (sheet && sheet.parentElement !== document.body) {
      document.body.appendChild(sheet);
    }
  }

  function updateQaAttachmentPreview() {
    const preview = $('#qaAttachmentPreview');
    const clearBtn = $('#qaClearAttachmentBtn');

    if (!qaPendingAttachment) {
      preview.classList.add('hidden');
      preview.innerHTML = '';
      clearBtn.classList.add('hidden');
      return;
    }

    preview.classList.remove('hidden');
    clearBtn.classList.remove('hidden');
    preview.innerHTML = `
      <div class="qa-attachment-chip">
        <span>${qaPendingAttachment.name}</span>
        <small>${qaPendingAttachment.kind === 'image' ? 'Image' : 'PDF'}</small>
      </div>
    `;
  }

  function handleQaAttachment(file) {
    if (!file) return;
    const allowed = file.type.startsWith('image/') || file.type === 'application/pdf';
    if (!allowed) return;

    const reader = new FileReader();
    reader.onload = () => {
      qaPendingAttachment = {
        name: file.name,
        type: file.type,
        kind: file.type.startsWith('image/') ? 'image' : 'pdf',
        dataUrl: reader.result,
      };
      updateQaAttachmentPreview();
    };
    reader.readAsDataURL(file);
  }

  function clearQaAttachment() {
    qaPendingAttachment = null;
    $('#qaAttachmentInput').value = '';
    updateQaAttachmentPreview();
  }

  function submitQaDoubt() {
    const input = $('#qaComposeInput');
    const text = input.value.trim();
    if (!text && !qaPendingAttachment) return;

    qaDoubts.unshift({
      id: `student-${Date.now()}`,
      studentName: 'You',
      initials: 'YU',
      subject: selectedSubject,
      chapter: selectedChapter?.title || 'Current chapter',
      question: text || 'Uploaded a doubt file',
      status: 'open',
      createdAt: Date.now(),
      teacherReply: '',
      attachment: qaPendingAttachment ? { ...qaPendingAttachment } : null,
    });

    input.value = '';
    qaPendingAttachment = null;
    qaFilter = 'open';
    saveQaDoubts();
    renderQaBoard();
    updateQaAttachmentPreview();
    closeQaComposer();
    navigateTo('screen-qa');
    $$('.qa-filter').forEach((button) => {
      button.classList.toggle('active', button.dataset.qaFilter === qaFilter);
    });
  }

  // ===== HUB CAROUSEL =====
  function updateCarouselDots() {
    $$('.hub-carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === carouselIndex);
    });
  }

  function showCarouselSlide(idx) {
    carouselIndex = ((idx % CAROUSEL_SLIDE_COUNT) + CAROUSEL_SLIDE_COUNT) % CAROUSEL_SLIDE_COUNT;
    const track = $('#hubCarouselTrack');
    if (track) {
      track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    }
    updateCarouselDots();
  }

  function advanceCarousel() {
    showCarouselSlide(carouselIndex + 1);
  }

  function startHubCarousel() {
    if (carouselTimer) return;
    carouselTimer = setInterval(advanceCarousel, CAROUSEL_INTERVAL_MS);
  }

  function stopHubCarousel() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
  }

  // ===== SECTION CONTENT (Notes/Test/Worksheet/Homework) =====
  // Sub-data for Notes: class notes vs PPTs
  const notesSubContent = {
    'class-notes': {
      title: 'Class Notes',
      items: sectionContent.notes.items,
    },
    ppts: {
      title: 'PPTs / Presentations',
      items: [
        { title: 'Solid State - Full PPT', desc: 'Chemistry - Ch 1 - Class presentation', by: 'Mr. Deshmukh', time: '2 hours ago', badge: 'new', icon: '#8b5cf6', bg: '#ede9fe', file: 'assets/books/12C01 - PPT.pptx', fileType: 'pptx', fileSize: '6.7 MB' },
        { title: 'Triangles - Visual Guide', desc: 'Mathematics - Ch 3 - 18 slides', by: 'Mr. Patil', time: '3 days ago', badge: '', icon: '#8b5cf6', bg: '#ede9fe' },
        { title: 'Chemical Bonding Slides', desc: 'Chemistry - Ch 4 - 30 slides with diagrams', by: 'Mr. Deshmukh', time: '5 days ago', badge: '', icon: '#8b5cf6', bg: '#ede9fe' },
      ],
    },
  };

  let sectionListBackTarget = 'screen-hub'; // tracks where "back" on the list screen should go

  let currentSectionItems = []; // holds the items currently rendered in section-list
  let currentSectionTitle = '';

  function renderSectionList(title, items) {
    currentSectionTitle = title;
    $('#sectionListTitle').textContent = title;
    currentSectionItems = items || [];
    const body = $('#sectionListBody');
    const isCompetitiveLayout = title === 'Competitive Exams';

    body.classList.toggle('section-list-competitive', isCompetitiveLayout);

    if (!currentSectionItems.length) {
      body.innerHTML = '<div class="section-empty">Nothing posted by your teacher yet.</div>';
    } else {
      body.innerHTML = currentSectionItems.map((item, idx) => {
        let badgeHtml = '';
        if (item.badge === 'new') badgeHtml = '<span class="section-item-badge badge-new">New</span>';
        else if (item.badge === 'due') badgeHtml = '<span class="section-item-badge badge-due">Due</span>';
        else if (item.badge === 'done') badgeHtml = '<span class="section-item-badge badge-done">Done</span>';
        const iconHtml = item.iconSvg || `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${item.icon}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`;
        const itemCursor = isCompetitiveLayout || item.file ? 'cursor:pointer' : '';

        return `
          <div class="section-item${isCompetitiveLayout ? ' section-item-competitive' : ''}" data-item-idx="${idx}" style="${itemCursor}">
            <div class="section-item-icon" style="background:${item.bg};">
              ${iconHtml}
            </div>
            <div class="section-item-info">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
              <small>By ${item.by} - ${item.time}</small>
              ${item.file ? '<button class="btn-outline section-item-open-btn" type="button">Open PDF</button>' : ''}
            </div>
            ${badgeHtml}
            ${item.file ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>' : ''}
          </div>`;
      }).join('');
    }
  }

  function openExamDetail(item) {
    $('#examDetailHeaderTitle').textContent = item.title;
    $('#examDetailTitle').textContent = item.title;
    $('#examDetailBadge').textContent = item.examTag || 'Competitive Exam';
    $('#examDetailIntro').textContent = item.desc;
    $('#examDetailBestFor').textContent = item.bestFor || 'Students who want to understand this exam path early.';
    $('#examDetailStage').textContent = item.stage || 'Best explored from school years while building strong fundamentals.';
    $('#examDetailAbout').textContent = item.about || item.desc;
    $('#examDetailPath').textContent = item.path || 'This exam can open future academic and career opportunities based on your interests.';

    const iconWrap = $('#examDetailIcon');
    iconWrap.style.background = item.bg || '#e0f2fe';
    iconWrap.innerHTML = item.iconSvg || `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${item.icon || '#0ea5e9'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`;

    $('#examDetailSubjects').innerHTML = (item.subjects || [])
      .map((subject) => `<span class="exam-detail-chip">${subject}</span>`)
      .join('');

    $('#examDetailInterests').innerHTML = (item.interests || [])
      .map((interest) => `<span class="exam-detail-chip">${interest}</span>`)
      .join('');

    $('#examDetailFocus').innerHTML = (item.focus || [])
      .map((point) => `<li>${point}</li>`)
      .join('');

    navigateTo('screen-exam-detail');
  }

  function openFileViewer(item) {
    const isPdf = item.fileType === 'pdf';
    const embed = $('#fileViewerEmbed');
    const cardBody = $('#fileViewerCardBody');
    const iframe = $('#fileViewerIframe');

    if (isPdf) {
      // Show embedded PDF viewer â€” full screen iframe
      $('#fileViewerTitle').textContent = item.title;
      embed.classList.remove('hidden');
      cardBody.classList.add('hidden');
      iframe.src = item.file + '#toolbar=1&navpanes=0&view=FitH';
    } else {
      // Show card view with Open/Download for non-PDF files (PPTX, etc.)
      $('#fileViewerTitle').textContent = item.fileType === 'pptx' ? 'Presentation' : 'File';
      embed.classList.add('hidden');
      cardBody.classList.remove('hidden');
      iframe.src = 'about:blank';
      $('#fileViewerName').textContent = item.title;
      $('#fileViewerMeta').textContent = `${item.desc} - ${item.fileSize || ''} - By ${item.by}`;
      $('#fileViewerOpenBtn').href = item.file;
      $('#fileViewerDownloadBtn').href = item.file;
    }
    navigateTo('screen-file-viewer');
  }

  function bindSectionButtons() {
    // Hub buttons: Notes opens sub-menu, others open list directly
    $$('.hub-create-card[data-section]').forEach((card) => {
      card.addEventListener('click', () => {
        const key = card.dataset.section;
        if (key === 'notes') {
          navigateTo('screen-notes-menu');
        } else if (key === 'qa') {
          openQaComposer();
        } else {
          const section = sectionContent[key];
          if (section) {
            sectionListBackTarget = 'screen-hub';
            renderSectionList(section.title, section.items);
            navigateTo('screen-section-list');
          }
        }
      });
    });

    // Notes sub-menu: Class Notes / PPTs
    $$('.section-menu-card[data-notes-type]').forEach((card) => {
      card.addEventListener('click', () => {
        const type = card.dataset.notesType;
        const sub = notesSubContent[type];
        if (sub) {
          sectionListBackTarget = 'screen-notes-menu';
          renderSectionList(sub.title, sub.items);
          navigateTo('screen-section-list');
        }
      });
    });

    // Section list item click â†’ open file viewer if the item has a file
    $('#sectionListBody').addEventListener('click', (e) => {
      const row = e.target.closest('.section-item');
      if (!row) return;
      const idx = parseInt(row.dataset.itemIdx, 10);
      const item = currentSectionItems[idx];
      if (!item) return;
      if (currentSectionTitle === 'Competitive Exams') {
        openExamDetail(item);
        return;
      }
      if (item.file) openFileViewer(item);
    });

    // Back buttons
    $('#notesMenuBackBtn').addEventListener('click', () => navigateTo('screen-hub'));
    $('#sectionListBackBtn').addEventListener('click', () => navigateTo(sectionListBackTarget));
    $('#fileViewerBackBtn').addEventListener('click', () => navigateTo('screen-section-list'));
    $('#examDetailBackBtn').addEventListener('click', () => navigateTo('screen-section-list'));
  }

  function bindQaBoard() {
    $('#qaBackBtn').addEventListener('click', () => {
      closeQaComposer();
      navigateTo('screen-hub');
    });
    $('#qaComposeCloseBtn').addEventListener('click', () => closeQaComposer(true));
    $('#qaComposeOverlay').addEventListener('click', () => closeQaComposer(true));
    $('#qaFilters').addEventListener('click', (e) => {
      const button = e.target.closest('.qa-filter');
      if (!button) return;
      qaFilter = button.dataset.qaFilter || 'all';
      $$('.qa-filter').forEach((tab) => {
        tab.classList.toggle('active', tab === button);
      });
      renderQaBoard();
    });
    $('#qaSubmitBtn').addEventListener('click', submitQaDoubt);
    $('#qaUploadBtn').addEventListener('click', () => {
      $('#qaAttachmentInput').click();
    });
    $('#qaAttachmentInput').addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      handleQaAttachment(file);
    });
    $('#qaClearAttachmentBtn').addEventListener('click', clearQaAttachment);
    $('#qaComposeInput').addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        submitQaDoubt();
      }
    });
  }

  function bindCarousel() {
    const dots = $('#hubCarouselDots');
    if (!dots) return;
    dots.addEventListener('click', (e) => {
      const btn = e.target.closest('.hub-carousel-dot');
      if (!btn) return;
      const idx = parseInt(btn.dataset.slide, 10);
      if (isNaN(idx)) return;
      showCarouselSlide(idx);
      stopHubCarousel();
      if (currentScreen === 'screen-hub') startHubCarousel();
    });
  }

  // ===== QUIZ SUBSTATE =====
  function showQuizSetupState() {
    $('#quizSetup').classList.remove('hidden');
    $('#quizActive').classList.add('hidden');
    $('#quizResult').classList.add('hidden');
  }

  // ===== CLASS SHEET =====
  function openClassSheet() {
    $('#classSheetOverlay').classList.add('show');
    $('#classSheet').classList.add('show');
  }

  function closeClassSheet() {
    $('#classSheetOverlay').classList.remove('show');
    $('#classSheet').classList.remove('show');
  }

  // ===== CHAT =====
  // ===== PROFILE =====
  function bindProfile() {
    // Back button
    $('#profileBackBtn').addEventListener('click', () => navigateTo('screen-hub'));

    // Gender chips â€” single select
    $('#profGender').addEventListener('click', (e) => {
      const chip = e.target.closest('.gender-chip');
      if (!chip) return;
      $$('#profGender .gender-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
    });

    // Favourite subject chips â€” single select
    $('#profFavSubject').addEventListener('click', (e) => {
      const chip = e.target.closest('.fav-chip');
      if (!chip) return;
      $$('#profFavSubject .fav-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
    });

    // Aadhar auto-format: groups of 4 digits with spaces
    $('#profAadhar').addEventListener('input', (e) => {
      const raw = e.target.value.replace(/\D/g, '').slice(0, 12);
      e.target.value = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    });

    // Help
    $('#profileHelpBtn').addEventListener('click', () => {
      const toast = $('#profileToast');
      toast.textContent = 'For help, email support@eduveda.in';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    });

    // Logout
    $('#profileLogoutBtn').addEventListener('click', () => {
      navigateTo('screen-login');
    });

    // Delete account
    $('#profileDeleteBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
        navigateTo('screen-login');
      }
    });

    // Save button
    $('#profileSaveBtn').addEventListener('click', () => {
      // Update avatar initials from the name fields
      const first = $('#profFirstName').value.trim();
      const surname = $('#profSurname').value.trim();
      if (first || surname) {
        const initials = (first.charAt(0) + surname.charAt(0)).toUpperCase();
        $('#profileAvatarInitials').textContent = initials;
      }
      // Show save toast
      const toast = $('#profileToast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    });
  }

  function bindChat() {
    // Suggestion pills
    $('#chatSuggestions').addEventListener('click', (e) => {
      const pill = e.target.closest('.suggestion-pill');
      if (!pill) return;
      const text = pill.textContent;
      sendChatMessage(text);
    });

    // Send button
    $('#chatSendBtn').addEventListener('click', () => {
      const input = $('#chatInput');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      sendChatMessage(text);
    });

    // Enter key
    $('#chatInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        $('#chatSendBtn').click();
      }
    });

    // Chat tabs (Chat / Textbook / Notes)
    $$('.chat-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const which = tab.dataset.chatTab;
        if (!which) return;
        switchChatTab(which);
      });
    });
  }

  function switchChatTab(which) {
    // Update active tab style
    $$('.chat-tab').forEach((t) => {
      t.classList.toggle('active', t.dataset.chatTab === which);
    });
    // Show the matching panel
    $('#chatPanelChat').classList.toggle('hidden', which !== 'chat');
    $('#chatPanelTextbook').classList.toggle('hidden', which !== 'textbook');
    $('#chatPanelNotes').classList.toggle('hidden', which !== 'notes');

    if (which === 'textbook') loadTextbookForSubject();
    if (which === 'notes') loadNotesForSubject();
  }

  function loadTextbookForSubject() {
    const book = textbooksBySubject[selectedSubject];
    const iframe = $('#textbookIframe');
    const empty = $('#textbookEmpty');
    const openLink = $('#textbookOpenExt');
    if (book) {
      $('#textbookTitle').textContent = book.title;
      $('#textbookMeta').textContent = book.meta;
      // Append a cache-buster-free query so the PDF viewer opens on page 1 each time.
      iframe.src = book.file + '#toolbar=1&navpanes=0&view=FitH';
      openLink.href = book.file;
      iframe.classList.remove('hidden');
      empty.classList.add('hidden');
    } else {
      $('#textbookTitle').textContent = `${selectedSubject} - Class 8`;
      $('#textbookMeta').textContent = 'Textbook';
      iframe.src = 'about:blank';
      iframe.classList.add('hidden');
      empty.classList.remove('hidden');
    }
  }

  function loadNotesForSubject() {
    const notes = notesBySubject[selectedSubject] || notesBySubject._default;
    $('#notesTitle').textContent = `${selectedSubject} - Notes`;
    $('#notesMeta').textContent = selectedChapter?.title
      ? `Key points - ${selectedChapter.title}`
      : 'Key points for this chapter';
    const body = $('#notesBody');
    body.innerHTML = notes
      .map((section) => {
        const items = section.items
          ? `<ul>${section.items.map((i) => `<li>${i}</li>`).join('')}</ul>`
          : '';
        return `
          <div class="notes-section">
            <h4>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              ${section.title}
            </h4>
            ${section.body || ''}
            ${items}
          </div>
        `;
      })
      .join('');
  }

  function normalizeQuestion(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
  }

  function getChatResponse(text) {
    const chapterResponses = chapterSpecificChatResponses[selectedSubject]?.[selectedChapter?.title];
    const normalizedText = normalizeQuestion(text);

   if (normalizedText === 'what is electric current') {
  return `
⚡ Electric Current

Electric current is the continuous flow of electric charge through a conductor.

🔹 In metals, this flow is carried by electrons.
🔹 It occurs only when the circuit is complete.
🔹 The SI unit of current is Ampere (A).

Example:
When a battery, wire, and bulb are connected in a closed circuit, current flows and the bulb lights up.
`;
}

    if (chapterResponses && chapterResponses[normalizedText]) {
      return chapterResponses[normalizedText];
    }

    if (selectedSubject === 'Science' && selectedChapter?.title === 'Current Electricity and Magnetism') {
      if (normalizedText.includes('electric current')) {
        return chapterSpecificChatResponses.Science['Current Electricity and Magnetism']['what is electric current explain with an example'];
      }

      if (normalizedText.includes('magnetic field')) {
        return chapterSpecificChatResponses.Science['Current Electricity and Magnetism']['what is a magnetic field how is it produced'];
      }

      if (normalizedText.includes('electromagnet')) {
        return chapterSpecificChatResponses.Science['Current Electricity and Magnetism']['what is an electromagnet state its uses'];
      }
    }

    return (
      chatResponses[text] ||
      "That's a great question! Based on the chapter on " +
        selectedChapter.title +
        ", here's what I can tell you:\n\nThis topic involves understanding the fundamental concepts and applying them to solve problems. Would you like me to explain any specific part in more detail, or shall I create practice questions for you?"
    );
  }

  function sendChatMessage(text) {
    const container = $('#chatMessages');

    // Hide suggestions after first message
    $('#chatSuggestions').style.display = 'none';

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.textContent = text;
    container.appendChild(userMsg);

    // Scroll down
    scrollChatToBottom();

    // Show typing indicator
    const typingMsg = document.createElement('div');
    typingMsg.className = 'chat-msg ai';
    typingMsg.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    container.appendChild(typingMsg);
    scrollChatToBottom();

    // AI response after delay
    setTimeout(() => {
      typingMsg.remove();
      const aiMsg = document.createElement('div');
      aiMsg.className = 'chat-msg ai';

      aiMsg.textContent = chatMode === 'qa' ? getTeacherQnaResponse(text) : getChatResponse(text);
      container.appendChild(aiMsg);
      scrollChatToBottom();
    }, 1200);
  }

  function getTeacherQnaResponse(text) {
    const normalizedText = normalizeQuestion(text);

    if (normalizedText.includes('stuck') || normalizedText.includes('dont understand') || normalizedText.includes('do not understand')) {
      return `No worries, let's break ${selectedChapter?.title || selectedSubject} into smaller steps. Tell me the exact part that feels confusing, and I'll explain it in simpler words.`;
    }

    if (normalizedText.includes('important question')) {
      return `For ${selectedChapter?.title || selectedSubject}, I would suggest focusing on definitions, diagrams, and the main examples first. I can also list the top exam questions if you want.`;
    }

    return getChatResponse(text);
  }

  function scrollChatToBottom() {
    const body = $('#chatBody');
    requestAnimationFrame(() => {
      body.scrollTop = body.scrollHeight;
    });
  }

  // ===== QUIZ =====
  function bindQuiz() {
    // Chip selection
    ['#difficultyChips', '#typeChips'].forEach((sel) => {
      $(sel).addEventListener('click', (e) => {
        const chip = e.target.closest('.quiz-chip');
        if (!chip) return;
        $(sel).querySelectorAll('.quiz-chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });

    // Generate
    $('#quizGenerateBtn').addEventListener('click', () => {
      const questions = getQuizQuestions();
      quizState = {
        current: 0,
        answers: new Array(questions.length).fill(-1),
        started: true,
        questions,
      };
      $('#quizSetup').classList.add('hidden');
      $('#quizActive').classList.remove('hidden');
      $('#quizResult').classList.add('hidden');
      renderQuizQuestion();
    });

    // Options
    $('#quizOptions').addEventListener('click', (e) => {
      const opt = e.target.closest('.quiz-option');
      if (!opt) return;
      const idx = ['a', 'b', 'c', 'd'].indexOf(opt.dataset.opt);
      quizState.answers[quizState.current] = idx;
      $$('#quizOptions .quiz-option').forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
    });

    // Nav
    $('#quizNext').addEventListener('click', () => {
      if (quizState.current < quizState.questions.length - 1) {
        quizState.current++;
        renderQuizQuestion();
      } else {
        showQuizResult();
      }
    });

    $('#quizPrev').addEventListener('click', () => {
      if (quizState.current > 0) {
        quizState.current--;
        renderQuizQuestion();
      }
    });

    // Retry
    $('#quizRetry').addEventListener('click', () => {
      const questions = quizState.questions.length ? quizState.questions : getQuizQuestions();
      quizState = {
        current: 0,
        answers: new Array(questions.length).fill(-1),
        started: true,
        questions,
      };
      $('#quizResult').classList.add('hidden');
      $('#quizActive').classList.remove('hidden');
      renderQuizQuestion();
    });

    // Explain
    $('#quizExplain').addEventListener('click', () => {
      navigateTo('screen-chat');
      setTimeout(() => {
        sendChatMessage('Explain the quiz answers for Triangles');
      }, 400);
    });
  }

  function renderQuizQuestion() {
    const questions = quizState.questions;
    if (!questions.length) return;
    const q = questions[quizState.current];
    const letters = ['A', 'B', 'C', 'D'];

    $('#quizQNum').textContent = `Question ${quizState.current + 1}`;
    $('#quizTotal').textContent = questions.length;
    $('#quizQuestionText').textContent = q.q;
    $('#quizProgressFill').style.width = `${((quizState.current + 1) / questions.length) * 100}%`;

    const optsEl = $('#quizOptions');
    optsEl.innerHTML = q.opts
      .map(
        (o, i) => `
      <button class="quiz-option ${quizState.answers[quizState.current] === i ? 'selected' : ''}" data-opt="${letters[i].toLowerCase()}">
        <span class="opt-letter">${letters[i]}</span> ${o}
      </button>
    `
      )
      .join('');

    $('#quizPrev').disabled = quizState.current === 0;
    $('#quizNext').textContent = quizState.current === questions.length - 1 ? 'Submit' : 'Next';
  }

  function showQuizResult() {
    const questions = quizState.questions;
    let correct = 0;
    questions.forEach((q, i) => {
      if (quizState.answers[i] === q.correct) correct++;
    });

    const total = questions.length;
    const pct = correct / total;
    const circumference = 2 * Math.PI * 42;
    const offset = circumference - circumference * pct;

    $('#quizActive').classList.add('hidden');
    $('#quizResult').classList.remove('hidden');

    // Update score
    $('.score-num').textContent = correct;
    $('.score-den').textContent = `/${total}`;
    $('.quiz-result-card h3').textContent = pct >= 0.8 ? 'Excellent!' : pct >= 0.5 ? 'Great job!' : 'Keep practicing!';
    $('.quiz-result-card > p').textContent = `You got ${correct} out of ${total} questions correct`;
    $$('.quiz-result-stats .stat')[0].querySelector('span').textContent = correct;
    $$('.quiz-result-stats .stat')[1].querySelector('span').textContent = total - correct;

    // Animate ring
    const ring = $$('.quiz-score-ring circle')[1];
    ring.style.strokeDashoffset = offset;
  }

  // ===== INIT =====
  function init() {
    renderSubjects();
    renderRecentChapters();
    renderChapters('Mathematics');
    renderClassGrid();
    renderSavedItems();
    updateHubInfo();
    renderChatMode();
    renderQaBoard();
    updateChrome();
    bindEvents();
    bindCarousel();
    bindSectionButtons();
    bindQaBoard();
    startSplashTimer();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
