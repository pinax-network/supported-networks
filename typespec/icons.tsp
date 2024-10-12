namespace TheGraph.Icons;

model Icon {
  // IPFS URL of the icon
  url: string;

  // width in pixels
  width: int;

  // height in pixels
  height: int;

  // image format (ex: png,jpeg)
  format: string;
}