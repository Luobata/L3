import Chart from '../src/';
// import Chart from '../dist/simply-chart';

window.onload = () => {
    const basicConifg = {
        width: 200,
        height: 100,
        padding: 10,
        renderType: 'none',
        renderTime: 200 / 60,
        framePerSecond: 60,
    };

    const j = new Chart.pie({
        base: {
            ...basicConifg,
        },
    });

    j.update([2, 1, 3, 2.5, 1.5]).render();
};
