
const getQuantityCategories = document.querySelectorAll(".categories-item");
console.log('Number of categories:', getQuantityCategories.length);

getQuantityCategories.forEach(category => {
    const getTextCategory = category.querySelector('.category-title');
    console.log('Category:', getTextCategory.textContent);
    const getCategoryQuantityEl = category.querySelectorAll('.category-item');
    console.log('Elements:', getCategoryQuantityEl.length);
});