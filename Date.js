// Date is a built-in object in JavaScript that stores the date and time. It is used to work with dates and times.

// console.log(CurrentDate);
// 2025-01-08T15:21:41.049Z


var CurrentDate = new Date();
CurrentDate.setDate(8);
CurrentDate.setFullYear(2025);
console.log(CurrentDate);
console.log(CurrentDate.toLocaleString('en-IND',{timeZon'}));
console.log(CurrentDate.toLocaleString('en-US',{timeZone:'America/New_York'}));