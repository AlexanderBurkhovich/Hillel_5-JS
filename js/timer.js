const KEY_CODE_ESC = 27;
const ONE_SECOND = 1000;

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

class Timer {
    constructor(selectorElement) {
        this._element = document.querySelector(selectorElement);

        this.timer = 0;
        this._timerID = null;
    }

    createTimeString(sec) {
        let min = parseInt(sec / SECONDS_IN_MINUTE, 10);
        let hour = parseInt(min / MINUTES_IN_HOUR, 10);

        sec = sec % SECONDS_IN_MINUTE;
        min = min % MINUTES_IN_HOUR;
        hour = hour % HOURS_IN_DAY;

        return `${hour < 10 ? `0` + hour : hour}:${min < 10 ? `0` + min : min}:${sec < 10 ? `0` + sec : sec}`;
    }

    bind() {
        this._element.addEventListener(`mouseover`, this._onTimerElementMouseOver.bind(this));
        this._element.addEventListener(`mouseout`, this._onTimerElementMouseOut.bind(this));
        document.addEventListener(`keydown`, this._onDocumentKeyDown.bind(this));
    }

    _onTimerElementMouseOver() {
        this.stop();
    }

    _onTimerElementMouseOut() {
        this.start();
    }

    _onDocumentKeyDown(evt) {
        if (evt.keyCode === KEY_CODE_ESC) {
            this.stop();
            this.reset();
            this.update();
            this.start();
        }
    }

    update() {
        this._element.innerHTML = this.createTimeString(this.timer++);
    }

    start() {
        this._timerID = setInterval(this.update.bind(this), ONE_SECOND);
    }

    stop() {
        clearInterval(this._timerID);
    }

    reset() {
        this.timer = 0;
    }

    static create(selectorElement) {
        const timer = new Timer(selectorElement)
        timer.bind();
        timer.update();
        return timer;
    }
}

const timer = Timer.create(`#timer`);
timer.start();