import React from "react";
import FormattedText from "../components/FormattedText";
import TextInput from "../components/TextInput";

const IndexPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Bionic Reading App</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Text input */}
        <>
          <TextInput />
        </>

        {/* Formatted text */}
        <div className="bg-gray-200 p-4 flex-1 md:h-auto md:w-1/2 flex flex-col">
          <h2 className="text-lg font-bold mb-2">Formatted text</h2>
          <div className="flex-1 overflow-y-auto">
            <FormattedText />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
