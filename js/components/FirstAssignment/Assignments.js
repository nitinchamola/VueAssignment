import AssignmentList  from './AssignmentList.js';
import AssignmentCreate  from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">

            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            
            <assignment-list
                v-if="showCompleted"
                :assignments="filters.completed" 
                title="Completed" 
                canToggle
                @toggle="showCompleted = !showCompleted"
            >
            </assignment-list>
            
            <!-- Here is @add is the custom method defined in AssignmentCreate.js (child component).
            // this can also be define like v-on:add -->
            
        </section>
    `,

    data() {
        return {

            assignments: [
                // {name: "First Assignment", complete: false, id: 1, tag: "math"},
                // {name: "Second Assignment", complete: false, id: 2, tag: "science"},
                // {name: "Third Assignment", complete: false, id: 3, tag: "math"}
            ],

            showCompleted:true

        }
    },

    created() {
        fetch('https://1255-210-89-39-2.in.ngrok.io/api/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data;
                console.log(data);
            });
    },

    computed: {
        /* inProgressAssignment() {
            return this.assignments.filter(a => ! a.complete)
        },

        completedAssignment() {
            return  this.assignments.filter(a => a.complete)
        }, */

        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name, // This name is returned from AssignmentCreate.js (child component) through this.$emit method.
                complete: false,
                id: this.assignments.length + 1
            });
        }
    }
}