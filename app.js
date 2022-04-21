// Your code goes here

// I tried multiple ways to read from the excel file and use the obtained info in javascript but i none of the methods ive tried have worked,
// the biggest problem i faced with these was the require and the convert-to-json, as they were not working properly.

// const { writeXLSX } = require("xlsx");
// const XLSX = require('xlsx');
// const finalObject = {};

// const data = XLSX.read("names.xlsx", { type: 'buffer' });

// data.SheetNames.forEach(sheetName => {
//     let rowObject = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
//     finalObject[sheetName] = rowObject;
//   });

//   alert(finalObject)


// let fileData = [{
// }];

// XLSX.utils.json_to_sheet(fileData, "output.xlsx");

// let fileReader = new FileReader();
// fileReader.readAsBinaryString("./names.xlsx");
// fileReader.onload = (event) => {
//     let fileData = event.target.result;
//     let workbook = XLSX.read(fileData,{type:"binary"});
//     workbook.SheetNames.forEach(sheet => {
//         let rowData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
//         document.getElementById("resultJsonData").innerHTML = JSON.stringify(rowData,undefined,4)
//    });
// };

// alert(fileData);


// // Create an instance for XlsParser
// var parser = new (require('simple-excel-to-json').XlsParser)();
// var doc = parser.parseXls2Json('names.xlsx');
// //print the data of the first sheet
// alert(doc[0]);


// 'use strict';
// const excelToJson = require('convert-excel-to-json');
 
// const result = excelToJson({
//     sourceFile: 'names.xlsx'
// });
 
// // result will be an Object containing keys with the same name as the sheets found on the excel file. Each of the keys will have an array of objects where each of them represents a row of the container sheet. e.g. for a excel file that has two sheets ('sheet1', 'sheet2')
// {
//     sheet1: [{
//         A: 'data of cell A2',
//         B: 'data of cell B2',
//         C: 'data of cell C2'
//     }]
// }

// alert(result);

