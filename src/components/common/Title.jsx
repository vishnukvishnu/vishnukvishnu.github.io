const Title = ({ title, subTitle }) => {
  return (
    <div className="contact-header-wrapper">
      <h1 className="header-1">{title}</h1>
      <p className="mb-0 roboto-medium">{subTitle}</p>
    </div>
  );
};

export default Title