/**
 * @desc 标题部分
 */

import Chart from 'UI/chart/chart';
import Text from 'UI/component/text.ts';

export default class Label extends Text {
    private chart: Chart;

    constructor(chart: Chart) {
        super();
        this.chart = chart;
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.save();
    }
}
