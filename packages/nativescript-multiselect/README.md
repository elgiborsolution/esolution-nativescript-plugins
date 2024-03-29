# Nativescript Multi Select ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 

[![npm](https://img.shields.io/npm/v/nativescript-multi-select.svg)](https://www.npmjs.com/package/nativescript-multi-select)
[![npm](https://img.shields.io/npm/dt/nativescript-multi-select.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-multi-select)

## Overview
This plugin is cloned from [nativescript-multi-select](https://github.com/skhye05/nativescript-multi-select).
Nativescript Multi Select is a popup dialog which provides multi selection, search through list and return the selected items.

<p>
    <img src="https://raw.githubusercontent.com/skhye05/NativeScript-Multi-Select/master/ios.gif" width="300"/>
    <img src="https://raw.githubusercontent.com/skhye05/NativeScript-Multi-Select/master/android.gif" width="300"/>
</p>

## Installation

```nativesript
ns plugin add @elgibor-solution/nativescript-multiselect
```

## Usage

### <img src="https://raw.githubusercontent.com/skhye05/nativescript-multi-select/master/res/angular.png" width="20"/> Angular

```typescript
import { Component, OnInit, NgZone } from "@angular/core";
import { MultiSelect, AShowType } from '@elgibor-solution/nativescript-multiselect';

@Component({
 // ...
})
export class SomeComponent implements OnInit {
    private _MSelect: MultiSelect;
    private predefinedItems: Array<any>;
    public selectedItems: Array<any>;

    constructor(private zone: NgZone) {
        this._MSelect = new MultiSelect();
        this.predefinedItems = ["moi-a", "moi-b"];
    }

    ngOnInit(): void {
    }


    onSelectTapped(): void {
        const options: MSOption = {
            title: "Please Select",
            selectedItems: this.predefinedItems,
            items: [
                { name: "A", value: "moi-a" },
                { name: "B", value: "moi-b" },
                { name: "C", value: "moi-c" },
                { name: "D", value: "moi-d" },
            ],
            bindValue: 'value',
            displayLabel: 'name',
            onConfirm: selectedItems => {
                this.zone.run(() => {
                this.selectedItems = selectedItems;
                this.predefinedItems = selectedItems;
                console.log("SELECTED ITEMS => ", selectedItems);
                })
            },
            onItemSelected: selectedItem => {
                console.log("SELECTED ITEM => ", selectedItem);
            },
            onCancel: () => {
                console.log('CANCEL');
            }
        };

        this._MSelect.show(options);
    }
}
```

## API

### MultiSelect

| Property                  | Type        | Description              |
| ------------------------- | ----------- | ------------------------ |
| `show(options: MSOption)` | `() : void` | Show Multi Select Dialog |

### MSOption

| Property                                         | Type                | Description                                                                                         |
| ------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------- |
| `title`                                          | `string`            | Dialog Title                                                                                        |
| `confirmButtonText`                              | `string`            | confirm button text `optional`                                                                      |
| `cancelButtonText`                               | `string`            | cancel button text `optional`                                                                       |
| `selectedItems`                                  | `Array<any>`        | predefined items `optional`                                                                         |
| `items`                                          | `Array<any>`        | items/list that will be display                                                                     |
| `bindValue`                                      | `string`            | the value that will determine the property which will be return when an item is selected `optional` |
| `displayLabel`                                   | `string`            | the value that will determine the property which will be display in the list `optional`             |
| `onConfirm: (selectedItems: Array<any>) => void` | `Function Callback` | callback which fires when the selection has been confirm/done                                       |
| `onItemSelected: (selectedItem: any) => void`    | `Function Callback` | callback which fires when an item has been selected `optional`                                      |
| `onCancel:  () => void`                          | `Function Callback` | callback which fires when the cancel button is tapped `optional`                                    |

### MSAndroidOption (for android)

| Property                 | Type     | Description |
| ------------------------ | -------- | ----------- |
| `titleSize`              | `number` | `optional`  |

### MSiOSOption (for ios)

| Property                 | Type     | Description                                                                  |
| ------------------------ | -------- | ---------------------------------------------------------------------------- |
| `showType`               | `number` | popup view show type, default by AAPopupViewShowTypeFadeIn `optional`        |
| `dismissType`            | `number` | popup view dismiss type, default by AAPopupViewDismissTypeFadeOut `optional` |
| `itemColor`              | `string` | item text color `optional`                                                   |

## Author
- [Febri Arief](https://github.com/febriarief)

## Credits
- [Jonathan Mayunga](https://github.com/skhye05) who created plugin [nativescript-multi-select](https://github.com/skhye05/nativescript-multi-select)
- For Android we're using the [MultiSelectDialog by abumoallim](https://github.com/abumoallim/Android-Multi-Select-Dialog),
- For iOS [AAMultiSelectController by Alex Ao](https://github.com/aozhimin/AAMultiSelectController).

## License

Apache License Version 2.0