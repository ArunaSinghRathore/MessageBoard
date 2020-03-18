import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [MatToolbarModule,
    MatIconModule,MatDialogModule, MatInputModule,
    MatSelectModule],
  declarations: [],
  exports:[MatIconModule, MatToolbarModule,MatDialogModule,MatInputModule,
    MatSelectModule, MatCardModule, MatButtonModule, MatPaginatorModule]
})
export class MaterialModule { }
