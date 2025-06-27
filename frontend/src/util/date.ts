export function parseDateParts(input?: string | Date | null): {
  year: string;
  month: string;
  day: string;
} {
  const fallback = { year: "1970", month: "01", day: "01" };

  if (!input) return fallback;

  let dateStr: string;
  if (typeof input === "string") {
    dateStr = input;
  } else if (input instanceof Date && !isNaN(input.getTime())) {
    dateStr = input.toISOString();
  } else {
    return fallback;
  }

  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    return {
      year: match[1],
      month: match[2],
      day: match[3],
    };
  }

  return fallback;
}




export function parseMinutesToRunnigTime(minutes?: number | null): string {
  if (typeof minutes !== "number" || minutes < 0) return "0분";

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0 && mins > 0) return `${hours}시간 ${mins}분`;
  if (hours > 0) return `${hours}시간`;
  return `${mins}분`;
}