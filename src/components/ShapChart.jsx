function ShapChart({ importance }) {

  const entries = Object.entries(importance)
    .sort((a, b) => b[1] - a[1]);

  return (

    <div className="shap-card">

      <h3>AI Feature Influence</h3>

      {

        entries.map(([feature, value], index) => (

          <div className="shap-row" key={index}>

            <div className="shap-header">

              <span>{feature}</span>

              <span>{(value * 100).toFixed(1)}%</span>

            </div>

            <div className="shap-bg">

              <div
                className="shap-fill"
                style={{
                  width: `${value * 100}%`
                }}
              ></div>

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default ShapChart;