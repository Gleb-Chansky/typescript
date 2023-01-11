import { renderBlock } from "./lib.js";

export function renderUserBlock(
  name: string,
  link: string,
  favoriteItemsAmount: number
) {
  renderBlock(
    "user-block",
    `
    <div class="header-container">
      <img class="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${
              favoriteItemsAmount > 0 ? " active" : ""
            }"></i>${
      favoriteItemsAmount > 0 ? favoriteItemsAmount : "ничего нет"
    }
          </p>
      </div>
    </div>
    `
  );
}
