import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [item, setItem] = useState({});

  const fetchItems = async () => {

  };

  return (
    <div>
     <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
