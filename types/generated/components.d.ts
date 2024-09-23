import type { Schema, Attribute } from '@strapi/strapi';

export interface EventsComponentsArticleSection extends Schema.Component {
  collectionName: 'components_events_components_article_sections';
  info: {
    displayName: 'ArticleSection';
  };
  attributes: {
    Header: Attribute.String;
    Content: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface EventsComponentsAuthor extends Schema.Component {
  collectionName: 'components_events_components_authors';
  info: {
    displayName: 'Author';
  };
  attributes: {
    AuthorName: Attribute.String & Attribute.Required;
    JobPosition: Attribute.String & Attribute.Required;
    Avatar: Attribute.Media & Attribute.Required;
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
  };
  attributes: {
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
