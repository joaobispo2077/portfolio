export function formatDate(
  date: Date,
  locale: string | string[] | undefined = 'en-us',
): string {
  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date));
  return formattedDate;
}

export const getRevalidateInDays = (days: number) => {
  return 60 * 60 * 24 * days;
};
