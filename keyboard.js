function urduKeyboard(id) {
    var m = {
        "^": "ۂ",
        "q": "ق",
        "w": "و",
        "e": "ع",
        "r": "ر",
        "t": "ت",
        "y": "ے",
        "u": "ئ",
        "i": "ی",
        "o": "ہ",
        "p": "پ",
        "a": "ا",
        "s": "س",
        "d": "د",
        "f": "ف",
        "g": "گ",
        "h": "ھ",
        "j": "ج",
        "k": "ک",
        "l": "ل",
        "z": "ز",
        "x": "ش",
        "c": "چ",
        "v": "ط",
        "b": "ب",
        "n": "ن",
        "m": "م",
        "`": "ً",
        ",": "،",
        ".": "۔",
        "Q": "ْ",
        "W": "ّ",
        "E": "ٰ",
        "R": "ڑ",
        "T": "ٹ",
        "Y": "َ",
        "U": "ء",
        "I": "ٰ",
        "O": "ۃ",
        "P": "ُ",
        "A": "آ",
        "S": "ص",
        "D": "ڈ",
        "G": "غ",
        "H": "ح",
        "J": "ض",
        "K": "خ",
        "Z": "ذ",
        "X": "ژ",
        "C": "ث",
        "V": "ظ",
        "N": "ں",
        "M": "٘",
        "~": "ً",
        "?": "؟",
        "F": "ٔ",
        "L": "ل",
        "B": "ب",
        "<": "ِ",
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹"
    };

    let inputText = document.getElementById(id);

    inputText.addEventListener("input", event => {
        let val = inputText.value;

        for (let i = 0; i < val.length; ++i) {
            if (m[val[i]] != undefined) {
                inputText.value = inputText.value.substring(0, val.length - 1);
                inputText.value += m[val[i]];
            }
        }
    })
}
