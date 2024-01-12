const TableHead = (props) => {
    const { className, count,heading } = props;
    return (
        <div className="table-head">
            <div className="sub-head">
                <p className={className}>{heading}</p>
            </div>
            <div className="count">{count}</div>
        </div>
    )
}
export default TableHead;