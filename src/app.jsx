const IssueFilter = () => {
    return <h1>Issue Filter</h1>;
};

const IssueRow = (props) => {
    return (
        <tr>
            <td style={props.style}>{props.id}</td>
            <td style={props.style}>{props.title}</td>
        </tr>
    )
}

const IssueTable = () => {
    const rowStyle = {border: "1px solid"};
    const issues = [
        {Id: 5, Title: "This is fifth issue"},
        {Id: 6, Title: "This is sixth issue"},
    ]
    issues.map(issue => {
        <IssueRow style={rowStyle} id={issue.Id} title={issue.Title} />
    })
    return (
        <div>
            <h2>This is placeholder for issue table</h2>
            <table>
                <thead>
                <tr>
                    <th style={rowStyle}>ID</th>
                    <th style={rowStyle}>Title</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={rowStyle}>1</td>
                    <td style={rowStyle}>This is the first issue</td>
                </tr>
                <tr>
                    <td style={rowStyle}>2</td>
                    <td style={rowStyle}>This is the second issue</td>
                </tr>
                <IssueRow style={rowStyle} id={3} title={"This is the third issue"}/>
                <IssueRow style={rowStyle} id={4} title={"This is the fourth issue"}/>
                <IssueRow style={rowStyle} id={5} title={"This is the fifth issue"}/>
                </tbody>
            </table>
        </div>
    );
};

const AddIssue = () => {
    return <h1>Add Issue</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <IssueFilter/>
        <hr/>
        <IssueTable/>
        <hr/>
        <AddIssue/>
    </React.StrictMode>
);
