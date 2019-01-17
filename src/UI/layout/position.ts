/**
 * @desc 计算位置
 */

import Chart from 'UI/chart/chart';

type positionType = 'top' | 'bottom' | 'middle';
type dirType = 'row' | 'column';

/**
 * default class
 */

export default class Position {
    private chart: Chart;
    private pType: positionType;

    constructor(chart: Chart) {
        this.chart = chart;
    }

    public getPosition(dir: dirType, pType: positionType): number {
        return 0;
    }
}
