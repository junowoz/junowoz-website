export interface Basics {
  name: string;
  email: string;
  label: string;
  summary?: string;
  location?: string;
  socials: Socials[];
}

export interface Socials {
  url: string;
  network: string;
}

export interface Projects {
  url?: string;
  name: string;
  description: string;
}

export interface Books {
  title: string;
  author: string;
}

export interface NavItems {
  href: string;
  label: string;
  external?: boolean;
}

export interface Links {
  url: string;
  name: string;
  description: string;
}
