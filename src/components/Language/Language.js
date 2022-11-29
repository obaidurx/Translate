import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const Language = () => {
  const [selects, setSelects] = useState("");

  const translate = () => {
    const text = document.getElementById("textField");
    const innerText = text.value;
    const showText = document.getElementById("show-text");
    showText.innerHTML = innerText;
    console.log(showText);
  };

  return (
    <div>
      <>
        <h3 className="bg-primary text-white  p-3 mt-5 mb-5 w-50 mx-auto rounded">
          Input TextBox (Editable)
        </h3>
        <div className="d-flex mt-5 px-3 align-items-center justify-content-between">
          <div>
            <p className="fs-4">Base Language</p>
            {/* <h2>{selects}</h2> */}
            <select
              className="secondary border px-5 py-3 fs-5 fw-semibold"
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
            >
              <option>English</option>
              <option>Japan</option>
              <option>বাংলা</option>
            </select>
          </div>

          <div className="bg-inf w-50 py-3">
            <textarea
              id="textField"
              className="form-control input-lg py-3 fs-5"
              type="text-area "
              placeholder="Input Language"
            />
          </div>

          <div className="">
            <p className="fs-4">Secondary Language</p>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary border px-5 py-3 fs-5 fw-semibold"
                id="dropdown-basic "
              >
                Select Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Japan</Dropdown.Item>
                <Dropdown.Item href="#/action-2">English </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <p className="w-50 mx-auto border p-3" id="show-text">
          Show Text
        </p>
        <Button
          onClick={translate}
          className="w-50 mx-auto p-3 fs-3 text-white mt-5 mb-5  mx-auto rounded"
        >
          Output Textbox or label (uneditable but copiable)
        </Button>
      </>
    </div>
  );
};

export default Language;
