import React, { useState } from 'react'; 
import DatePickerField from './DatePickerField'; 

export default {
  title: '日付選択フィールド', 
};

export const Default = () => {
  const [value, onChange] = useState(null);

  return (
    <React.Fragment>
      <DatePickerField 
        value={value}
        onChange={onChange}
      />
      <div>
        <pre>{JSON.stringify({ value })}</pre>
      </div>
    </React.Fragment>
  );
}