declare module 'glsl-canvas-js' {
    export class Canvas {
        constructor(
            canvas: HTMLCanvasElement,
            options: any
        )
        loadTexture(
            key: string,
            urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | any,
            options: any
        ): void;

        setTexture(
            key: string,
            urlElementOrData: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | Element | any,
            options: any
        ): void

        setUniform(key: string, ...values: any[]): void;
        setUniformOfInt(key: string, values: any[]): void;
        setUniforms(values: any): void;
        pause(): void;
        play(): void;
        toggle(): void;
        checkRender(): void;
        load(
            fragmentString?: string,
            vertexString?: string
        ): Promise<boolean>

    }
}