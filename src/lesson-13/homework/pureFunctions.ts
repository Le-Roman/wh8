// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  const initialState = [] as Team[];
  const [topTeam] = teams.reduce((previousValue, currentValue): Team[] => {
    const [firstTeam] = previousValue;
    if (!firstTeam) {
      previousValue.push(currentValue);
    } else if (currentValue.score > firstTeam.score) {
      previousValue = initialState.slice(0, -1);
      previousValue.push(currentValue);
    }
    return previousValue;
  }, initialState);

  return topTeam.name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  const qsParams = Object.entries(qsObj);
  const initialQs = "?";
  const qs = qsParams.reduce((prevQs, param, i): string => {
    const endQs = i === qsParams.length - 1 ? "" : "&";
    return prevQs + param.join("=") + endQs;
  }, initialQs);
  return qs;
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  let qsObj = {} as QsObj;
  const qsDelQuest = qs.replace("?", "");

  const qsParseToObj = (qStr: string): string | undefined => {
    if (!qStr.length) return;
    const qsSepIndex = qStr.indexOf("&");
    let qsBeforeSep,
      qsAfterSep = "";

    if (qsSepIndex === -1) {
      qsBeforeSep = qStr.slice(0);
      qsAfterSep = "";
    } else {
      qsBeforeSep = qStr.slice(0, qsSepIndex);
      qsAfterSep = qStr.slice(qsSepIndex + 1);
    }
    const [qsParam, qsValue] = qsBeforeSep.split("=");

    qsObj = { ...qsObj, [qsParam]: qsValue };
    return qsParseToObj(qsAfterSep);
  };

  qsParseToObj(qsDelQuest);
  return qsObj;
};
