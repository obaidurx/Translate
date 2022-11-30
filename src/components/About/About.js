import React, { useState } from "react";

const About = () => {
  // const [base_sentence, setbase_sentence] = useState("");
  // const [base_language, setbase_language] = useState("");
  const [base_sentence, setBase_sentence] = useState("");
  const [base_language, setBase_language] = useState("");
  const [inserted_language, setInserted_language] = useState("");

  const translate = () => {
    let data = { base_sentence, base_language, inserted_language };
    fetch("https://csify.selubi.dev/csify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.warn(result.code_switched_sentence);
        const text = document.getElementById("showText");
        text.innerHTML = result.code_switched_sentence;
      });
  };

  return (
    <div className="container">
      <h2 className="mt-5 text-primary">Bryan Translator</h2>

      <div className="d-flex align-items-center justify-content-between mt-5">
        <div>
          <p className="fs-4">Base Language</p>
          <select
            className="secondary border px-5  py-3 fs-5 fw-semibold rounded text-primary"
            value={base_language}
            onChange={(e) => setBase_language(e.target.value)}
          >
            <option>en</option>
            <option>ja</option>
          </select>
        </div>
        {/* <h1 className="text-primary">To</h1> */}
        <div>
          <p className="fs-5">Secondary Language</p>
          <select
            className="secondary border px-5 py-3 fs-5 fw-semibold rounded text-primary"
            value={inserted_language}
            onChange={(e) => setInserted_language(e.target.value)}
          >
            <option>ja</option>
            <option>en</option>
          </select>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-12 col-sm-6 text-area mt-5">
          <textarea
            rows="7"
            id="textField"
            className="form-control input-lg py-3 fs-4 fs-5"
            type="text-area "
            placeholder="Input Text"
            onChange={(e) => setBase_sentence(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-6 text-area mt-5">
          <textarea
            rows="7"
            id="showText"
            className="form-control input-lg py-3 fs-4 bg-light"
            type="text-area "
            placeholder="Translated Text"
            disabled
          />
        </div>
      </div>
      {
        <button
          onClick={translate}
          className="btn w-50 bg-primary mt-5 text-white fs-3 "
        >
          Translate
        </button>
      }
    </div>
  );
};

export default About;
