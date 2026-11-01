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
  name: "GRACE Multi-Therapy & Hearing Care Centre",
  referralSlipVariant: "GRACE MULTI-THERAPY CENTER & HEARING CARE",
  shortName: "GRACE Therapy Centre",
  tagline: "Better Communication • Brighter Future",
  motto: "Support • Develop • Empower",
  supportingWords: ["SUPPORT", "DEVELOP", "EMPOWER"],
  headline: "Experience, Compassion and Care — Empowering Every Individual to Reach Their Potential",
  supportingText:
    "Supporting children, families, and individuals to grow, learn, communicate, and lead more independent and fulfilling lives through unified multidisciplinary care.",
  brandStatement: "At Grace, Every Individual Matters. Every Ability Counts. Every Step Forward Is Progress.",
  alternativeBrandStatement: "Grace — Every Ability Matters. Every Individual Counts.",
  mission:
    "To provide compassionate, individualized, and evidence-based therapeutic and hearing care services that nurture abilities, overcome challenges, and enhance quality of life. Through collaborative care, family empowerment, and a commitment to lifelong development, we strive to help every individual achieve their fullest potential.",
  vision:
    "To create a future where every individual, regardless of age or ability, is empowered to communicate, develop, and thrive with dignity, confidence, and independence.",
  clinicalFoundation:
    "Our clinical foundation is anchored by over 25 years of professional experience in Speech-Language Pathology and Paediatric Rehabilitation, bringing together compassionate care, evidence-based practices, and collaborative multidisciplinary teams.",
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
    "https://wa.me/918220007614?text=Hello%20GRACE%20Therapy%20Centre%2C%20I%20would%20like%20to%20enquire%20about%20services.",
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
  // 1. HEARING CARE (Primary Service 1 — First and Prominent)
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
    ],
    shortDescription:
      "Comprehensive diagnostic audiometric evaluations, hearing screening, digital hearing aid trials, personalized acoustic fitting, and ongoing auditory support to access sound and communicate with confidence.",
    fullDescription:
      "Hearing is fundamental to speech acquisition, cognitive growth, and lifelong human connection. At GRACE, our hearing care specialists provide thorough audiometric evaluations, Pure Tone Audiometry (PTA), objective screening, and tailored hearing aid solutions for children and adults. We guide families through hearing aid selection, computerized acoustic programming, custom ear fitting, and ongoing auditory rehabilitation so individuals can hear better, connect better, and live better.",
    whoItIsFor: [
      "Infants and young children with delayed speech or inconsistent auditory responsiveness",
      "School-aged children struggling to follow spoken instructions in noisy classrooms",
      "Adults experiencing hearing loss, speech comprehension fatigue, or phone call difficulties",
      "Individuals seeking replacement, reprogramming, verification, or servicing of existing hearing aids",
      "Anyone seeking a baseline pure tone audiometry evaluation or preventative hearing screening",
    ],
    keyBenefits: [
      "Accurate diagnostic insight into auditory sensitivity and speech discrimination",
      "Hands-on trial of cutting-edge digital hearing aids with natural sound processing",
      "Custom ear impressions and tailored device programming for optimal comfort",
      "Empowered everyday communication, social confidence, and academic engagement",
    ],
    therapyApproach: [
      "Diagnostic audiometric evaluation and Pure Tone Audiometry (PTA) where offered",
      "Objective analysis of speech reception and discrimination thresholds",
      "Custom trial with leading digital hearing aid technologies (BTE, RIC, Custom)",
      "Precision computerized acoustic fitting, verification, and family guidance",
    ],
    iconName: "Ear",
    imageUrl: "/images/hearing-care.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // 2. SPEECH AND LANGUAGE THERAPY (Primary Service 2)
  // =========================================================================
  {
    slug: "speech-and-language-therapy",
    aliases: ["speech-therapy"],
    name: "Speech and Language Therapy",
    shortTag: "Speech Clarity • Language Development • Social Communication",
    subcategories: [
      "Speech Sounds & Articulation",
      "Receptive & Expressive Language",
      "Early Communication Stimulation",
      "Stammering & Fluency",
      "Augmentative Communication (AAC)",
    ],
    shortDescription:
      "Individualised assessment and intervention for speech sounds, receptive/expressive language, early communication stimulation, social pragmatics, stammering, and Augmentative & Alternative Communication (AAC).",
    fullDescription:
      "Speech and language therapy at GRACE addresses the full spectrum of communication challenges for children and adults. From early word stimulation and articulation clarity to stammering, voice resonance, and adult speech rehabilitation following neurological conditions, our evidence-based therapy nurtures confidence in expressing ideas, understanding others, and connecting with the world.",
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
      "Stronger peer interaction, classroom participation, and conversational ease",
    ],
    therapyApproach: [
      "Standardized clinical speech-language assessment and functional communication profile",
      "Play-based and naturalistic language stimulation activities for young children",
      "Interactive picture cards, pragmatic communication drills, and fluency shaping",
      "Parent training to reinforce speech milestones consistently during everyday routines",
    ],
    iconName: "MessageCircle",
    imageUrl: "/images/speech-therapy.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 3. TELETHERAPY (Primary Service 3)
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
    isPrimaryService: true,
  },

  // =========================================================================
  // 4. OCCUPATIONAL THERAPY (Primary Service 4)
  // =========================================================================
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    shortTag: "Sensory Processing • Fine Motor • Everyday Independence",
    subcategories: [
      "Sensory Processing & Regulation",
      "Fine Motor & Hand Skills",
      "Visual-Motor Coordination",
      "Activities of Daily Living (ADLs)",
    ],
    shortDescription:
      "Developing sensory processing, fine motor control, pre-writing, hand skills, and everyday functional living abilities for confident, independent participation.",
    fullDescription:
      "Occupational therapy at GRACE empowers children and individuals to succeed in the meaningful activities of daily life — play, learning, school routines, and personal self-care. Our dedicated sensory space utilizes specialized equipment and motor tasks to regulate sensory systems, enhance pencil grasp, handwriting, and motor planning, cultivating essential self-reliance with dignity.",
    whoItIsFor: [
      "Children with sensory sensitivities (over-reactive or under-reactive to touch, sounds, movement)",
      "Difficulties with pencil grip, handwriting, scissors, or fine-motor precision tasks",
      "Challenges with sitting tolerance, motor planning, body awareness, and physical coordination",
      "Delayed milestones in everyday self-care routines such as buttoning, eating, or grooming",
      "Children seeking sensory-seeking or sensory-avoidant regulation strategies",
    ],
    keyBenefits: [
      "Improved sensory regulation and emotional balance across diverse settings",
      "Refined fine-motor hand strength, bilateral coordination, and handwriting stamina",
      "Enhanced self-confidence in navigating school, playground, and home tasks",
      "Greater functional autonomy in activities of daily living (ADLs)",
    ],
    therapyApproach: [
      "Sensory integration profiling and individualised sensory diets",
      "Targeted fine-motor and visual-motor coordination tasks",
      "Therapeutic play using specialised swings, textured materials, and balance tools",
      "Practical daily living coaching tailored for home and school routines",
    ],
    iconName: "Hand",
    imageUrl: "/images/occupational-therapy.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // 5. BEHAVIOURAL THERAPY (Primary Service 5)
  // =========================================================================
  {
    slug: "behavioural-therapy",
    name: "Behavioural Therapy",
    shortTag: "Positive Behaviour • Emotional Regulation • Social Skills",
    subcategories: [
      "Attention & Task Engagement",
      "Functional Communication",
      "Emotional Regulation & Coping",
      "Parent & Caregiver Guidance",
    ],
    shortDescription:
      "Positive behaviour interventions, emotional regulation techniques, attention and task engagement strategies, and structured social skills development.",
    fullDescription:
      "Behavioural therapy at GRACE focuses on identifying the functional triggers behind challenging behaviours and replacing them with adaptive, constructive communication and self-regulation. Our approach is grounded in positive behaviour support, emotional regulation toolkits, and collaborative partnership with parents and educators to nurture calm, confident, and joyful learning.",
    whoItIsFor: [
      "Children experiencing frustration intolerance, meltdowns, or difficulty managing big emotions",
      "Challenges with attention, sitting tolerance, or staying engaged in structured tasks",
      "Difficulty transitioning between activities, routines, or home and school settings",
      "Challenges initiating, maintaining, or reciprocating in peer play and social interactions",
      "Caregivers seeking structured, compassionate positive behaviour guidance",
    ],
    keyBenefits: [
      "Constructive replacement of distress-driven behaviours with functional communication",
      "Self-regulation toolkits for navigating emotional and sensory overwhelm",
      "Longer attention span, improved task engagement, and cooperative play",
      "Empowered, calm caregivers equipped with consistent support strategies",
    ],
    therapyApproach: [
      "Functional Behaviour Assessment (FBA) to uncover communication triggers",
      "Antecedent modifications and positive reinforcement techniques",
      "Visual schedules, emotion regulation toolkits, and social stories",
      "Collaborative parent guidance for continuous home consistency",
    ],
    iconName: "BrainCircuit",
    imageUrl: "/images/behavioural-therapy.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: true,
  },

  // =========================================================================
  // 6. GROUP THERAPY (Primary Service 6)
  // =========================================================================
  {
    slug: "group-therapy",
    name: "Group Therapy",
    shortTag: "Peer Interaction • Social Communication • Functional Learning",
    subcategories: [
      "Social Skills Groups",
      "Cooperative Play",
      "Conversational Turn-Taking",
      "School Readiness Groups",
    ],
    shortDescription:
      "Small, supervised therapy groups fostering social interaction, conversational turn-taking, shared attention, and collaborative group learning.",
    fullDescription:
      "Group therapy provides a natural, supportive social setting where children and individuals can practice communication, emotional regulation, and teamwork with peers. Facilitated by licensed therapists, small groups focus on conversational turn-taking, joint attention, cooperative problem-solving, and perspective-taking, preparing individuals for real-world school, playground, and community interactions.",
    whoItIsFor: [
      "Children who benefit from practicing communication in structured peer settings",
      "Individuals preparing for classroom integration, group activities, or school readiness",
      "Difficulty with sharing, conversational turn-taking, or navigating group dynamics",
      "Children needing supportive, guided environments to cultivate peer friendships",
    ],
    keyBenefits: [
      "Naturalistic social communication and peer responsiveness",
      "Improved conversational turn-taking, active listening, and sharing",
      "Enhanced self-confidence in group academic and recreational environments",
      "Cooperative problem-solving and emotional regulation in social contexts",
    ],
    therapyApproach: [
      "Small, age- and ability-matched peer group pairing",
      "Structured cooperative games, group problem-solving, and role-playing",
      "Guided social stories, pragmatic communication challenges, and collaborative activities",
      "Caregiver feedback on social milestones observed during group sessions",
    ],
    iconName: "Users",
    imageUrl: "/images/group-therapy.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: true,
  },

  // =========================================================================
  // ADDITIONAL DOCUMENTED SERVICES & CLINICAL PROGRAMMES
  // =========================================================================

  // 7. Special Education
  {
    slug: "special-education",
    name: "Special Education",
    shortTag: "Individualised Learning • Academic & Functional Skills",
    subcategories: [
      "Individualized Education Plans (IEP)",
      "Multisensory Literacy & Phonics",
      "Functional Numeracy",
      "School Readiness",
    ],
    shortDescription:
      "Custom Individualized Education Plans (IEP) designed to unlock academic potential, literacy, numeracy, and cognitive development at every child's own pace.",
    fullDescription:
      "Every learner absorbs information differently. Our Special Educators design tailored curricula and multisensory teaching strategies for children with learning differences, developmental delays, and attention variations. We bridge the gap between classroom expectations and individual cognitive strengths, instilling a genuine love for learning.",
    whoItIsFor: [
      "Children diagnosed with Dyslexia, Dyscalculia, or Dysgraphia",
      "Students struggling with reading comprehension, phonics, or mathematical concepts",
      "Children requiring an Individualized Education Plan (IEP) alongside mainstream schooling",
      "Learners needing multisensory, structured academic support",
      "Children preparing for school readiness and classroom integration",
    ],
    keyBenefits: [
      "Strengthened reading, phonetic awareness, spelling, and comprehension",
      "Core mathematical reasoning broken down into tangible concepts",
      "Increased academic confidence and reduced school-related anxiety",
      "Executive function skills: organizing schoolwork, focus, and time management",
    ],
    therapyApproach: [
      "Comprehensive educational profile assessment",
      "Personalized IEP with measurable, progressive milestones",
      "Multisensory instruction: visual aids, tactile tools, and structured phonics",
      "Regular milestone reviews and school-parent coordination",
    ],
    iconName: "BookOpen",
    imageUrl: "/images/special-education.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: false,
  },

  // 8. Physiotherapy
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortTag: "Gross Motor Skills • Postural Control • Mobility",
    subcategories: [
      "Gross Motor Milestone Attainment",
      "Balance & Coordination",
      "Postural Alignment & Core Strength",
      "Paediatric Physical Rehabilitation",
    ],
    shortDescription:
      "Specialized paediatric and developmental physiotherapy focusing on posture, core strength, gait, milestone attainment, and physical rehabilitation.",
    fullDescription:
      "Physical mobility and postural stability provide the foundation for childhood play, learning, and physical exploration. Our physiotherapists work with infants, children, and individuals to overcome neurological, orthopedic, or developmental movement limitations, fostering physical strength, balance, and independence.",
    whoItIsFor: [
      "Delayed gross motor milestones (rolling, sitting, crawling, independent walking)",
      "Children with cerebral palsy, developmental coordination disorder, or muscle tone variations",
      "Toe-walking, flat feet, or balance and coordination instabilities",
      "Post-injury or post-surgical movement rehabilitation",
      "Poor core muscle strength, endurance, and postural control",
    ],
    keyBenefits: [
      "Milestone progression toward independent walking and running",
      "Enhanced postural control, core stability, and spinal alignment",
      "Improved muscle flexibility, joint range of motion, and physical endurance",
      "Safe and active participation in recreational games and physical activities",
    ],
    therapyApproach: [
      "Detailed biomechanical and developmental gait assessment",
      "Therapeutic exercise, neuromuscular facilitation, and postural training",
      "Fun gym-based functional mobility circuits and balance boards",
      "Home exercise programmes tailored for family routines",
    ],
    iconName: "Activity",
    imageUrl: "/images/physiotherapy.jpg",
    isTeletherapyAvailable: false,
    isPrimaryService: false,
  },

  // 9. Psychological Counselling
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
      "Compassionate psychological counselling and family guidance to support emotional well-being, manage developmental stress, and build resilient coping mechanisms.",
    fullDescription:
      "Navigating developmental differences or family challenges can bring significant emotional stress for both individuals and parents. Our qualified psychological counselors provide a warm, confidential, non-judgmental space to explore feelings, reduce anxiety, strengthen family dynamics, and foster healthy coping strategies across life transitions.",
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

  // 10. Adult Rehabilitation
  {
    slug: "adult-rehabilitation",
    name: "Adult Rehabilitation",
    shortTag: "Communication Recovery • Functional Mobility • Daily Independence",
    subcategories: [
      "Post-Stroke Speech Recovery",
      "Neurological Communication Care",
      "Functional Mobility & ADLs",
      "Dignified Independence",
    ],
    shortDescription:
      "Comprehensive adult rehabilitation focused on restoring communication, mobility, daily functioning, participation, and independence following stroke, brain injury, or neurological conditions.",
    fullDescription:
      "Adult rehabilitation at GRACE is dedicated to restoring communication, physical mobility, daily living skills, and community participation following stroke, traumatic brain injury, neurological conditions, or physical injury. Our multidisciplinary team works collaboratively with adults and their families to re-establish speech intelligibility, swallowing safety, functional motor skills, and independent daily functioning with dignity and compassion.",
    whoItIsFor: [
      "Adults recovering from stroke, brain injury, or neurological trauma",
      "Individuals experiencing aphasia, dysarthria, apraxia of speech, or voice loss",
      "Adults needing functional motor retraining and activities of daily living support",
      "Families seeking structured guidance on assisting an adult loved one at home",
    ],
    keyBenefits: [
      "Restoration of functional speech, language, and compensatory communication methods",
      "Enhanced physical mobility, balance, and fine motor coordination for daily tasks",
      "Regained dignity, personal autonomy, and social engagement",
      "Supportive education and safe caregiving techniques for family members",
    ],
    therapyApproach: [
      "Detailed clinical assessment of speech, language, cognitive, and motor function",
      "Evidence-based neuro-rehabilitation exercises and compensatory strategies",
      "Targeted daily living skills retraining (eating, writing, self-care routines)",
      "Collaborative family coaching and safe home adaptation recommendations",
    ],
    iconName: "Activity",
    imageUrl: "/images/adult-rehabilitation.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: false,
  },

  // 11. Cognitive Rehabilitation
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
      "Cognitive rehabilitation focuses on strengthening core brain processes — attention, memory, mental flexibility, organization, and problem-solving. Whether addressing developmental cognitive variations or neurological changes, our structured therapeutic exercises help individuals improve daily focus, academic processing, and executive functioning.",
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

  // 12. Parent Workshops and Training
  {
    slug: "parent-workshops-and-training",
    aliases: ["parent-workshops"],
    name: "Parent Workshops and Training",
    shortTag: "Caregiver Empowerment • Home Strategies • Developmental Guidance",
    subcategories: [
      "Home Communication Strategies",
      "Positive Behaviour Management",
      "Sensory Diet Implementation",
      "Milestone Tracking Seminars",
    ],
    shortDescription:
      "Empowering workshops and hands-on guidance equipping parents and caregivers to support communication, behaviour, learning, and development at home.",
    fullDescription:
      "Therapy extends far beyond the clinic walls. Our Parent Workshops and Training sessions equip families with practical knowledge, actionable techniques, and reassurance. Led by senior specialists, these programmes teach parents how to weave speech stimulation, sensory regulation, and positive behaviour management seamlessly into natural daily family routines.",
    whoItIsFor: [
      "Parents of newly diagnosed children seeking clear, compassionate guidance",
      "Caregivers wanting practical tools to manage challenging behaviours constructively",
      "Families desiring step-by-step coaching on home sensory and communication setups",
      "Anyone seeking a supportive community and expert answers to developmental questions",
    ],
    keyBenefits: [
      "Clarity on your child's developmental profile and specific therapy goals",
      "Concrete, easy-to-implement home activities that accelerate therapy progress",
      "Reduced caregiver stress and greater parental confidence in daily interactions",
      "A supportive, collaborative network of families sharing similar journeys",
    ],
    therapyApproach: [
      "Interactive small-group seminars and practical demonstration workshops",
      "Take-home visual guides, routine checklists, and sensory activity toolkits",
      "Live Q&A with multidisciplinary therapists across all disciplines",
      "Individualized home-implementation coaching and follow-up reviews",
    ],
    iconName: "BookOpen",
    imageUrl: "/images/parent-workshops.jpg",
    isTeletherapyAvailable: true,
    isPrimaryService: false,
  },
];
