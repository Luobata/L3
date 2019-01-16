/**
 * @desc 标题部分
 */

import { IPoint } from 'Lib/interface';
import Chart from 'UI/chart/chart';
import Text, { IText } from 'UI/component/text.ts';

interface ILabelAttr {
    fill: string;
}

type ILabel = IText & ILabelAttr;

export default class Label extends Text {
    private chart: Chart;
    private config: ILabelAttr;

    constructor(chart: Chart, text: string) {
        super(text);
        this.config = {
            fill: 'black',
        };
        this.chart = chart;
    }

    public render(ctx: CanvasRenderingContext2D, position?: IPoint): void {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.config.fill;
        ctx.font = `${this.fontSize} ${this.fontFamily}`;
        ctx.textBaseline = 'top';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, 0, 0);
        ctx.closePath();
        ctx.restore();
    }
}
