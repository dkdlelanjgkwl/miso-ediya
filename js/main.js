const navi = document.querySelector('.header-nav'); // nav
const naviBtn = navi.querySelectorAll('.header-nav__button'); // navi 버튼 목록
const naviMenu = navi.querySelector('.header-nav__menu'); // ul 목록
const juiceItem = document.querySelector('.main-juice'); // section 영역
const detail__open = juiceItem.querySelectorAll('.main-juice__front'); // 앞면 h4전체구역(열기버튼)
const detail__close = juiceItem.querySelectorAll('.juice__back-btn'); // 뒷면 닫기버튼
const back = juiceItem.querySelectorAll('.main-juice__back'); // 뒷면 div

window.addEventListener('load', function (e) {
    e.preventDefault;
    const keyCode = e.keyCode;
    if (keyCode == 13 || keyCode == 32 || 'click') {
        let a = 0;
        // menu btn
        addBtn: while (a < naviBtn.length) {
            const btn = naviBtn[a];
            btn.addEventListener('click', function (e) {
                if (naviMenu.classList.contains('visible')) {
                    naviMenu.classList.remove('visible')
                    naviMenu.classList.add('hidden');
                } else {
                    naviMenu.classList.remove('hidden')
                    naviMenu.classList.add('visible');

                }
            });
            a = a + 1;
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
                if (detail.classList.contains('detail-open')) {
                    detail.classList.remove('detail-open');
                    detail.classList.add('detail-close');
                }
            });
            a = a + 1;
        }
    }

});