import React from "react";

const imageData = [
  {
    _id: 1,
    imgSrc:
      "https://media.istockphoto.com/photos/giza-at-sunset-picture-id1281134453?b=1&k=20&m=1281134453&s=170667a&w=0&h=goc9eGY4AtHPoYStQ7Y681AdLiErlnlGXDLnz5Wu3dA=",
  },
  {
    _id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1502250493741-939d1c76eaad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWd5cHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1632944398987-494eebe663be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVneXB0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1502640403806-cf2ac7a5d37a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVneXB0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const SlideApp = () => {
  const [current, setCurrent] = React.useState(0);
  console.log(current);
  const handleNext = () => {
    let index = current >= imageData.length - 1 ? 0 : current + 1;

    setCurrent(index);
  };
  const handlePrev = () => {
    let index = current <= 0 ? imageData.length - 1 : current - 1;

    setCurrent(index);
  };
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      {imageData.map((img, index) => (
        <div>
          {current === index && (
            <img src={img.imgSrc} key={img._id} alt="hello" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SlideApp;
