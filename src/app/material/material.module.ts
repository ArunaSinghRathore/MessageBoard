import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { MatDialogModule,MatInputModule,MatSelectModule,
   MatCardModule, MatButtonModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,
    MatIconModule,MatDialogModule, MatInputModule,
    MatSelectModule],
  declarations: [],
  exports:[MatIconModule, MatToolbarModule,MatDialogModule,MatInputModule,
    MatSelectModule, MatCardModule, MatButtonModule, MatPaginatorModule]
})
export class MaterialModule { }
