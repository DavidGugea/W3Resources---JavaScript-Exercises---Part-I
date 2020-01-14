// 126. Write a JavaScript program to create a specified currency formatting from a given number.

/*
 *The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. 
 The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.
*/

const toCurrency = ( amount , currencyType , currencyLanguageFormat) => Intl.NumberFormat(currencyLanguageFormat, {style : "currency" , currency : currencyType }).format(amount);

console.log(toCurrency(123456.789, 'EUR')); // currency: Euro | currencyLangFormat: Local
console.log(toCurrency(123456.789, 'USD', 'en-us')); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrency(123456.789, 'USD', 'fa')); //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrency(322342436423.2435, 'JPY')); //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrency(322342436423.2435, 'JPY', 'fi')); //currency: Japanese Yen | currencyLangFormat: Finnish
