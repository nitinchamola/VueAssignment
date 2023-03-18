import Assignment  from './Assignment.js'
import AssignmentTags  from './AssignmentTags.js'

export default {
    components: { Assignment, AssignmentTags },

    template: `
        <section v-show="assignments.length" class="w-70 bg-gray-700 p-4 border border-600 rounded-lg">
            
            <div class="flex justify-between items-start"> 
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span> ({{ assignments.length }}) </span>
                </h2>

                <button v-show="canToggle" @click="$emit('toggle')">&times</button>
            </div>
            
            <!-- Option:1 We can use in followings way second option is usinb v-model -->
            <!-- <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            /> -->

            <!-- Option:1 We can v-model for :current-tag and same changes would be reflected in AssignmentTags.js -->
            <assignment-tags 
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssigments"
                    :key="assignment.id"
                    :assignment="assignment">
                </assignment>
                
            </ul>

            <slot> </slot>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default: false}
    },

    data() {
        return {
            currentTag: "all"
        };
    },

    computed: {

        filteredAssigments() {
            if (this.currentTag == 'all') {
                return this.assignments
            }

            return this.assignments.filter(a => a.tag == this.currentTag)
        }
    }
}