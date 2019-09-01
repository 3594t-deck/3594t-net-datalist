interface Card {
  fire_date: string;
  gen_main: string;
  gen_sub0: string;
  gen_sub1: string;
  gen_sub2: string;
  get_date: string;
  hire_limit_date: string;
  idx: string;
  number: string;
  pocket: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MemberData {
  ACTIVE_JEWEL: any[];
  BGM_CARD: any[];
  CARD: Card[];
  DATA: { code: string }[];
  GENERAL_COUNT: {
    count: string;
    idx: string;
  }[];
  PASSIVE_JEWEL: any[];
  STATUS: any[];
  TACTICS: any[];
}
/* eslint-enable @typescript-eslint/no-explicit-any */
