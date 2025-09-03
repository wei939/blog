export function setCookie(name, value, days) {
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
