/**
 * @desc 标题部分
 */

import { IPoint } from 'Lib/interface';
import Chart from 'UI/chart/chart';
import Text, { IText } from 'UI/component/text';
import Position from 'UI/layout/position';

interface ILabelAttr {
    fill: string;
}

type ILabel = IText & ILabelAttr;

export default class Label extends Text {
    private chart: Chart;
    private config: ILabelAttr;
    // position 用来标志label位置
    private position: Position;

    constructor(chart: Chart, text: string) {
        super(text);
        this.config = {
            fill: 'black',
        };
        this.chart = chart;
        this.position = new Position(this.chart);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.config.fill;
        ctx.font = `${this.fontSize} ${this.fontFamily}`;
        ctx.textBaseline = 'top';
        ctx.fillText(
            this.text,
            this.position.getHorizon('center', this.getWidth(ctx)),
            this.position.getVertical('top', this.getHeight(ctx)),
        );
        ctx.closePath();
        ctx.restore();
    }
}
