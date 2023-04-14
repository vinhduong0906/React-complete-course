const FooterColumn = (props) => {
  const columnContent = props.columnData.map((item) => {
    return <div key={item}>{item}</div>;
  });
  return columnContent;
};
export default FooterColumn;
