import React, { useState } from "react";

const Comp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [showSubOptions, setShowSubOptions] = useState(false);

  const handleMainOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setShowSubOptions(value !== ""); // Show sub-options for all options
    setSelectedSubOption(""); // Reset sub-options
  };

  const handleSubOptionChange = (event) => {
    setSelectedSubOption(event.target.value);
  };

  const handleReset = () => {
    setSelectedOption("");
    setSelectedSubOption("");
    setShowSubOptions(false);
  };

  return (
    <div style={{ position: "relative", textAlign: "center", margin: "20px" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* Main Radio Buttons (aligned vertically) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="option1"
              name="mainOption"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleMainOptionChange}
            />
            <label htmlFor="option1">HR Week Form</label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="option2"
              name="mainOption"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleMainOptionChange}
            />
            <label htmlFor="option2">Dispatch Week Form</label>
          </div>

          {/* Additional Options */}
          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="option3"
              name="mainOption"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleMainOptionChange}
            />
            <label htmlFor="option3">Clearance Order for Others</label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="option4"
              name="mainOption"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleMainOptionChange}
            />
            <label htmlFor="option4">Clearance Orders for CRMBARA</label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="option5"
              name="mainOption"
              value="option5"
              checked={selectedOption === "option5"}
              onChange={handleMainOptionChange}
            />
            <label htmlFor="option5">Shearing Orders</label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="option6"
              name="mainOption"
              value="option6"
              checked={selectedOption === "option6"}
              onChange={handleMainOptionChange}
            />
            <label htmlFor="option6">All Orders with NR and Cost</label>
          </div>
        </div>

        {/* Show Sub-options only if an option is selected */}
        {showSubOptions && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            {/* For all options except Option 6, show a single sub-option with two date pickers and "To" text */}
            {(selectedOption === "option1" ||
              selectedOption === "option3" ||
              selectedOption === "option4" ||
              selectedOption === "option5") && (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="hrWeek"
                    name="subOption"
                    value="hrWeek"
                    checked={selectedSubOption === "hrWeek"}
                    onChange={handleSubOptionChange}
                  />
                  <label htmlFor="hrWeek" style={{ marginRight: "10px" }}>
                    HR Week Form
                  </label>

                  {/* Two Date Pickers for HR Week Form */}
                  {selectedSubOption === "hrWeek" && (
                    <div
                      style={{
                        marginLeft: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input type="date" />
                      <span style={{ margin: "0 10px" }}>To</span>
                      <input type="date" />
                    </div>
                  )}
                </div>
              </>
            )}

            {/* For Option 2 */}
            {selectedOption === "option2" && (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="dispatchWeek"
                    name="subOption"
                    value="dispatchWeek"
                    checked={selectedSubOption === "dispatchWeek"}
                    onChange={handleSubOptionChange}
                  />
                  <label htmlFor="dispatchWeek" style={{ marginRight: "10px" }}>
                    Dispatch Week Form
                  </label>

                  {/* Date Pickers for Dispatch Week Form */}
                  {selectedSubOption === "dispatchWeek" && (
                    <div
                      style={{
                        marginLeft: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input type="date" />
                      <span style={{ margin: "0 10px" }}>To</span>
                      <input type="date" />
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="lpst2"
                    name="subOption"
                    value="lpst2"
                    checked={selectedSubOption === "lpst2"}
                    onChange={handleSubOptionChange}
                  />
                  <label htmlFor="lpst2" style={{ marginRight: "10px" }}>
                    LPST Form
                  </label>

                  {/* Two Date Pickers for LPST Form */}
                  {selectedSubOption === "lpst2" && (
                    <div
                      style={{
                        marginLeft: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input type="date" />
                      <span style={{ margin: "0 10px" }}>To</span>
                      <input type="date" />
                    </div>
                  )}
                </div>
              </>
            )}

            {/* For Option 6 (HR Week Form and LPST Form) */}
            {selectedOption === "option6" && (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="hrWeek6"
                    name="subOption"
                    value="hrWeek6"
                    checked={selectedSubOption === "hrWeek6"}
                    onChange={handleSubOptionChange}
                  />
                  <label htmlFor="hrWeek6" style={{ marginRight: "10px" }}>
                    HR Week Form
                  </label>

                  {/* Date Pickers for HR Week Form */}
                  {selectedSubOption === "hrWeek6" && (
                    <div
                      style={{
                        marginLeft: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input type="date" />
                      <span style={{ margin: "0 10px" }}>To</span>
                      <input type="date" />
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="lpst6"
                    name="subOption"
                    value="lpst6"
                    checked={selectedSubOption === "lpst6"}
                    onChange={handleSubOptionChange}
                  />
                  <label htmlFor="lpst6" style={{ marginRight: "10px" }}>
                    LPST Form
                  </label>

                  {/* Date Pickers for LPST Form */}
                  {selectedSubOption === "lpst6" && (
                    <div
                      style={{
                        marginLeft: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input type="date" />
                      <span style={{ margin: "0 10px" }}>To</span>
                      <input type="date" />
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Compliance Type Select Box */}

            <div>
              <label htmlFor="complianceType">Compliance Type: </label>
              <select id="complianceType" disabled={!showSubOptions}>
                <option value="default">Select Compliance Type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* Show Buttons only if sub-options are selected */}
      {selectedSubOption && (
        <div
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/*Styled Generate Excel Button*/}
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Generate Excel Report
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="file" style={{ display: "none" }} id="uploadFile" />
            <label
              htmlFor="uploadFile"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#2196F3",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Choose File
            </label>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#FF9800",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload File
            </button>
          </div>
        </div>
      )}

      <button onClick={handleReset} style={{ marginTop: "20px" }}>
        Reset Form
      </button>
    </div>
  );
};

export default Comp;
