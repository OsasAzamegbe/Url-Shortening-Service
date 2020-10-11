
const CHARS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const generateKeys = (length, str, size, keys, index) => {

    if (str.length === length){
        keys.push({
            key: str.join("")
        })
        return
    }

    for(let i = index; i < 62; i ++){
        str.push(CHARS[i])
        generateKeys(length, str, size, keys, i + 1)
        str.pop()

        if(keys.length === size){
            return
        }
    }
}

const genKeys = (length, size) => {
    
    let keys = []
    generateKeys(length, [], size, keys, 0)

    return keys
}

module.exports = {genKeys}




