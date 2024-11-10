import { useState } from 'react';
import { useTypeContext } from './CmsDash';
export default function CmsItems() {
  const { types } = useTypeContext();
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        {selectedType &&
          JSON.parse(types[selectedType]).map((item: string) => (
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor='item'>{item}:</label>
                <input autoComplete='off' />
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}
