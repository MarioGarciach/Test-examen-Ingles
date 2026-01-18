// Base de datos de preguntas
const questionDatabase = [
    // --- PREGUNTAS GENERALES REFINADAS (IDs 1-30) ---
    {
        id: 1,
        question: "¿Qué prefijo se debe usar para transformar 'HAPPY' en su antónimo?",
        options: [ "dis-", "un-", "mis-", "re-" ],
        correct: 1,
        category: "Vocabulary",
        modes: ["general", "mixed"],
        tip: "El prefijo 'un-' suele indicar negación (unhappy, unusual). 'dis-' es parecido pero no funciona aquí."
    },
    {
        id: 2,
        question: "Identifica la oración que describe una acción que está ocurriendo AHORA MISMO:",
        options: [
            "I prepare reports every Monday.",
            "I am preparing the report right now.",
            "I prepared the report yesterday.",
            "I will prepare the report later."
        ],
        correct: 1,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Usa Present Continuous (am/is/are + ing) para acciones actuales."
    },
    {
        id: 3,
        question: "¿Cuál es el patrón verbal correcto tras el verbo 'ENJOY'?",
        options: [
            "I enjoy for attending training sessions.",
            "I enjoy to attend training sessions.",
            "I enjoy attending training sessions.",
            "I enjoy attend training sessions."
        ],
        correct: 2,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "Verbos como 'enjoy', 'mind' y 'suggest' siempre van seguidos de gerundio (-ing)."
    },
    {
        id: 4,
        question: "¿Qué frase es adecuada para pedir una aclaración educadamente?",
        options: [
            "What do you mean?",
            "Could you explain that differently?",
            "I don't get it.",
            "Say it again."
        ],
        correct: 1,
        category: "Professional Communication",
        modes: ["general"],
        tip: "En contextos profesionales, usa 'Could you...' para ser más cortés."
    },
    {
        id: 5,
        question: "'The team meeting is scheduled ______ Thursday.'",
        options: [ "on", "at", "in", "by" ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "Completa: ON days (on Monday), IN months/years (in July), AT time (at 5pm)."
    },
    {
        id: 6,
        question: "¿Qué oración es correcta (Present Perfect)?",
        options: [
            "The team has finish the project.",
            "The team has finished the project.",
            "The team have finished the project yesterday.",
            "The team finished the project yet."
        ],
        correct: 1,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Present Perfect (has finished) no usa marcadores de tiempo pasado específico como 'yesterday'."
    },
    {
        id: 7,
        question: "¿Cómo se llama la estrategia de lectura para buscar datos específicos?",
        options: [ "Intensive reading", "Scanning", "Skimming", "Reading for detail" ],
        correct: 1,
        category: "Reading Skills",
        modes: ["general"],
        tip: "Scanning = buscar datos concretos. Skimming = idea general."
    },
    {
        id: 8,
        question: "Selecciona el orden correcto:",
        options: [
            "She organizes her workspace at 9 a.m.",
            "At 9 a.m. organizes she her workspace.",
            "Organizes she her workspace at 9 a.m.",
            "She at 9 a.m. organizes her workspace."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "Sujeto + Verbo + Objeto + Tiempo."
    },
    {
        id: 9,
        question: "¿Qué documento registra un accidente laboral?",
        options: [ "Safety Memo", "Annual Review", "Incident report", "Invoice" ],
        correct: 2,
        category: "Professional Vocabulary",
        modes: ["general"],
        tip: "Un 'Incident report' es el documento estándar para accidentes."
    },
    {
        id: 10,
        question: "Pasado Simple correcto con 'yesterday':",
        options: [
            "I was sending the files yesterday.",
            "I sent the files yesterday.",
            "I have sent the files yesterday.",
            "I send the files yesterday."
        ],
        correct: 1,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Con 'yesterday', 'last week', usa Past Simple (sent), nunca Present Perfect."
    },
    {
        id: 11,
        question: "¿Verbo + gerundio correcto?",
        options: [
            "I regret telling him the truth.",
            "I regret to telling him.",
            "I regret tell him.",
            "I regret told him."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "Regret + -ing se refiere a arrepentirse de algo pasado."
    },
    {
        id: 12,
        question: "Forma más formal de ofrecer ayuda:",
        options: [
            "Do you need help?",
            "Can I help?",
            "Must I help you?",
            "Shall I assist you?"
        ],
        correct: 3,
        category: "Professional Communication",
        modes: ["general", "modals"],
        tip: "'Shall' es muy formal y adecuado para ofrecer servicios profesionales."
    },
    {
        id: 13,
        question: "This is the guide ______ explains the process.",
        options: [ "whose", "that", "where", "who" ],
        correct: 1,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "'That' o 'which' para cosas. 'Who' para personas."
    },
    {
        id: 14,
        question: "'I ______ prepare the list.'",
        options: [ "am going to", "will", "going to", "prepare" ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "future"],
        tip: "Futuro planeado (intención): Am going to = plan pre-decidido. Will = decisión espontánea."
    },
    {
        id: 15,
        question: "'Submit a report' es un ejemplo de:",
        options: [ "Collocation", "Idiom", "Phrasal Verb", "Slang" ],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Collocation = palabras que suelen ir juntas naturalmente."
    },
    {
        id: 16,
        question: "Lectura rápida para idea general (gist):",
        options: [ "Proofreading", "Close reading", "Skimming", "Scanning" ],
        correct: 2,
        category: "Reading Skills",
        modes: ["general"],
        tip: "Skimming = 'cremar' o leer por encima para captar lo principal."
    },
    {
        id: 17,
        question: "Pasado simple regular negativo:",
        options: [
            "The printer wasn't fail.",
            "The printer not failed.",
            "The printer didn't failed.",
            "The printer didn't fail."
        ],
        correct: 3,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "En negativo (didn't), el verbo principal vuelve a infinitivo (fail, no failed)."
    },
    {
        id: 18,
        question: "Obligación fuerte/regla:",
        options: [
            "You should wear a helmet.",
            "You can wear a helmet.",
            "You must wear a helmet.",
            "You might wear a helmet."
        ],
        correct: 2,
        category: "Grammar",
        modes: ["general", "modals"],
        tip: "Must = obligación. Should = consejo."
    },
    {
        id: 19,
        question: "Sinónimo de 'ASSIST':",
        options: [ "Help", "Assign", "Attend", "Assert" ],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Assist y Help significan ayudar. Attend es 'asistir a un evento' (falso amigo)."
    },
    {
        id: 20,
        question: "Primer Condicional Correcto:",
        options: [
            "If it rains, I stay home.",
            "If it will rain, I stay home.",
            "If it rains, I will stay home.",
            "If it rained, I would stay home."
        ],
        correct: 2,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "If + Presente, Will + Futuro."
    },
    {
        id: 21,
        question: "Mejor forma de estudiar vocabulario:",
        options: [
            "Memorizing lists",
            "Just translations",
            "Reading dictionary definitions",
            "With context and examples"
        ],
        correct: 3,
        category: "Vocabulary Skills",
        modes: ["general"],
        tip: "El contexto ayuda a retener mejor que las traducciones aisladas."
    },
    {
        id: 22,
        question: "¿Para qué sirve decir 'Let me see...'?",
        options: [
            "To end a conversation",
            "To gain thinking time (hesitation)",
            "To ask for permission",
            "To interrupt someone"
        ],
        correct: 1,
        category: "Speaking Skills",
        modes: ["general"],
        tip: "Es un 'hesitation device' para pensar sin perder el turno."
    },
    {
        id: 23,
        question: "Cierre formal de email:",
        options: [
            "I'm looking forward hear from you.",
            "I look forward to hearing from you.",
            "Look forward hearing from you.",
            "I look forward to hear from you."
        ],
        correct: 1,
        category: "Professional Communication",
        modes: ["general"],
        tip: "To look forward TO + verbo-ING."
    },
    {
        id: 24,
        question: "Despedida formal (conoces el nombre):",
        options: [ "Yours sincerely", "Cheers", "Best regards", "Yours faithfully" ],
        correct: 0,
        category: "Professional Communication",
        modes: ["general"],
        tip: "Sincerely si conoces el nombre. Faithfully si no (Dear Sir/Madam)."
    },
    {
        id: 25,
        question: "Elemento clave en el asunto de un email:",
        options: [ "Urgent flag always", "Blank space", "Clear summary of content", "Sender's nickname" ],
        correct: 2,
        category: "Professional Communication",
        modes: ["general"],
        tip: "Debe resumir claramente el propósito del email."
    },
    {
        id: 26,
        question: "Pregunta de entrevista sobre uno mismo:",
        options: [
            "What politics do you like?",
            "What is your house like?",
            "What are your strengths?",
            "Do you have a car?"
        ],
        correct: 2,
        category: "Professional Vocabulary",
        modes: ["general"],
        tip: "Strengths (fortalezas) es estándar."
    },
    {
        id: 27,
        question: "Rutina diaria:",
        options: [
            "I check emails yesterday.",
            "I will check emails every morning.",
            "I am checking emails every morning.",
            "I check emails every morning."
        ],
        correct: 3,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Routine = Present Simple (check)."
    },
    {
        id: 28,
        question: "Pronombre relativo para personas:",
        options: [ "The client which called...", "The client where called...", "The client whose called...", "The client who called..." ],
        correct: 3,
        category: "Grammar",
        modes: ["general", "pronouns"],
        tip: "Who para personas, Which para cosas."
    },
    {
        id: 29,
        question: "Colocación verbal correcta con 'REPORT':",
        options: [ "Do a report", "Submit a report", "Say a report", "Tell a report" ],
        correct: 1,
        category: "Collocations",
        modes: ["general"],
        tip: "Submit (entregar/enviar) o Write son correctos."
    },
    {
        id: 30,
        question: "¿Qué es un 'Briefing'?",
        options: [
            "A formal dinner",
            "A type of bag",
            "A short informational meeting",
            "A long holiday"
        ],
        correct: 2,
        category: "Professional Vocabulary",
        modes: ["general"],
        tip: "Briefing = reunión breve informativa o de instrucciones."
    },

    // --- MODALS TEST (Refined) ---
    {
        id: 101,
        question: "You ______ wear safety gear.",
        options: [ "might", "must", "can", "should" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals"],
        tip: "Regla obligatoria: Must para normas obligatorias. Should es consejo."
    },
    {
        id: 102,
        question: "You ______ finish it today if you're busy.",
        options: [ "don't have to", "shouldn't", "can't", "mustn't" ],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Ausencia de obligación: Don't have to = no es necesario. Mustn't = prohibido."
    },
    {
        id: 103,
        question: "______ I use your computer?",
        options: [ "Should", "Will", "May", "Must" ],
        correct: 2,
        category: "Grammar",
        modes: ["modals"],
        tip: "Petición muy formal: May es el más formal para pedir permiso."
    },
    {
        id: 104,
        question: "You ______ smoke here.",
        options: [ "mustn't", "wouldn't", "don't have to", "needn't" ],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Prohibición: Mustn't indica que está prohibido."
    },
    {
        id: 105,
        question: "He ______ speak Arabic fluently.",
        options: [ "may", "must", "can", "shall" ],
        correct: 2,
        category: "Grammar",
        modes: ["modals"],
        tip: "Habilidad general: Can = habilidad (saber hacer algo)."
    },
    {
        id: 106,
        question: "You ______ see a doctor.",
        options: [ "may", "can", "might", "should" ],
        correct: 3,
        category: "Grammar",
        modes: ["modals"],
        tip: "Consejo fuerte: Should = recomendación."
    },
    {
        id: 107,
        question: "He ______ be tired after the marathon.",
        options: [ "should", "can", "need", "must" ],
        correct: 3,
        category: "Grammar",
        modes: ["modals"],
        tip: "Deducción lógica (seguro que sí): Must be = estoy seguro de que lo está."
    },
    {
        id: 108,
        question: "______ you open the window?",
        options: [ "May", "Could", "Must", "Should" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals"],
        tip: "Petición cortés: Could you = podrías (petición)."
    },
    {
        id: 109,
        question: "It ______ rain later.",
        options: [ "might", "has to", "must", "should" ],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Posibilidad (quizás): Might/May = probabilidad incierta."
    },
    {
        id: 110,
        question: "I ______ run fast when I was young.",
        options: [ "should", "could", "may", "can" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals"],
        tip: "Habilidad pasada: Could = pasado de Can."
    },

    // --- PRONOUNS TEST (Refined) ---
    {
        id: 201,
        question: "That's the man ______ car was stolen.",
        options: [ "whose", "who", "that", "which" ],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Whose = cuyo (posesión)."
    },
    {
        id: 202,
        question: "The book ______ I read is good.",
        options: [ "which", "who", "where", "whose" ],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Objeto: Which para libros/cosas."
    },
    {
        id: 203,
        question: "She hurt ______.",
        options: [ "her", "herself", "she", "hers" ],
        correct: 1,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Reflexivo: Herself = a ella misma."
    },
    {
        id: 204,
        question: "______ phone is this?",
        options: [ "Which", "Who's", "Who", "Whose" ],
        correct: 3,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "¿De quién?: Whose = de quién. Who's = quién es."
    },
    {
        id: 205,
        question: "I did it ______.",
        options: [ "mine", "me", "my", "myself" ],
        correct: 3,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "En énfasis: Myself = yo mismo (sin ayuda)."
    },
    {
        id: 206,
        question: "The city ______ I live.",
        options: [ "which", "that", "when", "where" ],
        correct: 3,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Lugar: Where para ubicaciones."
    },
    {
        id: 207,
        question: "They love ______.",
        options: [ "theirs", "each other", "themselves", "they" ],
        correct: 1,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Recíproco: Each other = el uno al otro."
    },
    {
        id: 208,
        question: "This is mine, not ______.",
        options: [ "yourself", "your", "yours", "you" ],
        correct: 2,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Pronombre Posesivo: Yours = tuyo (sustantivo)."
    },
    {
        id: 209,
        question: "I didn't see ______.",
        options: [ "anybody", "no one", "nobody", "somebody" ],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Indefinido negativo: Didn't ya es negativo -> usa Anybody. (I saw nobody)."
    },
    {
        id: 210,
        question: "Give it to ______.",
        options: [ "I", "mine", "me", "my" ],
        correct: 2,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Objeto indirecto: Give X to ME (pronombre objeto)."
    },

    // --- TENSES TEST (Refined) ---
    {
        id: 301,
        question: "Listen! Someone ______ the guitar.",
        options: [ "plays", "played", "has played", "is playing" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Acción en progreso: Al decir 'Listen!', implica ahora mismo -> Present Continuous."
    },
    {
        id: 302,
        question: "I ______ to Tokyo twice.",
        options: [ "go", "went", "have been", "am going" ],
        correct: 2,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Experiencia indefinida: Sin fecha específica = Present Perfect."
    },
    {
        id: 303,
        question: "She ______ here for 10 years.",
        options: [ "worked", "is working", "works", "has worked" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Duración hasta ahora: For 10 years + sigue allí = Present Perfect."
    },
    {
        id: 304,
        question: "I ______ when the phone rang.",
        options: [ "slept", "was sleeping", "sleep", "have slept" ],
        correct: 1,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Interrupción en pasado: Acción larga (Past Cont) interrumpida por corta."
    },
    {
        id: 305,
        question: "By the time I arrived, he ______.",
        options: [ "had left", "left", "leaves", "has left" ],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Pasado del pasado: Past Perfect para acción anterior a otra pasada."
    },
    {
        id: 306,
        question: "We ______ pizza last night.",
        options: [ "ate", "have eaten", "were eating", "eat" ],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Momento específico pasado: Last night = Past Simple."
    },
    {
        id: 307,
        question: "The sun ______ in the east.",
        options: [ "has risen", "is rising", "rose", "rises" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Verdad universal: Hechos científicos = Present Simple."
    },
    {
        id: 308,
        question: "What ______ yesterday?",
        options: [ "do you do", "have you done", "were you doing", "did you do" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Pregunta pasada: Did you do es la forma estándar para preguntar por ayer."
    },
    {
        id: 309,
        question: "I ______ my keys! I can't enter.",
        options: [ "lose", "am losing", "have lost", "lost" ],
        correct: 2,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Acción reciente con efecto: Perdí las llaves y AHORA no puedo entrar = Present Perfect."
    },
    {
        id: 310,
        question: "I thought you ______ come.",
        options: [ "will", "would", "can", "may" ],
        correct: 1,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Futuro en pasado: Would es el pasado de will."
    },

    // --- MIXED GRAMMAR (Refined) ---
    {
        id: 401,
        question: "I haven't seen him ______ 2020.",
        options: [ "ago", "for", "from", "since" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Tiempo específico: Since + fecha/punto de partida."
    },
    {
        id: 402,
        question: "We have waited ______ 2 hours.",
        options: [ "since", "ago", "during", "for" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Periodo de tiempo: For + duración."
    },
    {
        id: 403,
        question: "The novel ______ by Cervantes.",
        options: [ "has written", "wrote", "was written", "writes" ],
        correct: 2,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Pasiva Pasada: Was/Were + Participio."
    },
    {
        id: 404,
        question: "English ______ spoken here.",
        options: [ "is", "are", "has", "was" ],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Pasiva Presente: English is spoken (Present Passive)."
    },
    {
        id: 405,
        question: "If you study, you ______ pass.",
        options: [ "will", "can't", "would", "did" ],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Condicional 1: Real possibility: Will."
    },
    {
        id: 406,
        question: "If I were rich, I ______ buy a boat.",
        options: [ "can", "will", "shall", "would" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Condicional 2: Hypothetical: Would."
    },
    {
        id: 407,
        question: "______, it was cold.",
        options: [ "However", "Despite", "But", "Although" ],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Conector Contraste: However va seguido de coma al inicio."
    },
    {
        id: 408,
        question: "I stayed home ______ I was sick.",
        options: [ "because", "although", "so", "but" ],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Conector Causa: Because explica la razón."
    },
    {
        id: 409,
        question: "I need to ______ a mistake.",
        options: [ "have", "create", "do", "make" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Make vs Do: Make a mistake (collocation)."
    },
    {
        id: 410,
        question: "I won't go ______ you go.",
        options: [ "if", "when", "as", "unless" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed"],
        tip: "A menos que: Unless = if not."
    },

    // --- FUTURE FORMS (Refined) ---
    {
        id: 501,
        question: "Look at the clouds! It ______ rain.",
        options: [ "is going to", "will", "is raining", "rains" ],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Evidencia presente: Going to para predicción con evidencia visual."
    },
    {
        id: 502,
        question: "Robots ______ take over the world.",
        options: [ "take", "are going to", "are taking", "will" ],
        correct: 3,
        category: "Grammar",
        modes: ["future"],
        tip: "Predicción general: Will para opiniones o predicciones futuras generales."
    },
    {
        id: 503,
        question: "I ______ the dentist tomorrow at 10.",
        options: [ "see", "am seeing", "saw", "will see" ],
        correct: 1,
        category: "Grammar",
        modes: ["future"],
        tip: "Plan agendado: Present Continuous para citas fijas y planes confirmados."
    },
    {
        id: 504,
        question: "The phone is ringing. I ______ answer it.",
        options: [ "am answering", "am going to", "will", "answer" ],
        correct: 2,
        category: "Grammar",
        modes: ["future"],
        tip: "Decisión espontánea: Decision al momento = Will."
    },
    {
        id: 505,
        question: "I will call you when I ______.",
        options: [ "arrive", "am arriving", "will arrive", "arrived" ],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Time Clause: Despues de When/As soon as, usa Presente, no Futuro."
    },
    {
        id: 506,
        question: "This time tomorrow, I ______ flying to Paris.",
        options: [ "am", "will", "was", "will be" ],
        correct: 3,
        category: "Grammar",
        modes: ["future"],
        tip: "Futuro Continuo: Will be + -ing."
    },
    {
        id: 507,
        question: "I ______ buy a new car soon.",
        options: [ "am going to", "buying", "buy", "will" ],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Intención: Going to para planes/intenciones generales."
    },
    {
        id: 508,
        question: "The train ______ at 6 PM.",
        options: [ "has left", "leaves", "will leave", "is leaving" ],
        correct: 1,
        category: "Grammar",
        modes: ["future"],
        tip: "Horario (Timetable): Horarios oficiales = Present Simple."
    },
    {
        id: 509,
        question: "I promise I ______ tell anyone.",
        options: [ "not going to", "am not", "don't", "won't" ],
        correct: 3,
        category: "Grammar",
        modes: ["future"],
        tip: "Promesa: Promises = Will / Won't."
    },
    {
        id: 510,
        question: "______ I carry your bag?",
        options: [ "Must", "Will", "Do", "Shall" ],
        correct: 3,
        category: "Grammar",
        modes: ["future"],
        tip: "Oferta: Shall I...? para ofrecerse."
    },

    // --- NEW EXPANSION QUESTIONS ---
    // General / Vocabulary Expansion
    {
        id: 31,
        question: "Professional 'Greeting' in email:",
        options: [ "Smith,", "Dear Mr. Smith,", "Hi Smith,", "Hey!" ],
        correct: 1,
        category: "Professional Communication",
        modes: ["general"],
        tip: "Dear + Apellido es el estándar formal."
    },
    {
        id: 32,
        question: "Meaning of 'Deadline':",
        options: [ "The start of a project", "A meeting point", "A dead telephone line", "The final date to complete a task" ],
        correct: 3,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Deadline = fecha límite."
    },
    {
        id: 33,
        question: "Opposite of 'Increase':",
        options: [ "Decrease", "Raise", "Expand", "Incline" ],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Increase (aumentar) vs Decrease (disminuir)."
    },

    // Modals Expansion
    {
        id: 111,
        question: "The lights are off. They ______ be home.",
        options: [ "needn't", "can't", "shouldn't", "mustn't" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals", "general"],
        tip: "Logical Assumption: Can't be = deducción lógica negativa (seguro que no)."
    },
    {
        id: 112,
        question: "I ______ swim when I was 5.",
        options: [ "should", "can", "must", "could" ],
        correct: 3,
        category: "Grammar",
        modes: ["modals", "general"],
        tip: "Past Ability: Could es el pasado de Can."
    },
    {
        id: 113,
        question: "You ______ look tired. Go to sleep.",
        options: [ "must", "have to", "can", "should" ],
        correct: 3,
        category: "Grammar",
        modes: ["modals"],
        tip: "Advice: Should se usa para consejos personales."
    },

    // Pronouns Expansion
    {
        id: 211,
        question: "She called ______ yesterday.",
        options: [ "him", "himself", "his", "he" ],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns", "general"],
        tip: "Object Pronoun: Him es el pronombre objeto (recibe la acción)."
    },
    {
        id: 212,
        question: "The CEO ______ announced the news.",
        options: [ "his", "he", "him", "himself" ],
        correct: 3,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Reflexive Emphasis: Himself enfatiza que fue él persona (el mismo)."
    },
    {
        id: 213,
        question: "______ are my files over there.",
        options: [ "These", "That", "Those", "This" ],
        correct: 2,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Demonstrative: Those = plural y lejos."
    },

    // Tenses Expansion
    {
        id: 311,
        question: "While I ______ working, the power went out.",
        options: [ "were", "was", "had", "am" ],
        correct: 1,
        category: "Grammar",
        modes: ["tenses", "general"],
        tip: "Past Continuous: Was working -> acción en progreso en pasado."
    },
    {
        id: 312,
        question: "I ______ him since 2010.",
        options: [ "am knowing", "know", "knew", "have known" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Present Perfect vs Past: Since + fecha requiere Present Perfect (have known)."
    },
    {
        id: 313,
        question: "He ______ be 30 next month.",
        options: [ "is", "shall", "is going to", "will" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses", "future"],
        tip: "Future Fact: Will para hechos futuros inevitables (edad)."
    },

    // Mixed Expansion
    {
        id: 411,
        question: "You are coming, ______?",
        options: [ "won't you", "isn't it", "don't you", "aren't you" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed", "general"],
        tip: "Tag Question: Si la oración es positiva (+), el tag es negativo (-)."
    },
    {
        id: 412,
        question: "I'm interested ______ learning more.",
        options: [ "at", "on", "in", "about" ],
        correct: 2,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Preposition: Interested IN algo."
    },
    {
        id: 413,
        question: "This report is ______ than the last one.",
        options: [ "better", "more good", "best", "gooder" ],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Comparative: Better es el comparativo irregular de Good."
    },

    // Future Forms Expansion
    {
        id: 511,
        question: "The meeting ______ at 9:00 AM.",
        options: [ "will start", "start", "is starting", "starts" ],
        correct: 3,
        category: "Grammar",
        modes: ["future", "general"],
        tip: "Schedule: Presente Simple para horarios fijos/programados."
    },
    {
        id: 512,
        question: "I ______ lunch with the client tomorrow.",
        options: [ "will have", "am having", "had", "have" ],
        correct: 1,
        category: "Grammar",
        modes: ["future"],
        tip: "Arrangement: Present Continuous para planes sociales confirmados."
    },
    {
        id: 513,
        question: "In 2050, cars ______ fly.",
        options: [ "are going to", "can", "will", "must" ],
        correct: 2,
        category: "Grammar",
        modes: ["future"],
        tip: "Prediction (No evidence): Will para predicciones lejanas o sin prueba visual."
    },
    // --- EXPANSION QUESTIONS (BATCH 2) ---

    // General / Vocabulary
    {
        id: 34,
        question: "Synonym of 'Fast':",
        options: [ "Quick", "Calm", "Slow", "Steady" ],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Quick y Fast son sinónimos."
    },
    {
        id: 35,
        question: "What do you use to staple papers?",
        options: [ "Glue", "Scissors", "Ruler", "Stapler" ],
        correct: 3,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Office Item: Stapler = Grapadora."
    },
    {
        id: 36,
        question: "'To call off' means...",
        options: [ "To shout", "To telephone", "To visit", "To cancel" ],
        correct: 3,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Phrasal Verb: Call off = Cancelar (un evento/reunión)."
    },
    {
        id: 37,
        question: "Antonym of 'Professional':",
        options: [ "Qualified", "Skilled", "Expert", "Amateur" ],
        correct: 3,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Amateur = aficionado (no profesional)."
    },
    {
        id: 38,
        question: "'Thanks a lot' is...",
        options: [ "Legal", "Formal", "Academic", "Informal" ],
        correct: 3,
        category: "Communication",
        modes: ["general"],
        tip: "Formal/Informal: Para formalidad se usa 'Thank you very much'."
    },

    // Modals
    {
        id: 114,
        question: "It ______ be true, but I doubt it.",
        options: [ "can't", "should", "might", "must" ],
        correct: 2,
        category: "Grammar",
        modes: ["modals"],
        tip: "Possibility: Might indica posibilidad remota."
    },
    {
        id: 115,
        question: "You ______ eat so much sugar.",
        options: [ "mustn't", "can't", "don't have to", "shouldn't" ],
        correct: 3,
        category: "Grammar",
        modes: ["modals"],
        tip: "Advice (Negative): Shouldn't = consejo negativo."
    },
    {
        id: 116,
        question: "______ you pass the salt, please?",
        options: [ "Might", "Could", "Should", "Must" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals"],
        tip: "Polite Request: Could you... = ¿Podrías...?"
    },
    {
        id: 117,
        question: "I ______ go to the bank, I have no cash.",
        options: [ "may", "have to", "can", "should" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals"],
        tip: "Necessity: Have to = necesidad externa."
    },
    {
        id: 118,
        question: "She's late. She ______ missed the bus.",
        options: [ "can have", "must have", "would have", "should have" ],
        correct: 1,
        category: "Grammar",
        modes: ["modals"],
        tip: "Past Deduction: Must have + participio = deducción lógica pasada."
    },

    // Pronouns
    {
        id: 214,
        question: "He cut ______ while cooking.",
        options: [ "himself", "his", "he", "him" ],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Reflexive: Himself = se cortó a sí mismo."
    },
    {
        id: 215,
        question: "The place ______ we met.",
        options: [ "which", "who", "when", "where" ],
        correct: 3,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Relative: Where para lugares."
    },
    {
        id: 216,
        question: "Don't wait for ______.",
        options: [ "we", "us", "our", "ours" ],
        correct: 1,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Object: Wait for US (pronombre objeto)."
    },
    {
        id: 217,
        question: "Is this pen ______?",
        options: [ "yours", "your", "my", "you" ],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Possessive: Yours va al final (pronombre)."
    },
    {
        id: 218,
        question: "There is ______ in the fridge.",
        options: [ "any", "anything", "no", "nothing" ],
        correct: 3,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Indefinite: There is NOTHING (oración positiva con significado negativo)."
    },

    // Tenses
    {
        id: 314,
        question: "She ______ (just) arrived.",
        options: [ "has just", "did just", "is just", "just has" ],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Present Perfect: Has just arrived (acaba de llegar)."
    },
    {
        id: 315,
        question: "They ______ playing chess at 8pm.",
        options: [ "was", "did", "were", "are" ],
        correct: 2,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Past Continuous: They WERE playing."
    },
    {
        id: 316,
        question: "He usually ______ coffee.",
        options: [ "drinks", "drank", "is drinking", "drink" ],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Present Simple: Habitual -> Drinks (3ª persona)."
    },
    {
        id: 317,
        question: "When I arrived, the movie ______ already started.",
        options: [ "was", "has", "did", "had" ],
        correct: 3,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Past Perfect: Had started (había empezado)."
    },
    {
        id: 318,
        question: "I ______ this music.",
        options: [ "was loving", "love", "am loving", "been loving" ],
        correct: 1,
        category: "Grammar",
        modes: ["tenses"],
        tip: "State Verbs: Love es un verbo de estado, no suele usarse en continuo."
    },

    // Mixed
    {
        id: 414,
        question: "I'm good at ______.",
        options: [ "drawing", "to draw", "draw", "drew" ],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Gerund: Good AT + Ing."
    },
    {
        id: 415,
        question: "I want ______ travel.",
        options: [ "at", "to", "in", "for" ],
        correct: 1,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Infinitive: Want TO travel."
    },
    {
        id: 416,
        question: "Depends ______ the weather.",
        options: [ "in", "from", "on", "of" ],
        correct: 2,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Preposition: Depends ON."
    },
    {
        id: 417,
        question: "She is ______ honest person.",
        options: [ "a", "an", "-", "the" ],
        correct: 1,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Article: AN honest (h muda)."
    },
    {
        id: 418,
        question: "I don't have ______ time.",
        options: [ "some", "many", "a lot", "much" ],
        correct: 3,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Quantifier: Much time (incontable, negativo)."
    },

    // Future
    {
        id: 514,
        question: "By 2030, I will ______ finished.",
        options: [ "had", "have", "be", "am" ],
        correct: 1,
        category: "Grammar",
        modes: ["future"],
        tip: "Future Perfect: Will have finished (habré terminado)."
    },
    {
        id: 515,
        question: "I think you ______ like it.",
        options: [ "shall", "must", "are going to", "will" ],
        correct: 3,
        category: "Grammar",
        modes: ["future"],
        tip: "Prediction: I think + Will (opinión)."
    },
    {
        id: 516,
        question: "______ I get you a drink?",
        options: [ "Do", "Will", "Can", "Have" ],
        correct: 2,
        category: "Grammar",
        modes: ["future"],
        tip: "Offer: Can I... (ofrecimiento informal)."
    },
    {
        id: 517,
        question: "We ______ to move next year.",
        options: [ "go", "will", "are going", "shall" ],
        correct: 2,
        category: "Grammar",
        modes: ["future"],
        tip: "Plan: Are going TO move."
    },
    {
        id: 518,
        question: "I will ______ working at 9.",
        options: [ "am", "do", "be", "have" ],
        correct: 2,
        category: "Grammar",
        modes: ["future"],
        tip: "Future Continuous: Will BE working."
    }
];

// Variables de estado
let visibleQuestions = [];
let userAnswers = [];
let questionsPerExam = 30; // UPDATED to 30
let currentMode = 'general';

let generalExamState = {
    currentExamIndex: 0,
    totalExams: 5,
    examResults: [],
    score: 0,
    consecutiveIncorrect: 0,
    correct: 0,
    incorrect: 0
};

let singleModeState = {
    active: false,
    score: 0,
    consecutiveIncorrect: 0,
    correct: 0,
    incorrect: 0
};

// Referencias DOM
const examContainer = document.getElementById('exam-container');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const finalResultsScreen = document.getElementById('final-results-screen');
const questionsContainer = document.getElementById('questions-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitExamBtn = document.getElementById('submit-exam-btn');
const reviewExamBtn = document.getElementById('review-exam-btn');
const nextExamBtn = document.getElementById('next-exam-btn');
const restartBtn = document.getElementById('restart-btn');
const currentExamEl = document.getElementById('current-exam');
const scoreEl = document.getElementById('score');
const settingsBtn = document.getElementById('settings-btn');
const settingsDropdown = document.getElementById('settings-dropdown');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sepiaModeToggle = document.getElementById('sepia-mode-toggle');
const sepiaSlider = document.getElementById('sepia-slider');
const sepiaControls = document.getElementById('sepia-controls');
const scrollTopBtn = document.getElementById('scroll-top-btn');

function init() {
    setupEventListeners();
    setupSettings();
    showStartScreen();
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mode = e.currentTarget.dataset.mode;
            startMode(mode);
        });
    });

    prevBtn.addEventListener('click', () => navigateQuestion(-1));
    nextBtn.addEventListener('click', () => navigateQuestion(1));

    // Exit Button
    document.getElementById('exit-btn').addEventListener('click', () => {
        if (confirm("¿Seguro que quieres salir? Perderás el progreso actual.")) {
            showStartScreen();
        }
    });

    submitExamBtn.addEventListener('click', finishCurrentExam);
    reviewExamBtn.addEventListener('click', reviewExam);
    nextExamBtn.addEventListener('click', nextGeneralExamStep);
    restartBtn.addEventListener('click', fullRestart);

    // Settings Dropdown
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsDropdown.classList.toggle('active');
    });

    // Close Dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (!settingsDropdown.contains(e.target) && e.target !== settingsBtn) {
            settingsDropdown.classList.remove('active');
        }
    });

    // Scroll to Top
    window.addEventListener('scroll', toggleScrollTopBtn);
    scrollTopBtn.addEventListener('click', scrollToTop);
}

function toggleScrollTopBtn() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function setupSettings() {
    // Dark Mode
    darkModeToggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        document.body.classList.toggle('dark-mode', isChecked);

        // If enabling Dark Mode, disable Sepia Mode
        if (isChecked && sepiaModeToggle.checked) {
            sepiaModeToggle.checked = false;
            document.body.classList.remove('sepia-mode');
            sepiaControls.classList.add('hidden');
        }
    });

    // Sepia Mode
    sepiaModeToggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        document.body.classList.toggle('sepia-mode', isChecked);
        sepiaControls.classList.toggle('hidden', !isChecked);

        // If enabling Sepia Mode, disable Dark Mode
        if (isChecked && darkModeToggle.checked) {
            darkModeToggle.checked = false;
            document.body.classList.remove('dark-mode');
        }
    });

    // Sepia Slider
    sepiaSlider.addEventListener('input', (e) => {
        const val = e.target.value / 100;
        document.body.style.setProperty('--sepia-amount', val);
    });
}

function showStartScreen() {
    window.scrollTo(0, 0); // Scroll to top
    hideAllSections();
    startScreen.classList.add('active');
    resetStats();
}

function startMode(mode) {
    window.scrollTo(0, 0); // Scroll to top
    currentMode = mode;
    hideAllSections();
    examContainer.classList.add('active');

    if (mode === 'general') {
        startGeneralExamSequence();
    } else {
        startSingleTopicExam(mode);
    }
}

function startGeneralExamSequence() {
    generalExamState = {
        currentExamIndex: 0,
        totalExams: 1, // UPDATED: Just 1 exam of 30 questions
        examResults: [],
        score: 0,
        consecutiveIncorrect: 0,
        correct: 0,
        incorrect: 0
    };
    singleModeState.active = false;
    currentExamEl.textContent = `General`;
    startNextGeneralExam();
}

function startNextGeneralExam() {
    window.scrollTo(0, 0); // Scroll to top
    let questions = getQuestionsByMode('general', 30); // UPDATED to 30
    visibleQuestions = questions;
    userAnswers = new Array(visibleQuestions.length).fill(null);
    renderQuestions(visibleQuestions);
    updateStatsDisplay();
}

function nextGeneralExamStep() {
    generalExamState.currentExamIndex++;
    if (generalExamState.currentExamIndex < generalExamState.totalExams) {
        currentExamEl.textContent = `${generalExamState.currentExamIndex + 1}/${generalExamState.totalExams}`;
        hideAllSections();
        examContainer.classList.add('active');
        startNextGeneralExam();
    } else {
        showFinalResults();
    }
}

function startSingleTopicExam(mode) {
    singleModeState = {
        active: true,
        score: 0,
        consecutiveIncorrect: 0,
        correct: 0,
        incorrect: 0
    };

    let questions = getQuestionsByMode(mode, 15);
    if (questions.length === 0) {
        alert("No hay preguntas suficientes para este modo aún.");
        showStartScreen();
        return;
    }

    visibleQuestions = questions;
    userAnswers = new Array(visibleQuestions.length).fill(null);
    currentExamEl.textContent = `Tema: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
    renderQuestions(visibleQuestions);
    updateStatsDisplay();
}

function getQuestionsByMode(mode, count) {
    let pool = questionDatabase.filter(q => q.modes.includes(mode));
    pool.sort(() => Math.random() - 0.5);
    return pool.slice(0, count);
}

function renderQuestions(questions) {
    questionsContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const qEl = document.createElement('div');
        qEl.className = 'question-card fade-in';
        if (index !== 0) qEl.style.display = 'none';
        qEl.dataset.index = index;

        qEl.innerHTML = `
            <div class="question-header">
                <span class="question-number">#${index + 1}</span>
                <span class="question-text">${q.question}</span>
            </div>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <div class="option" data-idx="${i}">
                        ${opt}
                    </div>
                `).join('')}
            </div>
            <div class="feedback" id="feedback-${index}"></div>
            <div class="hint-container">
                <button class="btn-hint" id="hint-btn-${index}">💡 Ver pista</button>
                <div class="hint-content hidden" id="hint-content-${index}">${q.tip}</div>
            </div>
        `;

        // Attach event listeners programmatically (CSP Compliant)
        const hintBtn = qEl.querySelector(`#hint-btn-${index}`);
        const hintContent = qEl.querySelector(`#hint-content-${index}`);
        hintBtn.addEventListener('click', () => {
            hintContent.classList.toggle('hidden');
            hintBtn.textContent = hintContent.classList.contains('hidden') ? '💡 Ver pista' : '🙈 Ocultar pista';
        });

        const opts = qEl.querySelectorAll('.option');
        opts.forEach((opt, i) => {
            opt.addEventListener('click', () => selectOption(index, i));
        });

        questionsContainer.appendChild(qEl);
    });
    updateNavigation(0);
}

function selectOption(qIndex, optIndex) {
    // Prevent changing answer if already answered (Lock mechanics)
    if (userAnswers[qIndex] !== null && userAnswers[qIndex] !== undefined) return;

    userAnswers[qIndex] = optIndex;
    const currentQ = visibleQuestions[qIndex];
    const isCorrect = (optIndex === currentQ.correct);

    const card = questionsContainer.children[qIndex];
    const opts = card.querySelectorAll('.option');

    const selectedOpt = opts[optIndex];
    selectedOpt.classList.add('selected');

    // Immediate Feedback Logic
    if (isCorrect) {
        selectedOpt.classList.add('correct');
    } else {
        selectedOpt.classList.add('incorrect');
        // Highlight the correct answer so user knows
        opts[currentQ.correct].classList.add('correct');
    }

    // Show Feedback Div immediately
    const feedbackEl = card.querySelector('.feedback');
    feedbackEl.innerHTML = isCorrect ?
        `<strong>¡Correcto!</strong>` :
        `<strong>Incorrecto</strong><br>La respuesta correcta era: "<strong>${currentQ.options[currentQ.correct]}</strong>"`;

    feedbackEl.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

    // Auto-show hint on incorrect answer if not already visible
    const hintContent = card.querySelector('.hint-content');
    const hintBtn = card.querySelector('.btn-hint');
    if (!isCorrect) {
        hintContent.classList.remove('hidden');
        hintBtn.textContent = '🙈 Ocultar pista';
    }

    // Disable further interactions on this question
    opts.forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.style.cursor = 'default';
    });

    // --- REAL-TIME SCORING UPDATE ---
    let currentState = singleModeState.active ? singleModeState : generalExamState;

    if (isCorrect) {
        currentState.correct++;
        currentState.score += 0.33;
        currentState.consecutiveIncorrect = 0;
    } else {
        currentState.incorrect++;
        currentState.consecutiveIncorrect++;

        // Penalty for every 3rd incorrect answer
        if (currentState.consecutiveIncorrect >= 3) {
            currentState.score -= 0.33;
            currentState.consecutiveIncorrect = 0;
        }
    }

    // Clamp score to 0 if negative
    if (currentState.score < 0) currentState.score = 0;

    updateStatsDisplay();
}

function navigateQuestion(direction) {
    const currentCard = Array.from(questionsContainer.children).find(c => c.style.display !== 'none');
    let currIdx = parseInt(currentCard.dataset.index);
    let nextIdx = currIdx + direction;

    if (nextIdx >= 0 && nextIdx < visibleQuestions.length) {
        currentCard.style.display = 'none';
        questionsContainer.children[nextIdx].style.display = 'block';
        updateNavigation(nextIdx);
    }
}

function updateNavigation(index) {
    prevBtn.style.display = index === 0 ? 'none' : 'block';

    if (index === visibleQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitExamBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitExamBtn.style.display = 'none';
    }
}

function finishCurrentExam() {
    let correct = 0;
    let incorrect = 0;
    let examScore = 0;

    // Usar puntero al estado correcto
    let currentState = singleModeState.active ? singleModeState : generalExamState;

    visibleQuestions.forEach((q, i) => {
        const ans = userAnswers[i];
        const isCorrect = (ans === q.correct);

        if (isCorrect) {
            correct++;
            examScore += 0.33;
            // Note: Consecutive incorrect tracking for *examScore* calculation here would be complex if we wanted to replicate the exact per-exam score logic distinct from the global one.
            // But since we are accumulating globally, we just want to know how well they did on *this* specific set for the log.
            // For simplicity in the log, we track raw correct/incorrect.
            // If we wanted to track points specifically for this exam including penalties, we'd need a local consecutive tracking.
        } else {
            incorrect++;

            // Local tracking for this exam's specific score calculation
            // We can't reuse currentState.consecutiveIncorrect because that's global/live.
        }
    });

    // We used to update tracking state here. Now we ONLY handle the logging/UI transition.
    // The currentState.score is ALREADY updated by selectOption.

    if (singleModeState.active) {
        // Score is already up to date.
        // We pass the global score or the exam specific score?
        // showSingleExamResults usually shows the score achieved.
        // Let's pass the *current total score* as requested by the function signature usually used for "final score".
        showSingleExamResults(correct, incorrect, singleModeState.score);
    } else {
        // generalExamState.score is already updated.
        // We push the *stats for this specific exam* to results. 
        // Note: 'examScore' calculated above in the loop is slightly inaccurate now because it doesn't track consecutive penalties strictly per-exam if it spans exams (though general exam is just 1 now).
        // Let's just push correct/incorrect counts which are accurate.
        generalExamState.examResults.push({ correct, incorrect, score: generalExamState.score });

        showSingleExamResults(correct, incorrect, generalExamState.score);
    }
}

function showSingleExamResults(correct, incorrect, score) {
    window.scrollTo(0, 0); // Scroll to top
    hideAllSections();
    resultsScreen.classList.add('active');

    const percentage = Math.round((correct / visibleQuestions.length) * 100);
    const circle = document.getElementById('score-circle');
    circle.textContent = `${percentage}%`;

    circle.className = 'score-circle';
    if (percentage >= 80) circle.classList.add('score-excellent');
    else if (percentage >= 50) circle.classList.add('score-good');
    else circle.classList.add('score-poor');

    document.getElementById('final-score').textContent = score.toFixed(2);

    const list = document.getElementById('results-list');
    list.innerHTML = '';
    visibleQuestions.forEach((q, i) => {
        const item = document.createElement('div');
        item.className = 'result-item';
        const isCorrect = userAnswers[i] === q.correct;
        item.style.borderLeft = isCorrect ? '5px solid var(--success-color)' : '5px solid var(--danger-color)';

        item.innerHTML = `
            <div><strong>${i + 1}. ${q.question}</strong></div>
            <div style="color: ${isCorrect ? 'green' : 'red'}">
                Tu respuesta: ${q.options[userAnswers[i]] || 'Sin responder'} 
                ${isCorrect ? '✅' : '❌'}
            </div>
            ${!isCorrect ? `<div style="font-size: 0.9em; margin-top: 5px; color: #666;">Tip: ${q.tip}</div>` : ''}
        `;
        list.appendChild(item);
    });

    // Always offer "Back to Menu" now that General is single-exam
    nextExamBtn.textContent = "Volver al Menú";
    nextExamBtn.onclick = showStartScreen;
}

function reviewExam() {
    window.scrollTo(0, 0); // Scroll to top
    hideAllSections();
    examContainer.classList.add('active');

    Array.from(questionsContainer.children).forEach((card, i) => {
        card.style.display = i === 0 ? 'block' : 'none';

        const feedback = card.querySelector('.feedback');
        const isCorrect = userAnswers[i] === visibleQuestions[i].correct;
        feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = isCorrect ? '¡Correcto!' : `Incorrecto. ${visibleQuestions[i].tip}`;

        const opts = card.querySelectorAll('.option');
        opts.forEach((opt, idx) => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            if (idx === visibleQuestions[i].correct) opt.classList.add('correct');
            if (idx === userAnswers[i] && !isCorrect) opt.classList.add('incorrect');
        });
    });

    updateNavigation(0);
    submitExamBtn.style.display = 'block';
    submitExamBtn.textContent = "Volver a Resultados";
    submitExamBtn.onclick = () => {
        hideAllSections();
        resultsScreen.classList.add('active');
        submitExamBtn.onclick = finishCurrentExam;
    };
}

function showFinalResults() {
    hideAllSections();
    finalResultsScreen.classList.add('active');

    document.getElementById('total-final-score').textContent = generalExamState.score.toFixed(2);

    const summary = document.getElementById('exams-summary');
    summary.innerHTML = generalExamState.examResults.map((res, i) => `
        <div class="result-item">
            <strong>Examen ${i + 1}:</strong> ${res.score.toFixed(2)} pts
        </div>
    `).join('');

    document.getElementById('improvement-areas').innerHTML = "<p>¡Buen trabajo! Sigue practicando.</p>";
}

function fullRestart() {
    showStartScreen();
}

function hideAllSections() {
    document.querySelectorAll('.exam-section').forEach(el => el.classList.remove('active'));
}

function resetStats() {
    scoreEl.textContent = '0.00';
    currentExamEl.textContent = '-';
    // Reset stats display
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('incorrect-count').textContent = '0';
}

function updateStatsDisplay() {
    let s = singleModeState.active ? singleModeState : generalExamState;
    scoreEl.textContent = s.score.toFixed(2);
    document.getElementById('correct-count').textContent = s.correct;
    document.getElementById('incorrect-count').textContent = s.incorrect;
}

init();