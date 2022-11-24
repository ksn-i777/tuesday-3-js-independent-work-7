//1+. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
function repeatString1(str, num, razd) {
    let arr = []
    for (let i=0; i<num; i++) {
        arr.push(str)
    }
    return arr.join(razd)
}
function repeatString2(str, num, razd) {
    let str2 = (str+razd).repeat(num)
    return str2.slice(0, str2.length - 1) 
    
}
console.log(repeatString1("yo", 3, " "))
console.log(repeatString1("yo", 3, ","))
console.log(repeatString2("yo", 3, " "))
console.log(repeatString2("yo", 3, ","))

//2+. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
function checkStart1(str, start) {
    return str.toLowerCase().slice(0, start.length) === start.toLowerCase().slice(0, start.length)
}
function checkStart2(str, start) {
    const arr = [str.toLowerCase().slice(0, start.length)]
    return arr.indexOf(start.toLowerCase()) === 0
}
function checkStart3(str, start) {
    return str.toLowerCase().startsWith(start.toLowerCase())
}
console.log(checkStart1("Incubator", "inc"))
console.log(checkStart1("Incubator", "yo"))
console.log(checkStart2("Incubator", "inc"))
console.log(checkStart2("Incubator", "yo"))
console.log(checkStart3("Incubator", "inc"))
console.log(checkStart3("Incubator", "yo"))

//3+. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncateString(str, num) {
    return str.slice(0, num) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4+. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
function getMinLengthWord(str) {
    const arr = str.split(' ')
    return str === '' ? null : arr.reduce((acc, el) => acc.length > el.length ? el : acc, arr[0])
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))

//5+. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
function setUpperCase1(str) {
    const arr = str.toLowerCase().split(' ')
    return arr.map(s => {
        return s[0].toUpperCase() + s.slice(1, s.length)
    }).join(' ')
}
function setUpperCase2(str) {
    const arr = str.toLowerCase().split(' ')
    let arr2 = []
    for (let i=0; i<arr.length; i++) {
        arr2.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length))
    }
    return arr2.join(' ')
}
console.log(setUpperCase1("всем стУдентам инкуБатора Желаю удачИ!"))
console.log(setUpperCase2("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6+. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

function isIncludes(string, str) {
    const stringArr = string.toLowerCase().split('')
    const strArr = str.toLowerCase().split('')
    let arr = []
    strArr.forEach(el => {
        if (stringArr.includes(el)) {arr.push(true)}
    })
    return arr.length === strArr.length
}
console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))



