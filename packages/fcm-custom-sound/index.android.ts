import { Application, Utils } from '@nativescript/core';

declare const android: any;

export function customSound(options) {
  if (!options) {
    throw 'Parameter CustomSoundOptions cannot be empty.';
  }

  if (typeof options !== 'object') {
    throw 'Invalid parameter CustomSoundOptions.';
  }

  options.forEach((opt) => {
    if (!opt.channelId || !opt.audio) return;
    createNotificationChannel(opt.channelId, opt.audio);
  });
}

function createNotificationChannel(channel, audio) {
  const packageName = Application.android.packageName;
  const notificationChannel = new android.app.NotificationChannel(channel, packageName, android.app.NotificationManager.IMPORTANCE_HIGH);
  const att = new android.media.AudioAttributes.Builder().setUsage(android.media.AudioAttributes.USAGE_NOTIFICATION).setContentType(android.media.AudioAttributes.CONTENT_TYPE_SPEECH).build();

  notificationChannel.setSound(android.net.Uri.parse(`${android.content.ContentResolver.SCHEME_ANDROID_RESOURCE}://${packageName}/raw/${audio}`), att);

  const ctx = Utils.android.getApplicationContext();
  const manager = ctx.getSystemService(android.app.NotificationManager.class);
  manager.createNotificationChannel(notificationChannel);
}
