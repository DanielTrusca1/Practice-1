import React, { useState } from "react";

import { FormattedMessage, FormattedDate, FormattedNumber } from "react-intl";

const InputForm = () => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);

  const today = new Date();

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

      <h1>
        <FormattedMessage id="app.title" defaultMessage="Welcome to our site" />
      </h1>

      <p>
        <FormattedMessage
          id="app.greeting"
          values={{ name: name }}
          defaultMessage="Hello, {name}!"
        />
      </p>

      <p>
        <FormattedMessage
          id="app.description"
          defaultMessage="This is a simple multilingual app."
        />
      </p>

      <hr />

      <p>
        <FormattedMessage
          id="app.date"
          values={{ ts: today }}
          defaultMessage="Today's date is {ts, date, long}"
        />
      </p>

      <p>
        <FormattedMessage
          id="app.messages"
          values={{ count: number }}
          defaultMessage="{count, plural, one {You have 1 message} other {You have # messages}}"
        />
      </p>
    </div>
  );
};

export default InputForm;
