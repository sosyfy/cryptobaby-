import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const  cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '75767b16a0mshd397d5357c537b8p1527bdjsnf0c6a54c4eb6'
}

const baseUrl  = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url)=>({url, headers:cryptoApiHeaders})


export  const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query : () => createRequest('/coins'),
        })
    })

})

export const {
    useGetCryptosQuery
} = cryptoApi

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '75767b16a0mshd397d5357c537b8p1527bdjsnf0c6a54c4eb6'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });