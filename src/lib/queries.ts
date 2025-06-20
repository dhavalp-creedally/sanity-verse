import { defineQuery } from 'next-sanity';
import { 
  siteLogoFragment,
  socialLinksFragment,
  headerNavFragment,
  footerNavFragment
 } from './fragments';

export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  ${siteLogoFragment},
  copyrightText,
  ${socialLinksFragment},
  ${headerNavFragment},
  ${footerNavFragment}
}`);

export const headerQuery = defineQuery(`*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  ${siteLogoFragment},
  ${socialLinksFragment},
  ${headerNavFragment},
}`);

export const footerQuery = defineQuery(`*[_type == "settings"][0]{
  copyrightText,
  ${socialLinksFragment},
  ${footerNavFragment}
}`);