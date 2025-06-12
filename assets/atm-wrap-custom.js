const designOptionsContainer = document.getElementById('design-options');
const designSubtexts = designOptionsContainer.querySelectorAll(
  '[data-design-subtext]'
);

designOptionsContainer.addEventListener('change', function (event) {
  if (event.target.type === 'radio') {
    designSubtexts.forEach((designSubtext) => {
      if (
        designSubtext.dataset.designSubtext ===
        event.target.dataset.designOption
      ) {
        designSubtext.classList.remove('hidden');
      } else {
        designSubtext.classList.add('hidden');
      }
    });
  }
});

document
  .getElementById('link-to-cabinet-differences')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const manufactureDetailsAnchor = document.getElementById(
      'shopify-section-template--18960318398720__bcbe5fb8-0ae1-4def-a5cc-fa38416765aa'
    );
    manufactureDetailsAnchor.scrollIntoView({ behavior: 'smooth' });
  });
document
  .getElementById('link-to-material-comparisons')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const materialComparisonsAnchor = document.getElementById(
      'shopify-section-template--18960318398720__multicolumn_KPgfa7'
    );
    materialComparisonsAnchor.scrollIntoView({ behavior: 'smooth' });
  });
document
  .querySelectorAll('[data-link-to-production-process]')
  .forEach((element) => {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      const productionProcessAnchor = document.getElementById(
        'shopify-section-template--18960318398720__collapsible_content_TwAftL'
      );
      productionProcessAnchor.scrollIntoView({ behavior: 'smooth' });
    });
  });
document
  .getElementById('link-to-design-template')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const designTemplateLink = document.querySelector(
      '[data-design-template-link]'
    );
    if (designTemplateLink) {
      console.log(designTemplateLink);
      window.open(`https:${designTemplateLink.dataset.designTemplateLink}`);
    } else {
      window.open('https://getbranded.com/pages/templates');
    }
  });
