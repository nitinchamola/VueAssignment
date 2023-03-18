export default {
    /* template: `
        <button 
            class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" 
            :disabled="processing"
        >
            <slot />    
        </button> 
    `, */

    template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-gray-200 hover:bg-gray-400': category == 'primary',
                'bg-green-200 hover:bg-gray-400': category == 'secondary',
                'bg-blue-200 hover:bg-gray-400': category == 'muted',
                'is-loading': processing
            }"
            disabled="processing"
        >
            <slot />    
        </button> 
    `,

    // Set the property category and use that category in component.
    /* props: {
        type: String
    }, */

    // Set the property category and use that type in component. This time it's object with multiple values like default.
    props: {
        category: {
            type: String,
            default: 'secondary'
        },

        processing: {
            type: Boolean,
            default: true
        }
    },

    /* data() {
        return {
            processing: false
        };
    } */
}
