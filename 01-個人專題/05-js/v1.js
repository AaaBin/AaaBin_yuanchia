let thumbs_bgs = document.querySelectorAll('.product_thumb img');
        // console.log(thumbs_bgs);
        // console.log(thumbs_bgs[0]);
        thumbs_bgs.forEach(thumbs_bg => {
            thumbs_bg.onmouseover = function(){
                    thumbs_bg.setAttribute('src','../01-img/測試用圖片/芝芝葡萄1.png')
            }
            thumbs_bg.onmouseout = function(){
                    thumbs_bg.setAttribute('src','../01-img/測試用圖片/草莓奶酪.png')
                }
        });

// about_us的折疊內容，當有任一內容被顯示時，隱藏其他內容
$('.about_us_feature').on('show.bs.collapse', function () {
        $('.about_us_feature article').collapse('hide');
})

$('#feature1').on('shown.bs.collapse', function () {
        $('.about_us_img_area img').attr('src','../01-img/測試用圖片/草莓奶酪.png');
})
$('#feature2').on('shown.bs.collapse', function () {
        $('.about_us_img_area img').attr('src','../01-img/測試用圖片/芝芝葡萄1.png');
})
$('#feature3').on('shown.bs.collapse', function () {
        $('.about_us_img_area img').attr('src','../01-img/測試用圖片/芝芝葡萄2.png');
})
$('#feature4').on('shown.bs.collapse', function () {
        $('.about_us_img_area img').attr('src','../01-img/測試用圖片/test.jpg');
})