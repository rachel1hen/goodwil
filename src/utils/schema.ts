import { blogPosts, business, courses, siteUrl } from "../data/business";

type Course = (typeof courses)[number];
type BlogPost = (typeof blogPosts)[number];

const absolute = (path: string) => new URL(path, siteUrl).toString();

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": absolute("/#organization"),
  name: business.name,
  legalName: business.legalName,
  url: absolute("/"),
  telephone: business.phone,
  email: business.email,
  image: absolute("/images/goodwill-academy-justdial-5.jpg"),
  description: business.shortDescription,
  foundingDate: String(business.established),
  priceRange: business.priceFrom,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.ratingCount
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "01, Nilayam Apartment, Near Rachna Ring Road Metro Station, Opp. Priyadarshini Girls Hostel, Hingna T Point, Ring Road",
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country
  },
  openingHours: business.openingHours,
  areaServed: business.city,
  sameAs: [business.justdialUrl]
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absolute("/#website"),
  url: absolute("/"),
  name: business.name,
  publisher: { "@id": absolute("/#organization") },
  potentialAction: {
    "@type": "SearchAction",
    target: absolute("/blog?query={search_term_string}"),
    "query-input": "required name=search_term_string"
  }
});

export const breadcrumbSchema = (items: Array<{ label: string; href: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absolute(item.href)
  }))
});

export const courseSchema = (course: Course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.title,
  description: course.description,
  provider: {
    "@type": "EducationalOrganization",
    name: business.name,
    sameAs: absolute("/")
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "5000",
    availability: "https://schema.org/InStock",
    url: absolute(course.route)
  }
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const blogPostingSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    "@type": "Organization",
    name: business.name
  },
  publisher: {
    "@type": "Organization",
    name: business.name
  },
  mainEntityOfPage: absolute(`/blog/${post.slug}`)
});
