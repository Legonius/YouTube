import { useNavigate } from "react-router-dom";

const useUtilities = () => {
  const navigate = useNavigate();
  const overflowText = (text, num = 50, sign = "...") => {
    if (text.length > num) {
      let cutText = text.slice(0, num);
      return `${cutText} ${sign}`;
    }
    return text;
  };
  const numberFomatting = (nums) => {
    let numbers = nums;
    if (numbers.length > 6) {
      let newNumber = parseFloat(Number(numbers) / 1000000).toFixed(1);
      if (newNumber[newNumber.length - 1] < 1) {
        return Math.round(newNumber) + "M";
      }
      return newNumber + "M";
    }
    if (numbers.length > 3) {
      let newNumber = Math.round(Number(numbers) / 1000);

      return newNumber + "K";
    }
    return numbers;
  };
  const dateFormatting = (date) => {
    const now = Date.now();
    const publishedDate = new Date(date);
    const diff = now - publishedDate;
    let newDate = diff / 1000;
    if (newDate < 60) {
      return Math.round(newDate) + " sec ago";
    } else {
      newDate = newDate / 60;
    }
    if (newDate < 60) {
      return Math.round(newDate) + " mins ago";
    } else {
      newDate = newDate / 60;
    }
    if (newDate < 24) {
      return Math.round(newDate) + " hours ago";
    } else {
      newDate = newDate / 24;
    }
    if (newDate < 30) {
      return Math.round(newDate) + " days ago";
    } else {
      newDate = newDate / 30;
    }
    if (newDate < 12) {
      return Math.round(newDate) + " months ago";
    } else {
      newDate = newDate / 12;
    }
    if (newDate < 2) {
      return Math.round(newDate) + " year ago";
    } else {
      return Math.round(newDate) + " years ago";
    }
  };
  const handleCurrentVideoInfo = (id) => {
    navigate(`/watch?v=${id}`);
  };

  return {
    overflowText,
    numberFomatting,
    dateFormatting,
    handleCurrentVideoInfo,
  };
};
export default useUtilities;