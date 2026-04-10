import { siteConfig } from './site-config';
import type { Service } from './services-data';

const BASE_URL = 'https://tynkibaryza.pl';

const addressSchema = {
  '@type': 'PostalAddress' as const,
  streetAddress: siteConfig.address.street,
  addressLocality: 'Bytoń',
  postalCode: siteConfig.address.postalCode,
  addressRegion: 'kujawsko-pomorskie',
  addressCountry: 'PL',
};

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: siteConfig.businessName,
    description:
      'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. 15 lat doświadczenia w kujawsko-pomorskim i wielkopolskim.',
    url: BASE_URL,
    telephone: siteConfig.phone.raw,
    email: siteConfig.email,
    address: addressSchema,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'województwo kujawsko-pomorskie',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'województwo wielkopolskie',
      },
    ],
    priceRange: '$$',
    image: `${BASE_URL}/og.png`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi tynkarskie',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tynki gipsowe' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tynki cementowo-wapienne' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tynki hybrydowe' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tynki gliniane' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Szpachlowanie z malowaniem' } },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tynki Maszynowe Baryza',
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}/#business`,
    },
    inLanguage: 'pl-PL',
  };
}

export function getServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.fullDescription,
    url: `${BASE_URL}/uslugi/${service.slug}`,
    provider: {
      '@id': `${BASE_URL}/#business`,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'województwo kujawsko-pomorskie',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'województwo wielkopolskie',
      },
    ],
    serviceType: 'Tynki maszynowe',
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function getServicesItemListSchema(
  services: Service[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Usługi tynkarskie',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: `${BASE_URL}/uslugi/${service.slug}`,
    })),
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt – Tynki Maszynowe Baryza',
    url: `${BASE_URL}/kontakt`,
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: siteConfig.businessName,
      telephone: siteConfig.phone.raw,
      email: siteConfig.email,
      address: addressSchema,
    },
  };
}

export function getCollectionPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Realizacje – Tynki Maszynowe Baryza',
    description:
      'Galeria realizacji profesjonalnych tynków maszynowych wykonanych przez firmę Baryza.',
    url: `${BASE_URL}/realizacje`,
    about: {
      '@id': `${BASE_URL}/#business`,
    },
  };
}

export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'O nas – Tynki Maszynowe Baryza',
    description:
      'Poznaj firmę Radosław Baryza – Tynki Maszynowe. Ponad 15 lat doświadczenia w profesjonalnym tynkowaniu maszynowym.',
    url: `${BASE_URL}/o-nas`,
    about: {
      '@id': `${BASE_URL}/#business`,
    },
  };
}

export function getJobPostingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Tynkarz – tynki maszynowe',
    description:
      'Poszukujemy doświadczonych tynkarzy do pracy przy tynkach maszynowych. Praca na markowym sprzęcie, na silomatach, na dużych i małych obiektach oraz na zabudowie jednorodzinnej i szeregowej. Dojazd i samochód firmowy po stronie pracodawcy.',
    employmentType: 'FULL_TIME',
    url: `${BASE_URL}/nabor-pracownikow`,
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      sameAs: BASE_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: addressSchema,
    },
    datePosted: '2026-04-07',
    validThrough: '2026-12-31',
  };
}

export function getWebPageSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${BASE_URL}${url}`,
    inLanguage: 'pl-PL',
    isPartOf: {
      '@type': 'WebSite',
      url: BASE_URL,
    },
  };
}
