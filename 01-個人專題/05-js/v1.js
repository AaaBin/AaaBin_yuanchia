let thumbs_bgs = document.querySelectorAll('.product_thumb img');
        console.log(thumbs_bgs);
        console.log(thumbs_bgs[0]);
        thumbs_bgs.forEach(thumbs_bg => {
            thumbs_bg.onmouseover = function(){
                    thumbs_bg.setAttribute('src','../01-img/測試用圖片/芝芝葡萄1.png')
            }
            thumbs_bg.onmouseout = function(){
                    thumbs_bg.setAttribute('src','../01-img/測試用圖片/草莓奶酪.png')
                }
        });