import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviousStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextStep() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step}` >= 1 ? "active" : ""}>1</div>
            <div className={`${step}` >= 2 ? "active" : ""}>2</div>
            <div className={`${step}` >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#ffffff"
              bgColor="#7950f2"
              onClick={handlePreviousStep}
              text="Previous"
              emoji="👈"
            />
            <Button
              textColor="#ffffff"
              bgColor="#7950f2"
              onClick={handleNextStep}
              text="Next"
              emoji="👉"
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, text, emoji }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
    >
      <span>{emoji}</span> {text}
    </button>
  );
}
