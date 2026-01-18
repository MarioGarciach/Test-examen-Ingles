// Base de datos de preguntas
const questionDatabase = [
    // --- PREGUNTAS GENERALES REFINADAS (IDs 1-30) ---
    {
        id: 1,
        question: "¿Qué prefijo se debe usar para transformar 'HAPPY' en su antónimo?",
        options: ["re-", "un-", "mis-", "dis-"],
        correct: 1,
        category: "Vocabulary",
        modes: ["general", "mixed"],
        tip: "El prefijo 'un-' suele indicar negación (unhappy, unusual). 'dis-' es parecido pero no funciona aquí."
    },
    {
        id: 2,
        question: "Identifica la oración que describe una acción que está ocurriendo AHORA MISMO:",
        options: [
            "I am preparing the report right now.",
            "I prepare reports every Monday.",
            "I prepared the report yesterday.",
            "I will prepare the report later."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Usa Present Continuous (am/is/are + ing) para acciones actuales."
    },
    {
        id: 3,
        question: "¿Cuál es el patrón verbal correcto tras el verbo 'ENJOY'?",
        options: [
            "I enjoy attending training sessions.",
            "I enjoy attend training sessions.",
            "I enjoy to attend training sessions.",
            "I enjoy for attending training sessions."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "Verbos como 'enjoy', 'mind' y 'suggest' siempre van seguidos de gerundio (-ing)."
    },
    {
        id: 4,
        question: "¿Qué frase es adecuada para pedir una aclaración educadamente?",
        options: [
            "Could you explain that differently?",
            "What do you mean?",
            "Say it again.",
            "I don't get it."
        ],
        correct: 0,
        category: "Professional Communication",
        modes: ["general"],
        tip: "En contextos profesionales, usa 'Could you...' para ser más cortés."
    },
    {
        id: 5,
        question: "Completa: 'The team meeting is scheduled ______ Thursday.'",
        options: ["on", "in", "at", "by"],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "ON days (on Monday), IN months/years (in July), AT time (at 5pm)."
    },
    {
        id: 6,
        question: "¿Qué oración es correcta (Present Perfect)?",
        options: [
            "The team has finished the project.",
            "The team have finished the project yesterday.",
            "The team has finish the project.",
            "The team finished the project yet."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Present Perfect (has finished) no usa marcadores de tiempo pasado específico como 'yesterday'."
    },
    {
        id: 7,
        question: "¿Cómo se llama la estrategia de lectura para buscar datos específicos?",
        options: ["Scanning", "Skimming", "Reading for detail", "Intensive reading"],
        correct: 0,
        category: "Reading Skills",
        modes: ["general"],
        tip: "Scanning = buscar datos concretos. Skimming = idea general."
    },
    {
        id: 8,
        question: "Selecciona el orden correcto:",
        options: [
            "She organizes her workspace at 9 a.m.",
            "She at 9 a.m. organizes her workspace.",
            "Organizes she her workspace at 9 a.m.",
            "At 9 a.m. organizes she her workspace."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "Sujeto + Verbo + Objeto + Tiempo."
    },
    {
        id: 9,
        question: "¿Qué documento registra un accidente laboral?",
        options: ["Incident report", "Safety Memo", "Annual Review", "Invoice"],
        correct: 0,
        category: "Professional Vocabulary",
        modes: ["general"],
        tip: "Un 'Incident report' es el documento estándar para accidentes."
    },
    {
        id: 10,
        question: "Pasado Simple correcto con 'yesterday':",
        options: [
            "I sent the files yesterday.",
            "I have sent the files yesterday.",
            "I was sending the files yesterday.",
            "I send the files yesterday."
        ],
        correct: 0,
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
            "Shall I assist you?",
            "Can I help?",
            "Do you need help?",
            "Must I help you?"
        ],
        correct: 0,
        category: "Professional Communication",
        modes: ["general", "modals"],
        tip: "'Shall' es muy formal y adecuado para ofrecer servicios profesionales."
    },
    {
        id: 13,
        question: "This is the guide ______ explains the process.",
        options: ["that", "who", "where", "whose"],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "'That' o 'which' para cosas. 'Who' para personas."
    },
    {
        id: 14,
        question: "Futuro planeado (intención): 'I ______ prepare the list.'",
        options: ["am going to", "will", "going to", "prepare"],
        correct: 0,
        category: "Grammar",
        modes: ["general", "future"],
        tip: "Am going to = plan pre-decidido. Will = decisión espontánea."
    },
    {
        id: 15,
        question: "'Submit a report' es un ejemplo de:",
        options: ["Collocation", "Idiom", "Phrasal Verb", "Slang"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Collocation = palabras que suelen ir juntas naturalmente."
    },
    {
        id: 16,
        question: "Lectura rápida para idea general (gist):",
        options: ["Skimming", "Scanning", "Close reading", "Proofreading"],
        correct: 0,
        category: "Reading Skills",
        modes: ["general"],
        tip: "Skimming = 'cremar' o leer por encima para captar lo principal."
    },
    {
        id: 17,
        question: "Pasado simple regular negativo:",
        options: [
            "The printer didn't fail.",
            "The printer didn't failed.",
            "The printer not failed.",
            "The printer wasn't fail."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "En negativo (didn't), el verbo principal vuelve a infinitivo (fail, no failed)."
    },
    {
        id: 18,
        question: "Obligación fuerte/regla:",
        options: [
            "You must wear a helmet.",
            "You can wear a helmet.",
            "You should wear a helmet.",
            "You might wear a helmet."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "modals"],
        tip: "Must = obligación. Should = consejo."
    },
    {
        id: 19,
        question: "Sinónimo de 'ASSIST':",
        options: ["Help", "Attend", "Assert", "Assign"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Assist y Help significan ayudar. Attend es 'asistir a un evento' (falso amigo)."
    },
    {
        id: 20,
        question: "Primer Condicional Correcto:",
        options: [
            "If it rains, I will stay home.",
            "If it will rain, I stay home.",
            "If it rains, I stay home.",
            "If it rained, I would stay home."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "mixed"],
        tip: "If + Presente, Will + Futuro."
    },
    {
        id: 21,
        question: "Mejor forma de estudiar vocabulario:",
        options: [
            "With context and examples",
            "Just translations",
            "Memorizing lists",
            "Reading dictionary definitions"
        ],
        correct: 0,
        category: "Vocabulary Skills",
        modes: ["general"],
        tip: "El contexto ayuda a retener mejor que las traducciones aisladas."
    },
    {
        id: 22,
        question: "¿Para qué sirve decir 'Let me see...'?",
        options: [
            "To gain thinking time (hesitation)",
            "To end a conversation",
            "To ask for permission",
            "To interrupt someone"
        ],
        correct: 0,
        category: "Speaking Skills",
        modes: ["general"],
        tip: "Es un 'hesitation device' para pensar sin perder el turno."
    },
    {
        id: 23,
        question: "Cierre formal de email:",
        options: [
            "I look forward to hearing from you.",
            "I look forward to hear from you.",
            "I'm looking forward hear from you.",
            "Look forward hearing from you."
        ],
        correct: 0,
        category: "Professional Communication",
        modes: ["general"],
        tip: "To look forward TO + verbo-ING."
    },
    {
        id: 24,
        question: "Despedida formal (conoces el nombre):",
        options: ["Yours sincerely", "Yours faithfully", "Best regards", "Cheers"],
        correct: 0,
        category: "Professional Communication",
        modes: ["general"],
        tip: "Sincerely si conoces el nombre. Faithfully si no (Dear Sir/Madam)."
    },
    {
        id: 25,
        question: "Elemento clave en el asunto de un email:",
        options: ["Clear summary of content", "Urgent flag always", "Sender's nickname", "Blank space"],
        correct: 0,
        category: "Professional Communication",
        modes: ["general"],
        tip: "Debe resumir claramente el propósito del email."
    },
    {
        id: 26,
        question: "Pregunta de entrevista sobre uno mismo:",
        options: [
            "What are your strengths?",
            "What is your house like?",
            "Do you have a car?",
            "What politics do you like?"
        ],
        correct: 0,
        category: "Professional Vocabulary",
        modes: ["general"],
        tip: "Strengths (fortalezas) es estándar."
    },
    {
        id: 27,
        question: "Rutina diaria:",
        options: [
            "I check emails every morning.",
            "I am checking emails every morning.",
            "I check emails yesterday.",
            "I will check emails every morning."
        ],
        correct: 0,
        category: "Grammar",
        modes: ["general", "tenses"],
        tip: "Routine = Present Simple (check)."
    },
    {
        id: 28,
        question: "Pronombre relativo para personas:",
        options: ["The client who called...", "The client which called...", "The client where called...", "The client whose called..."],
        correct: 0,
        category: "Grammar",
        modes: ["general", "pronouns"],
        tip: "Who para personas, Which para cosas."
    },
    {
        id: 29,
        question: "Colocación verbal correcta con 'REPORT':",
        options: ["Submit a report", "Do a report", "Say a report", "Tell a report"],
        correct: 0,
        category: "Collocations",
        modes: ["general"],
        tip: "Submit (entregar/enviar) o Write son correctos."
    },
    {
        id: 30,
        question: "¿Qué es un 'Briefing'?",
        options: [
            "A short informational meeting",
            "A long holiday",
            "A type of bag",
            "A formal dinner"
        ],
        correct: 0,
        category: "Professional Vocabulary",
        modes: ["general"],
        tip: "Briefing = reunión breve informativa o de instrucciones."
    },

    // --- MODALS TEST (Refined) ---
    {
        id: 101,
        question: "Regla obligatoria: You ______ wear safety gear.",
        options: ["must", "should", "might", "can"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Must para normas obligatorias. Should es consejo."
    },
    {
        id: 102,
        question: "Ausencia de obligación: You ______ finish it today if you're busy.",
        options: ["don't have to", "mustn't", "can't", "shouldn't"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Don't have to = no es necesario. Mustn't = prohibido."
    },
    {
        id: 103,
        question: "Petición muy formal: ______ I use your computer?",
        options: ["May", "Must", "Should", "Will"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "May es el más formal para pedir permiso."
    },
    {
        id: 104,
        question: "Prohibición: You ______ smoke here.",
        options: ["mustn't", "don't have to", "needn't", "wouldn't"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Mustn't indica que está prohibido."
    },
    {
        id: 105,
        question: "Habilidad general: He ______ speak Arabic fluently.",
        options: ["can", "may", "must", "shall"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Can = habilidad (saber hacer algo)."
    },
    {
        id: 106,
        question: "Consejo fuerte: You ______ see a doctor.",
        options: ["should", "can", "may", "might"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Should = recomendación."
    },
    {
        id: 107,
        question: "Deducción lógica (seguro que sí): He ______ be tired after the marathon.",
        options: ["must", "can", "should", "need"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Must be = estoy seguro de que lo está."
    },
    {
        id: 108,
        question: "Petición cortés: ______ you open the window?",
        options: ["Could", "May", "Should", "Must"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Could you = podrías (petición)."
    },
    {
        id: 109,
        question: "Posibilidad (quizás): It ______ rain later.",
        options: ["might", "must", "has to", "should"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Might/May = probabilidad incierta."
    },
    {
        id: 110,
        question: "Habilidad pasada: I ______ run fast when I was young.",
        options: ["could", "can", "should", "may"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Could = pasado de Can."
    },

    // --- PRONOUNS TEST (Refined) ---
    {
        id: 201,
        question: "Posesión: That's the man ______ car was stolen.",
        options: ["whose", "who", "which", "that"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Whose = cuyo (posesión)."
    },
    {
        id: 202,
        question: "Objeto: The book ______ I read is good.",
        options: ["which", "who", "whose", "where"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Which para libros/cosas."
    },
    {
        id: 203,
        question: "Reflexivo: She hurt ______.",
        options: ["herself", "her", "she", "hers"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Herself = a ella misma."
    },
    {
        id: 204,
        question: "¿De quién?: ______ phone is this?",
        options: ["Whose", "Who's", "Who", "Which"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Whose = de quién. Who's = quién es."
    },
    {
        id: 205,
        question: "En énfasis: I did it ______.",
        options: ["myself", "me", "mine", "my"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Myself = yo mismo (sin ayuda)."
    },
    {
        id: 206,
        question: "Lugar: The city ______ I live.",
        options: ["where", "which", "that", "when"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Where para ubicaciones."
    },
    {
        id: 207,
        question: "Recíproco: They love ______.",
        options: ["each other", "themselves", "they", "theirs"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Each other = el uno al otro."
    },
    {
        id: 208,
        question: "Pronombre Posesivo: This is mine, not ______.",
        options: ["yours", "your", "you", "yourself"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Yours = tuyo (sustantivo)."
    },
    {
        id: 209,
        question: "Indefinido negativo: I didn't see ______.",
        options: ["anybody", "nobody", "somebody", "no one"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Didn't ya es negativo -> usa Anybody. (I saw nobody)."
    },
    {
        id: 210,
        question: "Objeto indirecto: Give it to ______.",
        options: ["me", "I", "my", "mine"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Give X to ME (pronombre objeto)."
    },

    // --- TENSES TEST (Refined) ---
    {
        id: 301,
        question: "Acción en progreso: Listen! Someone ______ the guitar.",
        options: ["is playing", "plays", "played", "has played"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Al decir 'Listen!', implica ahora mismo -> Present Continuous."
    },
    {
        id: 302,
        question: "Experiencia indefinida: I ______ to Tokyo twice.",
        options: ["have been", "went", "am going", "go"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Sin fecha específica = Present Perfect."
    },
    {
        id: 303,
        question: "Duración hasta ahora: She ______ here for 10 years.",
        options: ["has worked", "works", "is working", "worked"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "For 10 years + sigue allí = Present Perfect."
    },
    {
        id: 304,
        question: "Interrupción en pasado: I ______ when the phone rang.",
        options: ["was sleeping", "slept", "have slept", "sleep"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Acción larga (Past Cont) interrumpida por corta."
    },
    {
        id: 305,
        question: "Pasado del pasado: By the time I arrived, he ______.",
        options: ["had left", "left", "has left", "leaves"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Past Perfect para acción anterior a otra pasada."
    },
    {
        id: 306,
        question: "Momento específico pasado: We ______ pizza last night.",
        options: ["ate", "have eaten", "eat", "were eating"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Last night = Past Simple."
    },
    {
        id: 307,
        question: "Verdad universal: The sun ______ in the east.",
        options: ["rises", "is rising", "rose", "has risen"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Hechos científicos = Present Simple."
    },
    {
        id: 308,
        question: "Pregunta pasada: What ______ yesterday?",
        options: ["did you do", "have you done", "do you do", "were you doing"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Did you do es la forma estándar para preguntar por ayer."
    },
    {
        id: 309,
        question: "Acción reciente con efecto: I ______ my keys! I can't enter.",
        options: ["have lost", "lost", "lose", "am losing"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Perdí las llaves y AHORA no puedo entrar = Present Perfect."
    },
    {
        id: 310,
        question: "Futuro en pasado: I thought you ______ come.",
        options: ["would", "will", "can", "may"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Would es el pasado de will."
    },

    // --- MIXED GRAMMAR (Refined) ---
    {
        id: 401,
        question: "Tiempo específico: I haven't seen him ______ 2020.",
        options: ["since", "for", "ago", "from"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Since + fecha/punto de partida."
    },
    {
        id: 402,
        question: "Periodo de tiempo: We have waited ______ 2 hours.",
        options: ["for", "since", "during", "ago"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "For + duración."
    },
    {
        id: 403,
        question: "Pasiva Pasada: The novel ______ by Cervantes.",
        options: ["was written", "wrote", "has written", "writes"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Was/Were + Participio."
    },
    {
        id: 404,
        question: "Pasiva Presente: English ______ spoken here.",
        options: ["is", "are", "has", "was"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "English is spoken (Present Passive)."
    },
    {
        id: 405,
        question: "Condicional 1: If you study, you ______ pass.",
        options: ["will", "would", "did", "can't"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Real possibility: Will."
    },
    {
        id: 406,
        question: "Condicional 2: If I were rich, I ______ buy a boat.",
        options: ["would", "will", "can", "shall"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Hypothetical: Would."
    },
    {
        id: 407,
        question: "Conector Contraste: ______, it was cold.",
        options: ["However", "Although", "But", "Despite"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "However va seguido de coma al inicio."
    },
    {
        id: 408,
        question: "Conector Causa: I stayed home ______ I was sick.",
        options: ["because", "so", "but", "although"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Because explica la razón."
    },
    {
        id: 409,
        question: "Make vs Do: I need to ______ a mistake.",
        options: ["make", "do", "have", "create"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Make a mistake (collocation)."
    },
    {
        id: 410,
        question: "A menos que: I won't go ______ you go.",
        options: ["unless", "if", "when", "as"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Unless = if not."
    },

    // --- FUTURE FORMS (Refined) ---
    {
        id: 501,
        question: "Evidencia presente: Look at the clouds! It ______ rain.",
        options: ["is going to", "will", "is raining", "rains"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Going to para predicción con evidencia visual."
    },
    {
        id: 502,
        question: "Predicción general: Robots ______ take over the world.",
        options: ["will", "are going to", "are taking", "take"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Will para opiniones o predicciones futuras generales."
    },
    {
        id: 503,
        question: "Plan agendado: I ______ the dentist tomorrow at 10.",
        options: ["am seeing", "will see", "see", "saw"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Present Continuous para citas fijas y planes confirmados."
    },
    {
        id: 504,
        question: "Decisión espontánea: The phone is ringing. I ______ answer it.",
        options: ["will", "am going to", "am answering", "answer"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Decision al momento = Will."
    },
    {
        id: 505,
        question: "Time Clause: I will call you when I ______.",
        options: ["arrive", "will arrive", "arrived", "am arriving"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Despues de When/As soon as, usa Presente, no Futuro."
    },
    {
        id: 506,
        question: "Futuro Continuo: This time tomorrow, I ______ flying to Paris.",
        options: ["will be", "will", "am", "was"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Will be + -ing."
    },
    {
        id: 507,
        question: "Intención: I ______ buy a new car soon.",
        options: ["am going to", "will", "buy", "buying"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Going to para planes/intenciones generales."
    },
    {
        id: 508,
        question: "Horario (Timetable): The train ______ at 6 PM.",
        options: ["leaves", "will leave", "is leaving", "has left"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Horarios oficiales = Present Simple."
    },
    {
        id: 509,
        question: "Promesa: I promise I ______ tell anyone.",
        options: ["won't", "don't", "not going to", "am not"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Promises = Will / Won't."
    },
    {
        id: 510,
        question: "Oferta: ______ I carry your bag?",
        options: ["Shall", "Will", "Do", "Must"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Shall I...? para ofrecerse."
    },

    // --- NEW EXPANSION QUESTIONS ---
    // General / Vocabulary Expansion
    {
        id: 31,
        question: "Professional 'Greeting' in email:",
        options: ["Dear Mr. Smith,", "Hi Smith,", "Smith,", "Hey!"],
        correct: 0,
        category: "Professional Communication",
        modes: ["general"],
        tip: "Dear + Apellido es el estándar formal."
    },
    {
        id: 32,
        question: "Meaning of 'Deadline':",
        options: ["The final date to complete a task", "A dead telephone line", "A meeting point", "The start of a project"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Deadline = fecha límite."
    },
    {
        id: 33,
        question: "Opposite of 'Increase':",
        options: ["Decrease", "Incline", "Raise", "Expand"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Increase (aumentar) vs Decrease (disminuir)."
    },

    // Modals Expansion
    {
        id: 111,
        question: "Logical Assumption: The lights are off. They ______ be home.",
        options: ["can't", "mustn't", "shouldn't", "needn't"],
        correct: 0,
        category: "Grammar",
        modes: ["modals", "general"],
        tip: "Can't be = deducción lógica negativa (seguro que no)."
    },
    {
        id: 112,
        question: "Past Ability: I ______ swim when I was 5.",
        options: ["could", "can", "should", "must"],
        correct: 0,
        category: "Grammar",
        modes: ["modals", "general"],
        tip: "Could es el pasado de Can."
    },
    {
        id: 113,
        question: "Advice: You ______ look tired. Go to sleep.",
        options: ["should", "must", "can", "have to"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Should se usa para consejos personales."
    },

    // Pronouns Expansion
    {
        id: 211,
        question: "Object Pronoun: She called ______ yesterday.",
        options: ["him", "he", "his", "himself"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns", "general"],
        tip: "Him es el pronombre objeto (recibe la acción)."
    },
    {
        id: 212,
        question: "Reflexive Emphasis: The CEO ______ announced the news.",
        options: ["himself", "his", "him", "he"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Himself enfatiza que fue él persona (el mismo)."
    },
    {
        id: 213,
        question: "Demonstrative: ______ are my files over there.",
        options: ["Those", "These", "That", "This"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Those = plural y lejos."
    },

    // Tenses Expansion
    {
        id: 311,
        question: "Past Continuous: While I ______ working, the power went out.",
        options: ["was", "am", "were", "had"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses", "general"],
        tip: "Was working -> acción en progreso en pasado."
    },
    {
        id: 312,
        question: "Present Perfect vs Past: I ______ him since 2010.",
        options: ["have known", "know", "knew", "am knowing"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Since + fecha requiere Present Perfect (have known)."
    },
    {
        id: 313,
        question: "Future Fact: He ______ be 30 next month.",
        options: ["will", "is going to", "is", "shall"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses", "future"],
        tip: "Will para hechos futuros inevitables (edad)."
    },

    // Mixed Expansion
    {
        id: 411,
        question: "Tag Question: You are coming, ______?",
        options: ["aren't you", "don't you", "won't you", "isn't it"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed", "general"],
        tip: "Si la oración es positiva (+), el tag es negativo (-)."
    },
    {
        id: 412,
        question: "Preposition: I'm interested ______ learning more.",
        options: ["in", "on", "at", "about"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Interested IN algo."
    },
    {
        id: 413,
        question: "Comparative: This report is ______ than the last one.",
        options: ["better", "gooder", "more good", "best"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Better es el comparativo irregular de Good."
    },

    // Future Forms Expansion
    {
        id: 511,
        question: "Schedule: The meeting ______ at 9:00 AM.",
        options: ["starts", "will start", "is starting", "start"],
        correct: 0,
        category: "Grammar",
        modes: ["future", "general"],
        tip: "Presente Simple para horarios fijos/programados."
    },
    {
        id: 512,
        question: "Arrangement: I ______ lunch with the client tomorrow.",
        options: ["am having", "will have", "have", "had"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Present Continuous para planes sociales confirmados."
    },
    {
        id: 513,
        question: "Prediction (No evidence): In 2050, cars ______ fly.",
        options: ["will", "are going to", "must", "can"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Will para predicciones lejanas o sin prueba visual."
    },
    // --- EXPANSION QUESTIONS (BATCH 2) ---

    // General / Vocabulary
    {
        id: 34,
        question: "Synonym of 'Fast':",
        options: ["Quick", "Slow", "Steady", "Calm"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Quick y Fast son sinónimos."
    },
    {
        id: 35,
        question: "Office Item: What do you use to staple papers?",
        options: ["Stapler", "Scissors", "Ruler", "Glue"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Stapler = Grapadora."
    },
    {
        id: 36,
        question: "Phrasal Verb: 'To call off' means...",
        options: ["To cancel", "To telephone", "To visit", "To shout"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Call off = Cancelar (un evento/reunión)."
    },
    {
        id: 37,
        question: "Antonym of 'Professional':",
        options: ["Amateur", "Expert", "Skilled", "Qualified"],
        correct: 0,
        category: "Vocabulary",
        modes: ["general"],
        tip: "Amateur = aficionado (no profesional)."
    },
    {
        id: 38,
        question: "Formal/Informal: 'Thanks a lot' is...",
        options: ["Informal", "Formal", "Academic", "Legal"],
        correct: 0,
        category: "Communication",
        modes: ["general"],
        tip: "Para formalidad se usa 'Thank you very much'."
    },

    // Modals
    {
        id: 114,
        question: "Possibility: It ______ be true, but I doubt it.",
        options: ["might", "must", "can't", "should"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Might indica posibilidad remota."
    },
    {
        id: 115,
        question: "Advice (Negative): You ______ eat so much sugar.",
        options: ["shouldn't", "mustn't", "don't have to", "can't"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Shouldn't = consejo negativo."
    },
    {
        id: 116,
        question: "Polite Request: ______ you pass the salt, please?",
        options: ["Could", "Should", "Must", "Might"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Could you... = ¿Podrías...?"
    },
    {
        id: 117,
        question: "Necessity: I ______ go to the bank, I have no cash.",
        options: ["have to", "should", "can", "may"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Have to = necesidad externa."
    },
    {
        id: 118,
        question: "Past Deduction: She's late. She ______ missed the bus.",
        options: ["must have", "should have", "can have", "would have"],
        correct: 0,
        category: "Grammar",
        modes: ["modals"],
        tip: "Must have + participio = deducción lógica pasada."
    },

    // Pronouns
    {
        id: 214,
        question: "Reflexive: He cut ______ while cooking.",
        options: ["himself", "his", "him", "he"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Himself = se cortó a sí mismo."
    },
    {
        id: 215,
        question: "Relative: The place ______ we met.",
        options: ["where", "which", "who", "when"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Where para lugares."
    },
    {
        id: 216,
        question: "Object: Don't wait for ______.",
        options: ["us", "we", "our", "ours"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Wait for US (pronombre objeto)."
    },
    {
        id: 217,
        question: "Possessive: Is this pen ______?",
        options: ["yours", "your", "you", "my"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "Yours va al final (pronombre)."
    },
    {
        id: 218,
        question: "Indefinite: There is ______ in the fridge.",
        options: ["nothing", "anything", "any", "no"],
        correct: 0,
        category: "Grammar",
        modes: ["pronouns"],
        tip: "There is NOTHING (oración positiva con significado negativo)."
    },

    // Tenses
    {
        id: 314,
        question: "Present Perfect: She ______ (just) arrived.",
        options: ["has just", "just has", "did just", "is just"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Has just arrived (acaba de llegar)."
    },
    {
        id: 315,
        question: "Past Continuous: They ______ playing chess at 8pm.",
        options: ["were", "was", "are", "did"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "They WERE playing."
    },
    {
        id: 316,
        question: "Present Simple: He usually ______ coffee.",
        options: ["drinks", "drink", "is drinking", "drank"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Habitual -> Drinks (3ª persona)."
    },
    {
        id: 317,
        question: "Past Perfect: When I arrived, the movie ______ already started.",
        options: ["had", "has", "was", "did"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Had started (había empezado)."
    },
    {
        id: 318,
        question: "State Verbs: I ______ this music.",
        options: ["love", "am loving", "was loving", "been loving"],
        correct: 0,
        category: "Grammar",
        modes: ["tenses"],
        tip: "Love es un verbo de estado, no suele usarse en continuo."
    },

    // Mixed
    {
        id: 414,
        question: "Gerund: I'm good at ______.",
        options: ["drawing", "draw", "to draw", "drew"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Good AT + Ing."
    },
    {
        id: 415,
        question: "Infinitive: I want ______ travel.",
        options: ["to", "for", "in", "at"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Want TO travel."
    },
    {
        id: 416,
        question: "Preposition: Depends ______ the weather.",
        options: ["on", "of", "in", "from"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Depends ON."
    },
    {
        id: 417,
        question: "Article: She is ______ honest person.",
        options: ["an", "a", "the", "-"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "AN honest (h muda)."
    },
    {
        id: 418,
        question: "Quantifier: I don't have ______ time.",
        options: ["much", "many", "some", "a lot"],
        correct: 0,
        category: "Grammar",
        modes: ["mixed"],
        tip: "Much time (incontable, negativo)."
    },

    // Future
    {
        id: 514,
        question: "Future Perfect: By 2030, I will ______ finished.",
        options: ["have", "be", "had", "am"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Will have finished (habré terminado)."
    },
    {
        id: 515,
        question: "Prediction: I think you ______ like it.",
        options: ["will", "are going to", "shall", "must"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "I think + Will (opinión)."
    },
    {
        id: 516,
        question: "Offer: ______ I get you a drink?",
        options: ["Can", "Will", "Do", "Have"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Can I... (ofrecimiento informal)."
    },
    {
        id: 517,
        question: "Plan: We ______ to move next year.",
        options: ["are going", "will", "go", "shall"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Are going TO move."
    },
    {
        id: 518,
        question: "Future Continuous: I will ______ working at 9.",
        options: ["be", "have", "am", "do"],
        correct: 0,
        category: "Grammar",
        modes: ["future"],
        tip: "Will BE working."
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