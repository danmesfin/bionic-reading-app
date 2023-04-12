import { useSelector } from "react-redux";

export default function FormattedText() {
  const text = useSelector((state) => state.text.value);

  const formatText = (text) => {
    const words = text.split(" ");
    const formattedWords = words.map((word) => {
      if (word.length <= 2) {
        return word;
      } else if (word.length <= 4) {
        return `${word.charAt(0)}<span class="font-normal">${word.slice(
          1
        )}</span>`;
      } else if (word.length <= 6) {
        return `${word.slice(0, 2)}<span class="font-normal">${word.slice(
          2
        )}</span>`;
      } else {
        const midpoint = Math.floor(word.length / 2);
        return `${word.slice(
          0,
          midpoint
        )}<span class="font-normal">${word.slice(midpoint)}</span>`;
      }
    });
    return formattedWords.join(" ");
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
      className="text-lg font-bold"
    />
  );
}
