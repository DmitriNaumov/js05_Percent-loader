$(function () {

    'use strict';



    function preloader() {
        let preloader = $('.preloader'),
            imagesCount = $('img').length,
            dBody = $('body'),
            percent = 100 / imagesCount,
            progress = 0,
            loadedImg = 0;

        if (imagesCount > 0) {
            dBody.css('overflow', 'hidden');
            for (let i = 0; i < imagesCount; i++) {
                let imgCopy = new Image();
                imgCopy.src = document.images[i].src;
                imgCopy.onload = imgLoad;
                imgCopy.onerror = imgLoad;
            }

            function imgLoad() {
                progress += percent;
                loadedImg++;

                if (progress >= 100 || loadedImg == imagesCount) {

                    setTimeout(function () {
                        preloader.addClass("active");
                        dBody.css('overflow', '');
                        setTimeout(function () {
                            preloader.remove();
                        }, 1000);
                    }, 800);
                }
                $('.preloader__bg').css('transform', 'translateX(calc(-100% + ' + progress + '%))');
                $('.preloader__num').html(progress);
            }
        } else {
            preloader.remove();
        }
    }
    preloader();
});