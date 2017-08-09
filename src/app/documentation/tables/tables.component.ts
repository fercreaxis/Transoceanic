import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData3: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
          dataRows: [
              ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
              ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
              ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
              ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
              ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
          ]
       };
       this.tableData3 = {
           headerRow: [ '', 'PRODUCT', 'COLOR', 'SIZE', 'PRICE', 'QTY', 'AMOUNT'],
           dataRows: [
               ['product1', '#jacket', 'Spring Jacket', 'by Dolce&Gabbana', 'Red', 'M', '549', '1', '549'],
               ['product2', '#pants',  'Short Pants', 'by Pucci', 'Purple', 'M', '499', '2', '998'],
               ['product3', '#nothing', 'Pencil Skirt', 'by Valentino', 'White', 'XL', '799', '1', '799']
           ]
        };
  }
  getTotal() {
      let total = 0;
      for (let i = 0; i < this.tableData3.dataRows.length; i++) {
          const integer = parseInt(this.tableData3.dataRows[i][8], 10);
          total += integer;
      }
      return total;
  };

}
