export default {
    borderize(el, binding) {
        if (binding.value) {
            el.classList.add("border", "border-dark");
        } else {
            el.classList.remove("border", "border-dark");
        }
    }
}