import { useState, useRef } from 'react';
import { useTypeContext } from './CmsDash';
import { addItem } from '../db/redis';
export default function CmsItems() {
  const { types } = useTypeContext();
  const [selectedType, setSelectedType] = useState<string>('');
  const fieldData = useRef<{ [key: string]: string }>({});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(
      selectedType,
      fieldData.current.name,
      JSON.stringify(fieldData.current)
    );
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedType(e.target.value);
        }}
      >
        {Object.keys(types).map((type) => (
          <option value={type}>{type}</option>
        ))}
      </select>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            autoComplete='off'
            onChange={(e) => {
              fieldData.current['name'] = e.target.value;
            }}
          />
          {selectedType &&
            JSON.parse(types[selectedType]).map((item: string) => (
              <div>
                <label htmlFor={'item' + item}>{item}:</label>
                <input
                  autoComplete='off'
                  onChange={(e) => {
                    fieldData.current[item] = e.target.value;
                  }}
                />
              </div>
            ))}
          <button type='submit'>Submit</button>
        </form>
        {JSON.stringify(fieldData.current)}
      </div>
    </div>
  );
}
