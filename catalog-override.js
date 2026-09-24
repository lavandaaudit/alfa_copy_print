/* catalog-override.js — завантажувач даних каталогу зі сховища GitHub.
   Адмінка (admin.html → «Опублікувати» → «Зберегти на GitHub») сама комітить
   свіжий catalog-override.js у репозиторій lavandaaudit/alfa.copy.print —
   і сайт підтягує його звідти автоматично, перезаливати файл руками не треба.
   (Коли сайт лежить у тому самому репозиторії, цей файл-завантажувач
   замінюється опублікованими даними адмінки напряму.) */
window.CATALOG_OVERRIDE_LOADED = true;
window.CATALOG_OVERRIDE = null;
(function () {
  var U = 'https://lavandaaudit.github.io/alfa.copy.print/catalog-override.js';
  try { document.write('<script src="' + U + '"><\/script>'); } catch (e) {}
})();
