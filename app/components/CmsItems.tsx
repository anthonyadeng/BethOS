import { useState } from 'react';
import { useTypeContext } from './CmsDash';
export default function CmsItems() {
  const { types } = useTypeContext();
  const [selectedType, setSelectedType] = useState<string>('');
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
    </div>
  );
}
