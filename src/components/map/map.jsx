import React from 'react';
import {createRoot} from "react-dom/client";
import {APIProvider} from '@vis.gl/react-google-maps';

const Map = () => (
 <APIProvider apiKey={'Your API key here'} onLoad={() => console.log('Maps API has loaded.')}>
   <h1>Hello, world!</h1>
 </APIProvider>
);

const root = createRoot(document.getElementById('map'));
root.render(<Map />);

export default Map;