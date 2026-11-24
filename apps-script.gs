// Google Таблица → Расширения → Apps Script → вставить этот код → Начать развертывание →
// Новое развертывание → Тип: Веб-приложение → Запуск от имени: Я → Доступ: Все → Развернуть.
// Полученную ссылку (…/exec) вставьте в CONFIG.sheetUrl в index.html.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(["Уақыты", "Аты-жөні", "Жауабы"]);
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), String(data.name || "").slice(0, 200), String(data.answer || "").slice(0, 100)]);
  return ContentService.createTextOutput("ok");
}
