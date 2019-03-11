# load-image-react

Use [blueimp-load-image](https://www.npmjs.com/package/blueimp-load-image) in React

## Installation

    npm install load-image-react

## Usage

```typescript
import { Image } from "load-image-react";

const SomeComponent = () => {
    return (
        <>
            <h2>My Image</h2>
            <Image
                src="some-image-url.png"
                loadOptions={{
                    downsamplingRatio: 0.5,
                    maxWidth: 200,
                    maxHeight: 200
                }}
            />
        </>
    );
};
```

### Load options

The `loadOptions` prop is passed into [blueimp-load-image](https://www.npmjs.com/package/blueimp-load-image#options). `canvas` and `orientation` will always be set to `true`.

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT License](LICENSE)
