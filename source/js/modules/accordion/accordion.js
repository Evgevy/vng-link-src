// export class Accordion {
//   constructor() {
//     this._openHeight = 0;
//     this._documentClickHandler = this._documentClickHandler.bind(this);
//     this._windowResizeHandler = this._windowResizeHandler.bind(this);
//   }

//   init() {
//     document.addEventListener('click', this._documentClickHandler);
//     window.addEventListener('resize', this._windowResizeHandler);
//   }

//   _documentClickHandler(evt) {
//     const target = evt.target;

//     if (!target.closest('[data-accordion="button"]')) {
//       return;
//     }

//     evt.preventDefault();

//     const element = target.closest('[data-accordion="element"]');

//     if (element.classList.contains('is-active')) {
//       this.closeAccordion(element);
//     } else {
//       this.openAccordion(element);
//     }
//   }


//   openAccordion(element) {
//     element.classList.add('is-active');
//   }

//   closeAccordion(element) {
//     element.classList.remove('is-active');
//   }

//   closeAllAccordion(parent) {
//     const elements = parent.querySelectorAll('[data-accordion="element"]');

//     elements.forEach((element) => {
//       element.classList.remove('is-active');
//     });
//   }

//   _resizeObserver() {
//     return new ResizeObserver((entries) => {
//       for (let entry of entries) {
//         if (entry.target.classList.contains('is-active')) {
//           this._updateAccordionHeight();
//         }
//       }
//     });
//   }

//   _updateAccordionHeight() {
//     const closeElements = document.querySelectorAll('[data-accordion="element"]:not(.is-active)');
//   }

//   _windowResizeHandler() {
//   }
// }
export class Accordion {
  constructor() {
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._windowResizeHandler = this._windowResizeHandler.bind(this);
  }

  init() {
    document.addEventListener('click', this._documentClickHandler);
    window.addEventListener('resize', this._windowResizeHandler);
  }

  _documentClickHandler(evt) {
    const target = evt.target;

    if (!target.closest('[data-accordion="button"]')) {
      return;
    }

    evt.preventDefault();

    const element = target.closest('[data-accordion="element"]');
    const parent = target.closest('[data-accordion="parent"]');

    if (element.classList.contains('is-active')) {
      this.closeAccordion(element);
    } else {
      this.closeAllAccordion(parent); // Закрываем все аккордеоны перед открытием нового
      this.openAccordion(element);
    }
  }

  openAccordion(element) {
    const content = element.querySelector('[data-accordion="content"]');
    element.classList.add('is-active');
    content.style.height = content.scrollHeight + 'px';
  }

  closeAccordion(element) {
    const content = element.querySelector('[data-accordion="content"]');
    element.classList.remove('is-active');
    content.style.height = 0;
  }

  closeAllAccordion(parent) {
    const elements = parent.querySelectorAll('[data-accordion="element"]');

    elements.forEach((element) => {
      this.closeAccordion(element);
    });
  }

  _windowResizeHandler() {
    // Обновление высоты при изменении размера окна
  }
}