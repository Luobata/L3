/**
 * @desc text 文字渲染
 * 文字排版相关的都在这个模块
 */

import { IPoint } from 'Lib/interface';

interface IText {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: number;
}

/**
 * default class
 */
export default class Text {
    public position: IPoint;
    protected fontSize: string = '12px';
    protected fontFamily: string = 'microsoft yahei';
    protected fontWeight: number = 100;
    protected text: string = '';

    constructor() {}

    // 返回值boolean考虑init失败的场景
    public init(config: IText, position?: IPoint): boolean {
        Object.assign(this, config);
        if (position) {
            this.position = position;
        }

        return true;
    }

    public getHeight(ctx: CanvasRenderingContext2D): number {
        ctx.save();
        ctx.font = `${this.fontSize} ${this.fontFamily}`;
        ctx.restore();
        // const height: number = this.ctx.measureText('w').width * 1.7;

        return parseInt(this.fontSize, 10);
    }

    public getWidth(ctx: CanvasRenderingContext2D): number {
        ctx.save();
        ctx.font = `${this.fontSize} ${this.fontFamily}`;
        const width: number = ctx.measureText(this.text).width;
        ctx.restore();

        return width;
    }
}
