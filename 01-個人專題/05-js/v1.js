// 偵測scrolltop值
let st = document.querySelector("html");
window.onscroll = function () {   //onscroll事件
    // console.log(st.scrollTop)   //scrollTop抓當前頁面頂部到整個html頂部的值
}

let nav = document.querySelector(".navbar");
        window.onscroll = function () {
            if (st.scrollTop >= 900) {
                nav.setAttribute("style", "display:block ; position:fixed;top: 0;width: 100%;");

            } else {
                nav_logo.setAttribute('style','width:0px;');
                nav.setAttribute("style","display:block ; position:fixed;top: 0;width: 100%;animation-name: navbar_out;animation-duration:2s;animation-iteration-count:1;");

            }
        }

        
let nav_logo = document.querySelector('.navbar .container .nav_left_area .nav_logo_area');
nav.addEventListener('animationend',function () {
        nav_logo.setAttribute('style','width:70px;');
})



let thumbs_bgs = document.querySelectorAll('.product_thumb img');
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
// about_us區塊的圖片切換
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




// pruduct區塊的下方縮圖
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

