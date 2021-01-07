import React from 'react';
import classes from './MovieModalForm.module.scss';


const MovieModalForm = () => {
  return (
    
    <form>
      <input placeholder="Название фильма"/>
      <input placeholder="Жанр"/>
      <input placeholder="Год выпуска"/>
      <input placeholder="ссылка на постер"/>
      <button>Сохранить</button>
    </form>
    
  )
};

export default MovieModalForm;