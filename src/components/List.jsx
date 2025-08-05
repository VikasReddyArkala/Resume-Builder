function List({
    wrapperClass="",
    titleField = "",
    items=[],
    fields=[],
    handleEdit = () => {},
    handleDelete = () => {}
}) {

  const formatUrl = (url) => {
    if (!url) return '';
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };
    return (
        <div className={wrapperClass}>
                {items.map((item, idx) => (
                    <div key={idx} className="tile">
                        <p 
                            style={{ cursor: "pointer", fontWeight: "bold" }}
                        >
                            {item[titleField]}
                        </p>
                            <div className="details">
                                <div className="info">
                                    {fields.map(({ key, label }) => (
                                        <p key={key}>
                                            { label } :  {
                                                label.toLowerCase() === "link" ? (
                                                    <a 
                                                        href={formatUrl(item[key])} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {item[key]}
                                                    </a>
                                                ) : (
                                                    item[key]
                                                    )
                                            }
                                        </p>
                                    ))}
                                </div>
                                <div className="btn">
                                    <button type="button" onClick={() => handleEdit(idx)}>Edit</button>
                                    <button type="button" onClick={() => handleDelete(idx)}>Delete</button>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
    );
}

export default List;