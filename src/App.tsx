import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import samsungimg from '../src/assets/samsung.png'
import samsungNote from '../src/assets/samsung note.png'
import samsungS23 from '../src/assets/samsungS23.png'
import samsungS24 from '../src/assets/samsungS24.png'
import { useState } from 'react'
import { Link } from 'react-router'

interface DataProductTypes {
  discount: string,
  productName: string,
  currentPrice: number,
  image: string,
  originalPrice: number,
  savings: string,
}

const dataProduct: DataProductTypes[] = [
  {
    discount: "56%",
    productName: "Galaxy S22 Ultra",
    currentPrice: 32999,
    image: samsungimg,
    originalPrice: 74999,
    savings: "Save - ₹32999"
  },
  {
    discount: "46%",
    productName: "Galaxy Note Ultra Plus",
    currentPrice: 28999,
    image: samsungNote,
    originalPrice: 53499,
    savings: "Save - 24500",
  },
  {
    discount: "30%",
    productName: "Galaxy  S24",
    currentPrice: 87999,
    image: samsungS24,
    originalPrice: 125999,
    savings: "Save - ₹38000",
  },
  {
    discount: "53%",
    productName: "Galaxy S23",
    currentPrice: 41889,
    image: samsungS23,
    originalPrice: 87999,
    savings: "Save - 46110",
  },
]

function App() {
  // vale, set state, and initial state  
  const [number, setNumber] = useState(0)

  // handle plus
  const handleAdd = () => {
    if (number <10) {
      setNumber(value => value +1)
    } else {
      alert("gak bida lebih dari 10 bro")
    }
  }

  // handle minus
  const handleMinus = () => {
    if (number > 0) {
      setNumber(value => value -1)
    }
  }

  return (
    <>

      <Navbar/>
      <div style={{ display: "flex", width: "100vh", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div>{number}</div>
          <button onClick={handleAdd}>Plus</button>
          <button onClick={handleMinus}>Minus</button>
        </div>Note
        <div className='product-grid'>
          {dataProduct.map((value, index) => {
            return (
              <Link to={"/detail"}>
              <Card
                key={index}
                currentPrice={value.currentPrice}
                discount={value.discount}
                image={value.image}
                originalPrice={value.originalPrice}
                productName={value.productName}
                savings={value.savings}
                />
              </Link>
            )
          })}
    </div>
    </>


  )

}

export default App