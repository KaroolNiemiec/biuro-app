import { differenceInDays, format, isPast } from "date-fns";

export const formatDate = (date = new Date()) =>
  format(date, "H:mm dd.MM.yyyy");

export const calculateDeadline = ({ isPayed, paymentDeadline }) => {
  const date = paymentDeadline?.toDate();
  if (isPayed) {
    return "Zapłacono";
  }
  if (isPast(date)) {
    return `${differenceInDays(new Date(), date)} dni po terminie`;
  } else {
    return `${differenceInDays(date, new Date())} dni do zapłaty`;
  }
};
