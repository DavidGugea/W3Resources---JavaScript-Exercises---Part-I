// 55. Write a JavaScript program to Join all given URL segments together, then normalizes the resulting URL.

let segmentsToUrl = (...segments) => {
    return segments
        .join("/")
        .replace(/[\/]+/g, "/")
        .replace(/(?<=(http:|https:))\//g, "//")
        .replace(/(\/\?)+/g, "?")
        .replace(/\?/g, "&")
        .replace(/(?<=\/\w+)&/g, "?")
}

console.log(segmentsToUrl('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));
// join("/") => "http://www.google.com/a//b/cd/?foo=123/?bar=foo"
// http://www.google.com/a/b/cd?foo=123&bar=foo
// http://www.google.com/a/b/cd?foo=123&bar=foo