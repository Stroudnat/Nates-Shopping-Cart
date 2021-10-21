import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const products = [
  {name: 'apples',
  price: 1.50,
  stock: 10
  },
  {name: 'pears', 
  price: 1.25,
  stock: 15
  },
  {name: 'cashews', 
  price: 12,
  stock: 20
  },
  {name: 'trailMix', 
  price: 8,
  stock: 20
  },
  {name: 'chips',
  price: 3.75,
  stock: 5
  }
];

function App() {
  const [apples, setApple]              = useState(products[0]);
  const [pears, setPears]               = useState(products[1]);
  const [cashews, setCashews]           = useState(products[2]);
  const [trailMix, setTrailMix]         = useState(products[3]);
  const [chips, setChips]               = useState(products[4]);
  const [stock, setStock]               = useState(products);
  const [total, setTotal]               = useState(0);
  const [cart, setCart]                 = useState([]);
  const [nameArray, setNameArray]       = useState([]);
  const [status, setStatus]             = useState('');

const handleSubmit = (e) =>{
  const target = e.target.name;
  console.log(target);
  products.forEach(product =>{
    
    if(product.name === target && product.stock >= 1){
      setStock(product.stock--);
      setTotal(total + product.price);
      cart.push(<li>{product.name} for {product.price}</li>);
    };
    if(product.stock <= -1){
      setStock(product.stock - 0);
      setTotal(total - 0);
    };
  });
};

  const clearCart = () =>{
    setTotal(0);
    cart.forEach(listItem =>{
      const name = listItem.props.children[0];
      nameArray.push(name); //gives list of stock added to cart
    });
    
    const applesArray = nameArray.filter(names => names === 'apples'); //gives list number to add
    const pearsArray = nameArray.filter(names => names === 'pears'); //gives list number to add
    const cashewsArray = nameArray.filter(names => names === 'cashews'); //gives list number to add
    const trailMixArray = nameArray.filter(names => names === 'trailMix'); //gives list number to add
    const chipsArray = nameArray.filter(names => names === 'chips'); //gives list number to add

      if(nameArray.includes(apples.name)){
        apples.stock = apples.stock + applesArray.length;
        console.log(apples.stock);
        if(apples.stock > 10){
          return;
        }
      }
      if(nameArray.includes(pears.name)){
        pears.stock = pears.stock + pearsArray.length;
        console.log(pears.stock);
        if(pears.stock > 15){
          return;
        }
      }
      if(nameArray.includes(cashews.name)){
        cashews.stock = cashews.stock + cashewsArray.length;
        console.log(cashews.stock);
        if(cashews.stock > 20){
          return;
        }
      }
      if(nameArray.includes(trailMix.name)){
        trailMix.stock = trailMix.stock + trailMixArray.length;
        console.log(trailMix.stock);
        if(trailMix.stock > 20){
          return;
        }
      }
      if(nameArray.includes(chips.name)){
        chips.stock = chips.stock + chipsArray.length;
        console.log(chips.stock);
        if(chips.stock > 5){
          return;
        }
      }
    
      setCart([]);
      setNameArray([]);
  };

  const checkOut = () =>{
    setCart([]);
    setStatus(`Thank you for your total of $${total}`);
    setTimeout(()=> setStatus(''), 5000);
    setTimeout(()=> setTotal(0), 5000);
  };

  return (
    <>
    <h1>Welcome to my Store!</h1>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="titles">Products</h2>
          
            <img className="itemPic" src='/images/apple.jpeg'/>
            <button onClick={handleSubmit} 
            type="button" 
            name='apples'
            className="btn btn-primary">
            {apples.stock} Apples in stock <span className="badge bg-secondary">Apples are ${apples.price}</span>
            </button>
            <br/>
            
            <img className="itemPic" src='/images/pear.jpeg'/>
            <button onClick={handleSubmit}
            type="button" 
            name='pears'
            className="btn btn-primary">
            {pears.stock} Pears in Stock<span className="badge bg-secondary">Pears are ${pears.price}</span>
            </button>
            <br/>
            
            <img className="itemPic" src='/images/cashew.jpeg'/>
            <button onClick={handleSubmit}
            name="cashews"
            type="button" 
            className="btn btn-primary">
            {cashews.stock} Cashews are in stock<span className="badge bg-secondary">Cashews are ${cashews.price}</span>
            </button>
            <br/>
            
            <img className="itemPic" src='/images/trailMix.jpeg'/>
            <button onClick={handleSubmit}
            type="button"
            name="trailMix"
            className="btn btn-primary">
            {trailMix.stock} TrailMix in stock<span className="badge bg-secondary">TrailMix is ${trailMix.price}</span>
            </button>
            <br/>
            
            <img className="itemPic" src='/images/chips.jpeg'/>
            <button onClick={handleSubmit}
            type="button"
            name="chips"
            className="btn btn-primary">
            {chips.stock} Chips in stock<span className="badge bg-secondary">Chips are ${chips.price}</span>
            </button>
            <br/> 
          
        </div>
        <div className="col-4">
          <h2 className="titles">Cart</h2>
          <p id='cartTotal'></p>
          <ul style={{textAlign: 'center'}} id="cart">{cart}</ul>
        </div>
        <div className="col">
          <h2 className="titles">Check Out</h2>
            <div id="checkOut" className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title" style={{textAlign: "center"}}>Your Balance Has Come Out To ${total}</h5>
                <p className="card-text">Thank you for shopping with my shop, all sales are final and we  welcome you to come back!</p><br/><br/>
                <a href="#" onClick={clearCart} className="card-link">Clear Cart</a>
                <a href="#" onClick={checkOut} className="card-link">Check Out</a>
              </div>
            </div>
        </div>
        <p id='status'><strong>{status}</strong></p>
      </div>
    </div>
</>
  );

}

export default App;
