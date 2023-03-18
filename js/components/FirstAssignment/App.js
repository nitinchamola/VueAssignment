import Assignments  from './Assignments.js'
import Panel from './Panel.js';

export default {
    components: { Assignments, Panel },

    template: `
        <div class="grid gap-6">
            <assignments> </assignments>

            <!-- <panel heading="Hello World"/> -->
            <panel> 
                <template v-slot:heading> 
                    Hellow World!!
                </template>

                <template v-slot:default>
                    This is just a sample body. 
                </template>

            </panel>

            <panel> 
                <template v-slot:default>
                    This is just a sample body. 
                </template>

            </panel>

            <panel theme="dark">
                <template v-slot:heading> 
                    Welcome to heading section
                </template>

                This is just a dummy body!!

                <template v-slot:footer>
                    Welcome to Footer section
                </template>

            </panel>

            <panel theme="light">
                <template v-slot:heading> 
                    Welcome to heading section
                </template>

                This is just a dummy body!!

                <template v-slot:footer>
                    Welcome to Footer section
                </template>

            </panel>
        </div>
    `
}