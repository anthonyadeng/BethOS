import { useState, useRef, useEffect } from 'react';
import { useTypeContext } from './CmsDash';
import { addItem, getItems } from '../db/redis';

export default function CmsItems() {
  const { types } = useTypeContext();
  const [selectedType, setSelectedType] = useState<string>('');
  const [items, setItems] = useState<{
    [key: string]: { [key: string]: string };
  }>({});
  const fieldData = useRef<{ [key: string]: string }>({});
  const itemsCache = useRef<{
    [key: string]: { [key: string]: { [key: string]: string } };
  }>({});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(
      selectedType,
      fieldData.current.name,
      JSON.stringify(fieldData.current)
    );
  };
  useEffect(() => {
    async function fetchItemsfromDB() {
      const items = await getItems(selectedType);
      if (items) {
        itemsCache.current[selectedType] = JSON.parse(items);
      }
    }
    if (itemsCache.current[selectedType] == undefined) {
      fetchItemsfromDB();
    }
    setItems(itemsCache.current.selectedType);
  }, [selectedType]);
  return (
    <div className='flex-row h-full w-full align-middle justify-center p-96'>
      <div className='flex'>
        <select
          onChange={(e) => {
            setSelectedType(e.target.value);
          }}
        >
          {Object.keys(types).map((type) => (
            <option value={type} key={'type' + type}>
              {type}
            </option>
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
                <div key={'item' + item}>
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
          {items &&
            Object.keys(items).map((item) => (
              <CMSItem key={item} {...items[item]} />
            ))}
        </div>
      </div>
    </div>
  );
}

function CMSItem(fields: { [key: string]: string }) {
  return (
    <div>
      <div className='text-2xl font-bold'>{fields['name']}</div>
      {Object.keys(fields)
        .filter((val) => val !== 'name')
        .map((field) => (
          <div key={field}>{fields[field]}</div>
        ))}
    </div>
  );
}
