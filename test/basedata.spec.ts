import fetch from 'node-fetch';
import { BaseData } from '../read-only';

let baseData: BaseData | undefined;

beforeAll(async () => {
  const res = await fetch('https://3594t-deck.github.io/data/base.json');
  baseData = (await res.json()) as BaseData;
});

describe('BaseData', () => {
  type DataType = BaseData;
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData;
  });
  type DataKey = keyof BaseData;
  const KEYS: DataKey[] = [
    'DATA',
    'ACTIVE_JEWEL',
    'ACTIVE_JEWEL_TYPE',
    'ASSIST',
    'ASSIST_STRAT',
    'ASSIST_STRAT_CATEGORY',
    'BGM',
    'COST',
    'EXT',
    'EX_RANK',
    'GENERAL',
    'GENERAL_TYPE',
    'GEN_MAIN',
    'GEN_MAIN_SP',
    'GEN_SUB',
    'ILLUSTRATOR',
    'ITEM_IMG',
    'ITEM_NAME',
    'PARAM',
    'PASSIVE_JEWEL',
    'PATH',
    'PERSONAL',
    'RARITY',
    'RATE',
    'SKILL',
    'STATE',
    'STRAT',
    'STRAT_CATEGORY',
    'STRAT_RANGE',
    'STRAT_TIME',
    'TACTICS',
    'TITLE_GENERAL',
    'UNIT_TYPE',
    'VER_TYPE',
    'VOICE_ACTOR',
  ];

  const IGNORE_KEYS: string[] = ['PLAYER'];

  test('no data', async () => {
    const keys = KEYS.filter(key => !data[key]);
    expect(keys).toEqual([]);
  });

  test('added keys', async () => {
    const keys = Object.keys(data).filter(
      key => !IGNORE_KEYS.includes(key) && !(KEYS as string[]).includes(key)
    );
    expect(keys).toEqual([]);
  });

  test('deleted keys', async () => {
    const keys = KEYS.filter(
      key => !IGNORE_KEYS.includes(key) && !Object.keys(data).includes(key)
    );
    expect(keys).toEqual([]);
  });
});

describe('BaseData["EXT"]', () => {
  type DataType = BaseData['EXT'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.EXT;
  });

  test('no data', async () => {
    expect(data[0]).not.toBeFalsy();
  });

  test('format', async () => {
    for (const d in data[0]) {
      expect(d).toEqual(expect.any(String));
    }
  });
});

describe('BaseData["EX_RANK"]', () => {
  type DataType = BaseData['EX_RANK'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.EX_RANK;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'count', 'key', 'name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["GENERAL"]', () => {
  type DataType = BaseData['GENERAL'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.GENERAL;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = [
    'add_version',
    'avatar',
    'belong',
    'buryoku',
    'chiryoku',
    'code',
    'cost',
    'ex_rank',
    'gen_main0',
    'gen_main1',
    'gen_main2',
    'general_type',
    'illustrator',
    'major_version',
    'not_belong',
    'personal',
    'pocket_avatar',
    'pocket_code',
    'pocket_off',
    'rarity',
    'seiatsu',
    'skill0',
    'skill1',
    'skill2',
    'state',
    'strat',
    'unit_type',
    'ver_type',
    'voice_actor',
  ];

  const IGNORE_KEYS: string[] = [
    'belong',
    'ex_rank',
    'not_belong',
    'master_player',
  ];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(
        key => !IGNORE_KEYS.includes(key) && d[key] == null
      );
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !IGNORE_KEYS.includes(key) && !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(
        key => !IGNORE_KEYS.includes(key) && !Object.keys(d).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["GENERAL_TYPE"]', () => {
  type DataType = BaseData['GENERAL_TYPE'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.GENERAL_TYPE;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'key', 'name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["COST"]', () => {
  type DataType = BaseData['COST'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.COST;
  });

  test('format', async () => {
    for (const key in data) {
      expect(data[key]).toEqual({
        code: expect.any(String),
        name: expect.any(String),
      });
    }
  });

  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'name'];

  test('added keys', async () => {
    for (const k in data) {
      const d = data[k];
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const k in data) {
      const d = data[k];
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["RARITY"]', () => {
  type DataType = BaseData['RARITY'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.RARITY;
  });

  test('format', async () => {
    for (const key in data) {
      expect(data[key]).toEqual({
        code: expect.any(String),
        name: expect.any(String),
        order: expect.any(Number),
      });
    }
  });

  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'name', 'order'];

  test('added keys', async () => {
    for (const k in data) {
      const d = data[k];
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const k in data) {
      const d = data[k];
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["GEN_MAIN"]', () => {
  type DataType = BaseData['GEN_MAIN'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.GEN_MAIN;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'key', 'name', 'name_short', 'replace'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["GEN_MAIN_SP"]', () => {
  type DataType = BaseData['GEN_MAIN_SP'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.GEN_MAIN;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'key', 'name', 'name_short', 'replace'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["GEN_SUB"]', () => {
  type DataType = BaseData['GEN_SUB'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.GEN_SUB;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'name', 'name_short'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["ILLUSTRATOR"]', () => {
  type DataType = BaseData['ILLUSTRATOR'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.ILLUSTRATOR;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['idx', 'name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["PERSONAL"]', () => {
  type DataType = BaseData['PERSONAL'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.PERSONAL;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['azana', 'azana_ruby', 'name', 'name_ruby'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["PATH"]', () => {
  type DataType = BaseData['PATH'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.EXT;
  });

  test('no data', async () => {
    expect(data[0]).not.toBeFalsy();
  });

  test('format', async () => {
    for (const d in data[0]) {
      expect(d).toEqual(expect.any(String));
    }
  });
});

describe('BaseData["SKILL"]', () => {
  type DataType = BaseData['SKILL'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.SKILL;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'key', 'name', 'short_name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["STATE"]', () => {
  type DataType = BaseData['STATE'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.STATE;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = [
    'blue',
    'code',
    'green',
    'name',
    'name_short',
    'red',
  ];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["STRAT"]', () => {
  type DataType = BaseData['STRAT'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.STRAT;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = [
    'code',
    'explanation',
    'key',
    'morale',
    'name',
    'name_ruby',
    'strat_category',
    'strat_range',
    'strat_time',
  ];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["STRAT_CATEGORY"]', () => {
  type DataType = BaseData['STRAT_CATEGORY'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.STRAT_CATEGORY;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'key', 'name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["STRAT_RANGE"]', () => {
  type DataType = BaseData['STRAT_RANGE'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.STRAT_RANGE;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["STRAT_TIME"]', () => {
  type DataType = BaseData['STRAT_TIME'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.STRAT_TIME;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["UNIT_TYPE"]', () => {
  type DataType = BaseData['UNIT_TYPE'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.UNIT_TYPE;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['code', 'key', 'name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["VER_TYPE"]', () => {
  type DataType = BaseData['VER_TYPE'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.VER_TYPE;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});

describe('BaseData["VOICE_ACTOR"]', () => {
  type DataType = BaseData['VOICE_ACTOR'];
  let data: DataType | undefined;
  beforeEach(() => {
    data = baseData.VOICE_ACTOR;
  });
  type DataKey = keyof DataType[number];
  const KEYS: DataKey[] = ['idx', 'name'];

  test('no data', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => d[key] == null);
      expect(keys).toEqual([]);
    }
  });

  test('added keys', async () => {
    for (const d of data) {
      const keys = Object.keys(d).filter(
        key => !(KEYS as string[]).includes(key)
      );
      expect(keys).toEqual([]);
    }
  });

  test('deleted keys', async () => {
    for (const d of data) {
      const keys = KEYS.filter(key => !Object.keys(d).includes(key));
      expect(keys).toEqual([]);
    }
  });
});
