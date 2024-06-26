import { differenceInDays, formatDistance, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
    locale: ru,
  })
    .replace("about ", "")
    .replace("in", "In");

export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) => `${value.toLocaleString("ru")} тг.`;

export const translateStatus = (status) => {
  // console.log(status);
  switch (status) {
    case "unconfirmed":
      return "не подтвержден";
    case "checked-in":
      return "зарегистрирован";
    case "checked-out":
      return "покинул";
  }
};
