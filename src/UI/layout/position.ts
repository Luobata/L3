/**
 * @desc 计算位置
 */

import Chart from 'UI/chart/chart';

type verticalType = 'top' | 'bottom' | 'middle';
type horizonType = 'row' | 'column';

/**
 * default class
 */

export default class Position {
    private chart: Chart;
    private vType: verticalType;

    constructor(chart: Chart) {
        this.chart = chart;
    }

    // 输入height 垂直方向布局规则 返回起始点坐标
    public getVertical(dir: verticalType, height: number): number {
        const middle: number = this.chart.config.height / 2;
        const end: number =
            this.chart.config.height - this.chart.config.padding;
        const start: number = this.chart.config.padding;

        if (dir === 'top') {
            return this.chart.pixelRatio * start;
        } else if (dir === 'middle') {
            return this.chart.pixelRatio * (middle - height / 2);
        } else {
            return this.chart.pixelRatio * (end - height);
        }
    }

    public getHorizon(dir: horizonTYpe, width: number): number {
        const middle: number = this.chart.config.width / 2;

        return this.chart.pixelRatio * (middle - width / 2);
    }
}
