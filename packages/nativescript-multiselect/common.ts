export interface MSOption {
  title: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  selectedItems?: Array<any>;
  items: Array<any>;
  bindValue?: string;
  displayLabel?: string;
  ios?: MSiOSOption;
  android?: MSAndroidOption;
  onConfirm: (selectedItems: Array<any>) => void;
  onItemSelected?: (selectedItem: any) => void;
  onCancel?: () => void;
}

export interface MSiOSOption {
  image?: string;
  showType?: number;
  dismissType?: number;
  itemColor?: string;
}

export interface MSAndroidOption {
  titleSize?: number;
}
