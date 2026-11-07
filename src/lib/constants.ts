export interface ServiceInfo {
  slug: string;
  aliases?: string[];
  name: string;
  shortTag: string;
  subcategories: string[];
  shortDescription: string;
  fullDescription: string;
  whoItIsFor: string[];
  keyBenefits: string[];
  therapyApproach: string[];
  iconName: string;
  imageUrl: string;
  isTeletherapyAvailable: boolean;
  isPrimaryService?: boolean;
}

export const BRAND = {
  // Official Centre Name - used consistently across all pages, headers, footers and metadata
  name: "Grace Multi-Therapy & Hearing Care Centre",
  officialName: "Grace Multi-Therapy & Hearing Care Centre",
  shortName: "Grace Therapy Centre",
  tagline: "Better Communication • Brighter Future",
  motto: "Support • Develop • Empower",
  supportingWords: ["SUPPORT", "DEVELOP", "EMPOWER"],
  headline:
    "Experience, Compassion and Care — Empowering Every Individual to Reach Their Potential.",
  supportingText:
    "Supporting individuals to grow, learn, communicate, and lead more independent and fulfilling lives. Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, our multidisciplinary approach provides empathetic, evidence-informed care.",
  brandStatement:
    "At Grace, Every Individual Matters. Every Ability Counts. Every Step Forward Is Progress.",
  alternativeBrandStatement:
    "Grace — Every Ability Matters. Every Individual Counts.",
  mission:
    "To provide compassionate, individualized, and evidence-based therapeutic and hearing care services that nurture abilities, overcome challenges, and enhance quality of life. Through collaborative care, family empowerment, and a commitment to lifelong development, we strive to help every individual achieve their fullest potential.",
  vision:
    "To create a future where every individual, regardless of age or ability, is empowered to communicate, develop, and thrive with dignity, confidence, and independence.",
  clinicalFoundation:
    "Built on a clinical foundation of over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, our clinical foundation is built on a deep understanding of individual needs, developmental differences, communication challenges, and the importance of family involvement.",
  approachToCare: [
    "We recognize that every individual is unique. Our approach focuses on understanding each person's strengths, challenges, and goals and developing individualized therapeutic programmes that address their specific needs.",
    "Through our multidisciplinary services, we aim to support communication, development, learning, behaviour, movement, hearing, and functional independence.",
    "We believe that meaningful progress happens when professionals work collaboratively, families are actively involved, and therapy is connected to real-life needs.",
    "Our services extend beyond individual therapy to include group therapy programmes that encourage social interaction and functional learning, as well as parent workshops that equip families with practical knowledge and strategies to support development at home.",
    "We also provide rehabilitation services for adults experiencing communication and functional difficulties associated with stroke, neurological conditions, and other health-related challenges, helping them work towards improved communication, participation, and independence.",
  ],
  commitment: [
    "At Grace, we are committed to providing individualized, ethical, and evidence-informed care in a respectful, encouraging, and supportive environment.",
    "We value every achievement, recognize every individual's strengths, and understand that progress looks different for each person.",
    "Whether it is a child taking the first steps towards communication, a student developing greater independence, or an adult working towards regaining functional abilities, we believe every milestone matters.",
    "We work in partnership with families, caregivers, and other professionals to make therapy meaningful, practical, and relevant to everyday life.",
  ],
  phone: "+91 82200 07614",
  phoneClean: "+918220007614",
  email: "gracemultitherapycenter@gmail.com",
  address: "Door #174, Sai Garden, Villa A, Village High Road, Sholinganallur, Chennai – 600119",
  shortAddress: "Sholinganallur, Chennai – 600119",
  domain: "gracemultitherapyandhearingcarecentre.com",
  websiteUrl: "https://www.gracemultitherapyandhearingcarecentre.com",
  referenceUrl: "https://grace-hearing-care.surge.sh/",
  mapsQueryUrl:
    "https://www.google.com/maps/search/?api=1&query=Door+%23174%2C+Sai+Garden%2C+Villa+A%2C+Village+High+Road%2C+Sholinganallur%2C+Chennai%2C+Tamil+Nadu+600119",
  whatsappUrl:
    "https://wa.me/918220007614?text=Hello%20Grace%20Multi-Therapy%20%26%20Hearing%20Care%20Centre%2C%20I%20would%20like%20to%20enquire%20about%20services.",
  social: {
    facebook: "https://facebook.com/gracemultitherapycenter",
    instagram: "https://instagram.com/gracemultitherapycenter",
    youtube: "https://youtube.com/@gracemultitherapycenter",
  },
  operatingHours: [
    { days: "Monday - Saturday", hours: "9:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "By Prior Appointment Only" },
  ],
};

export const SERVICES: ServiceInfo[] = [
  // =========================================================================
  // 1. HEARING CARE (Dedicated Standalone Page & Core Discipline)
  // =========================================================================
  {
    slug: "hearing-care",
    aliases: ["hearing-testing-and-hearing-aids"],
    name: "Hearing Care",
    shortTag: "Hear Better • Connect Better • Live Better",
    subcategories: [
      "Audiometric Evaluation",
      "Pure Tone Audiometry (PTA)",
      "Hearing Screening",
      "Hearing Aid Consultation & Fitting",
      "Hearing Aid Maintenance & Support",
    ],
    shortDescription:
      "Comprehensive diagnostic hearing assessments, Pure Tone Audiometry (PTA), screening, and tailored hearing aid selection, computerized fitting, and ongoing auditory care.",
    fullDescription:
      "Hearing plays an essential role in communication, learning, social interaction, and overall quality of life. Hearing difficulties can affect individuals at any age, from infants and children developing speech and language skills to adults experiencing gradual hearing loss. At Grace Multi-Therapy & Hearing Care Centre, we aim to support individuals and families through appropriate hearing evaluation, guidance, and hearing aid solutions tailored to their needs. Our focus is on helping every individual access sound more effectively and participate more confidently in everyday communication.",
    whoItIsFor: [
      "Infants and young children with delayed speech or inconsistent auditory responsiveness",
      "School-aged children struggling to follow spoken instructions in classroom settings",
      "Adults experiencing hearing loss, speech comprehension fatigue, or phone conversation difficulties",
      "Individuals seeking replacement, reprogramming, verification, or servicing of existing hearing aids",
      "Anyone seeking a baseline pure tone audiometry evaluation or preventative hearing screening",
    ],
    keyBenefits: [
      "Accurate diagnostic insight into auditory sensitivity and speech discrimination",
      "Guidance on suitable digital hearing aid technologies tailored to individual needs",
      "Device fitting, adjustment, and personalized acoustic programming where available",
      "Guidance on the correct use, care, cleaning, and maintenance of hearing devices",
      "Timely referral to an ENT specialist or other appropriate professional when indicated",
    ],
    therapyApproach: [
      "Pure Tone Audiometry (PTA): Evaluates hearing sensitivity across frequencies to determine the degree and pattern of hearing loss",
      "Hearing Screening: Identifies individuals who may require a comprehensive audiological assessment",
      "Hearing Aid Consultation & Selection: Assistance in choosing appropriate styles, technologies, and features",
      "Fitting, Programming & Orientation: Device fitting, fine-tuning, and guidance on device care and listening strategies",
    ],
    iconName: "Ear",
    imageUrl: "/images/hearing-care.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // 2. SPEECH AND LANGUAGE THERAPY
  // =========================================================================
  {
    slug: "speech-and-language-therapy",
    aliases: ["speech-therapy"],
    name: "Speech and Language Therapy",
    shortTag: "Speech Clarity • Language Development • Social Communication",
    subcategories: [
      "Speech Sound & Articulation Therapy",
      "Receptive & Expressive Language",
      "Early Communication Stimulation",
      "Social Communication & Pragmatics",
      "Stammering & Fluency",
      "Augmentative Communication (AAC)",
    ],
    shortDescription:
      "Helping children and adults develop effective communication, speech clarity, receptive and expressive language, social pragmatics, and fluency.",
    fullDescription:
      "Speech and Language Therapy helps individuals develop effective communication skills. It supports children with speech, language, and developmental difficulties, as well as adults experiencing communication difficulties following a stroke, neurological condition, or other acquired disorder. Intervention addresses speech sounds, articulation, language comprehension, expression, stammering, and conversational skills to empower meaningful interaction.",
    whoItIsFor: [
      "Toddlers with delayed speech milestones, limited words, or difficulty expressing needs",
      "Children with articulation errors, speech sound substitution, or unclear speech clarity",
      "Individuals experiencing stammering, cluttering, or fluency disruptions",
      "Difficulty following multi-step instructions, understanding spoken language, or social pragmatics",
      "Non-verbal individuals benefiting from Augmentative and Alternative Communication (AAC)",
      "Adults requiring speech and language rehabilitation following stroke or neurological conditions",
    ],
    keyBenefits: [
      "Clearer speech articulation and greater intelligibility in everyday conversation",
      "Richer expressive vocabulary and grammatical sentence formulation",
      "Enhanced receptive auditory comprehension at home, school, and social settings",
      "Stronger peer interaction, classroom participation, and conversational confidence",
      "Word retrieval, sentence formulation, and functional conversational recovery for adults",
    ],
    therapyApproach: [
      "Standardized clinical speech-language assessment and functional communication profile",
      "Early communication and language stimulation through play-based interactions",
      "Structured articulation drills, phonological contrast therapy, and fluency shaping",
      "Augmentative and Alternative Communication (AAC) systems where appropriate",
      "Parent coaching to reinforce speech milestones consistently during everyday routines",
    ],
    iconName: "MessageCircle",
    imageUrl: "/images/speech-therapy.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 3. OCCUPATIONAL THERAPY
  // =========================================================================
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    shortTag: "Sensory Processing • Fine Motor • Everyday Independence",
    subcategories: [
      "Fine Motor & Hand Skill Development",
      "Sensory Processing & Regulation",
      "Visual-Motor Integration",
      "Pre-Writing & Handwriting Skills",
      "Activities of Daily Living (ADLs)",
    ],
    shortDescription:
      "Building fine motor control, sensory processing, coordination, handwriting, and daily living skills for confident participation in everyday life.",
    fullDescription:
      "Occupational Therapy helps individuals develop the skills needed to participate more independently in everyday activities at home, school, work, and in the community. It addresses difficulties involving fine motor skills, sensory processing, coordination, and functional independence, creating customized strategies that empower individuals to navigate daily routines with autonomy.",
    whoItIsFor: [
      "Children with sensory sensitivities (over-reactive or under-reactive to touch, sounds, movement)",
      "Difficulties with pencil grip, handwriting, scissors, or fine-motor precision tasks",
      "Challenges with sitting tolerance, motor planning, body awareness, and physical coordination",
      "Delayed milestones in everyday self-care routines such as buttoning, eating, or grooming",
      "Individuals needing motor planning and functional skill development for age-appropriate independence",
    ],
    keyBenefits: [
      "Improved sensory regulation and emotional balance across diverse settings",
      "Refined fine-motor hand strength, bilateral coordination, and handwriting stamina",
      "Enhanced self-confidence in navigating school, playground, and home tasks",
      "Greater functional autonomy in activities of daily living and self-care",
    ],
    therapyApproach: [
      "Sensory processing and regulation support utilizing tailored sensory diets",
      "Targeted fine motor and visual-motor coordination tasks",
      "Pre-writing, handwriting, and functional tool-use activities",
      "Support for age-appropriate independence and activities of daily living",
    ],
    iconName: "Hand",
    imageUrl: "/images/occupational-therapy.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // 4. BEHAVIOURAL THERAPY
  // =========================================================================
  {
    slug: "behavioural-therapy",
    name: "Behavioural Therapy",
    shortTag: "Positive Behaviour • Emotional Regulation • Social Skills",
    subcategories: [
      "Attention & Task Engagement",
      "Functional Communication",
      "Emotional Regulation & Coping",
      "Social Interaction & Play",
      "Positive Behaviour Support",
    ],
    shortDescription:
      "Fostering positive behaviours, emotional regulation, attention, functional communication, and social interaction tailored to each person's needs.",
    fullDescription:
      "Behavioural Therapy supports the development of positive behaviours, emotional regulation, attention, communication, and social interaction. Intervention is tailored to the individual's needs, with an emphasis on meaningful skills and participation in everyday life. Our collaborative approach partners closely with families and caregivers to establish constructive routines.",
    whoItIsFor: [
      "Children experiencing frustration, emotional meltdowns, or big emotional reactions",
      "Challenges with attention, sitting tolerance, or staying engaged in structured tasks",
      "Difficulty transitioning between activities, routines, or home and school settings",
      "Challenges initiating, maintaining, or reciprocating in peer play and social interactions",
      "Caregivers seeking structured, compassionate positive behaviour guidance and home consistency",
    ],
    keyBenefits: [
      "Constructive replacement of distress-driven behaviours with functional communication",
      "Self-regulation toolkits for navigating emotional and sensory overwhelm",
      "Longer attention span, improved task engagement, and cooperative play",
      "Development of adaptive, age-appropriate daily living skills",
      "Empowered caregivers equipped with positive behaviour support techniques",
    ],
    therapyApproach: [
      "Functional assessment of behaviour triggers and communicative intent",
      "Antecedent modifications and positive reinforcement strategies",
      "Visual schedules, emotion regulation toolkits, and social coping scripts",
      "Parent and caregiver guidance for consistent positive reinforcement at home",
    ],
    iconName: "BrainCircuit",
    imageUrl: "/images/behavioural-therapy.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 5. SPECIAL EDUCATION
  // =========================================================================
  {
    slug: "special-education",
    name: "Special Education",
    shortTag: "Individualised Learning • Academic & Functional Skills",
    subcategories: [
      "Individualized Learning Programmes",
      "Pre-Academic & Academic Development",
      "Early Literacy & Numeracy",
      "Attention, Memory & Sequencing",
      "School Readiness Skills",
    ],
    shortDescription:
      "Individualized learning support adapted to each learner's abilities, learning style, and educational needs for academic and functional success.",
    fullDescription:
      "Special Education provides individualized learning support for children who require additional assistance to develop academic, cognitive, and functional skills. Programmes are adapted to each learner's abilities, learning style, and educational needs, helping bridge classroom gaps and fostering confidence in school and daily life.",
    whoItIsFor: [
      "Children with learning difficulties, attention variations, or developmental delays",
      "Students struggling with reading, phonics, writing, or mathematical concepts",
      "Children requiring an Individualized Education Programme (IEP) alongside schooling",
      "Learners needing multisensory, structured academic support",
      "Children preparing for school readiness and classroom learning skills",
    ],
    keyBenefits: [
      "Pre-academic and academic skill development tailored to learner pace",
      "Strengthened early literacy, phonics, reading, and functional numeracy",
      "Enhanced attention, memory, sequencing, and problem-solving skills",
      "Improved school readiness and classroom learning confidence",
      "Greater functional learning and independence in daily tasks",
    ],
    therapyApproach: [
      "Comprehensive educational profile and learning style assessment",
      "Individualized learning programmes with clear progressive milestones",
      "Multisensory teaching: visual cards, tactile tools, puzzles, and structured phonics",
      "Concept development, problem-solving, and regular family-school coordination",
    ],
    iconName: "BookOpen",
    imageUrl: "/images/special-education.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 6. PHYSIOTHERAPY
  // =========================================================================
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortTag: "Movement • Balance • Coordination • Physical Rehabilitation",
    subcategories: [
      "Gross Motor Skill Development",
      "Balance & Coordination Training",
      "Strength & Endurance Exercises",
      "Posture & Mobility Training",
      "Gait & Functional Movement",
    ],
    shortDescription:
      "Improving movement, strength, balance, coordination, posture, and mobility for children with developmental needs and adults in rehabilitation.",
    fullDescription:
      "Physiotherapy helps improve movement, strength, balance, coordination, posture, and mobility. It supports children with developmental and motor difficulties and adults who need rehabilitation following illness, injury, or neurological conditions. Our physiotherapists create structured physical programmes that foster functional movement and physical confidence.",
    whoItIsFor: [
      "Infants and children with delayed gross motor milestones (sitting, crawling, walking)",
      "Children with cerebral palsy, developmental coordination difficulties, or muscle tone variations",
      "Balance, coordination, or postural alignment challenges",
      "Adults recovering from neurological conditions, stroke, or physical injuries",
      "Individuals seeking gait training and functional mobility improvement",
    ],
    keyBenefits: [
      "Gross motor milestone attainment and independent functional mobility",
      "Enhanced balance, core strength, and postural coordination",
      "Rehabilitation for neurological and developmental motor conditions",
      "Safe, confident participation in everyday play, recreational, and life activities",
      "Clear caregiver education and home exercise guidance",
    ],
    therapyApproach: [
      "Biomechanical and motor development assessment",
      "Balance and coordination training using specialized therapeutic equipment",
      "Strength, endurance, and gait retraining exercises",
      "Postural alignment exercises and caregiver guidance for home practice",
    ],
    iconName: "Activity",
    imageUrl: "/images/physiotherapy.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // 7. EARLY INTERVENTION (Dedicated Client Service)
  // =========================================================================
  {
    slug: "early-intervention",
    name: "Early Intervention",
    shortTag: "Timely Developmental Support • Infants & Young Children",
    subcategories: [
      "Early Speech & Language Stimulation",
      "Joint Attention & Interaction",
      "Play & Social Communication",
      "Cognitive & Pre-Learning Skills",
      "Parent Coaching & Home Strategies",
    ],
    shortDescription:
      "Timely developmental support for infants and young children with delays or risk factors, building foundational skills and empowering parents at home.",
    fullDescription:
      "Early Intervention provides timely developmental support for infants and young children who have developmental delays or are at risk of developmental difficulties. Early support helps build foundational skills for communication, learning, play, interaction, and independence while empowering parents to support development at home during the most critical early years.",
    whoItIsFor: [
      "Infants and toddlers (0–5 years) with suspected or identified developmental delays",
      "Babies with delayed babbling, limited eye contact, or slow response to sounds and gestures",
      "Toddlers with delayed speech, motor milestones, or social engagement",
      "Children at risk of developmental differences due to birth or medical factors",
      "Parents and caregivers seeking early developmental guidance and home stimulation strategies",
    ],
    keyBenefits: [
      "Early foundational stimulation during crucial neurodevelopmental windows",
      "Strengthened joint attention, reciprocal play, and early communicative intent",
      "Development of functional, self-help, and pre-learning abilities",
      "Empowered parents equipped with practical, daily routines-based interaction techniques",
    ],
    therapyApproach: [
      "Early developmental milestone screening and family routines assessment",
      "Naturalistic, play-based speech and language stimulation",
      "Joint attention, social engagement, and cognitive pre-learning activities",
      "Development of functional and self-help skills with parent coaching",
    ],
    iconName: "Sparkles",
    imageUrl: "/images/early-intervention.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 8. GROUP THERAPY
  // =========================================================================
  {
    slug: "group-therapy",
    name: "Group Therapy",
    shortTag: "Social Interaction • Peer Play • Functional Communication",
    subcategories: [
      "Social Communication Groups",
      "Language Enrichment Activities",
      "Play & Peer Interaction",
      "Turn-Taking & Conversational Skills",
      "Preschool Readiness Groups",
    ],
    shortDescription:
      "Supervised small groups offering opportunities to practise communication, social interaction, play, and functional skills in a supportive peer setting.",
    fullDescription:
      "Group Therapy provides opportunities for individuals to practise communication, social interaction, play, and functional skills in a supportive setting. Activities are planned according to participants' developmental levels and goals, helping them apply their skills during meaningful interactions with others and preparing them for classroom and community environments.",
    whoItIsFor: [
      "Children who benefit from practicing communication in peer group settings",
      "Individuals preparing for school integration, preschool, or group activities",
      "Difficulty with turn-taking, sharing, or navigating social peer dynamics",
      "Children needing guided, encouraging environments to build peer friendships",
    ],
    keyBenefits: [
      "Real-world application of communication and pragmatic language skills",
      "Improved conversational turn-taking, active listening, and cooperative play",
      "Preschool readiness and smoother transitions to classroom settings",
      "Greater self-confidence and emotional regulation during peer interactions",
    ],
    therapyApproach: [
      "Small, age- and ability-matched peer group pairing led by licensed therapists",
      "Structured social communication games, role-playing, and cooperative tasks",
      "Preschool readiness routines and functional learning activities",
      "Caregiver debriefing on peer milestones observed during sessions",
    ],
    iconName: "Users",
    imageUrl: "/images/group-therapy.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // 9. ADULT REHABILITATION
  // =========================================================================
  {
    slug: "adult-rehabilitation",
    name: "Adult Rehabilitation",
    shortTag: "Speech Recovery • Functional Mobility • Dignified Independence",
    subcategories: [
      "Speech & Language Therapy (Aphasia, Speech Clarity)",
      "Occupational Therapy (Daily Living, Fine Motor)",
      "Physiotherapy (Mobility, Strength, Balance)",
      "Cognitive Rehabilitation (Memory, Problem-Solving)",
    ],
    shortDescription:
      "Individualized rehabilitation helping adults regain functional abilities, communication, mobility, and independence following stroke or neurological conditions.",
    fullDescription:
      "Adult rehabilitation helps individuals regain or improve their functional abilities following a stroke, brain injury, neurological condition, or physical injury. At Grace Multi-Therapy & Hearing Care Centre, we provide individualized rehabilitation to improve communication, mobility, daily functioning, and quality of life across speech, occupational, physical, and cognitive domains.",
    whoItIsFor: [
      "Adults recovering from stroke, traumatic brain injury, or neurological conditions",
      "Individuals experiencing aphasia, word retrieval difficulty, dysarthria, or speech clarity issues",
      "Adults needing functional motor retraining, balance improvement, and mobility support",
      "Difficulties with activities of daily living, self-care routines, and personal independence",
      "Adults experiencing memory, attention, or executive planning difficulties",
    ],
    keyBenefits: [
      "Speech clarity, word retrieval, sentence formulation, and functional communication recovery",
      "Fine motor retraining, daily living activities support, and functional independence",
      "Strength, balance, coordination, mobility, and movement rehabilitation",
      "Cognitive support for attention, memory, planning, and problem-solving",
      "Regained personal autonomy, self-confidence, and dignity in everyday life",
    ],
    therapyApproach: [
      "Comprehensive clinical assessment across speech, physical, and cognitive domains",
      "Evidence-based neuro-rehabilitation exercises and functional communication strategies",
      "Activities of daily living retraining tailored to personal home routines",
      "Empowering family guidance and home environment adaptations",
    ],
    iconName: "Activity",
    imageUrl: "/images/adult-rehabilitation.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 10. PARENT WORKSHOPS AND TRAINING
  // =========================================================================
  {
    slug: "parent-workshops-and-training",
    aliases: ["parent-workshops"],
    name: "Parent Workshops and Training",
    shortTag: "Caregiver Empowerment • Practical Home Strategies",
    subcategories: [
      "Understanding Speech & Language Development",
      "Supporting Communication at Home",
      "Autism & Developmental Differences",
      "Play-Based Learning Strategies",
      "Attention & Positive Behaviour Support",
    ],
    shortDescription:
      "Equipping parents and caregivers with practical knowledge, actionable strategies, and confidence to support communication, behaviour, and development at home.",
    fullDescription:
      "Parent Workshops equip parents and caregivers with practical strategies to support their child's communication, behaviour, learning, and development. These sessions encourage families to apply therapeutic strategies in everyday routines and create more opportunities for learning at home, turning daily family life into an enriching developmental space.",
    whoItIsFor: [
      "Parents of newly diagnosed children seeking clear, compassionate guidance",
      "Caregivers wanting practical tools to manage challenging behaviours constructively",
      "Families desiring step-by-step coaching on home communication and sensory routines",
      "Parents seeking to understand speech, language, and neurodevelopmental differences",
      "Anyone seeking a supportive community and expert answers to developmental questions",
    ],
    keyBenefits: [
      "Practical understanding of child development, communication, and learning differences",
      "Actionable home programmes and everyday strategies that reinforce therapy progress",
      "Positive behaviour support and emotional regulation techniques for home routines",
      "Increased parental confidence and reduced everyday caregiving stress",
    ],
    therapyApproach: [
      "Interactive small-group seminars and practical demonstration sessions",
      "Take-home visual guides, routine checklists, and play-based learning activities",
      "Expert guidance on social communication, preschool readiness, and positive behaviour",
      "Practical home programmes and individualized caregiver coaching",
    ],
    iconName: "BookOpen",
    imageUrl: "/images/parent-workshops.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 11. PSYCHOLOGICAL COUNSELLING
  // =========================================================================
  {
    slug: "psychological-counselling",
    name: "Psychological Counselling",
    shortTag: "Emotional Well-Being • Family Support • Coping Strategies",
    subcategories: [
      "Child & Adolescent Counselling",
      "Parental Emotional Support",
      "Stress & Anxiety Management",
      "Developmental Coping Strategies",
    ],
    shortDescription:
      "Compassionate counselling and family guidance to support emotional well-being, manage developmental stress, and build resilient coping mechanisms.",
    fullDescription:
      "Navigating developmental differences or health challenges can bring significant emotional stress for individuals and families. Our psychological counselling provides a warm, confidential, and supportive environment to explore feelings, reduce anxiety, strengthen family dynamics, and foster healthy coping strategies across life stages.",
    whoItIsFor: [
      "Children and adolescents experiencing anxiety, low self-esteem, or school stress",
      "Parents and caregivers seeking emotional resilience, guidance, and stress relief",
      "Families navigating new developmental diagnoses or major life transitions",
      "Individuals needing supportive emotional regulation and coping mechanisms",
    ],
    keyBenefits: [
      "Safe, empathetic environment for emotional processing and reassurance",
      "Practical coping strategies for managing anxiety and situational stress",
      "Strengthened parent-child bonding and positive communication at home",
      "Renewed emotional resilience, confidence, and family harmony",
    ],
    therapyApproach: [
      "Person-centred, empathetic clinical consultations",
      "Cognitive and expressive therapeutic techniques adapted for children and youth",
      "Mindfulness-informed relaxation and emotional grounding exercises",
      "Supportive caregiver debriefing and collaborative guidance sessions",
    ],
    iconName: "Heart",
    imageUrl: "/images/psychological-counselling.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: false,
  },

  // =========================================================================
  // 12. COGNITIVE REHABILITATION
  // =========================================================================
  {
    slug: "cognitive-rehabilitation",
    name: "Cognitive Rehabilitation",
    shortTag: "Attention • Memory • Problem-Solving • Executive Functioning",
    subcategories: [
      "Attention & Concentration",
      "Working Memory Enhancement",
      "Executive Function Training",
      "Cognitive Retraining",
    ],
    shortDescription:
      "Structured cognitive retraining programmes targeting attention, working memory, executive function, and adaptive problem-solving skills.",
    fullDescription:
      "Cognitive rehabilitation focuses on strengthening core brain processes — attention, memory, mental flexibility, organization, and problem-solving. Whether addressing developmental cognitive variations or neurological changes in adults, our structured therapeutic exercises help individuals improve daily focus, academic processing, and executive functioning.",
    whoItIsFor: [
      "Individuals with attention difficulties, distractibility, or working memory lapses",
      "Students struggling with multi-step problem solving, planning, and task initiation",
      "Adults recovering cognitive sharpness after neurological conditions or brain injury",
      "Learners needing cognitive compensatory tools for school or workplace tasks",
    ],
    keyBenefits: [
      "Strengthened sustained attention and resistance to distractions",
      "Improved working memory and information retention capacity",
      "Better task planning, time estimation, and organizational strategies",
      "Increased academic and vocational self-efficacy",
    ],
    therapyApproach: [
      "Baseline cognitive profile mapping and functional goal identification",
      "Hierarchical cognitive retraining drills from simple to complex tasks",
      "Metacognitive strategy coaching (self-monitoring, chunking, visual mnemonics)",
      "Real-world application exercises linked to school, home, and work routines",
    ],
    iconName: "BrainCircuit",
    imageUrl: "/images/cognitive-rehabilitation.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: false,
  },

  // =========================================================================
  // 13. TELETHERAPY (Preserved Route & Functionality, Excluded From Primary Snapshot)
  // =========================================================================
  {
    slug: "teletherapy",
    name: "Teletherapy",
    shortTag: "Remote Sessions • Video Consultations • Parent Coaching",
    subcategories: [
      "Virtual Clinical Consultations",
      "Family Guidance",
      "Home Communication Coaching",
    ],
    shortDescription:
      "Secure, therapist-guided virtual sessions bringing specialized therapy, home strategies, and family consultations directly to your home.",
    fullDescription:
      "Teletherapy provides an accessible, remote pathway to clinical therapy and family guidance for those living outside Chennai, traveling, or seeking direct parent coaching. Through secure video platforms, our licensed therapists evaluate progress, guide interactive communication activities, and coach caregivers on home environmental strategies. Suitability depends on the individual's profile, developmental goals, and therapist evaluation.",
    whoItIsFor: [
      "Families residing outside Chennai or unable to commute regularly to the centre",
      "Parents seeking structured coaching to support communication and behaviour at home",
      "Follow-up reviews, progress checks, and home strategy monitoring between in-person clinic visits",
      "Learners who engage productively through screen-based interactive activities",
    ],
    keyBenefits: [
      "Consistent therapy continuity without travel stress or commuting fatigue",
      "Practical therapy strategies integrated directly into the child's natural home environment",
      "Empowered parents acting with clarity and consistency as daily developmental partners",
      "Flexible scheduling tailored to family routines with secure communication",
    ],
    therapyApproach: [
      "Pre-session technical check and clinical suitability assessment",
      "Interactive digital activities, visual schedules, and real-time coaching",
      "Step-by-step parent modeling and immediate clinician feedback",
      "Structured home practice assignments and milestone progress reviews",
    ],
    iconName: "Laptop",
    imageUrl: "/images/teletherapy.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: false,
  },
];
