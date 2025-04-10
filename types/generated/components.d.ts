import type { Attribute, Schema } from '@strapi/strapi';

export interface CollectionsAlbum extends Schema.Component {
  collectionName: 'components_collections_albums';
  info: {
    displayName: 'Album';
    icon: 'grid';
  };
  attributes: {
    caption: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentBlockHeadingBlock extends Schema.Component {
  collectionName: 'components_content_block_heading_blocks';
  info: {
    description: '';
    displayName: 'Heading Block';
    icon: 'write';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    level: Attribute.Enumeration<['h2', 'h3', 'h4']> &
      Attribute.Required &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface ContentBlockImageBlock extends Schema.Component {
  collectionName: 'components_content_block_image_blocks';
  info: {
    description: '';
    displayName: 'Image Block';
    icon: 'picture';
  };
  attributes: {
    caption: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentBlockMediaGrid extends Schema.Component {
  collectionName: 'components_content_block_media_grids';
  info: {
    description: '';
    displayName: 'Media Grid';
    icon: 'picture';
  };
  attributes: {
    displayType: Attribute.Enumeration<['carousel']> &
      Attribute.Required &
      Attribute.DefaultTo<'carousel'>;
    images: Attribute.Component<'collections.album', true>;
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
      'collections.album': CollectionsAlbum;
      'content-block.heading-block': ContentBlockHeadingBlock;
      'content-block.image-block': ContentBlockImageBlock;
      'content-block.media-grid': ContentBlockMediaGrid;
      'content-block.text-block': ContentBlockTextBlock;
      'utility.seo': UtilitySeo;
    }
  }
}
