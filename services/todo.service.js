// A mock server for CDC

const http = require('http')
const baseURL = 'http://localhost:1234'
const axios = require('axios')
import adapter from 'axios/lib/adapters/http';
import Todo from "../classes/Todo.class";

module.exports = {
    fetchTodos: () => {

        return axios.request({
            method: 'GET',
            url: `/todos`,
            baseURL: baseURL,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }, adapter);
        // return new Promise((resolve, reject) => {
        //     http
        //         .get(apiUrl, (resp) => {
        //             let data = ''

        //             resp.on('data', (chunk) => {
        //                 data += chunk
        //             })

        //             resp.on('end', () => {
        //                 resolve(JSON.parse(data))
        //             })
        //         })
        //         .on('error', (err) => {
        //             reject(err)
        //         })
        // })
    }
}