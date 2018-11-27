export default {
    update(el, binding) {
        // if (binding.value > 100) {
        if (binding.value) {
            el.classList.add("bg-danger", "text-white");
        } else {
            el.classList.remove("bg-danger", "text-white");
        }
    }
}