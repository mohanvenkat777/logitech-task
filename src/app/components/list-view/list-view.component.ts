import { Component, HostListener } from '@angular/core';
import { ItemModel } from "src/app/models/item-model";
import { ListService } from "src/app/services/list.service";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {

  currentItemId!: number;
  deviceType: string = '';
  itemList?: Array<ItemModel>;

  // Update screen type on window resize
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.deviceType = this.ListService.getDeviceType();
  }

  constructor(
    private ListService: ListService
  ) { }

  ngOnInit() {
    this.deviceType = this.ListService.getDeviceType();
    this.itemList = [...this.ListService.allItems];
    this.activateCurrentItem(0);
  }

  // Activate Item on control change
  activateCurrentItem(id: number) {
    this.currentItemId = id;
  }

  // Item Next
  activateNextItem() {
    ++this.currentItemId;
  }

  // Item Prev
  activatePrevItem() {
    --this.currentItemId;
  }

  // Delete Item
  deleteItem(currentID: number) {
    if ((currentID + 1) == this.itemList?.length) {
      this.itemList?.splice(currentID, 1);
      this.activateCurrentItem(0);
    } else {
      this.itemList?.splice(currentID, 1);
      this.activateCurrentItem(currentID);
    }
  }

  // Reset Item
  resetListItems() {
    this.itemList = [...this.ListService.allItems];
    this.activateCurrentItem(0);
  }
}
