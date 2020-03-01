import { ReadonlyDeep } from 'type-fest';
import { BaseData as RawBaseData, MemberData as RawMemberData } from './';

export type BaseData = ReadonlyDeep<RawBaseData>;
export type MemberData = ReadonlyDeep<RawMemberData>;
