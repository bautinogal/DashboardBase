import functions from '../../lib/functions.js';

functions.addCssFile('./components/layouts/RightSide.css');

export default async function() {
    return {
        name: 'RightSide',
        template: await functions.readFile("components/layouts/RightSide.html"),
        components: {},
        data: function() {
            return {

            }
        },
        methods: {}
    }
}