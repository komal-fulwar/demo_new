! function() {
    document.documentElement.className = document.documentElement.className.replace("no-js", "js"), window.onload = function() {
        document.documentElement.className = document.documentElement.className.replace("js-preload", "js-ready")
    };
    let e = "light";
    if (localStorage.hasOwnProperty("mode")) e = localStorage.getItem("mode");
    else {
        window.matchMedia("(prefers-color-scheme: dark)").matches && (e = "dark"), localStorage.setItem("mode", e)
    }
    "dark" == e && document.documentElement.classList.add("dark-mode")
}();