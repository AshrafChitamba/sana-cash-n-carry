export const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export const getDateYear = (date: string) => new Date(date).getFullYear();
