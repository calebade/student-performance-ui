function FactorBar({ factor, index }) {

  const widths = [90, 70, 50];

  return (

    <div className="factor-container">

      <div className="factor-header">

        <span>{factor}</span>

        <span>{widths[index]}%</span>

      </div>

      <div className="factor-bar-bg">

        <div
          className="factor-bar-fill"
          style={{ width: `${widths[index]}%` }}
        ></div>

      </div>

    </div>

  );

}

export default FactorBar;