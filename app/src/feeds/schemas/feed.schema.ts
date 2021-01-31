import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type FeedDocument = Feed & Document;

export enum NewspaperSources {
  elmundo = 'https://www.elmundo.es/',
  elpais = 'https://elpais.com/',
  otro = 'externo',
}

@Schema()
export class Feed {
  /**
   * The Title of the New
   * @example ¡Jorge has used stackoverflow!
   */
  @Prop()
  title!: string;

  @ApiProperty({ description: 'Where the new is wrote' })
  @Prop()
  source!: NewspaperSources;

  @ApiProperty({ description: 'The Description of the new' })
  @Prop()
  body?: string;

  @ApiProperty({
    description: 'An Url that represents the main image of the new',
  })
  @Prop()
  image?: string;

  @ApiProperty({ description: 'Name of the author' })
  @Prop()
  publisher?: string;
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
