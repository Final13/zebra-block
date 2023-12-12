# Zebra block

1. **Install** zebra-block:

    ```
    npm install zebra-block
    ```

2. **Import** component into your project

    ```
    import { Zebra } from 'zebra-block';
    ```

3. **Usage examples**:

// Example 1: Default Zebra Block
```
<Zebra>
  {/* Any content you want to show inside Zebra Block */}
</Zebra>
```
// Example 2: Zebra Block with JSON Object
```
const jsonExample = {
  key: 'value',
  nested: { anotherKey: 'anotherValue' },
};
<Zebra json={jsonExample} />
```
// Example 3: Zebra Block with Custom Colors

```
<Zebra colors={['#ff9999', '#ffcc99']}>
  {/* Custom content */}
</Zebra>
```
// Example 4: Zebra Block with Border and Padding
```
<Zebra border={2} padding={10}>
  {/* Custom content */}
</Zebra>
```
// Example 5: Zebra Block with fixed Max Height
```
<Zebra height={150}>
  {/* Custom content */}
</Zebra>
```
// Example 6: Zebra Block with Custom Styles
```
<Zebra style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
  {/* Custom content */}
</Zebra>
```
// Example 7: Zebra Block with Custom Element Type
```
<Zebra as="pre">
  {/* Custom content */}
</Zebra>
```
// Example 8: Zebra Block with JSON (ignores Children prop)
```
<Zebra json={jsonExample}>
  {/* This content will be ignored, because JSON prop passed */}
  <p>Custom content</p>
</Zebra>
```

4. **Props**:

    | prop     | type     | default                    | description                                                                                                                                                            |
    |----------|----------|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | as       | string   | 'div'                      | Element type for zebra component                                                                                                                                       |
    | children | any      | undefined                  | Content displayed inside zebra (but if you pass Json prop - it preferred by default, and children will be ignored)                                                    |
    | color    | string   | '#fcfcfc77'                | color for dashed border if border declared                                                                                                                             |
    | border   | number   | 0                          | number for border in pixels                                                                                                                                            |
    | colors   | string[] | ['#fcfcfc77', '#eeeeee77'] | array of two colours for zebra background gradient                                                                                                                     |
    | padding  | number   | undefined                  | Zebra padding                                                                                                                                                          |
    | height   | number   | undefined                  | maxHeight value for zebra                                                                                                                                              |
    | style    | {}       | {}                         | any other styles you want to define for zebra                                                                                                                          |
    | json     | {}       | null                       | Json object you can display inside of zebra                                                                                                                            |

5. **Development**:

   - Run the Storybook for local development:

     ```
     npm run storybook
     ```

     Explore existing examples in Storybook and add your own stories to showcase different features or use cases for the Zebra block component.

## Contributing

This project is open for improvements and maintenance. Feel free to fork and make your own modifications.

## License

MIT
