const Text = (props) => {
    const { title, className} = props;

    return (
        <>
            <p className={className}>{title}</p>
            {/* {notification && <div className={countClass}>{count}</div>} */}
        </>
    )
}
export default Text;