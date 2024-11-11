'use client';
import { JSX, ReactNode, SetStateAction, useRef, useState } from 'react';
import { addCMSType, getCMSTypes, deleteType } from '../db/redis';
import { useTypeContext } from './CmsDash';

export default function CmsTypes() {
  const [fields, setFields] = useState<string[]>(['123']);
  const [name, setName] = useState<string>('');

  const { getCMSTypes2, types } = useTypeContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCMSType(name, JSON.stringify(fields));
  };

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

      {Object.entries(types).map(([key, value]) => (
        <div key={key}>
          <button
            id={'delete ' + key}
            onClick={async (e) => {
              e.preventDefault();
              await deleteType(key);
              getCMSTypes2();
            }}
          >
            Delete Type
          </button>
          <h2>{key}</h2>
          {JSON.parse(value as string).map((field: string) => (
            <div key={key + field}>
              {field}{' '}
              <button
                id={'delete ' + key + field}
                onClick={async (e) => {
                  e.preventDefault();
                  const newfield = JSON.parse(value as string).filter(
                    (f: string) => f !== field
                  );
                  await addCMSType(key, JSON.stringify(newfield));
                  getCMSTypes2();
                }}
              >
                Delete Field
              </button>
            </div>
          ))}
        </div>
      ))}

      <button
        id='addObject'
        onClick={async (e) => {
          e.preventDefault();
          const newObject = {
            name: 'test',
            fields: ['test1', 'test2'],
          };
          await addCMSType(newObject.name, JSON.stringify(newObject.fields));
          getCMSTypes2();
        }}
      >
        Add Object
      </button>
    </div>
  );
}
