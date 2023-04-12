import React from "react";
import FormattedText from "../components/FormattedText";
import TextInput from "../components/TextInput";
import Footer from "../components/Footer";
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
        <>
          <FormattedText />
        </>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
