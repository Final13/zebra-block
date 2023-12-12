# Zebra block

## Installation

1. **Install** zebra-block:
```
  npm install zebra-block
```

2. **Import** component into your project
```
  import { Zebra } from 'zebra-block';
```

3. **Usage**.
```
  <Zebra json={json} />
  <Zebra>
    Lorem ipsum...
  </Zebra>
```

4. **Props**.
```
  | prop     | type     | default                    | description                                                                                                                                                            |
|----------|----------|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| as       | string   | 'div'                      | Element type for zebra component                                                                                                                                       |
| children | any      | undefined                  | Content displayed inside zebra (but if you pass Json prop - it preffered by default, and children  will be ignored)                                                    |
| color    | string   | '#fcfcfc77'                | color for dashed border if border declared                                                                                                                             |
| border   | number   | 0                          | number for border in pixels                                                                                                                                            |
| colors   | string[] | ['#fcfcfc77', '#eeeeee77'] | array of two colours for zebra background gradient                                                                                                                     |
| padding  | number   | undefined                  | Zebra padding                                                                                                                                                          |
| height   | number   | undefined                  | maxHeight value for zebra                                                                                                                                              |
| style    | {}       | {}                         | any other styles you want to define for zebra                                                                                                                          |
| json     | {}       | null                       | Json object you can display inside of zebra                                                                                                                            |
| pretty   | boolean  | true                       | If you pass json prop, pretty is active by default for better readability: JSON.stringify(json, null, 2) You also can pass any other varian to display inside children |
```


## Contributing

This project is open for improvements and maintenance. Feel free to fork and make your own modifications.

## License

MIT
