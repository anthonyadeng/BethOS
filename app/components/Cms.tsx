'use client';
import { useRef, useState } from 'react';
import { addCMSType, getCMSTypes } from '../db/redis';
type CMSType = {
  name: string;
  fields: string[];
};
export default function Cms() {
  const [fields, setFields] = useState<string[]>(['123']);
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCMSType(name, JSON.stringify(fields));
  };
  async function getCMSTypes2(name: string) {
    const types = await getCMSTypes(name);
    console.log(types);
  }
  return (
    <div>
      <h1>Add Type</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='key'>Name:</label>
          <input
            type='text'
            id='name'
            key='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor='field'>Field:</label>
            <input
              type='text'
              id='field'
              key={index}
              value={fields[index]}
              onChange={(e) => {
                const newFields = [...fields];
                newFields[index] = e.target.value;
                setFields(newFields);
              }}
            />
          </div>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            setFields([...fields, '']);
          }}
        >
          Add Field
        </button>
        <button type='submit'>Submit</button>
        {fields}
      </form>

      <button
        onClick={() => {
          getCMSTypes2(name);
        }}
      >
        Get Test
      </button>
    </div>
  );
}
