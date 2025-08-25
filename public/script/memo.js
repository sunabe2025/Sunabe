
      (function () {
        document.querySelectorAll('.codecard').forEach(function (card) {
          var src = card.querySelector('.memo__src');
          if (!src) return;

          // 実行させず表示だけする <pre> を生成
          var pre = document.createElement('pre');
          pre.className = 'memo__code';
          pre.textContent = src.textContent.replace(/^\n+|\s+$/g, '');
          src.remove();

          // pre をカード内に配置（バッジ/ボタンの下に来る）
          var badge = card.querySelector('.codecard__badge');
          var btn = card.querySelector('.copy-btn');
          if (badge) { card.insertBefore(pre, badge.nextSibling); }
          else if (btn) { card.insertBefore(pre, btn); }
          else { card.appendChild(pre); }

          // data-lang があればバッジに反映
          if (badge && src.dataset && src.dataset.lang) {
            badge.textContent = src.dataset.lang.toUpperCase();
          }

          // コピー機能
          if (btn) {
            btn.addEventListener('click', function () {
              var text = pre.textContent;
              if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(done, fail);
              } else {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.focus(); ta.select();
                try { document.execCommand('copy'); done(); }
                catch (e) { fail(); }
                finally { document.body.removeChild(ta); }
              }
              function done(){ flash('コピー済'); }
              function fail(){ flash('失敗'); }
              function flash(label){
                var old = btn.textContent;
                btn.textContent = label;
                setTimeout(function(){ btn.textContent = old; }, 1200);
              }
            });
          }
        });
      })();
