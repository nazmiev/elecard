import React from "react";
// import styles from './card.module.scss'

function Card(obj) {
    const [open, setOpen] = React.useState(true)

  const url = "http://contest.elecard.ru/frontend_data/";
  const addUrl = obj.image;
  
  return (
    <div className="card">
        <p>
          Категория: {obj.category}, Размер: {obj.filesize}, Дата: {obj.timestamp}
          <svg className="closeBtn" onClick={() => setOpen(false)}>
            <path
              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z"
              fill="#464646"
            />
          </svg>
        </p>
        {open && (<img src={url + addUrl} alt=''></img>)}
      </div>);
}

export default Card;
