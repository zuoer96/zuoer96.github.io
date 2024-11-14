document.addEventListener('DOMContentLoaded', function () {
  // 点击一级菜单，切换子菜单
  var menuItems = document.querySelectorAll('.has-sub');
  menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function (event) {
          event.preventDefault(); // 阻止默认行为

          // 切换子菜单的显示
          var submenu = this.nextElementSibling;
          if (submenu && submenu.classList.contains('nb-submenu')) {
              submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
          }

          // 切换三角形图标的方向
          var triangleIcon = this.querySelector('.triangle-icon i');
          if (triangleIcon) {
              triangleIcon.classList.toggle('fa-angle-right');
              triangleIcon.classList.toggle('fa-angle-down');
          }

          // 高亮当前点击的菜单项
          menuItems.forEach(item => item.classList.remove('nb-active')); // 移除其他菜单项的高亮
          this.classList.add('nb-active'); // 添加高亮类到当前项
      });
  });

  // 点击二级子菜单，切换显示
  var subMenuItems = document.querySelectorAll('.nb-submenu .has-sub');
  subMenuItems.forEach(function (subMenuItem) {
      subMenuItem.addEventListener('click', function (event) {
          event.preventDefault(); // 阻止默认行为

          // 切换子菜单的显示
          var subsubmenu = this.nextElementSibling;
          if (subsubmenu && subsubmenu.classList.contains('nb-submenu')) {
              subsubmenu.style.display = subsubmenu.style.display === 'none' || subsubmenu.style.display === '' ? 'block' : 'none';
          }

          // 切换三角形图标的方向
          var triangleIcon = this.querySelector('.triangle-icon i');
          if (triangleIcon) {
              triangleIcon.classList.toggle('fa-angle-right');
              triangleIcon.classList.toggle('fa-angle-down');
          }

           // 高亮当前点击的二级菜单项
           subMenuItems.forEach(item => item.classList.remove('nb-active')); // 移除其他二级菜单项的高亮
           this.classList.add('nb-active'); // 添加高亮类到当前项
      });
  });

  // 点击菜单项时平滑滚动到对应卡片
  var anchorLinks = document.querySelectorAll("a.nb-sidebar-menu-a, a[href^='#']");
  anchorLinks.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          var targetId = this.getAttribute('href').substring(1); // 去掉 '#' 获取目标元素的 ID
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 60, // nav offset 
                  behavior: 'smooth'
              });

              // 高亮当前点击的锚点菜单项
              anchorLinks.forEach(link => link.classList.remove('nb-active')); // 移除其他锚点的高亮
              this.classList.add('nb-active'); // 添加高亮类到当前项
          }
      });

  });

});