// Search.js

import React from 'react';
import style from './Search.module.css'; 

function Search() {
  return (
    <div className={style.searchcontainer}>
      <h1>Shop with StoreCode</h1>
      <div className={style.searchinput}>
        <input type="text" placeholder="Enter Product Code" />
        <button className={style.Button}>Search</button>
      </div>
    </div>
  );
}

export default Search;
