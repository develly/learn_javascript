// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // const result = fruits[0] + fruits[1] + fruits[2]
    const result = fruits.join('');
    console.log(result);
}
  
// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result1 = fruits.split(','); 
    const result2 = fruits.split(',', 2); 
    console.log(result1);
    console.log(result2);
}
  
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 원래 array도 변형시킴    
}
  
// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const arr1 = array.slice(2, 5); // splice는 배열 자체를 수정, slice 는 새로운 배열 생성
    console.log(arr1);
    console.log(array); 
}
  
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
  
// Q5. find a student with the score 90
{
    // const result = students.find(function (student) {
    //     return student.score === 90;
    // })
    // console.log(result)

    const result = students.find( (student) => student.score === 90);
    console.log(result) // find는 찾으면 찾은 값 리턴하고 종료함
}

// Q6. make an array of enrolled students
{
    // const result = students.filter((student) => student.enrolled === true);
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50) ; // 점수 50보다 작은 사람 있으면 true 리턴
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); // 전부 맞으면 true
    console.log(result2) 
}

// Q9. compute students' average score
{
    // console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev, curr);
    //     return curr
    // })

    // console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev, curr);
    //     return curr
    // }, 0)

    // console.clear();
    // const result = students.reduce((prev, curr) => {
    //     console.log('--------');
    //     console.log(prev, curr);
    //     return prev + curr.score
    // }, 0)

    console.clear();
    const result = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // const result = students.map((student) => student.score);
    // const result2 = result.join();

    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    console.clear();
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result)
}