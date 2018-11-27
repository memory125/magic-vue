import Colorize from "../directives/colorize";

export default {
    data() {
        return {
            first: 50,
            second: 20
        }
    },
    computed: {
        total() {
            return 0;
        }
    },
    directives: {Colorize},
}