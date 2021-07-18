// const fs = require('fs')
// // const pdfparse = require('pdf-parse')

import pdfparse from 'pdf-parse'
import fs from 'fs'

const pdfFile = fs.readFileSync('./static/pdfone.pdf')
// const db = require('../database/db')

// pdfparse(pdfFile).then(function (data){
//     console.log(data.numpages)

//     console.log(data.info)

//     console.log(data.text)
//     const docInserted = await db.in
// })

// const content =  pdfparse(pdfFile).then((data)=>{
//     return data.text
// });

// content.then((data)=>{
//     console.log(data);
// })

const getTextFromPDF = async ()=>{
    const val = pdfparse(pdfFile).then((data)=>{
        return data.text
    });
    return val;
}

const textParser = {
    getTextFromPDF
}

export { textParser }