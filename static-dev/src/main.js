import $ from 'jquery';
import './main.scss';


const worksItem = $('.is-works .is-overlay');
const teamItem = $('.is-team .is-overlay');
const toTopBtn = $('.to-top');
const toDisqusBtn = $('.to-disqus');
const closeNotificationBtn = $('.notification .delete');

// 显示遮罩浮层
const showOverlay = function showOverlay() {
  $(this).css('opacity', '1');
};

// 隐藏遮罩浮层
const hideOverlay = function hideOverlay() {
  $(this).css('opacity', '0');
};

// 作品和团队成员 hover 时触发
$(worksItem).hover(showOverlay, hideOverlay);
$(teamItem).hover(showOverlay, hideOverlay);

// 为通知增加关闭功能
$(closeNotificationBtn).click(function close() {
  $(this).parent().hide();
});

// 页面滚动到 300px 高度时触发
$(document).scroll(() => {
  if ($(document).scrollTop() > 300) {
    toTopBtn.fadeIn();
  } else {
    toTopBtn.fadeOut();
  }
});

// 点击回到顶部按钮时触发
$(toTopBtn).click(() => {
  $('body').animate({
    scrollTop: 0,
  }, 'fast');
  return false;
});

// 点击文章讨论区按钮时触发
$(toDisqusBtn).click(() => {
  $('body').animate({
    scrollTop: $('#disqus_thread').offset().top,
  }, 'fast');
  return false;
});
