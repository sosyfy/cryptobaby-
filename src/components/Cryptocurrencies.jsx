import React ,{useState}from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card , Row , Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
  const {data: cryptosList , isFetching} = useGetCryptosQuery();

const [ cryptos , setCryptos] = useState(cryptosList?.data?.coins)
console.log(cryptos);
  



if (isFetching) return 'loading'

  return (
    <>
    <Row gutter={[32,32]} className="crypto-card-container">
      {cryptos.map((currency)=>(
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to={`/crypto/${currency.id}`} />
                <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl}/>}
                >
                 <p>Price: { millify(currency.price)}</p>
                 <p>Market cap: { millify(currency.marketCap)}</p>
                 <p>Daily change: { millify(currency.change)}</p>
                </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies