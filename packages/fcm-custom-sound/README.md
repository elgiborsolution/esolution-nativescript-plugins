# Nativescript FCM Custom Sound Notification
Custom notification sound of firebase cloud messaging (FCM). <b>Currently only working on Android</b>.

## Installation
```javascript
ns plugin add @elgibor-solution/fcm-custom-sound
```

## Usage
```typescript
# app.component.ts

import { customSound, CustomSoundOptions } from '@elgibor-solution/fcm-custom-sound';

const options: CustomSoundOptions = [
    { channelId: 'channel_1', audio: 'notif' },
    { channelId: 'channel_2', audio: 'notif2' }
];

customSound(options);
```

## API
| Methods                   | Return Type | Description |
| ------------------------- | --------    | ----------- |
| `customSound(options: CustomSoundOptions[])` | `void` | Plays custom sounds based on the provided configuration options. |

### CustomSoundOptions Interface
| Name                   | Type | Description |
| ---------------------- | --------    | ----------- |
| `channelId`            | `string` | The channel identifier for the custom sound.|
| `audio`                | `string` | The audio file path or resource identifier for the custom sound. Currently only support `.wav` audio file. Audio file should be placed to folder: `App_Resources/Android/src/main/assets/raw`|

## ⚠️ Important!
To enable notification sounds to play in the background, the <b>backend</b> sending FCM <b>must set the channel name or id</b> according to the one specified by the Android application. <p>
The audio file must be in `.wav` format and placed in the `App_Resources/Android/src/main/assets/raw` folder.
The `audio` property in the `CustomSoundOptions` interface should only contain the file name without the extension. For example, if the audio file is named `notif.wav`, only `notif` is required.

## Authors
- [@febriarief](https://www.github.com/febriarief)

## License
Apache License Version 2.0