export interface AIConceptResponse {
  conceptName: string;
  tagline: string;
  description: string;
  designElements: string[];
  engagementIdeas: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  START = 'start',
  ABOUT = 'ueber-uns',
  SERVICES = 'leistungen',
  PORTFOLIO = 'portfolio',
  CONTACT = 'kontakt'
}