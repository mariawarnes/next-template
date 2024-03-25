import { PortableTextBlock } from '@portabletext/react';
import { groq } from 'next-sanity';

export const settingsQuery = groq`*[_type == "settings"][0]`;
export const homeQuery = groq`*[_type == "home"][0]`;
export const menuQuery = groq`*[_type == "menu"]|order(orderRank)`;
export const footerQuery = groq`*[_type == "footer"]|order(orderRank)`;
export const incidentsQuery = groq`*[_type == "incidents"]|order(orderRank)`;
export const travelQuery = groq`*[_type == "travel-home"][0]`;

export interface Settings {
  title: string;
  description: string;
  logo: {
    light: any;
    dark: any;
    alt: string;
  };
}

export interface DataSwitch {
  dataswitch: boolean;
}

export interface Home {
  title: string;
  description?: string;
  image: {
    alt: string;
  };
  bannerMainCopy: string;
  bannerMainHighlight?: string;
  bannerSubCopy?: string;
  bannerButtonText: string;
  bannerButtonLink: string;
}

export interface MenuItemProps {
  title: string;
  link?: {
    url: string;
  };
  links: {
    title: string;
    url: string;
  }[];
  config: {
    cache: 'force-cache';
    next: { revalidate: 1 };
  };
}

export interface FooterItem {
  title: string;
  copy?: string;
  links: {
    title: string;
    url: string;
  }[];
}

// TRAVEL
export interface TravelHome {
  _key: string;
  title: string;
  description: string;
  travellogo: ImageBitmap;
  alttext: String;
  mainbanner: Array<{
    _key: string;
    alttext: string;
    bannerimage: {
      asset: {
        url: string;
      };
    };
  }>;
  promosection: Array<{
    _key: string;
    header: string;
    subheader: string;
    linkurl: string;
    promoimage: {
      _key: string;
      alttext: string;
      asset: {
        url: string;
      };
    };
  }>;
  travelservices: Array<{
    _key: string;
    column: string;
    travelservice: Array<{
      _key: string;
      title: string;
      url: string;
      icon: string;
    }>;
  }>;
  discoverstrip: Array<{
    _key: string;
    header: string;
    maincopy: string;
    buttontext: string;
    buttonlink: string;
    servicelogos: Array<{
      _key: string;
      authoritylogos: {
        asset: {
          _ref: string;
        };
      };
      altPromo3: string;
    }>;
  }>;
  _id: string;
  config: {
    //cache: 'force-cache';
    //next: { revalidate: 1 };
  };
}

export interface ExpertPanel {
  title: string;
  description: string;
  name: string;
  type: string;
  of: Array<{
    type: string;
    name: string;
    fields: Array<{
      type: string;
      name: string;
      title: string;
      validation?: () => any;
      description?: string;
    }>;
  }>;
}

export interface Incidents {
  title?: string;
  message: string | Array<PortableTextBlock>;
  _updatedAt: string;
}
