import { TesseractWorker } from 'tesseract.js';
const worker = new TesseractWorker();

import image from "../assets/test.png"

worker.recognize(image)
  .progress(progress => {
    console.log('progress', progress);
  }).then(result => {
    console.log('result', result);
  });

