import { useState } from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function FormattedText() {
  const text = useSelector((state) => state.text.value);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-100 p-4 flex-1 md:h-auto md:w-1/2 flex flex-col">
      <h2 className="text-lg font-bold mb-2">Formatted text</h2>
      <div className="h-80 md:h-5/6 w-11/12 md:w-full rounded-md border-2 border-gray-300 p-2 overflow-y-auto">
        <div
          dangerouslySetInnerHTML={{ __html: formatText(text) }}
          className="text-md font-bold text-justify"
        />
      </div>
      <div className="mt-4 h-1/6 flex flex-row items-center justify-center">
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button className="px-4 py-1 w-[50%] text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
