export default function Nav__links({ label, defaultChecked, scrollTo }) {
  console.log(label, defaultChecked, scrollTo);
  return (
    <div className="header__content__navlinks__entry">
      <input
        className="header__content__navlinks__input"
        type="radio"
        id={scrollTo}
        title={scrollTo}
        defaultChecked={defaultChecked}
        name="name"
        onClick={() => {
          document
            .getElementById(scrollTo + "header__content__navlinks__input")
            .scrollIntoView();
        }}
      />
      <div className="header__content__navlinks__label">{label}</div>
    </div>
  );
}
