export const stringCapitalize = (str: string): string => {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
};
