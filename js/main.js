const navi = document.querySelector('.header-nav'); // nav
const naviBtn = navi.querySelectorAll('.header-nav__button'); // navi 버튼 목록
const naviMenu = navi.querySelector('.header-nav__menu'); // ul 목록
const section = document.querySelector('.main-juice');
const detail__open = section.querySelectorAll('.juice__front'); // 앞면 h4전체구역
const detail__close = section.querySelectorAll('.juice__back-btn'); // 뒷면 닫기버튼

window.addEventListener('load',function(e){
    e.preventDefault;
    const keyCode = e.keyCode;
    
    if(keyCode == 13 || keyCode == 32 || 'click'){
        let a = 0;
        
        // menu btn
        addBtn: while(a<naviBtn.length){
            const btn = naviBtn[a];
            // console.log(menu)
            // console.log(1)
            // const menu = list[a];
            // console.log(list)
            btn.addEventListener('click',function(e){
                if(naviMenu.classList.contains('visible')){
                    // menu.setAttribute('tabindex', 0);
                    naviMenu.classList.remove('visible');
                }else {
                    // menu.setAttribute('tabindex', -1);
                    naviMenu.classList.add('visible');
                    
                }
            });
            a = a+1;
        }

        // detail open
        a = 0;
        addBtn: while(a<detail__open.length){
            const btn = detail__open[a];
            btn.addEventListener('click',function(e){
                    if(btn.classList.contains('face--down') == false){
                        btn.classList.add('face--down');
                    }
            });
            a = a+1;
        }


        // detail close
        a = 0;
        addBtn: while(a<detail__close.length){
            if(detail__close.length !== detail__open.length){
                console.log('버튼의 개수가 맞지않습니다.')
                break addBtn;
            }
            const closeBtn = detail__close[a];
            const pCloseBtn = closeBtn.parentElement;
            const openBtn =  pCloseBtn.previousElementSibling;

            closeBtn.addEventListener('click',function(e){
                if(openBtn.classList.contains('face--down')){
                    openBtn.classList.remove('face--down');
                }
            });
            a = a+1;
        }
    }

});