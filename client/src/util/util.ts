export const getCookie = (key: string) => {
  const cookie = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return cookie ? cookie.pop() : "";
};

export const currencyFormat = (amount: number) => {
  return "$" + (amount / 100).toFixed(2);
};

export const formatData = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
};