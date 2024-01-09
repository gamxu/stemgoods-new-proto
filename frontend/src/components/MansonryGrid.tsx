import axios from "axios";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

function MansonryGrid() {
  const [ImagesUrl, setImagesUrl] = useState([]);

  //   const propsImages = [
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //   ];

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1,
  };

  const accessKey = import.meta.env.VITE_UNSPLASH_API;

  useEffect(() => {
    async function fetcher() {
      await axios
        .get(
          `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`
          //   "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_4x3.jpg"
        )
        .then((res) => {
          setImagesUrl(res.data);
          console.log(ImagesUrl)
        })
        .catch((err) => console.log(err));
    }
    fetcher();
  }, []);

  return (
    <div className="w-[98%] m-auto pt-20 pb-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto "
        columnClassName="pl-4 bg-clip-padding"
      >
        {ImagesUrl.map((image, i) => (
          <div className="mb-4" key={i}>
            <img
              className="rounded-[7px]"
              width={640}
              height={480}
              alt=""
              src={image.urls.regular}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default MansonryGrid;
