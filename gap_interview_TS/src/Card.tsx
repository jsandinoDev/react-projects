import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";

export const Card = ({
  username,
  body,
  toggleClick,
}: {
  username: string;
  body: string;
  toggleClick: (like: boolean) => void;
}) => {
  const [like, setLike] = useState(false);

  const clickHanlder = () => {
    const newClick = !like;
    toggleClick(newClick);
    setLike(newClick);
  };
  return (
    <>
      <div
        style={{
          border: "1px solid #000",
          display: "flex",
          maxWidth: "500px",
        }}
      >
        <div>
          <p>{username}</p>
          <p>{body}</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button onClick={clickHanlder}>
            {like ? <IconHeartFilled /> : <IconHeart />}
          </button>
        </div>
      </div>
    </>
  );
};
