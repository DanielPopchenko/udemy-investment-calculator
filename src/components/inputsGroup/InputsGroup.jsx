import { useState } from 'react';
import { calculateInvestmentResults, formatter } from '../../util/investment';

const InputsGroup = ({ userInput, setInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            INITIAL INVESTMENT
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) => setInput('initialInvestment', e.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            ANNUAL INVESTMENT
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(e) => setInput('annualInvestment', e.target.value)}
            />
          </label>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>
            EXPECTED RETURN
            <input
              type="number"
              value={userInput.expectedReturn}
              onChange={(e) => setInput('expectedReturn', e.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            DURATION
            <input
              type="number"
              value={userInput.duration}
              onChange={(e) => setInput('duration', e.target.value)}
            />
          </label>
        </p>
      </div>
    </section>
  );
};

export default InputsGroup;
