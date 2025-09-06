import { ref } from 'vue';
export function useSlideToggle(duration = 300, toggleClass = 'open') {
  const el = ref<HTMLElement | null>(null);
  const is_open = ref(false);

  function slideDown() {
    if (!el.value) return;
    el.value.style.display = 'block';
    const height = el.value.scrollHeight + 'px';

    el.value.style.overflow = 'hidden';
    el.value.style.height = '0px';
    el.value.offsetHeight; // force reflow
    el.value.style.transition = `height ${duration}ms ease`;
    el.value.style.height = height;

    setTimeout(() => {
      el.value!.style.height = '';
      el.value!.style.overflow = '';
      el.value!.style.transition = '';
      el.value!.classList.add(toggleClass);
      is_open.value = true;
    }, duration);
  }

  function slideUp() {
    if (!el.value) return;
    const height = el.value.scrollHeight + 'px';
    el.value.style.height = height;
    el.value.offsetHeight; // force reflow
    el.value.style.transition = `height ${duration}ms ease`;
    el.value.style.height = '0px';
    el.value.style.overflow = 'hidden';

    setTimeout(() => {
      el.value!.style.display = 'none';
      el.value!.style.height = '';
      el.value!.style.transition = '';
      el.value!.style.overflow = '';
      el.value!.classList.remove(toggleClass);
      is_open.value = false;
    }, duration);
  }

  function slideToggle() {
    if (!el.value) return;
    if (getComputedStyle(el.value).display === 'none') {
      slideDown();
    } else {
      slideUp();
    }
  }

  return {
    el,
    is_open,
    slideDown,
    slideUp,
    slideToggle,
  };
}
