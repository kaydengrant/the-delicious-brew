export const addCommasToNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const capitalizeString = (string: string) => {
  const substrings = string.split(/[-\s]+/);
  const capitalizedSubstrings = substrings.map((substring) => {
    return substring.charAt(0).toUpperCase() + substring.slice(1).toLowerCase();
  });

  return capitalizedSubstrings.join(' ');
};
