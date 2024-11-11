'use client';
import { useState } from 'react';
import { addCMSType, deleteType } from '../db/redis';
import { useTypeContext } from './CmsDash';

export default function CmsTypes() {
  const [fields, setFields] = useState<string[]>(['']);
  const [name, setName] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const { getCMSTypes2, types } = useTypeContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCMSType(name, JSON.stringify(fields));
  };

  return (
    <div className='flex flex-wrap flex-row h-full w-full align-middle justify-between  p-24'>
      <div className=''>
        <div className='text-2xl font-bold'>Add Type</div>
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
                autoComplete='off'
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
        </form>
        Select Type{' '}
        <select onChange={(e) => setSelectedType(e.target.value)}>
          {Object.keys(types).map((type) => (
            <option value={type} key={'type' + type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className=''>
        {selectedType && (
          <div key={selectedType}>
            <button
              id={'delete ' + selectedType}
              onClick={async (e) => {
                e.preventDefault();
                await deleteType(selectedType);
                getCMSTypes2();
              }}
            >
              Delete Type
            </button>
            <h2>{selectedType}</h2>
            {JSON.parse(types[selectedType] as string).map((field: string) => (
              <div key={selectedType + field}>
                {field}{' '}
                <button
                  id={'delete ' + selectedType + field}
                  onClick={async (e) => {
                    e.preventDefault();
                    const newfield = JSON.parse(
                      types[selectedType] as string
                    ).filter((f: string) => f !== field);
                    await addCMSType(selectedType, JSON.stringify(newfield));
                    getCMSTypes2();
                  }}
                >
                  Delete Field
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <button
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
        </button> */}
    </div>
  );
}
