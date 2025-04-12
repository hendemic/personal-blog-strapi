import type { Schema, Struct } from '@strapi/strapi';

export interface CollectionsAlbum extends Struct.ComponentSchema {
  collectionName: 'components_collections_albums';
  info: {
    displayName: 'Album';
    icon: 'grid';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentBlockHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_block_heading_blocks';
  info: {
    description: '';
    displayName: 'Heading Block';
    icon: 'write';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'h2'>;
  };
}

export interface ContentBlockImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_block_image_blocks';
  info: {
    description: '';
    displayName: 'Image Block';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentBlockMediaGrid extends Struct.ComponentSchema {
  collectionName: 'components_content_block_media_grids';
  info: {
    description: '';
    displayName: 'Media Grid';
    icon: 'picture';
  };
  attributes: {
    displayType: Schema.Attribute.Enumeration<['carousel']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'carousel'>;
    images: Schema.Attribute.Component<'collections.album', true>;
  };
}

export interface ContentBlockTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_text_block_text_blocks';
  info: {
    description: '';
    displayName: 'Text Block';
    icon: 'write';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface UtilitySeo extends Struct.ComponentSchema {
  collectionName: 'components_utility_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'collections.album': CollectionsAlbum;
      'content-block.heading-block': ContentBlockHeadingBlock;
      'content-block.image-block': ContentBlockImageBlock;
      'content-block.media-grid': ContentBlockMediaGrid;
      'content-block.text-block': ContentBlockTextBlock;
      'utility.seo': UtilitySeo;
    }
  }
}
