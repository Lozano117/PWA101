const Cache_Name='v1_cache_bch_pwa';

var urlsToCache =
[
    './',
    './css/style.css',
    './css/style.min.css',
    './img/logos/96.png',
    "./img/logos/1024.png",
    "./img/logos/128.png",
    "./img/logos/192.png",
    "./img/logos/256.png",
    "./img/logos/384.png",
    "./img/logos/512.png",
    "./img/logos/630.png",
    "./img/logos/Fuego (4).png",
    "./img/logos/Fuego 1080.png",
    "./img/logos/Fuego 1080.png",
    "./img/carousel-1.jpg",
    "./img/carousel-2.jpg",
    "./img/about.jpg",
    "./img/about-1.jpg",
    "./img/about-2.jpg",
    "./img/blog-1.jpg",
    "./img/blog-2.jpg",
    "./img/blog-3.jpg",
    "./img/blog-100x100.jpg",
    "./img/destination-1.jpg",
    "./img/destination-2.jpg",
    "./img/destination-3.jpg",
    "./img/destination-4.jpg",
    "./img/destination-5.jpg",
    "./img/destination-6.jpg",
    "./img/package-1.jpg",
    "./img/package-2.jpg",
    "./img/package-3.jpg",
    "./img/package-4.jpg",
    "./img/package-5.jpg",
    "./img/package-6.jpg",
    "./img/team-1.jpg",
    "./img/team-2.jpg",
    "./img/team-3.jpg",
    "./img/team-4.jpg",
    "./img/testimonial-1.jpg",
    "./img/testimonial-2.jpg",
    "./img/testimonial-3.jpg",
    "./img/testimonial-4.jpg",
    "./img/user.jpg",
    "./scss/bootstrap/scss/_alert.scss", 
    "./scss/bootstrap/scss/_badge.scss", 
    "./scss/bootstrap/scss/_breadcrumb.scss", 
    "./scss/bootstrap/scss/_button-group.scss",
    "./scss/bootstrap/scss/_buttons.scss",
    "./scss/bootstrap/scss/_card.scss",
    "./scss/bootstrap/scss/_carousel.scss",
    "./scss/bootstrap/scss/_close.scss",
    "./scss/bootstrap/scss/_code.scss",
    "./scss/bootstrap/scss/_custom-forms.scss",
    "./scss/bootstrap/scss/_dropdown.scss",
    "./scss/bootstrap/scss/_forms.scss",
    "./scss/bootstrap/scss/_functions.scss",
    "./scss/bootstrap/scss/_grid.scss",
    "./scss/bootstrap/scss/_images.scss",
    "./scss/bootstrap/scss/_input-group.scss",
    "./scss/bootstrap/scss/_jumbotron.scss",
    "./scss/bootstrap/scss/_list-group.scss",
    "./scss/bootstrap/scss/_media.scss",
    "./scss/bootstrap/scss/_mixins.scss",
    "./scss/bootstrap/scss/_modal.scss",
    "./scss/bootstrap/scss/_nav.scss",
    "./scss/bootstrap/scss/_navbar.scss",
    "./scss/bootstrap/scss/_pagination.scss",
    "./scss/bootstrap/scss/_popover.scss",
    "./scss/bootstrap/scss/_print.scss",
    "./scss/bootstrap/scss/_progress.scss",
    "./scss/bootstrap/scss/_reboot.scss",
    "./scss/bootstrap/scss/_root.scss",
    "./scss/bootstrap/scss/_spinners.scss",
    "./scss/bootstrap/scss/_tables.scss",
    "./scss/bootstrap/scss/_toasts.scss",
    "./scss/bootstrap/scss/_tooltip.scss",
    "./scss/bootstrap/scss/_transitions.scss",
    "./scss/bootstrap/scss/_type.scss",
    "./scss/bootstrap/scss/_utilities.scss",
    "./scss/bootstrap/scss/_variables.scss",
    "./scss/bootstrap/scss/bootstrap-grid.scss",
    "./scss/bootstrap/scss/bootstrap-reboot.scss",
    "./scss/bootstrap/scss/bootstrap.scss",
    "./scss/bootstrap/scss/mixins/_alert.scss",
    "./scss/bootstrap/scss/mixins/_background-variant.scss",
    "./scss/bootstrap/scss/mixins/_badge.scss",
    "./scss/bootstrap/scss/mixins/_border-radius.scss",
    "./scss/bootstrap/scss/mixins/_box-shadow.scss",
    "./scss/bootstrap/scss/mixins/_breakpoints.scss",
    "./scss/bootstrap/scss/mixins/_buttons.scss",
    "./scss/bootstrap/scss/mixins/_caret.scss",
    "./scss/bootstrap/scss/mixins/_clearfix.scss",
    "./scss/bootstrap/scss/mixins/_deprecate.scss",
    "./scss/bootstrap/scss/mixins/_float.scss",
    "./scss/bootstrap/scss/mixins/_forms.scss",
    "./scss/bootstrap/scss/mixins/_gradients.scss",
    "./scss/bootstrap/scss/mixins/_grid-framework.scss",
    "./scss/bootstrap/scss/mixins/_grid.scss",
    "./scss/bootstrap/scss/mixins/_hover.scss",
    "./scss/bootstrap/scss/mixins/_image.scss",
    "./scss/bootstrap/scss/mixins/_list-group.scss",
    "./scss/bootstrap/scss/mixins/_lists.scss",
    "./scss/bootstrap/scss/mixins/_nav-divider.scss",
    "./scss/bootstrap/scss/mixins/_pagination.scss",
    "./scss/bootstrap/scss/mixins/_reset-text.scss",
    "./scss/bootstrap/scss/mixins/_resize.scss",
    "./scss/bootstrap/scss/mixins/_screen-reader.scss",
    "./scss/bootstrap/scss/mixins/_size.scss",
    "./scss/bootstrap/scss/mixins/_table-row.scss",
    "./scss/bootstrap/scss/mixins/_text-emphasis.scss",
    "./scss/bootstrap/scss/mixins/_text-hide.scss",
    "./scss/bootstrap/scss/mixins/_text-truncate.scss",
    "./scss/bootstrap/scss/mixins/_transition.scss",
    "./scss/bootstrap/scss/mixins/_visibility.scss",
    "./scss/bootstrap/scss/utilities/_align.scss",
    "./scss/bootstrap/scss/utilities/_background.scss",
    "./scss/bootstrap/scss/utilities/_borders.scss",
    "./scss/bootstrap/scss/utilities/_clearfix.scss",
    "./scss/bootstrap/scss/utilities/_display.scss",
    "./scss/bootstrap/scss/utilities/_embed.scss",
    "./scss/bootstrap/scss/utilities/_flex.scss",
    "./scss/bootstrap/scss/utilities/_float.scss",
    "./scss/bootstrap/scss/utilities/_interactions.scss",
    "./scss/bootstrap/scss/utilities/_overflow.scss",
    "./scss/bootstrap/scss/utilities/_position.scss",
    "./scss/bootstrap/scss/utilities/_screenreaders.scss",
    "./scss/bootstrap/scss/utilities/_shadows.scss",
    "./scss/bootstrap/scss/utilities/_sizing.scss",
    "./scss/bootstrap/scss/utilities/_spacing.scss",
    "./scss/bootstrap/scss/utilities/_stretched-link.scss",
    "./scss/bootstrap/scss/utilities/_text.scss",
    "./scss/bootstrap/scss/utilities/_visibility.scss",
    "./scss/bootstrap/scss/vendor/_rfs.scss",
    "./mail/contact.js ",
    "./mail/contact.php ",
    "./mail/jqBootstrapValidation.min.js",
    "./lib/easing/easing.js ",
    "./lib/easing/easing.min.js",
    "./lib/owlcarousel/owl.carousel.js ",
    "./lib/owlcarousel/owl.carousel.min.js",
    "./lib/owlcarousel/assets/ajax-loader.gif ",
    "./lib/owlcarousel/assets/owl.carousel.css ",
    "./lib/owlcarousel/assets/owl.carousel.min.css ",
    "./lib/owlcarousel/assets/owl.theme.default.css ",
    "./lib/owlcarousel/assets/owl.theme.default.min.css ",
    "./lib/owlcarousel/assets/owl.theme.green.css ",
    "./lib/owlcarousel/assets/owl.theme.green.min.css ",
    "./lib/owlcarousel/assets/owl.video.play.png",
    "./lib/tempusdominus/css/tempusdominus-bootstrap-4.css ",
    "./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css",
    "./lib/tempusdominus/js/moment-timezone.min.js",
    "./lib/tempusdominus/js/moment.min.js", 
    "./lib/tempusdominus/js/tempusdominus-bootstrap-4.js", 
    "./lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js",
    "./.vscode/launch.json",
    "./.vscode/manifest.json"
]

self.addEventListener
('install',e=>
    e.waitUntil
    (
        caches.open(Cache_Name)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(() => {
                self.skipWaiting();
            })

            .catch(err =>
                {
                    console.log('No se registro el cache',err);
                })
        })
    )
);

self.addEventListener('activate', e=>{
    const cacheWitelist=[Cache_Name];
    e.waitUntil(
        caches.keys()
        .then(CacheName =>
            {
                return Promise.all(
                    CacheName.map(CacheName =>
                        {
                            if(cacheWhitelist.indezof(cacheName)=== -1)
                            {
                                return caches.delete(cacheName);
                            }
                        })
                );
            })
            .then(()=>{self.clients.Claim();})
    ); 
});

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res)
            {
                return res;
            }
            return fetch(r.request);
        })
    );
});