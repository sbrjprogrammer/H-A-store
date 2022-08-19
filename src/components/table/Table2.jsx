import React from 'react'
import "./table2.css"

const Table = () => {
  return (
    <div class="content-box">
    <p>Top Selling Projects <span>Sell All</span></p>
    <br/>
    <table>
<tr>
<th>User</th>
<th>FirstName</th>
<th>Amount</th>
<th>Deadline</th>
</tr>
<tr>
<td>Alfreds Futterkiste</td>
<td>Maria Anders</td>
<td>5$</td>
<td>May 15, 2015</td>
</tr>
<tr>
<td>Centro comercial Moctezuma</td>
<td>Francisco Chang</td>
<td>4$</td>
<td>May 15, 2015</td>
</tr>
<tr>
<td>Ernst Handel</td>
<td>Roland Mendel</td>
<td>9$</td>
<td>May 15, 2015</td>
</tr>

<tr>
<td>Island Trading</td>
<td>Helen Bennett</td>
<td>7$</td>
<td>May 15, 2015</td>
</tr>


</table>
</div>
  )
}

export default Table