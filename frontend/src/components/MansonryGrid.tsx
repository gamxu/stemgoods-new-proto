import Masonry from "react-masonry-css";

function MansonryGrid() {
  //const [ImageUrl, setImagesUrl] = useState([]);

  const ImageUrls = [
    "https://source.unsplash.com/OyCl7Y4y0Bk",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/rBRZLPVLQg0",
    "https://source.unsplash.com/RRksEVVoU8o",
    "https://source.unsplash.com/OyCl7Y4y0Bk",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/rBRZLPVLQg0",
    "https://source.unsplash.com/RRksEVVoU8o",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/rBRZLPVLQg0",
    "https://source.unsplash.com/RRksEVVoU8o",
    "https://source.unsplash.com/OyCl7Y4y0Bk",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="w-[98%] m-auto pt-20 pb-10">
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto "
      columnClassName="pl-4 bg-clip-padding"
    >
      {ImageUrls.map((url, i) => (
        <div className="mb-4" key={i}>
          <img
            className="rounded-[7px]"
            width={640}
            height={480}
            alt=""
            src={url}
          />
        </div>
      ))}
    </Masonry>
  </div>
  );
}

export default MansonryGrid;
