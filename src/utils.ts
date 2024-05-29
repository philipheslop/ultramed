export const sortByColumn = (a: any[], colIndex: number, reverse: boolean) => {
  const sortFunction = (a: any[], b: any[]) => {
    if (a[colIndex] === b[colIndex]) {
      return 0;
    } else {
      return a[colIndex] < b[colIndex] ? -1 : 1;
    }
  };

  if (reverse == true) {
    a.sort(sortFunction).reverse();
  } else {
    a.sort(sortFunction);
  }

  return a;
};
