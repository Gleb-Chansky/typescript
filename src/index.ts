import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";

window.addEventListener("DOMContentLoaded", () => {
  // renderUserBlock("Wade Warren", "http://linkToAvatar.com", 0); При вызове данной функции иконка сердца не закрашивается и вместо количества пишеться "ничего нет"
  renderUserBlock("Wade Warren", "http://linkToAvatar.com", 10);

  const currentDate = new Date();
  const entryDate = new Date(currentDate.getTime() + 86400000)
    .toISOString()
    .split("T")[0];
  const depatureDate = new Date(currentDate.getTime() + 86400000 * 3)
    .toISOString()
    .split("T")[0];

  renderSearchFormBlock(entryDate, depatureDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
