console.log(1);

$(function(){
    console.log(2);
    let arry = ["../img/plieauchocolat.jpg", "../img/shokupan.jpg", "../img/painauxpaisins.jpg", "../img/patatedouce.jpg", "../img/tourte.jpg", "../img/batarl.jpg", "../img/plieauchocolat.jpg",
    ];

    console.log(arry);


    // for(let i = 0; i < arry.length; i++) {
        console.log(arry[0]);

    let list = window.$('#bread-list');
    breadList.innerHTML('<img src="' + arry[0] + '/>');
    list.append(breadList);



    // }


});