// Export allows us to import the timer into main.js
export default class Timer {
    constructor(root) { // Root here refers to the DIV with the TIMER class in index.html
        root.innerHTML = Timer.getHTML();

        // this.el = {
        //     minutes: root.querySelector(".timer__part--minutes"),
        //     seconds: root.querySelector("timer__part--seconds"),
        //     control: root.querySelector(".timer__part--control")

        // };
    }

    static getHTML() {
        return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>

        <button type="button" class="timer__btn timer__btn--control timer__btn--start">
            <span class="material-icons">play_arrow</span>
        </button>

        <button type="button" class="timer__btn timer__btn--reset">
            <span class="material-icons">timer</span>
        </button>
        `;
    }
}