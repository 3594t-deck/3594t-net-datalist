import { expectError } from 'tsd';
import { BaseData } from '../';
import { BaseData as BaseData2 } from '../read-only';

const baseData1 = {} as BaseData;
const baseData2 = {} as BaseData2;

baseData1.GENERAL[0].add_version = 'a';
expectError(baseData2.GENERAL[0].add_version = 'a');
