import { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Big Mac', price: 2, image: 'https://neal.fun/spend/images/big-mac.jpg' },
  { id: 2, name: 'Flip Flops', price: 3, image: 'https://neal.fun/spend/images/flip-flops.jpg' },
  { id: 3, name: 'Coca-Cola Pack', price: 5, image: 'https://neal.fun/spend/images/coca-cola-pack.jpg' },
  { id: 4, name: 'Movie Ticket', price: 12, image: 'https://neal.fun/spend/images/movie-ticket.jpg' },
  { id: 5, name: 'Book', price: 15, image: 'https://neal.fun/spend/images/book.jpg' },
  { id: 6, name: 'Lobster Dinner', price: 45, image: 'https://neal.fun/spend/images/lobster-dinner.jpg' },
  { id: 7, name: 'Video Games', price: 60, image: 'https://neal.fun/spend/images/video-game.jpg' },
  { id: 8, name: 'Amazon Echo', price: 99, image: 'https://neal.fun/spend/images/amazon-echo.jpg' },
  { id: 9, name: 'Year of Netflix', price: 100, image: 'https://neal.fun/spend/images/year-of-netflix.jpg' },
  { id: 10, name: 'Air Jordans', price: 125, image: 'https://neal.fun/spend/images/air-jordans.jpg' },
  { id: 11, name: 'Airpods', price: 199, image: 'https://neal.fun/spend/images/airpods.jpg' },
  { id: 12, name: 'Gaming Console', price: 299, image: 'https://neal.fun/spend/images/gaming-console.jpg' },
  { id: 13, name: 'Drone', price: 350, image: 'https://neal.fun/spend/images/drone.jpg' },
  { id: 14, name: 'Smartphone', price: 699, image: 'https://neal.fun/spend/images/smartphone.jpg' },
  { id: 15, name: 'Bike', price: 800, image: 'https://neal.fun/spend/images/bike.jpg' },
  { id: 16, name: 'Kitten', price: 1500, image: 'https://neal.fun/spend/images/kitten.jpg' },
  { id: 17, name: 'Puppy', price: 1500, image: 'https://neal.fun/spend/images/puppy.jpg' },
  { id: 18, name: 'Auto Rickshaw', price: 2300, image: 'https://neal.fun/spend/images/auto-rickshaw.jpg' },
  { id: 19, name: 'Horse', price: 2500, image: 'https://neal.fun/spend/images/horse.jpg' },
  { id: 20, name: 'Acre of Farmland', price: 3000, image: 'https://neal.fun/spend/images/acre-of-farmland.jpg' },
  { id: 21, name: 'Designer Handbag', price: 5500, image: 'https://neal.fun/spend/images/designer-handbag.jpg' },
  { id: 22, name: 'Hot Tub', price: 6000, image: 'https://neal.fun/spend/images/hot-tub.jpg' },
  { id: 23, name: 'Luxury Wine', price: 7000, image: 'https://neal.fun/spend/images/luxury-wine.jpg' },
  { id: 24, name: 'Diamond Ring', price: 10000, image: 'https://neal.fun/spend/images/diamond-ring.jpg' },
  { id: 25, name: 'Jet Ski', price: 12000, image: 'https://neal.fun/spend/images/jet-ski.jpg' },
  { id: 26, name: 'Rolex', price: 15000, image: 'https://neal.fun/spend/images/rolex.jpg' },
  { id: 27, name: 'Ford F-150', price: 30000, image: 'https://neal.fun/spend/images/ford-f-150.jpg' },
  { id: 28, name: 'Tesla', price: 75000, image: 'https://neal.fun/spend/images/tesla.jpg' },
  { id: 29, name: 'Monster Truck', price: 150000, image: 'https://neal.fun/spend/images/monster-truck.jpg' },
  { id: 30, name: 'Ferrari', price: 250000, image: 'https://neal.fun/spend/images/ferrari.jpg' },
  { id: 31, name: 'Single Family Home', price: 300000, image: 'https://neal.fun/spend/images/single-family-home.jpg' },
  { id: 32, name: 'Gold Bar', price: 700000, image: 'https://neal.fun/spend/images/gold-bar.jpg' },
  { id: 33, name: 'McDonalds Franchise', price: 1500000, image: 'https://neal.fun/spend/images/mcdonalds-franchise.jpg' },
  { id: 34, name: 'Superbowl Ad', price: 5250000, image: 'https://neal.fun/spend/images/superbowl-ad.jpg' },
  { id: 35, name: 'Yacht', price: 7500000, image: 'https://neal.fun/spend/images/yacht.jpg' },
  { id: 36, name: 'M1 Abrams', price: 8000000, image: 'https://neal.fun/spend/images/m1-abrams.jpg' },
  { id: 37, name: 'Formula 1 Car', price: 15000000, image: 'https://neal.fun/spend/images/formula-1-car.jpg' },
  { id: 38, name: 'Apache Helicopter', price: 31000000, image: 'https://neal.fun/spend/images/apache-helicopter.jpg' },
  { id: 39, name: 'Mansion', price: 45000000, image: 'https://neal.fun/spend/images/mansion.jpg' },
  { id: 40, name: 'Make a Movie', price: 100000000, image: 'https://neal.fun/spend/images/make-a-movie.jpg' },
  { id: 41, name: 'Boing 747', price: 148000000, image: 'https://neal.fun/spend/images/boeing-747.jpg' },
  { id: 42, name: 'Mona Lisa', price: 780000000, image: 'https://neal.fun/spend/images/mona-lisa.jpg' },
  { id: 43, name: 'Skyscraper', price: 850000000, image: 'https://neal.fun/spend/images/skyscraper.jpg' },
  { id: 44, name: 'Cruise Ship', price: 930000000, image: 'https://neal.fun/spend/images/cruise-ship.jpg' },
  { id: 45, name: 'NBA Team', price: 2120000000, image: 'https://neal.fun/spend/images/nba-team.jpg' },
];

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [cart, setCart] = useState({});
  // Initialize quantities to 0 for all products
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({
      ...acc,
      [product.id]: 0
    }), {})
  );

  const handleBuy = (productId, price) => {
    const currentQty = quantities[productId];
    const newQty = currentQty + 1;
    const totalCost = price * 1; // Always buy 1 item at a time
    
    if (balance >= totalCost) {
      setBalance(prev => prev - totalCost);
      setCart(prev => ({
        ...prev,
        [productId]: (prev[productId] || 0) + 1
      }));
      setQuantities(prev => ({
        ...prev,
        [productId]: newQty
      }));
    }
  };

  const handleSell = (productId, price) => {
    const currentQty = cart[productId] || 0;
    
    if (currentQty > 0) {
      const newQty = currentQty - 1;
      
      // Update balance
      setBalance(prev => prev + price);
      
      // Update cart
      if (newQty > 0) {
        setCart(prev => ({
          ...prev,
          [productId]: newQty
        }));
        
        // Update quantity
        setQuantities(prev => ({
          ...prev,
          [productId]: newQty
        }));
      } else {
        // Remove from cart if quantity reaches 0
        const newCart = { ...cart };
        delete newCart[productId];
        setCart(newCart);
        
        // Reset quantity to 0
        setQuantities(prev => ({
          ...prev,
          [productId]: 0
        }));
      }
    }
  };

  const handleQuantityChange = (productId, value) => {
    const newQty = Math.max(0, parseInt(value, 10) || 0);
    const currentQty = quantities[productId] || 0;
    const product = products.find(p => p.id === productId);
    
    if (product) {
      const quantityDiff = newQty - currentQty;
      const totalCost = product.price * quantityDiff;
      
      // Only proceed if we have enough balance for the increase
      if (balance + (currentQty * product.price) >= newQty * product.price) {
        setQuantities(prev => ({
          ...prev,
          [productId]: newQty
        }));
        
        // Update cart
        if (newQty > 0) {
          setCart(prev => ({
            ...prev,
            [productId]: newQty
          }));
        } else {
          // Remove from cart if quantity is 0
          const newCart = {...cart};
          delete newCart[productId];
          setCart(newCart);
        }
        
        // Update balance based on the difference
        setBalance(prev => prev - totalCost);
      }
    }
  };

  // Calculate receipt items and total
  const receiptItems = [];
  let totalSpent = 0;
  
  Object.entries(cart).forEach(([productId, quantity]) => {
    if (quantity > 0) {
      const product = products.find(p => p.id === parseInt(productId, 10));
      if (product) {
        const total = product.price * quantity;
        totalSpent += total;
        receiptItems.push({
          ...product,
          quantity,
          total
        });
      }
    }
  });

  return (
    <div className="app">
      <header>
        <div className="profile-container">
          <div className="profile-image">
            <img 
              src="https://neal.fun/spend/billgates.jpg"
              alt="Bill Gates" 
              className="profile-img"
            />
          </div>
          <h1>Spend Bill Gates' Money</h1>
        </div>
      </header>
      <div className="balance-container">
        <div className="balance">
          {formatCurrency(balance)}
        </div>
      </div>

      <main>
        <div className="products-grid">
          {products.map(product => {
            const productInCart = cart[product.id] || 0;
            const quantity = quantities[product.id] || 1;
            
            return (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} className="product-img" />
                  <div className="product-name">{product.name}</div>
                </div>
                <div className="product-price">{formatCurrency(product.price)}</div>
                <div className="product-actions">
                  <button 
                    className="sell-btn" 
                    onClick={() => handleSell(product.id, product.price)}
                    disabled={!productInCart}
                  >
                    Sell
                  </button>
                  <input 
                    type="number" 
                    min="0" 
                    value={quantities[product.id]}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="quantity-input"
                  />
                  <button 
                    className="buy-btn"
                    onClick={() => handleBuy(product.id, product.price)}
                    disabled={balance < product.price * quantities[product.id]}
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {receiptItems.length > 0 && (
          <div className="receipt">
            <h2>Your Receipt</h2>
            <div className="receipt-items">
              {receiptItems.map(item => (
                <div key={item.id} className="receipt-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-total">{formatCurrency(item.total)}</span>
                </div>
              ))}
              <div className="receipt-total">
                <span>TOTAL:</span>
                <span>{formatCurrency(totalSpent)}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
