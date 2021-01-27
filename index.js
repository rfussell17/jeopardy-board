async function getCategories(count, offset) {
  let res = await fetch(
    `https://jservice.io/api/categories?count=${count}&offset=${offset}`
  );
  let data = await res.json();
  return data;
}

function getCategoryHtml(category) {
  return `
      <div class="my-category-title">${category.title}</div>
      
      <div class="my-category-clue" style="grid-row-start: 2">$200</div>
      <div class="my-category-clue" style="grid-row-start: 3">$400</div>
      <div class="my-category-clue" style="grid-row-start: 4">$600</div>
      <div class="my-category-clue" style="grid-row-start: 5">$800</div>
      <div class="my-category-clue" style="grid-row-start: 6">$1000</div>
  `;
}

getCategories(6, 5).then((categories) => {
  console.log(categories);
  document.body.innerHTML = `<div class="board">
      ${categories.map(getCategoryHtml).join("")}
  </div>`;
});
