import { Component, useState } from "react";
import PDFReader from "react-pdf-reader";

export default () => (
  <PDFReader
    file="https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf"
    renderType="canvas"
  />
);
