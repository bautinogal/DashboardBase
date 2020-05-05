import functions from '../../lib/functions.js';
import LeftBar from '../layouts/LeftBar.js';
import RightSide from '../layouts/RightSide.js';

functions.addCssFile('./components/pages/DashboardBase.css');

export default async function() {
    return {
        name: 'App',
        template: await functions.readFile("components/pages/DashboardBase.html"),
        components: {
            'left-bar': LeftBar,
            'right-side': RightSide,
        },
        data: function() {
            return {
                company: {
                    name: String,
                },
                categories: {
                    name: String,
                }
            }
        },
        methods: {}
    }
}