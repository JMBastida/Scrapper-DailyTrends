export * from './default.service';
import { DefaultService } from './default.service';
export * from './feeds.service';
import { FeedsService } from './feeds.service';
export const APIS = [DefaultService, FeedsService];
