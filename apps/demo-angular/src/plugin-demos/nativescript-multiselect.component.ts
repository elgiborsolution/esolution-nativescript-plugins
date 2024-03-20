import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMultiselect } from '@demo/shared';
import { MultiSelect, AShowType } from '@elgibor-solution/nativescript-multiselect';
import { MSOption } from '@elgibor-solution/nativescript-multiselect';

@Component({
  selector: 'demo-nativescript-multiselect',
  templateUrl: 'nativescript-multiselect.component.html',
})
export class NativescriptMultiselectComponent {
  demoShared: DemoSharedNativescriptMultiselect;

  private _MSelect: MultiSelect;
  private predefinedItems: Array<any>;
  public selectedItems: Array<any>;

  constructor(private _ngZone: NgZone) {
    this._MSelect = new MultiSelect();
    this.predefinedItems = ['moi-a', 'moi-b'];
  }

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptMultiselect();
  }

  onSelectTapped(): void {
    const options: MSOption = {
      title: 'Please Select',
      selectedItems: this.predefinedItems,
      items: [
        { name: 'A', value: 'moi-a' },
        { name: 'B', value: 'moi-b' },
        { name: 'C', value: 'moi-c' },
        { name: 'D', value: 'moi-d' },
      ],
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: (selectedItems) => {
        this._ngZone.run(() => {
          this.selectedItems = selectedItems;
          this.predefinedItems = selectedItems;
          console.log('SELECTED ITEMS => ', selectedItems);
        });
      },
      onItemSelected: (selectedItem) => {
        console.log('SELECTED ITEM => ', selectedItem);
      },
      onCancel: () => {
        console.log('CANCEL');
      },
    };

    this._MSelect.show(options);
  }
}
