import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Length } from 'class-validator';
import { NewspaperSources } from '../schemas/feed.schema';

export class FeedDto {
  @ApiProperty()
  @IsString()
  @Length(5, 80)
  readonly title!: string;
  @ApiProperty()
  @IsString()
  readonly body!: string;
  @ApiProperty()
  @IsUrl()
  readonly image!: string;
  @ApiProperty({ enumName: NewspaperSources.otro })
  readonly source = NewspaperSources.otro;
  @ApiProperty()
  @IsString()
  readonly publisher!: string;
}
