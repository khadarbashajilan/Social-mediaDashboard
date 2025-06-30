import React from 'react'
import { useState } from 'react';
const Header = () => {
  const [theme, setheme] = useState("Light");
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-red-400">Social Media Dashboard</h1>
        <p className="bg-white ">Totl Followers: 23,004</p>
      </div>
        <select>
          <option value="light">{theme+ " Mode"}</option>
          <option value="dark">{theme=='Dark'?'Light Mode' : 'Dark Mode'}</option>
        </select>
    </div>
  );
}

export default Header
