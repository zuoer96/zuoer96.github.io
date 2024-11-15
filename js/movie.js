document.querySelectorAll('.mv-tab').forEach(tab => {
  tab.addEventListener('click', function() {
      // 移除所有Tab的active类
      document.querySelectorAll('.mv-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.mv-tab-content').forEach(c => c.classList.remove('active'));
      // 添加当前Tab的active类
      tab.classList.add('active');
      const contentId = 'mv-content' + tab.id.slice(6); // mv-tab1 截取出数字1
      document.getElementById(contentId).classList.add('active');
  });
});
// 默认激活第一个Tab
document.getElementById('mv-tab1').classList.add('active');
document.getElementById('mv-content1').classList.add('active');
