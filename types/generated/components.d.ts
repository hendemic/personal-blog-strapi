import type { Attribute, Schema } from '@strapi/strapi';

export interface CollectionMediaCollection extends Schema.Component {
  collectionName: 'components_collection_media_collections';
  info: {
    displayName: 'Media Collection';
    icon: 'server';
  };
  attributes: {
    altText: Attribute.String & Attribute.Required;
    caption: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface ContentBlockHeadingBlock extends Schema.Component {
  collectionName: 'components_content_block_heading_blocks';
  info: {
    displayName: 'Heading Block';
    icon: 'write';
  };
  attributes: {
    heading: Attribute.String;
    level: Attribute.Enumeration<['h1', 'h2', 'h3']>;
  };
}

export interface ContentBlockImageBlock extends Schema.Component {
  collectionName: 'components_content_block_image_blocks';
  info: {
    displayName: 'Image Block';
    icon: 'picture';
  };
  attributes: {
    altText: Attribute.String;
    caption: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentBlockMediaGrid extends Schema.Component {
  collectionName: 'components_content_block_media_grids';
  info: {
    displayName: 'Media Grid';
    icon: 'picture';
  };
  attributes: {
    displayType: Attribute.Enumeration<['carousel']>;
    images: Attribute.Component<'collection.media-collection', true>;
  };
}

export interface ContentBlockTextBlock extends Schema.Component {
  collectionName: 'components_text_block_text_blocks';
  info: {
    description: '';
    displayName: 'Text Block';
    icon: 'write';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface UtilitySeo extends Schema.Component {
  collectionName: 'components_utility_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaDescription: Attribute.Text;
    metaTitle: Attribute.String;
    shareImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'collection.media-collection': CollectionMediaCollection;
      'content-block.heading-block': ContentBlockHeadingBlock;
      'content-block.image-block': ContentBlockImageBlock;
      'content-block.media-grid': ContentBlockMediaGrid;
      'content-block.text-block': ContentBlockTextBlock;
      'utility.seo': UtilitySeo;
    }
  }
}
