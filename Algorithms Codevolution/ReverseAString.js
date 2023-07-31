function reverseString(string) {
        let tempStr = string.split(' ');
        let temp = '';
        for (let i = 0; i < tempStr.length; i++) {
                temp = temp + ' ' + tempStr[i].split('').reverse().join('');
        }
        console.log(temp);
}

reverseString('Welcome to this Javascript Guide!');
