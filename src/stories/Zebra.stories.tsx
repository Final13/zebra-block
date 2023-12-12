import React from 'react';
import { Zebra } from '../components/Zebra/Zebra';

export default { title: "Example/Zebra", component: Zebra };
export const DefaultChildren = () => (
  <Zebra>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const ChildrenWithCustomColors = () => (
  <Zebra colors={['pink', 'white']}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const ChildrenAsPre = () => (
  <Zebra as='pre'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const ChildrenWithDefaultBorder = () => (
  <Zebra border={2}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const ChildrenWithRedBorder = () => (
  <Zebra border={2} color="red">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const CustomStylePadding20 = () => (
  <Zebra style={{ padding: 20 }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const CustomStyleFontColorRed = () => (
  <Zebra style={{ color: 'red' }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const CustomStyleFontSize20 = () => (
  <Zebra style={{ fontSize: 20 }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const JsonWithChildrenChildrenIgnored = () => (
  <Zebra
    json={{"widget": {
      "debug": "on",
      "window": {
          "title": "Sample Konfabulator Widget",
          "name": "main_window",
          "width": 500,
          "height": 500
      },
      "image": { 
          "src": "Images/Sun.png",
          "name": "sun1",
          "hOffset": 250,
          "vOffset": 250,
          "alignment": "center"
      },
      "text": {
          "data": "Click Here",
          "size": 36,
          "style": "bold",
          "name": "text1",
          "hOffset": 250,
          "vOffset": 100,
          "alignment": "center",
          "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
      }
    }}}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, modi similique, aperiam nesciunt debitis perferendis recusandae corporis ea iste nobis dolor alias minima atque delectus eaque consectetur, inventore vitae. Excepturi?
  </Zebra>
);

export const DefaultJson = () => (
  <Zebra
    json={{"widget": {
      "debug": "on",
      "window": {
          "title": "Sample Konfabulator Widget",
          "name": "main_window",
          "width": 500,
          "height": 500
      },
      "image": { 
          "src": "Images/Sun.png",
          "name": "sun1",
          "hOffset": 250,
          "vOffset": 250,
          "alignment": "center"
      },
      "text": {
          "data": "Click Here",
          "size": 36,
          "style": "bold",
          "name": "text1",
          "hOffset": 250,
          "vOffset": 100,
          "alignment": "center",
          "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
      }
    }}}
/>);
