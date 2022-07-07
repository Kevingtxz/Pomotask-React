export enum IconBtnEnum {
  SELECT = 1,
  SUCCESS = 2,
  STATIC = 3,
  UPDATE = 4,
  REMOVE = 5,
  FAIL = 6,
}

export type IconBtnProps =
  | {
      opt:
        | IconBtnEnum.SELECT
        | IconBtnEnum.SUCCESS
        | IconBtnEnum.STATIC
        | IconBtnEnum.REMOVE
        | IconBtnEnum.FAIL;
      payload: { handler: () => void };
    }
  | {
      opt: IconBtnEnum.UPDATE;
      payload: { id: number };
    };
