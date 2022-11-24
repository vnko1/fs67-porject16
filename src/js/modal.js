(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-order-open]'),
    closeOrderBtn: document.querySelector('[data-order-close]'),
    order: document.querySelector('[data-order]'),
  };

  refs.openOrderBtn.addEventListener('click', toggleOrder);
  refs.closeOrderBtn.addEventListener('click', toggleOrder);

  function toggleOrder() {
    document.body.classList.toggle('order-open');
    refs.order.classList.toggle('is-hidden');
  }
})();
