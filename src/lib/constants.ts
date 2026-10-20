export interface ServiceInfo {
  slug: string;
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
}

export const BRAND = {
  name: "GRACE Multidisciplinary Therapy Centre and Hearing Care",
  shortName: "GRACE Therapy Centre",
  tagline: "Better Communication • Brighter Future",
  motto: "Support • Develop • Empower",
  headline: "Every Child Deserves the Opportunity to Thrive",
  secondaryHeadline: "Every Child Matters — A Team Approach for Brighter Futures",
  phone: "+91 8220007614",
  phoneClean: "+918220007614",
  email: "gracemultitherapycenter@gmail.com",
  address: "Door #174, Sai Garden, Villa A, Village High Road, Sholinganallur, Chennai, Tamil Nadu 600119",
  shortAddress: "Sholinganallur, Chennai 600119",
  referenceUrl: "https://grace-hearing-care.surge.sh/",
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Door+%23174%2C+Sai+Garden%2C+Villa+A%2C+Village+High+Road%2C+Sholinganallur%2C+Chennai%2C+Tamil+Nadu+600119",
  whatsappUrl: "https://wa.me/918220007614?text=Hello%20GRACE%20Therapy%20Centre%2C%20I%20would%20like%20to%20enquire%20about%20services.",
  // Verified placeholder links documented for client handover
  social: {
    facebook: "https://facebook.com/gracemultitherapycenter", // Replace with client verified URL upon handover
    instagram: "https://instagram.com/gracemultitherapycenter", // Replace with client verified URL upon handover
    youtube: "https://youtube.com/@gracemultitherapycenter", // Replace with client verified URL upon handover
  },
  operatingHours: [
    { days: "Monday - Saturday", hours: "9:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "By Prior Appointment Only" },
  ],
};

export const SERVICES: ServiceInfo[] = [
  {
    slug: "speech-therapy",
    name: "Speech Therapy",
    shortTag: "Communication • Language • Speech Clarity",
    subcategories: ["Communication", "Language", "Speech Clarity"],
    shortDescription:
      "Comprehensive assessment and evidence-based interventions for speech articulation, language delays, fluency, and functional social communication.",
    fullDescription:
      "Our Speech-Language Pathologists provide compassionate, individualized support for children and individuals facing difficulties with speech sound production, vocabulary development, receptive and expressive language, stuttering, and voice modulation. Through child-centred activities and structured therapy, we empower every individual to express their thoughts and connect with confidence.",
    whoItIsFor: [
      "Toddlers with delayed first words or limited vocabulary",
      "Children with unclear speech, articulation errors, or phonological delays",
      "Stuttering or fluency challenges affecting school and social interaction",
      "Difficulty following multi-step instructions or understanding spoken language",
      "Non-verbal individuals requiring Augmentative and Alternative Communication (AAC)",
    ],
    keyBenefits: [
      "Enhanced articulation and speech intelligibility",
      "Stronger expressive vocabulary and sentence formulation",
      "Improved receptive understanding in home and school settings",
      "Greater conversational confidence and peer social interaction",
    ],
    therapyApproach: [
      "Standardized clinical speech & language assessment",
      "Play-based and naturalistic speech sound practice",
      "Interactive storytelling, pragmatic language exercises, and vocabulary expansion",
      "Parent coaching to reinforce communication milestones at home",
    ],
    iconName: "MessageCircle",
    imageUrl: "/images/speech-therapy.jpg",
    isTeletherapyAvailable: true,
  },
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    shortTag: "Sensory • Motor Skills • Daily Living",
    subcategories: ["Sensory Processing", "Motor Skills", "Daily Living Skills"],
    shortDescription:
      "Developing sensory integration, fine motor coordination, bilateral integration, and independent daily living activities for confident everyday participation.",
    fullDescription:
      "Occupational therapy empowers children and adolescents to succeed in the 'occupations' of childhood — play, learning, school routines, and personal self-care. Our dedicated occupational therapy space utilizes specialized sensory equipment and fine motor tasks to help regulate sensory systems, enhance pencil grasp and handwriting, and cultivate essential self-reliance.",
    whoItIsFor: [
      "Children with sensory sensitivities (sound, texture, movement, touch)",
      "Difficulties with pencil grasp, cutting, buttoning, or fine motor tasks",
      "Struggles with sitting tolerance, posture, or physical coordination",
      "Delayed milestones in dressing, feeding, and personal hygiene",
      "Children seeking sensory-seeking or sensory-avoidant regulation strategies",
    ],
    keyBenefits: [
      "Improved sensory processing and emotional regulation",
      "Precise finger dexterity, hand strength, and handwriting stamina",
      "Greater independence in daily dressing, eating, and school routines",
      "Enhanced spatial awareness, balance, and motor planning",
    ],
    therapyApproach: [
      "Sensory integration evaluation and personalized sensory diets",
      "Fun, goal-directed obstacle courses, swings, and climbing challenges",
      "Targeted fine motor and visual-motor integration tasks",
      "Practical coaching for daily self-care routines",
    ],
    iconName: "Hand",
    imageUrl: "/images/occupational-therapy.jpg",
    isTeletherapyAvailable: false,
  },
  {
    slug: "behavioural-therapy",
    name: "Behavioural Therapy",
    shortTag: "Behaviour Support • Social Skills • Self Regulation",
    subcategories: ["Behaviour Support", "Social Skills", "Self Regulation"],
    shortDescription:
      "Positive behaviour interventions, emotional regulation techniques, coping strategies, and structured social skills development.",
    fullDescription:
      "Behavioural therapy focuses on understanding the functional triggers behind challenging behaviours and replacing them with adaptive, constructive communication and self-regulation skills. Our approach is grounded in positive reinforcement, respect for neurodiversity, and collaborative partnership with parents and educators.",
    whoItIsFor: [
      "Children experiencing intense tantrums, meltdowns, or frustration intolerance",
      "Difficulty with transitions between activities, home, and school routines",
      "Challenges initiating, sustaining, or reciprocating in peer relationships",
      "Attention difficulties, hyperactivity, or impulsivity impacting learning",
      "Need for structured emotional regulation and coping toolkits",
    ],
    keyBenefits: [
      "Reduction in distress-driven and aggressive behaviours",
      "Proactive coping strategies for sensory and emotional overload",
      "Improved attention span, turn-taking, and cooperation",
      "Empowered parents equipped with consistent positive guidance strategies",
    ],
    therapyApproach: [
      "Functional Behaviour Assessment (FBA) to identify core needs",
      "Positive Reinforcement and antecedent modification strategies",
      "Social stories, role-play scenarios, and visual schedule structuring",
      "Home-school-clinic coordinated behaviour plans",
    ],
    iconName: "BrainCircuit",
    imageUrl: "/images/behavioural-therapy.jpg",
    isTeletherapyAvailable: true,
  },
  {
    slug: "special-education",
    name: "Special Education",
    shortTag: "Individualised Learning • Academic & Functional Skills",
    subcategories: ["Individualised Learning", "Academic Skills", "Functional Skills"],
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
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortTag: "Gross Motor Skills • Strength • Mobility",
    subcategories: ["Gross Motor Skills", "Strength & Endurance", "Balance & Mobility"],
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
  },
  {
    slug: "hearing-testing-and-hearing-aids",
    name: "Hearing Testing and Hearing Aids",
    shortTag: "Hearing Assessment • Hearing Aid Fitting • Follow-up Care",
    subcategories: ["Hearing Assessment", "Hearing Aid Fitting", "Follow-up Care"],
    shortDescription:
      "Professional audiometric evaluations, advanced digital hearing aid trials, personalized fitting, and compassionate ongoing auditory rehabilitation.",
    fullDescription:
      "Hearing is fundamental to speech acquisition, learning, and human connection. At GRACE, our audiologists provide comprehensive hearing assessments for infants, young children, and adults. We conduct diagnostic audiometry, objective screening, personalized digital hearing aid selection (including invisible, rechargeable, BTE, and RIC styles), and compassionate long-term fitting support.",
    whoItIsFor: [
      "Infants and toddlers who do not react to sounds or show speech delays",
      "Children struggling to hear in noisy classrooms or turning up TV volume",
      "Adults experiencing difficulty following group conversations or phone calls",
      "Individuals seeking replacement, reprogramming, or servicing of existing hearing aids",
      "Anyone wanting a baseline auditory checkup or hearing sensitivity evaluation",
    ],
    keyBenefits: [
      "Accurate diagnostic assessment of hearing sensitivity and middle-ear function",
      "Hands-on trial of cutting-edge digital hearing aids with natural sound processing",
      "Custom ear impressions and tailored device programming for optimal comfort",
      "Ongoing follow-up, acoustic adjustments, cleaning, and rehabilitation support",
    ],
    therapyApproach: [
      "Pure Tone Audiometry (PTA), Tympanometry, and behavioural observation",
      "Objective analysis of speech reception and discrimination thresholds",
      "Custom trial with top international digital hearing aid technologies",
      "Precision computerized acoustic fitting and family counseling",
    ],
    iconName: "Ear",
    imageUrl: "/images/hearing-care.jpg",
    isTeletherapyAvailable: false,
  },
  {
    slug: "teletherapy",
    name: "Teletherapy",
    shortTag: "Remote Sessions • Family Guidance • Online Consultations",
    subcategories: ["Remote Sessions", "Family Guidance", "Online Consultations"],
    shortDescription:
      "Secure, therapist-guided virtual sessions bringing specialized therapy, home strategies, and family consultations directly to your home.",
    fullDescription:
      "Teletherapy provides continuity of care for families who travel frequently, live outside Chennai, or require remote consultations. Through high-definition video connections, our licensed clinicians guide parents, evaluate functional communication, and conduct structured therapy sessions. Teletherapy availability depends on the specific therapy type, therapist evaluation, and child suitability; we always ensure the appropriate modality is recommended for each individual.",
    whoItIsFor: [
      "Families seeking speech therapy or behavioural guidance from home",
      "Parents wanting coaching on home strategies and environmental modifications",
      "Follow-up reviews and progress monitoring between in-person clinic visits",
      "Families residing outside immediate clinic commuting distances",
      "Learners capable of engaging interactively on a tablet or computer screen",
    ],
    keyBenefits: [
      "Consistent therapy schedules without travel fatigue or commute delays",
      "Direct observation and strategies tailored to the child's natural home environment",
      "Active parent empowerment as co-therapists in everyday routines",
      "Flexible appointment scheduling with secure communication channels",
    ],
    therapyApproach: [
      "Pre-session technical and clinical suitability check",
      "Interactive screen sharing, digital visual schedules, and guided coaching",
      "Step-by-step parent modeling and real-time feedback",
      "Structured homework activities and digital milestone tracking",
    ],
    iconName: "Laptop",
    imageUrl: "/images/teletherapy.jpg",
    isTeletherapyAvailable: true,
  },
];
