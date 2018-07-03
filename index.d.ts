

// export as namespace Filters;

export = Filters;

export declare class Filters {

    constructor();

    /**
     * Grayscale the image, and you can control effect of it by parameter.
     *
     * Important!!!  This changes didn't have back effect. It mean, when you pass effect = 0, you will receive a base image data,
     * but this is just feature of this method.
     *
     * @param {ImageData} pixels
     * @param {number} effect - in percents from 1 to 100
     * @returns {ImageData}
     */
    grayscale(pixels: ImageData, effect: number): ImageData;

    /**
     * BrightnessContrast method could change both brightness and contrast for same range of time
     *
     * @param {ImageData} pixels
     * @param {number} brightness in range from -1 to 1, where 0 - is original
     * @param {number} contrast in range from 1 to 3, where 1 - is original
     * @returns {ImageData}
     */
    brightnessContrast(pixels: ImageData, brightness: number, contrast: number): ImageData;
}

