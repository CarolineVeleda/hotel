self.addEventListener("install", function (e) {
    var o = new Request("index.html");
    e.waitUntil(fetch(o).then(function (e) {
        caches.open("pwabuilder-offline").then(function (o) {
            return console.log("[PWA Builder] Cached index page during Install" + e.url),
                o.addAll(["/hotel/",
                    "/hotel/index.html",
                    "/hotel/logo.png",
                    "/hotel/images/icons/icon-128x128.png",
                    "/hotel/images/icons/icon-144x144.png",
                    "/hotel/images/icons/icon-152x152.png",
                    "/hotel/images/icons/icon-192x192.png",
                    "/hotel/images/icons/icon-384x384.png",
                    "/hotel/images/icons/icon-192x192.png",
                    "/hotel/images/icons/icon-384x384.png",
                    "/hotel/images/icons/icon-512x512.png",
                    "/hotel/images/icons/icon-72x72.png",
                    "/hotel/images/icons/icon-96x96.png",
                    "/hotel/css/bootstrap-grid.css",
                    "/hotel/css/bootstrap-grid.css.map",
                    "/hotel/css/bootstrap-grid.min.css",
                    "/hotel/css/bootstrap-grid.min.css.map",
                    "/hotel/css/bootstrap-reboot.css",
                    "/hotel/css/bootstrap-reboot.css.map",
                    "/hotel/css/bootstrap-reboot.min.css",
                    "/hotel/css/bootstrap-reboot.min.css.map",
                    "/hotel/css/bootstrap.css.map",
                    "/hotel/css/bootstrap.css",
                    "/hotel/css/bootstrap.min.css.map",
                    "/hotel/css/bootstrap.min.css",
                    "/hotel/js/bootstrap.bundle.js",
                    "/hotel/js/bootstrap.bundle.js.map",
                    "/hotel/js/bootstrap.bundle.min.js",
                    "/hotel/js/bootstrap.bundle.min.js.map",
                    "/hotel/js/bootstrap.js",
                    "/hotel/js/bootstrap.js.map",
                    "/hotel/js/bootstrap.min.js",
                    "/hotel/js/bootstrap.min.js.map"])
        })
    })
    )
}
),
    self.addEventListener("fetch", function (e) {
        var o;
        e.waitUntil((o = e.request,
            caches.open("pwabuilder-offline").then(function (e) {
                return fetch(o).then(function (t) {
                    return console.log("[PWA Builder] add page to offline" + t.url),
                        e.put(o, t)
                })
            })
        )),
            e.respondWith(fetch(e.request).catch(function (o) {
                return console.log("[PWA Builder] Network request Failed. Serving content from cache: " + o),
                    caches.open("pwabuilder-offline").then(function (o) {
                        return o.match(e.request).then(function (e) {
                            return e && 404 != e.status ? e : Promise.reject("no-match")
                        }
                        )
                    }
                    )
            }
            ))
    });