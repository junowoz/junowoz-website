export interface Basics {
  name: string;
  email: string;
  label: string;
  summary?: string;
  interests?: string[];
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
}

export interface Links {
  url: string;
  name: string;
  description: string;
}

export interface PostMetadata {
  title: string;
  date: string;
  category: string;
  published: boolean;
  slug: string;
}

export interface PostPageProps {
  params: {
    slug: string;
  };
}

export interface CategoryPageProps {
  params: {
    slug: string;
  };
}
