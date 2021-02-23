toggleSlide(el, fn) {
      let item = el;

      if (typeof el === 'string') {
        item = document.querySelector(el);
      }

      if (!item.classList.contains('active')) {
        item.classList.add('active');
        item.style.height = 'auto';

        let height = item.clientHeight + "px";

        item.style.height = '0px';

        setTimeout(function () {
          item.style.height = height;
        }, 0);

        item.addEventListener('transitionend', () => {
          item.style.height = 'auto';
        }, {
          once: true
        });


        if (fn)
          fn(item, true);
      } else {
        item.style.height = item.clientHeight + "px";

        setTimeout(function () {
          item.style.height = '0px';
        }, 0);

        if (item.clientHeight === 0) {
          item.classList.remove('active');
        } else {
          item.addEventListener('transitionend', () => {
            item.classList.remove('active');
          }, {
            once: true
          });
        }

        if (fn)
          fn(item, false);
      }
    }
