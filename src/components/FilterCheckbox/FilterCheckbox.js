import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox__label" htmlFor="checkbox">
      <input
        type="checkbox"
        className="checkbox__item checkbox__hidden"
        id="checkbox"
      />
      <span className="checkbox__visible" />
      <span className="checkbox__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
