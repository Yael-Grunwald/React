let books=[
  {
    name:"אויב באדמת ידיד",
    author:"יונה ספיר",
    year:2007,
    price: 65,
    pages: 750},
  {
    name: "אלי לומד להזהר",
    author:"מנוחה פוקס",
    year: 2010,
    price: 10,
    pages:7
  },
  {
    name:"איסתרק",
    author:"מיה קינן",
    year: 2012,
    price:70,
    pages: 800
  },
  {
    name:"פרח מוגן",
    author:"שולמית",
    year: 2015,
    price:30,
    pages: 450
  },
  {
    name:"דופליקטים",
    author:"יונה ספיר",
    year: 2021,
    price:72,
    pages: 900
  }
  ];
function BooksTable() {
  return(
    <table dir="rtl">
  <thead>
    <tr>
      <th>שם הספר</th>
      <th>מחבר</th>
      <th>שנה</th>
      <th>מחיר</th>
      <th>מספר עמודים</th>
    </tr>
  </thead>

  <tbody>
    {books.map((book) => (
      <tr key={book.name}>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.year}</td>
        <td>{book.price}</td>
        <td>{book.pages}</td>
      </tr>
    ))}
  </tbody>
</table>
  )
}
export default BooksTable