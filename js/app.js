$(function(){

// pastryの画像を配列に入れて、その数だけダグに入れて表示させる-----
    let arry = [
        "../img/pastry/croquemonsieur.jpg",
        "../img/pastry/quicheepinardstruitesaumonee.jpg",
        "../img/pastry/plieauchocolat.jpg",
        "../img/pastry/painaufromage.jpg",
        "../img/pastry/shokupan.jpg",
        "../img/pastry/Riviera.jpg",
        "../img/pastry/bichonaucitron.jpg",
        "../img/pastry/painauxpaisins.jpg",
        "../img/pastry/patatedouce.jpg",
        "../img/pastry/tourte.jpg",
        "../img/pastry/croissant.jpg",
        "../img/pastry/baguettedecampagne.jpg",
        "../img/pastry/petitebrioche.jpg",
        "../img/pastry/batarl.jpg",
        "../img/pastry/paind'assas.jpg",
        // "../img/pastry/croquemousieur.jpg",
        // "../img/pastry/bagettemonge.jpg",
        // "../img/pastry/paincomplet.jpg",
    ];

    let list = window.$('#js-bread-list');
    let breadImg;
    let filter;
    let i;

    for(i = 0; i < arry.length; i++) {
        breadImg = $('<li>')
            breadImg.html(`<img src="${arry[i]}" alt="breadImg[${i}]" class="bread-image" id="breadImg${i}" />`);
        list.append(breadImg);
    };
//_bakery.scss pastryの画像表示 ここまで



    // $('#breadImg0').hover(
    //     function() { //マウスカーソルが重なった時の処理
    //         console.log('hovered!!');
    //         console.log(this);
    //     filter = $('<div>');
    //     filter.addClass('filter');
    //         console.log(filter);
    //         console.log(list);
    // $('#breadImg0').parent().append(filter);
    // },
    //     function() { //マウスカーソルが離れた時の処理
    //         console.log('mouseleft!');
    //     filter.toggle('filter');
    // });

    $('#scrollcheck').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#scrollcheck').fadeIn();
        } else {
            $('#scrollcheck').fadeOut();
        }
    }); //




 }); //jQuery おまじない閉じタグ

// _mariko.html
$(function () {
    let h = 400; 
    // ウィンドウの高さを取得
    let spead = 500; // フェードインスピード
    $('.contents').each(function () {
        $(this).css({
            height: h
        });
    });
    $(window).on('scroll', function () {
        let scrollpx = $(this).scrollTop(); //スクロール量観測
            console.log(scrollpx);
        $('.fadeDone').each(function () { //eachメソッドについてhttps://www.sejuku.net/blog/33609
            let thisTop = $(this).offset().top; //コンテンツの高さ
            console.log(thisTop);
            let thisShow = thisTop - h ; //出現位置
            console.log(thisShow);
            if (scrollpx >= thisShow) {
                $(this).stop().animate({
                    opacity: 1
                }, spead);
            } else {
                $(this).stop().animate({
                    opacity: 0.3
                }, spead);
            }
        });
    });
});