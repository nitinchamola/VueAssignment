export default {
    template: `
        <form @submit.prevent="add">
            <div  class="border border-gray-600 text-black flex">
                <input type="text" v-model="newAssignment" Placeholder="New Assignment...." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l hover:bg-green-600"> Add </button>
            </div>
        </form>
    `,

    // Read the new assignement from input box same we bind above with v-model="newAssignment"
    data() {
        return {
            newAssignment: ''
        }
    },

    // We can also achieve this using prop attribute and pass that assignments variable from Assignments.js componenet.
    // But better way is to use $emit. Which notify to parent component (Assignments.js in this case)... that I have mew assignment
    // If you want to fo something with this. This is called parent/child interaction of components.

    // NOTE: Parent communicate to the child through props and child communicate to parent through $emit
    methods: {
        add() {
            this.$emit('add', this.newAssignment),

            this.newAssignment = '';
        }
    }
}