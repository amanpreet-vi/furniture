function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/gallery", false, /\.jpeg$/)
);

// images.forEach((image, index) => {
//   console.log(`Image $(index + 1)`, image);
// });

const Pictures = () => (
  <div>
    {images.map((image, index) => (
      <img
        key={`pictures+${index}`}
        className="productPics"
        src={image}
        alt={`Product ${index + 1}`}
      ></img>
    ))}
  </div>
);

export default Pictures;
