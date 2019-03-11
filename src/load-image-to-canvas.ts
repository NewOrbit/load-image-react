import loadImage = require("blueimp-load-image");

export interface LoadImageOptions {
    canvas?: true;
    orientation?: true;

    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    sourceWidth?: number;
    sourceHeight?: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    contain?: boolean;
    cover?: boolean;
    aspectRatio?: number;
    pixelRatio?: number;
    downsamplingRatio?: number;
    crop?: boolean;
    crossOrigin?: boolean;
}

const defaultOptions: LoadImageOptions = {
    canvas: true,
    orientation: true
};

const getOptions = (options: LoadImageOptions) => {
    if (!options) {
        return defaultOptions;
    }

    return {
        ...options,
        ...defaultOptions
    };
};

export const loadImageToCanvas = (src: string, options: LoadImageOptions) => {
    const opts = getOptions(options);

    return new Promise<HTMLCanvasElement>(resolve => {
        loadImage(src,
            (canvas: HTMLCanvasElement) => resolve(canvas),
            opts
        );
    });
};
