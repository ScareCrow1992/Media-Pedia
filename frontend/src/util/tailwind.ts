export function parseResponsiveMarginX(values: number[]): string {
  const breakpoints = ['mx', 'sm:mx', 'md:mx', 'lg:mx', 'xl:mx'];

  if (values.length === 0) return '';

  const safeValues = [...values];

  // 5보다 작을 경우 마지막 값을 복사해서 채움
  while (safeValues.length < 5) {
    safeValues.push(safeValues[safeValues.length - 1]);
  }

  // 5보다 크면 앞에서 5개만 사용
  const trimmed = safeValues.slice(0, 5);

  return trimmed
    .map((val, idx) => `${breakpoints[idx]}-[${val}rem]`)
    .join(' ');
}