const formatValue = (
  param: string | number | boolean
): string | number | boolean => {
  if (typeof param === "string") {
    return param.toUpperCase();
  }
  if (typeof param === "number") {
    return param * 10;
  }
  if (typeof param === "boolean") {
    return !param;
  }
  return param;
};



const getLength = (param: string | any[]): number => {

    if (typeof param === 'string') {
        return param.length;
    }
    else if (Array.isArray(param)) {
        return param.length;
    }
    return 0;
};
