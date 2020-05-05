import functions from '../../lib/functions.js';
import LBElement from '../components/LBElement.js';

functions.addCssFile('./components/layouts/LeftBar.css');

export default async function() {
    return {
        name: 'LeftBar',
        template: await functions.readFile("components/layouts/LeftBar.html"),
        components: {
            'lb-element': LBElement,
        },
        props: {
            params: {
                type: Object,
                default: {},
                required: true,
            }
        },
        data: function() {
            return {

            }
        },
        methods: {}
    }
}