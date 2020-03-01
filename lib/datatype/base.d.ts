interface ExRank {
  code: string;
  count: string;
  key: string;
  name: string;
}

interface General {
  add_version: string;
  avatar: string;
  belong: number;
  buryoku: string;
  chiryoku: string;
  code: string;
  cost: string;
  ex_rank: string;
  gen_main0: string;
  gen_main1: string;
  gen_main2: string;
  general_type: string;
  illustrator: string;
  major_version: string;
  not_belong: boolean;
  personal: string;
  pocket_avatar: string;
  pocket_code: string;
  pocket_off: boolean;
  rarity: string;
  seiatsu: string;
  skill0: string;
  skill1: string;
  skill2: string;
  state: string;
  strat: string;
  unit_type: string;
  ver_type: string;
  voice_actor: string;
}

interface GeneralType {
  code: string;
  key: string;
  name: string;
}

interface GenMain {
  code: string;
  key: string;
  name: string;
  name_short: string;
}

interface GenSub {
  code: string;
  name: string;
  name_short: string;
}

interface Illustrator {
  idx: string;
  name: string;
}

interface Personal {
  azana: string;
  azana_ruby: string;
  name: string;
  name_ruby: string;
}

interface Skill {
  code: string;
  key: string;
  name: string;
  short_name: string;
}

interface State {
  blue: string;
  code: string;
  green: string;
  name: string;
  name_short: string;
  red: string;
}

interface Strat {
  code: string;
  explanation: string;
  key: string;
  morale: string;
  name: string;
  name_ruby: string;
  strat_category: string;
  strat_range: string;
  strat_time: string;
}

interface StratCategory {
  code: string;
  key: string;
  name: string;
}

interface StratRange {
  code: string;
}

interface StratTime {
  name: string;
}

interface UnitType {
  code: string;
  key: string;
  name: string;
}

interface VerType {
  name: string;
}

interface VoiceActor {
  idx: string;
  name: string;
}

export interface BaseData {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  ACTIVE_JEWEL: any[];
  ACTIVE_JEWEL_TYPE: any[];
  BGM: any[];
  /* eslint-enable @typescript-eslint/no-explicit-any */
  COST: {
    [key: number]: { code: string; name: string };
  };
  DATA: { code: string }[];
  EXT: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  EX_RANK: ExRank[];
  GENERAL: General[];
  GENERAL_TYPE: GeneralType[];
  GEN_MAIN: GenMain[];
  GEN_SUB: GenSub[];
  ILLUSTRATOR: Illustrator[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  ITEM_IMG: any[];
  ITEM_NAME: any[];
  PARAM: any[];
  PASSIVE_JEWEL: any[];
  PATH: any[];
  /* eslint-enable @typescript-eslint/no-explicit-any */
  PERSONAL: Personal[];
  RARITY: {
    [key: string]: { code: string; name: string };
  };
  RATE: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  SKILL: Skill[];
  STATE: State[];
  STRAT: Strat[];
  STRAT_CATEGORY: StratCategory[];
  STRAT_RANGE: StratRange[];
  STRAT_TIME: StratTime[];
  TACTICS: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  TITLE_GENERAL: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  UNIT_TYPE: UnitType[];
  VER_TYPE: VerType[];
  VOICE_ACTOR: VoiceActor[];
}
