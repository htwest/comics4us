const IssueTable = ({ selected }) => {
  return (
    <table>
      <tr>
        <th>Series</th>
        <td>{selected.series}</td>
      </tr>
      <tr>
        <th>Title</th>
        <td>{selected.title}</td>
      </tr>
      <tr>
        <th>Published By</th>
        <td>{selected.publisher}</td>
      </tr>
      <tr>
        <th>Writer</th>
        <td>{selected.writer}</td>
      </tr>
      <tr>
        <th>Artist</th>
        <td>{selected.artist}</td>
      </tr>
      <tr>
        <th>Description</th>
        <td>{selected.description}</td>
      </tr>
    </table>
  );
};

export default IssueTable;
