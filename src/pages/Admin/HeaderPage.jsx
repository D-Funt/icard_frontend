export function HeaderPage(props) {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;

  return (
    <div className="header-page">
      <div className="header-page__content flex justify-between align-items-center">
        <h2>{title}</h2>
        <div className="flex gap-2">
          <div>
            {btnTitle && (
              <button className="btn btn-primary" onClick={btnClick}>
                {btnTitle}
              </button>
            )}
          </div>
          <div>
            {btnTitleTwo && (
              <button className="btn btn-secondary" onClick={btnClickTwo}>
                {btnTitleTwo}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
