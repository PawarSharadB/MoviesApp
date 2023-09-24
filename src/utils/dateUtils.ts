export function formatDate(inputDate) {
  // Split the input date into day, month, and year components
  const [day, month, year] = inputDate.split('-').map(Number);

  // Create a new Date object with the parsed components
  const formattedDate = new Date(year, month - 1, day);

  // Format the date using toLocaleDateString
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return formattedDate.toLocaleDateString(undefined, options);
}
