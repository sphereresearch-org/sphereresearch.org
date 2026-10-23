/**
 * Client-side category filter shared by the blog and article indexes.
 * Runs on every `astro:page-load` because view transitions replace the DOM.
 */
function initCategoryFilter() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.category-filter__btn');
  const grid = document.getElementById('blog-grid');
  if (!buttons.length || !grid) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      buttons.forEach((b) => b.classList.remove('category-filter__btn--active'));
      btn.classList.add('category-filter__btn--active');

      grid.querySelectorAll<HTMLElement>('.blog-card').forEach((card) => {
        const cardCategory = card
          .querySelector('.blog-card__category')
          ?.textContent?.trim()
          .toLowerCase();
        card.style.display = category === 'all' || cardCategory === category ? 'block' : 'none';
      });
    });
  });
}

document.addEventListener('astro:page-load', initCategoryFilter);
