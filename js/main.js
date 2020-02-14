const navi = document.querySelector('.header-nav'); // nav
const naviBtn = navi.querySelectorAll('.header-nav__button'); // navi 버튼 목록
// const naviClose = naiv.querySelector('.close'); // navi close button
const naviMenuList = navi.querySelector('.header-nav__menu'); // ul 목록
const naviMenu = naviMenuList.querySelectorAll('li'); // ul 태그안에 a영역 & 메뉴닫기버튼
const juiceItem = document.querySelector('.main-juice'); // section 영역
const detail__open = juiceItem.querySelectorAll('.main-juice__front'); // 앞면 h4전체구역(열기버튼)
const detail__close = juiceItem.querySelectorAll('.juice__back-btn'); // 뒷면 닫기버튼
const back = juiceItem.querySelectorAll('.main-juice__back'); // 뒷면 div


window.addEventListener('load', function (e) {
    e.preventDefault;
    const keyCode = e.keyCode;

    // const flag = true;
    // const a = 0;
    // tabindex: while(flag || a <naviMenu.length){
        
    //     const menu = naviMenu[a];
    //     const children = menu.firstElementChild;
        
    //     // for(let i=0; i < naviMenu.length; i++){ 
    //     // }
    //     console.log('a')
    //     if(naviMenuList.classList.contains('visible')){
    //         console.log('a');
    //         children.setAttribute('tabindex','1');
    //         // a = a+1;
    //         break tabindex;
    //     }else {
    //         naviBtn.
    //         children.setAttribute('tabindex','');
    //         // a = a+1;
    //         console.log('a');
    //         break tabindex;
    //     }
    //     a = a+1;
    // }


    if (keyCode == 13 || keyCode == 32 || 'click') {
        let a = 0;

        // menu btn
        addBtn: while (a < naviBtn.length) {
            const btn = naviBtn[a];
            const menu = naviMenu[a];
            const children = menu.firstElementChild;
            console.log('3')
            for(let i=0; i<naviMenu.length; i++) {
                // break addBtn;
            }
            
            btn.addEventListener('click', function (e) {
                if (naviMenuList.classList.contains('flag')) {
                    children.setAttribute('tabindex', '-1');
                }
                else if(naviMenuList.classList.contains('hidden')) {
                    console.log('a')
                    naviMenuList.classList.remove('flag'); 
                    console.log(children.getAttribute('tabindex'));
                    // children.removeAttribute(children.getAttribute('tabindex'));
                    children.removeAttribute('tabindex');
                    children.setAttribute('tabindex','1');
                    naviMenuList.classList.remove('hidden');
                    naviMenuList.classList.add('visible');
                }
                else if (naviMenuList.classList.contains('visible')) {
                    console.log('b')
                    console.log(children.getAttribute('tabindex'));
                    // children.removeAttribute(children.getAttribute('tabindex'));
                    children.setAttribute('tabindex','-1');
                    naviMenuList.classList.remove('visible');
                    naviMenuList.classList.add('hidden');
                } 
            });
            a = a+1;
        }
        

        // detail open
        a = 0;
        addBtn: while (a < detail__open.length) {
            const openBtn = detail__open[a];
            const detail = back[a];
            openBtn.addEventListener('click', function (e) {
                if (detail.classList.contains('detail-open') == false) {
                    detail.classList.remove('detail-close');
                    detail.classList.add('detail-open');
                }
            });
            a = a + 1;
        }

        // detail close
        a = 0;
        addBtn: while (a < detail__close.length) {
            const closeBtn = detail__close[a];
            const detail = back[a];
            closeBtn.addEventListener('click', function (e) {
                if (detail.classList.contains('detail-open') || detail.classList.contains('detail-close') == false) {
                    detail.classList.remove('detail-open');
                    detail.classList.add('detail-close');
                }
            });
            a = a + 1;
        }
    }

});