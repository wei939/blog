// utils.js
function setCookie(name, value, days) {
    // 使用 escape 函数对 cookie 的值进行编码
    var encodedValue = escape(value);
    
    // 创建一个日期对象
    var date = new Date();
    
    // 设置 cookie 的过期时间
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    
    // 获取过期时间的字符串表示
    var expires = "expires=" + date.toUTCString();
    
    // 设置 cookie
    document.cookie = name + "=" + encodedValue + ";" + expires + ";path=/";
}

/**
 * Checks if a value is null or undefined
 * @param {*} value - The value to check
 * @returns {boolean} - Returns true if the value is null or undefined, otherwise false
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

/**
 * Deep clones an object or array
 * @param {Object|Array} obj - The object or array to clone
 * @returns {Object|Array} - Returns a deep clone of the object or array
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Debounces a function, ensuring it is only called once after a specified delay
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - Returns a debounced version of the function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Formats a date to 'YYYY-MM-DD' string
 * @param {Date} date - The date to format
 * @returns {string} - Returns the formatted date string
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Generates a random integer between min and max, inclusive
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} - Returns a random integer between min and max
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - Returns the string with the first letter capitalized
 */
function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
    setCookie,
    isNullOrUndefined,
    deepClone,
    debounce,
    formatDate,
    getRandomInt,
    capitalizeFirstLetter
};
