export function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Nezha Systems home">
      <img
        className="brand__symbol"
        src={`${import.meta.env.BASE_URL}images/brand/nezha-folded-summit-web.png`}
        alt=""
        width="192"
        height="192"
        aria-hidden="true"
      />
      <span className="brand__copy">
        <strong>Nezha <span>Systems</span></strong>
        <small>Ideas today. A better tomorrow.</small>
      </span>
    </a>
  );
}
