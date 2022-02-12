import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import { Cryptocurrencies , News } from '../components'

const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()
  const globalStats = data?.data?.stats;

  if (isFetching) return 'loading'

  return (
    <>
      <Title level={2} className="heading">Global Stats</Title>
      <Row>
        <Col span={12}><Statistic title="total crypocurrencies " value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="total Exchanges " value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="total Marketcap " value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="total 24h volumme " value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="total markets " value={millify(globalStats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className='home-title'> Top 10 currencies in the world </Title>
        <Title level={3} className='show-more'> <Link to="/cryptocurrencies" >Show More</Link></Title>
      </div>

      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'> Latest crypto news </Title>
        <Title level={3} className='show-more'> <Link to="./news" >Show More</Link></Title>
      </div>
      <News simplified />

    </>
  )
}

export default Homepage