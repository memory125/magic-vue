function required(name) {
    return {
        validator: (value) => value != "" && value !== undefined && value !== null,
        messgae: "A value is required for " + name
    }
}

function minLength(name, minlength) {
    return {
        validator: (value) => String(value).length >= minlength,
        messgae: "At least " + minlength + " characters are required for " + name
    }
}

function alpha(name) {
    return {
        validator: (value) => /^[a-zA-Z]*$/.test(value),
        messgae: name + " can only contain letters"
    }
}

function numeric(name) {
    return {
        validator: (value) => /^[0-9]*$/.test(value),
        messgae: name + " can only contain digits"
    }
}

function range(name, min, max) {
    return {
        validator: (value) => value >= min && value <= max,
        messgae: name + " must be between " + min + " and " + max
    }
}

export default {
    name: [minLength("Name", 3)],
    category: [required("Category"), alpha("Category")],
    price: [numeric("Price"), range("Price", 1, 1000)]
}