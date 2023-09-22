import React from 'react'
import request from '../request'
import Header from '../components/Header'
import Row from '../components/Row'

const Netflix = () => {
  return (
    <div>
    <Header/>
    <Row rowId='1' title='Up Coming' fetchURL={request.requestUpcoming}/>
    <Row  rowId='2' title='Trending' fetchURL={request.requestTrending}/>
    <Row  rowId='3' title='Top Rated' fetchURL={request.requestTopRated}/>
    <Row rowId='4' title='Popular' fetchURL={request.requestPopular}/>
    <Row  rowId='5' title='Horror' fetchURL={request.requestHorror}/>
    </div>
  )
}

export default Netflix

