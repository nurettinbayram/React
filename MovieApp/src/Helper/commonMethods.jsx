/// reduce METODUNUN KULLANIMINA BAK.
export function getAvrg(list) {
  return (
    list.reduce((sum, currentVal) => sum + currentVal, 0) / list.length
  ).toFixed(1);
}
