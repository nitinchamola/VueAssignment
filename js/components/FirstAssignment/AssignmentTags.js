export default {
    template: `
        <div class="flex gap-2"> 
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-1 text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag == currentTag
                }" 
            > 
                {{ tag }} 
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        // currentTag: String       // when "NOT" using v-model in AssignmentList.js
        currentTag: String          // When "Using" v-model in AssignmentList.js
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
    
}