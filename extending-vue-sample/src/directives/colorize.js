export default {
    // bind(el, binding) {
    //     if (binding.value) {
    //         el.classList.add("bg-danger", "text-white");
    //     } else {
    //         el.classList.remove("bg-danger", "text-white");
    //     }
    // },
    update(el, binding) {
        // if (binding.value > 100) {
        const bgClass = binding.arg || "bg-danger";
        const noMods = Object.keys(binding.modifiers).length == 0;
        if (binding.value) {
            if (noMods || binding.modifiers.bg) {
                el.classList.add(bgClass);
                el.dataset["bgClass"] = true;
            }
            if (noMods || binding.modifiers.text) {
                el.classList.add("text-white");
                el.dataset["textClass"] = true;
            }         
        } else {
            if (el.dataset["bgClass"]) {
                el.classList.remove(bgClass);
                el.dataset["bgClass"] = false;
            }
            if (el.dataset["textClass"]) {
                el.classList.remove("text-white");
                el.dataset["textClass"] = false;
            }            
        }
    },
    // update(el, binding) {
    //     if (binding.value) {
    //         el.classList.add("bg-danger", "text-white");
    //     } else {
    //         el.classList.remove("bg-danger", "text-white");
    //     }
    // }
}


// export default function (el, binding) {
//     if (binding.value) {
//         el.classList.add("bg-danger", "text-white");
//     } else {
//         el.classList.remove("bg-danger", "text-white");
//     }
// }