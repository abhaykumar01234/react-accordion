import "./imagesprite.css";

export const ImageSpriteDemo = () => {
  return (
    <div className="fullScreenHeight spriteSection">
      <div className="spriteWrapper">
        {new Array(24).fill(null).map((_, idx) => {
          const fileName = String(idx).padStart(2, "0");
          const fileURL = `url(avatars/tile0${fileName}.webp)`;
          const style = { "--bg-url": fileURL };

          return (
            <div
              key={idx}
              className="spriteTile"
              style={style as React.CSSProperties}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
