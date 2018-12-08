$(function(){

// pastryの画像を配列に入れて、その数だけダグに入れて表示させる-----
    let arry = ["../img/plieauchocolat.jpg", "../img/shokupan.jpg", "../img/painauxpaisins.jpg", "../img/patatedouce.jpg", "../img/tourte.jpg", "../img/batarl.jpg", "../img/plieauchocolat.jpg",
    ];

    for(let i = 0; i < arry.length; i++) {
        let list = window.$('#bread-list');
        let breadImg = $('<li>')
            breadImg.html(`<img src="${arry[i]}" alt="breadImg[${i}]" class="bread-image" />`);
        list.append(breadImg);
    }
 }); //_bakery.scss pastryの画像表示 ここまで