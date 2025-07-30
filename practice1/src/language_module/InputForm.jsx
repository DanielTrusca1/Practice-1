import React, { useState } from "react";

import { FormattedMessage, FormattedNumber } from "react-intl";

const InputForm = () => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);

  const messages = {
    en: messages_en,
    fr: messages_fr,
  };

  return (
    <div className="input-form">
      <h1>Languages</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Number"
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>
        I have <span>{number}</span> apples
      </p>

      <FormattedMessage id="app.greeting" defaultMessage="Hello!" />
    </div>
  );
};

export default InputForm;
