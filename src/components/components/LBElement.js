import functions from '../../lib/functions.js';

functions.addCssFile('./components/components/LBElement.css');

export default async function() {
    return {
        name: 'LBElement',
        template: await functions.readFile("components/components/LBElement.html"),
        components: {},
        props: {
            text: {
                type: String,
                default: "Not Found!",
                required: true,
            },
            type: {
                type: String,
                default: "common",
                required: false,
            },
        },
        data: function() {
            return {}
        },
        methods: {}
    }
}