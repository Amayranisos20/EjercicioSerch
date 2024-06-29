let student1Courses = ['Math', 'English', 'Programming', `Quimica` , `Etnobiología`];
//Cada elemento se compara con cada uno de los elementos 

let student2Courses = ['Geography', 'Spanish', 'Programming',`Ciencias ocultas` ];


const commonCourses = [];
for (let course1 of student1Courses) {
    console.log( course1); //Math 
    for(let course2 of student2Courses){
        if(course1 === course2) console.log(course1, course2); 
        //tambien se puede realizar de esta manera 
        //commonCourses.push( course1);

    }
}

