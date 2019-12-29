import * as React from "react";
import { loadImageToCanvas, LoadImageOptions } from "./load-image-to-canvas";

interface ImageProps {
    src: string;
    loadOptions?: LoadImageOptions;
}

export class Image extends React.Component<ImageProps> {
    private container: HTMLAnchorElement;

    public async componentDidMount() {
        await this.renderImage();
    }

    public async componentDidUpdate(prevProps: ImageProps) {
        if (this.props.src === prevProps.src) {
            return;
        }

        await this.renderImage();
    }

    public render() {
        return <a ref={el => this.container = el} href={this.props.src} className="loaded-image-container" />;
    }

    private async renderImage() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }

        const canvas = await loadImageToCanvas(this.props.src, this.props.loadOptions);

        this.container?.appendChild(canvas);
    }
}
