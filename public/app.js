const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueRow = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.id), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.title));
};

const IssueTable = () => {
  const rowStyle = {
    border: "1px solid"
  };
  const issues = [{
    Id: 5,
    Title: "This is fifth issue"
  }, {
    Id: 6,
    Title: "This is sixth issue"
  }];
  issues.map(issue => {
    /*#__PURE__*/
    React.createElement(IssueRow, {
      style: rowStyle,
      id: issue.Id,
      title: issue.Title
    });
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for issue table"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "1"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is the first issue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "2"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is the second issue")), /*#__PURE__*/React.createElement(IssueRow, {
    style: rowStyle,
    id: 3,
    title: "This is the third issue"
  }), /*#__PURE__*/React.createElement(IssueRow, {
    style: rowStyle,
    id: 4,
    title: "This is the fourth issue"
  }), /*#__PURE__*/React.createElement(IssueRow, {
    style: rowStyle,
    id: 5,
    title: "This is the fifth issue"
  }))));
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null)));