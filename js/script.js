// 【スクロールフェードイン】
// アニメーションを実行したいエレメントを取得
const fadeInTarget = document.querySelectorAll(".scroll-fade");
// スクロール時に動作
window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTarget.length; i++){
        // 要素の先頭までの距離を取得
        const rect = fadeInTarget[i].getBoundingClientRect().top;                   
        // 天井からの距離を取得
        const scroll = window.pageYOffset || document.documentElement.scrollTop;    
        const offset = rect + scroll;                                               
        // 現在のブラウザの高さを取得
        const windowHeight = window.innerHeight;                                    
        // 条件と一致する時、フェードイン用クラスを付与
        if (scroll > offset - windowHeight + 150) {                                 
            fadeInTarget[i].classList.add("scroll-in");
        }
    }
});

// ハンバーガーメニュー
// アニメーションを実行したいエレメントを取得
const ham = document.querySelector(".page-header__hamberger-btn");
const menu = document.querySelector(".page-header__menu")
// ハンバーガーボタンクリック時に動作
ham.addEventListener("click", function () { 
    // バンバーガーボタンに動作クラスを付与
    ham.classList.toggle("active");
    // ハンバーガーメニューにオープンクラスを付与
    menu.classList.toggle("open");
});

// スクロールアイコン表示
// アニメーションを実行したいエレメントを取得
const scrollIcon = document.querySelectorAll(".icon-in");
// ページロード時に動作
window.addEventListener("load",function() {
    // スクロールアイコン表示クラスを付与
    scrollIcon[0].classList.add("scroll-icon-in");
});

// スクロールアイコン非表示
// スクロール時に動作
window.addEventListener("scroll", function(){
    // スクロールアイコン非表示クラスを付与
    scrollIcon[0].classList.add("scroll-icon-fadeout");
});

// ページトップ遷移
// スクロール量を取得する関数
function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

// トップに戻るボタンの要素を取得
let topPage = document.querySelectorAll(".page-top");
            
// ボタンの表示・非表示
// スクロール時に動作
window.addEventListener("scroll", function(){
    // 条件と一致する時、フェードイン用/フェードアウト用クラスを付与
    ( getScrolled() > 500 ) ? topPage[0].classList.add("is-fadein"): topPage[0].classList.remove( 'is-fadein' );
});

// トップに移動する関数
function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
};
            
// イベント登録
// トップページ遷移ボタン押下時に動作
topPage[0].addEventListener("click", function() {
    scrollToTop();
});

// バナー
// バナーの表示・非表示
let banner = document.querySelectorAll(".banner");
// スクロール時に動作
window.addEventListener("scroll", function(){
    // 条件と一致する時、フェードイン用/フェードアウト用クラスを付与
    ( getScrolled() > 500 ) ? banner[0].classList.add("banner-in"): banner[0].classList.remove( 'banner-in' );
});

// イベント登録
// バナー削除ボタン押下時に動作
banner[0].addEventListener("click", function() {
    // 非表示用クラスを付与
    banner[0].classList.add("delete")
});
