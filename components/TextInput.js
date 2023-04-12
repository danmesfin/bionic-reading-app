import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateText } from "../store/textSlice";

export default function TextInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateText(text));
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 flex-1 md:h-auto md:w-1/2 flex flex-col">
      <h2 className="text-lg font-bold mb-2">Enter your text</h2>
      <textarea
        className="h-4/5 border rounded-lg p-2 resize-none overflow-y-auto"
        onChange={handleChange}
      />

      <button
        className="bg-blue-600 hover:shadow-lg hover:bg-blue-500 w-[50%] py-1 mx-auto my-4 rounded-lg"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
