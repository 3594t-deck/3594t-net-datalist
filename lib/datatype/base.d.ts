interface ActiveJewel {
  code: string;
  jewel_type: string;
  name: string;
  name_short: string;
}

interface ActiveJewelType {
  code: string;
}

interface Assist {
  add_version: string;
  assist_strat: string;
  avatar: string;
  code: string;
  illustrator: string;
  major_version: string;
  master_player?: string;
  personal: string;
  state: string;
  voice_actor: string;
}

interface AssistStrat {
  assist_strat_category: string;
  code: string;
  explanation: string;
  key: string;
  name: string;
  name_ruby: string;
  strat_range: string;
}

interface AssistStratCategory {
  code: string;
  key: string;
  name: string;
}

interface Bgm {
  code: string;
  disp_name: string;
  full_name: string;
}

interface Cost {
  code: string;
  name: string;
}

interface CodeOnly {
  code: string;
}

interface ExRank {
  code: string;
  count: string;
  key: string;
  name: string;
}

interface General {
  add_version: string;
  avatar: string;
  buryoku: string;
  chiryoku: string;
  code: string;
  cost: string;
  gen_main0: string;
  gen_main1: string;
  gen_main2: string;
  general_type: string;
  illustrator: string;
  major_version: string;
  master_player?: string;
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
  replace?: string;
}

interface GenMainSP {
  code: string;
  key: string;
  name: string;
  name_short: string;
  replace?: string;
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

interface Player {
  code: string;
  name: string;
}

interface Rarity {
  code: string;
  name: string;
  order: number;
}

interface Rate {
  fire_enishi_10t: string;
  fire_pocket_copper: string;
  fire_pocket_gold: string;
  fire_pocket_silver: string;
  general_pickup_point: string;
  hire_enishi: string;
  hire_pocket_copper: string;
  hire_pocket_gold: string;
  hire_pocket_silver: string;
  rarity: string;
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

interface Tactics {
  active0: string;
  active1: string;
  active2: string;
  active3: string;
  active4: string;
  active5: string;
  active_slot_num: string;
  code: string;
  explanation: string;
  name: string;
}

interface TitleGeneral {
  count: string;
  key: string;
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
  ACTIVE_JEWEL: ActiveJewel[];
  ACTIVE_JEWEL_TYPE: ActiveJewelType[];
  ASSIST: Assist[];
  ASSIST_STRAT: AssistStrat[];
  ASSIST_STRAT_CATEGORY: AssistStratCategory[];
  BGM: Bgm[];
  COST: { [key: string]: Cost };
  DATA?: CodeOnly[];
  EXT: { [key: string]: string }[];
  EX_RANK: ExRank[];
  GENERAL: General[];
  GENERAL_TYPE: GeneralType[];
  GEN_MAIN: GenMain[];
  GEN_MAIN_SP: GenMainSP[];
  GEN_SUB: GenSub[];
  ILLUSTRATOR: Illustrator[];
  ITEM_IMG: { [key: string]: string }[];
  ITEM_NAME: { [key: string]: string }[];
  PARAM: { [key: string]: string }[];
  PASSIVE_JEWEL: GenSub[];
  PATH: { [key: string]: string }[];
  PERSONAL: Personal[];
  PLAYER?: Player[];
  RARITY: { [key: string]: Rarity };
  RATE: Rate[];
  SKILL: Skill[];
  STATE: State[];
  STRAT: Strat[];
  STRAT_CATEGORY: StratCategory[];
  STRAT_RANGE: StratRange[];
  STRAT_TIME: StratTime[];
  TACTICS: Tactics[];
  TITLE_GENERAL: TitleGeneral[];
  UNIT_TYPE: UnitType[];
  VER_TYPE: VerType[];
  VOICE_ACTOR: VoiceActor[];
}
