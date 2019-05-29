/**
 * @desc requestAnimationFrame
 */
declare global {
    interface Window {
        msRequestAnimationFrame: Function;
        mozRequestAnimationFrame: Function;
    }
}

export default (window &&
    ((window.requestAnimationFrame &&
        window.requestAnimationFrame.bind(window)) ||
        (window.msRequestAnimationFrame &&
            window.msRequestAnimationFrame.bind(window)) ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame)) ||
    // tslint:disable-next-line:no-function-expression
    function(func: Function): void {
        setTimeout(func, 16);
    };
