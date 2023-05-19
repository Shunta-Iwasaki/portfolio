// 【スクロールフェードイン】
// アニメーションを実行したいエレメントを取得
const fadeInTarget = document.querySelectorAll(".scroll-fade");
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        const rect = fadeInTarget[i].getBoundingClientRect().top;                   // 要素の先頭までの距離
        const scroll = window.pageYOffset || document.documentElement.scrollTop;    // 天井からの距離
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;                                    // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 150) {                                 // 条件と一致する時、フェードイン用クラスを付与
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});

// ハンバーガーメニュー
// アニメーションを実行したいエレメントを取得
const ham = document.querySelector(".page-header__hamberger-btn");
const menu = document.querySelector(".page-header__menu")
ham.addEventListener('click', function () { 
    ham.classList.toggle('active');
    menu.classList.toggle('open');
});

// スクロールアイコン表示
const scrollIcon = document.querySelectorAll(".icon-in");
window.addEventListener("load",function() {
    scrollIcon[0].classList.add("scroll-icon-in");
});

// スクロールアイコン非表示
window.addEventListener('scroll', function(){
    scrollIcon[0].classList.add('scroll-icon-fadeout');
});

// ページトップ遷移
// スクロール量を取得する関数
function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

// トップに戻るボタンの要素を取得
let topPage = document.querySelectorAll(".page-top");
            
// ボタンの表示・非表示
window.addEventListener('scroll', function(){
    ( getScrolled() > 500 ) ? topPage[0].classList.add( 'is-fadein' ): topPage[0].classList.remove( 'is-fadein' );
});

// トップに移動する関数
function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
};
            
// イベント登録
topPage[0].addEventListener('click', function() {
    scrollToTop();
});

// バナー
// ボタンの表示・非表示
let banner = document.querySelectorAll(".banner");
window.addEventListener('scroll', function(){
    ( getScrolled() > 500 ) ? banner[0].classList.add( 'banner-in' ): banner[0].classList.remove( 'banner-in' );
});

// イベント登録
banner[0].addEventListener('click', function() {
    banner[0].classList.add( 'delete' )
});
