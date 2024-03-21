const formateDate = (timestamp: number): string => {
  const todayDate = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate: string = new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(todayDate);

  return formattedDate;
};

export default formateDate;
