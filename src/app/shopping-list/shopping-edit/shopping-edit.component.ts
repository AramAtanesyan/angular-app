import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);

      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onSubmit(): void {
    const value = this.shoppingListForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    if(this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedItemIndex)
      this.onClear();
    }
  }


  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

}
