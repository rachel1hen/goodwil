import classroomTeaching from "../assets/goodwill-academy-classroom-teaching.jpg";
import classroomSession from "../assets/goodwill-academy-classroom-session.jpg";
import studentsGroup from "../assets/goodwill-academy-students-group.jpg";
import profSandeep from "../assets/goodwill-academy-prof-sandeep.jpg";
import admissionPoster from "../assets/goodwill-academy-admission-poster.jpg";

export const siteUrl =
  import.meta.env.PUBLIC_SITE_URL ?? "https://goodwill-zeta.vercel.app";

export const business = {
  name: "Goodwill Academy",
  legalName: "Goodwill Academy Nagpur",
  tagline: "Top-rated coaching classes in Hingang T Point, Nagpur",
  shortDescription:
    "Goodwill Academy is a verified and claimed Nagpur coaching institute trusted since 2007 for IIT-JEE, MHT-CET, Class X-XII, CBSE, engineering, degree, and subject tutoring.",
  phone: "7972289433",
  phoneDisplay: "7972289433",
  whatsapp: "917972289433",
  email: "admissions@goodwillacademy.in",
  rating: 4.6,
  ratingCount: 235,
  established: 2007,
  priceFrom: "Rs. 5,000",
  status: "Verified and claimed on Justdial",
  address:
    "01, Nilayam Apartment, Near Rachna Ring Road Metro Station, Opp. Priyadarshini Girls Hostel, Hingna T Point, Ring Road, Hingang T Point, Nagpur-440022, Maharashtra",
  locality: "Hingang T Point Nagpur",
  city: "Nagpur",
  region: "Maharashtra",
  postalCode: "440022",
  country: "IN",
  openingHours: "Mon-Sun 07:00-21:00",
  mapQuery:
    "Goodwill Academy, 01 Nilayam Apartment, Hingna T Point, Ring Road, Nagpur 440022",
  justdialUrl:
    "https://www.justdial.com/Nagpur/Goodwill-Academy-Opp-Priyadarshini-Girls-Hostel-Hingna-T-Point-Hingang-T-Point-Nagpur/0712PX712-X712-151224111220-B8H2_BZDET",
  facts: [
    "Established in 2007",
    "4.6 rating from 235 Justdial ratings",
    "Fees starting at Rs. 5,000",
    "Open 7:00 AM to 9:00 PM",
    "Near Rachna Ring Road Metro Station"
  ],
  images: {
    hero: classroomTeaching,
    classroom: classroomSession,
    group: studentsGroup,
    faculty: profSandeep,
    poster: admissionPoster
  }
};

export const navItems = [
  { label: "Courses", href: "/courses/iit-jee" },
  { label: "About", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" }
];

export const courses = [
  {
    slug: "iit-jee",
    label: "IIT-JEE",
    eyebrow: "Engineering entrance",
    title: "IIT-JEE and Engineering Entrance Coaching in Nagpur",
    seoTitle: "IIT-JEE Coaching in Nagpur | Goodwill Academy Hingna T Point",
    description:
      "Exam-focused IIT-JEE and engineering entrance coaching at Goodwill Academy, Hingang T Point Nagpur, with classroom teaching, practice, doubt support, and regular evaluation.",
    keywords:
      "IIT JEE coaching Nagpur, engineering entrance classes Nagpur, Goodwill Academy IIT JEE",
    heroCopy:
      "Build the Physics, Chemistry, and Mathematics base needed for engineering entrance exams with classroom discipline, concept-first teaching, regular practice, and focused doubt solving.",
    outcomes: [
      "Concept coverage for Class XI-XII aligned engineering entrance preparation",
      "Regular tests to improve speed, accuracy, and exam temperament",
      "Doubt-clearing support for weak topics and repeated practice",
      "Local access for students around Hingna T Point, Trimurti Nagar, Jaitala, and Hingna Road"
    ],
    syllabus: [
      "Physics fundamentals and numerical practice",
      "Chemistry theory, reactions, and problem drills",
      "Mathematics methods, shortcuts, and timed exercises",
      "Mock tests, revision blocks, and performance review"
    ],
    image: classroomTeaching,
    route: "/courses/iit-jee"
  },
  {
    slug: "cet-mht-cet",
    label: "CET / MHT-CET",
    eyebrow: "State entrance prep",
    title: "CET and MHT-CET Classes in Nagpur",
    seoTitle: "MHT-CET Coaching in Nagpur | Goodwill Academy CET Classes",
    description:
      "CET and MHT-CET coaching for Nagpur students who need structured practice, board-linked revision, and entrance-focused test preparation.",
    keywords:
      "MHT CET coaching Nagpur, CET classes Hingna T Point, Goodwill Academy CET",
    heroCopy:
      "Prepare for state entrance exams with a study rhythm that connects board concepts to CET-style speed, accuracy, and topic coverage.",
    outcomes: [
      "Board-connected revision for better entrance readiness",
      "Topic-wise practice for CET-style objective questions",
      "Weekly evaluation rhythm to spot weak areas early",
      "Counselling-friendly admission flow through WhatsApp and calls"
    ],
    syllabus: [
      "Physics, Chemistry, and Mathematics revision",
      "Formula and concept recall sessions",
      "Objective question practice",
      "Timed tests and correction sessions"
    ],
    image: classroomSession,
    route: "/courses/cet-mht-cet"
  },
  {
    slug: "class-10-12-cbse",
    label: "Class X-XII / CBSE",
    eyebrow: "School tuition",
    title: "Class X-XII and CBSE Tuition Classes in Nagpur",
    seoTitle: "Class 10, 11, 12 CBSE Tuition in Nagpur | Goodwill Academy",
    description:
      "School tuition for Class X, Class XI, Class XII, CBSE, and state board students near Hingna T Point with personal attention, study material, and regular practice.",
    keywords:
      "CBSE tuition Nagpur, Class 10 tuition Hingna, Class 12 science classes Nagpur",
    heroCopy:
      "Turn school syllabus pressure into a steady weekly plan with clear explanations, practice, tests, and parent-friendly progress visibility.",
    outcomes: [
      "Support for Class X, XI, and XII students",
      "CBSE and state-board aligned classroom tutoring",
      "Regular practice for board exam confidence",
      "Small-batch learning environment focused on attention"
    ],
    syllabus: [
      "Science and Mathematics support",
      "Accounts and selected subject tutoring",
      "Board writing practice and revision",
      "Doubt-solving sessions after core lessons"
    ],
    image: studentsGroup,
    route: "/courses/class-10-12-cbse"
  },
  {
    slug: "degree-subject-tutoring",
    label: "Degree and Subject Tutoring",
    eyebrow: "College support",
    title: "B.Com, BE, Diploma and Subject Tutoring in Nagpur",
    seoTitle: "B.Com, BE, Diploma Coaching in Nagpur | Goodwill Academy",
    description:
      "Degree, diploma, and subject tutoring for B.Com, BE, polytechnic, engineering branches, Accounts, Advanced Mathematics, Chemistry, and related subjects.",
    keywords:
      "BE coaching Nagpur, B.Com tuition Nagpur, diploma classes Hingna T Point",
    heroCopy:
      "Get help with college-level concepts, branch subjects, numerical practice, and exam preparation through approachable tutoring near Hingna T Point.",
    outcomes: [
      "Support for B.Com, BE, diploma, and branch subjects",
      "Subject tutoring for Accounts, Advanced Mathematics, Chemistry, and more",
      "Exam-oriented practice for college assessments",
      "Useful for students needing concept clarity before final exams"
    ],
    syllabus: [
      "Accounts and commerce basics",
      "Engineering mathematics and branch subject support",
      "Diploma and polytechnic topic revision",
      "Practice sheets and doubt discussions"
    ],
    image: profSandeep,
    route: "/courses/degree-subject-tutoring"
  }
];

export const reviews = [
  {
    name: "Tanmay Gaikwad",
    date: "30 Apr 2026",
    quote:
      "The classrooms were clean and sanitised, the courses were high quality and reasonably priced, and the teachers gave excellent guidance."
  },
  {
    name: "Shruti",
    date: "25 Feb 2026",
    quote:
      "Excellent classes for X, XI, XII, JEE and MHCET with highly recommended and experienced teachers."
  },
  {
    name: "Sagar",
    date: "21 Jun 2025",
    quote:
      "Clear explanations, exam-focused approach, regular tests, doubt-solving sessions and quality study material kept me on track."
  }
];

export const faqs = [
  {
    question: "Where is Goodwill Academy located in Nagpur?",
    answer:
      "Goodwill Academy is located at 01, Nilayam Apartment, near Rachna Ring Road Metro Station and opposite Priyadarshini Girls Hostel, Hingna T Point, Nagpur-440022."
  },
  {
    question: "Which courses are available at Goodwill Academy?",
    answer:
      "The academy supports IIT-JEE, CET/MHT-CET, engineering entrance preparation, Class X-XII, CBSE, B.Com, BE, diploma, and subject tutoring including Accounts, Advanced Mathematics, Chemistry, and related subjects."
  },
  {
    question: "What are the class timings?",
    answer:
      "The Justdial listing shows classes open from 7:00 AM to 9:00 PM through the week. Exact batch timings should be confirmed by calling or sending a WhatsApp enquiry."
  },
  {
    question: "What is the starting fee?",
    answer:
      "The current Justdial listing shows fees starting at Rs. 5,000. Course-wise fees and batch options can be confirmed through the enquiry form or phone call."
  },
  {
    question: "Does Goodwill Academy provide study material and tests?",
    answer:
      "The listing and reviews mention study material, regular tests, doubt-clearing sessions, and evaluation support as part of the learning environment."
  },
  {
    question: "How can I enquire for admission?",
    answer:
      `Use the WhatsApp enquiry form on this website or call ${business.phoneDisplay} to ask about batches, fees, counselling, and course availability.`
  }
];

export const blogPosts = [
  {
    slug: "jee-mht-cet-study-plan-nagpur",
    title: "A Practical JEE and MHT-CET Study Plan for Nagpur Students",
    description:
      "A local, realistic weekly preparation plan for students balancing Class XI-XII, boards, JEE, and MHT-CET coaching.",
    date: "2026-05-02",
    tags: ["IIT-JEE", "MHT-CET", "Study Plan"],
    body: [
      "A strong entrance plan starts with consistency, not panic. Students preparing from Nagpur should divide the week into concept classes, same-day revision, timed practice, and one correction session where wrong answers are reviewed carefully.",
      "For Physics and Mathematics, keep a formula notebook and solve mixed questions after every topic. For Chemistry, revise theory in short cycles and use objective practice to test recall. A weekly test helps expose weak areas before they become exam-day surprises.",
      "Goodwill Academy's local advantage is its classroom rhythm: regular tests, doubt sessions, and exam-focused guidance close to Hingna T Point, so students can spend less time commuting and more time revising."
    ]
  },
  {
    slug: "class-10-12-board-exam-strategy",
    title: "How Class X-XII Students Can Build Board Exam Confidence",
    description:
      "Board exam strategy for CBSE and state-board students who need better concept clarity, writing practice, and revision discipline.",
    date: "2026-05-02",
    tags: ["CBSE", "Class X", "Class XII"],
    body: [
      "Board exam confidence comes from clear concepts, repeated writing practice, and a revision calendar that does not wait until the final month. Students should review class notes daily and solve chapter-wise questions within a fixed time limit.",
      "For Mathematics and Science, write full steps and learn where marks are awarded. For Accounts and theory-heavy subjects, create short revision sheets and practise past questions so answers become structured and precise.",
      "A coaching class helps most when it provides personal attention, regular evaluation, and doubt clearing. That combination is especially useful for students around Hingna T Point who need a steady routine after school."
    ]
  }
];

export const localAreas = [
  "Hingang T Point",
  "Hingna T Point",
  "Rachna Ring Road Metro Station",
  "Trimurti Nagar",
  "Jaitala",
  "Hingna Road",
  "Digdoh",
  "Rajendra Nagar"
];

export const allRoutes = [
  "/",
  "/about-us",
  ...courses.map((course) => course.route),
  "/faq",
  "/blog",
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  "/contact-us"
];
