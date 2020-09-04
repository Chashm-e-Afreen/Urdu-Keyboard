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
        "W": "ؤ",
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
  
   
    inputText.addEventListener("input", function() {
        let S = [];
        let val = inputText.value;
        //get current cursor position
        let cursorPostion = inputText.selectionEnd;
        //iterate through the text changing all alphanumerics to their Urdu counterparts
        for (let i = 0; i < val.length; ++i) {
            var char = val.charAt(i);
            S.push(m[char]||char);  
        }

        inputText.value = S.join(''); 
        //restore the original cursor position
        inputText.setSelectionRange(cursorPostion,cursorPostion);
    })
  }
