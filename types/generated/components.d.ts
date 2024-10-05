import type { Schema, Attribute } from '@strapi/strapi';

export interface CareerComponentsCheckMarkElement extends Schema.Component {
  collectionName: 'components_career_components_check_mark_elements';
  info: {
    displayName: 'CheckMarkElement';
  };
  attributes: {
    TextItem: Attribute.Text;
  };
}

export interface CareerComponentsJobOfferSection extends Schema.Component {
  collectionName: 'components_career_components_job_offer_sections';
  info: {
    displayName: 'JobOfferSection';
  };
  attributes: {
    Header: Attribute.String & Attribute.Required;
    Content: Attribute.Text;
    CheckMarkList: Attribute.Component<
      'career-components.check-mark-element',
      true
    >;
  };
}

export interface CareerComponentsRecruiter extends Schema.Component {
  collectionName: 'components_career_components_recruiters';
  info: {
    displayName: 'Recruiter';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.String;
    Email: Attribute.Email;
    LinkedIn: Attribute.String;
  };
}

export interface CareerComponentsSalaryType extends Schema.Component {
  collectionName: 'components_career_components_salary_types';
  info: {
    displayName: 'SalaryType';
  };
  attributes: {
    Type: Attribute.String & Attribute.Required;
    SalaryFrom: Attribute.Integer;
    SalaryTo: Attribute.Integer;
    isDisclosed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    Currency: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'PLN'>;
  };
}

export interface EventsComponentsArticleSection extends Schema.Component {
  collectionName: 'components_events_components_article_sections';
  info: {
    displayName: 'ArticleSection';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface EventsComponentsAuthor extends Schema.Component {
  collectionName: 'components_events_components_authors';
  info: {
    displayName: 'Author';
    description: '';
  };
  attributes: {
    authorName: Attribute.String & Attribute.Required;
    jobPosition: Attribute.String & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTag extends Schema.Component {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'career-components.check-mark-element': CareerComponentsCheckMarkElement;
      'career-components.job-offer-section': CareerComponentsJobOfferSection;
      'career-components.recruiter': CareerComponentsRecruiter;
      'career-components.salary-type': CareerComponentsSalaryType;
      'events-components.article-section': EventsComponentsArticleSection;
      'events-components.author': EventsComponentsAuthor;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tag': SharedTag;
    }
  }
}
