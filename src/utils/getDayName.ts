const getDayName = (date: string) => {
  const dateObject = new Date(date);
  const day = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
  return day;
};
export default getDayName;
