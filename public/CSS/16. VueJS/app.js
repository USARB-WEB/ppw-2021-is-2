const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        x: 1,
        y: 0,
        name: "",
        students: [
            {
                name: "Ion Creanga",
                age: 33
            },
            {
                name: "Mihai Eminescu",
                age: 28
            }
        ],
        studentName: "",
        studentAge: "",
        mark: 5
    },
    computed: {
        sum(){
            return Number(this.x) + Number(this.y);
        },
        reversedName(){
            return this.name.split("").reverse().join("");
        }
    },
    methods: {
        addStudent(){
            this.students.push({
                name: this.studentName,
                age: this.studentAge
            });
        },
        deleteStudent(id){
            this.students.splice(id, 1);
        }
    }
})