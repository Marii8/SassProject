$(function(){

// pastryの画像を配列に入れて、その数だけダグに入れて表示させる-----
    let arry = ["../img/plieauchocolat.jpg", "../img/shokupan.jpg", "../img/painauxpaisins.jpg", "../img/patatedouce.jpg", "../img/tourte.jpg", "../img/batarl.jpg", "../img/plieauchocolat.jpg",
    ];

    let list = window.$('#js-bread-list');
    let breadImg;
    let filter;
    let i;

    for(i = 0; i < arry.length; i++) {
        breadImg = $('<li>')
            breadImg.html(`<img src="${arry[i]}" alt="breadImg[${i}]" class="bread-image" id="breadImg${i}" />`);
        list.append(breadImg);
    }
//_bakery.scss pastryの画像表示 ここまで



    $('#breadImg0').hover(
        function() { //マウスカーソルが重なった時の処理
            console.log('hovered!!');
        filter = $('<div>');
        filter.addClass('filter');
            console.log(filter);
            console.log(list);
    $('#breadImg0').parent().append();
    },
        function() { //マウスカーソルが離れた時の処理
            console.log('mouseleft!');
        filter.toggle('filter');
    });

 });