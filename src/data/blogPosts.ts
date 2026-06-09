export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: {
    heading?: string;
    paragraph: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-family-caregivers-get-paid-in-pennsylvania",
    title: "How Family Caregivers Can Get Paid in Pennsylvania",
    excerpt:
      "Learn how family members and friends may be able to receive compensation for helping seniors with daily living activities at home.",
    category: "Family Caregiving",
    date: "April 23, 2026",
    readTime: "5 min read",
    author: "Bunny Home Care Team",
    image: "/images/blog-family-caregiver.webp",
    content: [
      {
        paragraph:
          "Many families in Pennsylvania want to keep their seniors comfortable at home while making sure they receive the support they need. In some cases, family members or friends may be able to get paid for providing care through home care programs.",
      },
      {
        heading: "What does a family caregiver do?",
        paragraph:
          "A family caregiver may help with daily living activities such as bathing, dressing, meal preparation, light housekeeping, mobility support, and companionship.",
      },
      {
        heading: "Why choose Bunny Home Care?",
        paragraph:
          "Bunny Home Care helps families understand the process, switch agencies smoothly, and receive support in their own language. Our team focuses on communication, trust, and customer service.",
      },
    ],
  },
  {
    slug: "when-to-switch-home-care-agencies",
    title: "When Is It Time to Switch Home Care Agencies?",
    excerpt:
      "Poor communication, missed hours, and late payments can create stress. Here are signs it may be time to switch agencies.",
    category: "Switching Agencies",
    date: "April 28, 2026",
    readTime: "4 min read",
    author: "Bunny Home Care Team",
    image: "/images/blog-switching-agency.webp",
    content: [
      {
        paragraph:
          "Choosing the right home care agency matters. If your current agency does not communicate clearly, misses hours, or creates payment stress, it may be time to compare your options.",
      },
      {
        heading: "A smooth transition matters",
        paragraph:
          "Switching should not feel complicated. At Bunny Home Care, our team helps handle the paperwork and supports families through the process.",
      },
      {
        heading: "One call can start the process",
        paragraph:
          "With one quick call, our team can explain your options and help you understand how switching to Bunny Home Care works.",
      },
    ],
  },
  {
    slug: "home-care-services-for-seniors-in-pa",
    title: "Home Care Services for Seniors in Pennsylvania",
    excerpt:
      "Understand what non-medical home care can include and how it supports seniors at home with comfort and dignity.",
    category: "Home Care",
    date: "May 2, 2026",
    readTime: "6 min read",
    author: "Bunny Home Care Team",
    image: "/images/blog-senior-home-care.webp",
    content: [
      {
        paragraph:
          "Home care services help seniors remain in a familiar environment while receiving support with daily living activities and companionship.",
      },
      {
        heading: "Common home care support",
        paragraph:
          "Care may include bathing, dressing, laundry, grocery support, meal preparation, mobility assistance, and companionship.",
      },
      {
        heading: "Support in your language",
        paragraph:
          "Bunny Home Care provides multilingual support so families can communicate clearly and comfortably throughout the care process.",
      },
    ],
  },
];