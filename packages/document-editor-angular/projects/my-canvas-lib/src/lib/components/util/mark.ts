export const verticalMarks = Array.from({ length: 12 }, (_, i) => ({
  value: -i * 96,
  label: i.toString(),
}));

export const horizontalMarks = Array.from({ length: 9 }, (_, i) => ({
  value: i * 96,
  label: i.toString(),
}));
