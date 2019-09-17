import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

// function ItemDetail({ match }) {
//
//   useEffect(() => {
//     fetchItem();
//     console.log(match)
//   },[]);
//
//   const [item, setItem] = useState({});
//
//   const fetchItem = async () => {
//     const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get?ids=${match.params.id}`);
//     const item = await fetchItem.json();
//       setItem(item);
//     console.log(item);
//
//   };
//
//   console.log("this is the item name", item.name)
//
//   return (
//     <div>
//      <h1>{item.name}</h1>
//     </div>
//   );
// }
//
// export default ItemDetail;

class ItemDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false,
      item: null
    }
  }

  fetchItem = () => {
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?id=${this.props.match.params.id}`)
    .then((response) => response.json())
    .then(
      (result) => {
        console.log("this is the item as sent from the API", result)
        this.setState({
          loaded:true,
          item: result
        })
        this.forceUpdate();
      })
  }

  componentDidMount(){
    this.fetchItem();
  }

  render () {

    let apiItem;
    if (this.state.loaded === true){
      apiItem = (
        <div>
          <h1>{this.state.item.name}</h1>
          <img src={this.state.item.images.transparent} />
          <h2>{this.state.item.rarity}</h2>
        </div>
      )
    } else {
      apiItem = <h1>"Loading........"</h1>
    }


    return (
      <div>
        {apiItem}
      </div>
    )
  }
}

export default ItemDetail;
