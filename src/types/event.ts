// src/types/event.ts

export interface Event {
  resourceLink: string;
  id: number;
  header: Header;
  leader: Leader;
  badges: Badges;
  name: string;
  donationInfo: DonationInfo;
  activityBlock: ActivityBlock;
  paymentText: string;
  description: string;
  tags: string[];
  people: People;
  content: ContentItem[];
  choices: Choices;
  gallery: GalleryItem[];
  type: string;
  priority: number;
  parentCommunity: string | null;
  subcommunityLine: string;
  userSubscribedText: string | null;
}

export interface Header {
  images: Image[];
  imageCredit: string;
  subscribedText: string;
  groupExpiredText?: string;
}

export interface Image {
  type: string;
  src: string;
}

export interface Leader {
  name: string;
  avatar: string;
}

export interface Badges {
  customBadge: string;
  groupExpiredText?: string;
}

export interface DonationInfo {
  donationTarget?: number;
  totalPayments?: number | string;
  currency?: string;
}

export interface ActivityBlock {
  location: LocationInfo;
  startDate: string;
  endDate: string;
  date: Record<string, unknown>;
  duration: string;
  links: ActivityLink[] | null;
  actionButton: string;
}

export interface LocationInfo {
  text?: string;
  type?: string;
  raw?: {
    url: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    place_id?: string;
    formatted_address?: string;
    html_attributions?: any[];
  };
}

export interface ActivityLink {
  label: string;
  link: string;
  type: string;
}

export interface People {
  title: string;
  numbers: {
    maxParticipants: number;
    participantsCount: number | null;
  };
  subscribers?: Subscriber[];
}

export interface Subscriber {
  name: string;
  avatar: string;
}

export interface ContentItem {
  label: string;
  value: string;
  key: string;
}

export interface Choices {
  singleChoices: ChoiceGroup[];
  multiChoices: ChoiceGroup[];
  documents: unknown[];
}

export interface ChoiceGroup {
  values: string[];
}

export interface GalleryItem {
  url: string;
  thumbnailUrl?: string;
  credit?: string;
}


export interface ApiResponse {
  status: string;
  message: string;
  code: number;
  data: {
    pagination: {
      totalResults: number;
      totalPages: number;
      pageSize: number;
      currentPage: number;
    };
    records: Event[];
  };
}
