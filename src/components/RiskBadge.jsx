function RiskBadge({ level }) {

  const getColor = () => {

    if (level === "High") return "#ef4444";

    if (level === "Medium") return "#f59e0b";

    return "#22c55e";

  };

  return (

    <span
      style={{
        backgroundColor: getColor(),
        color: "white",
        padding: "8px 16px",
        borderRadius: "20px",
        fontWeight: "bold"
      }}
    >
      {level} Risk
    </span>

  );

}

export default RiskBadge;