import React from 'react';

interface Props {
  value: string;
  onChange: (next: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <div className="p-4">
    <input
      type="text"
      placeholder="Search events..."
      className="w-full max-w-md p-2 border rounded focus:outline-none focus:ring"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export default React.memo(SearchBar);
