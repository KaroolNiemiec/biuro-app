import { differenceInDays, format, isPast, parseISO } from "date-fns";

export const formatDate = (date = new Date()) =>
  format(date, "H:mm dd.MM.yyyy");

export const calculateDeadline = ({ isPayed, paymentDeadline }) => {
  if (isPayed) {
    return "Zapłacono";
  }
  if (isPast(parseISO(paymentDeadline))) {
    return `${differenceInDays(
      new Date(),
      parseISO(paymentDeadline)
    )} dni po terminie`;
  } else {
    return `${differenceInDays(
      parseISO(paymentDeadline),
      new Date()
    )} dni do zapłaty`;
  }
};
