import React, { useState } from "react";

import { FormattedMessage, FormattedDate, FormattedNumber } from "react-intl";

const InputForm = () => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [status, setStatus] = useState("online");

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

      <select
        id="status-select"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginTop: "0.5rem", padding: "0.5rem" }}
      >
        <option value="online">Online</option>
        <option value="offline">Offline</option>
        <option value="busy">Busy</option>
        <option value="unknown">Unknown</option>
      </select>

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

      <p>
        <FormattedMessage
          id="app.status"
          values={{ status }}
          defaultMessage="{status, select, online {You are online} offline {You are offline} busy {You are busy} other {Status unknown}}"
        />
      </p>
    </div>
  );
};

export default InputForm;
