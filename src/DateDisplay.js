import { useEffect, useState } from "react";

const formatDate = (value) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(value);

function DateDisplay() {
  const [date, setDate] = useState(formatDate(Date.now()));

  useEffect(() => {
    const id = setInterval(() => setDate(formatDate(Date.now())), 1000);

    return () => clearInterval(id);
  }, []);

  return <p>{date}</p>;
}

export default DateDisplay;
