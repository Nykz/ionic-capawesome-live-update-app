import { Component, inject } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { LiveUpdate } from '@capawesome/capacitor-live-update';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private platform = inject(Platform);
  constructor() {
    this.platform.ready().then(() => {
      // this.liveUpdate();
      this.selfHosted();
    });
  }

  async liveUpdate() {
    try {
      await LiveUpdate.ready();
      this.sync();
    } catch (e) {
      console.log(e);
    }
  }

  async sync() {
    try {
      // // Get the version code of the native app
      // const { versionCode } = await LiveUpdate.getVersionCode();
      // Select the channel based on the version code
      await LiveUpdate.setChannel({ channel: 'live-update-channel' }); 

      const result = await LiveUpdate.sync();
      if (result.nextBundleId) {
        await LiveUpdate.reload();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async selfHosted() {
    try {
      const options = {
        url: `${environment.domain}appBundle`,
        headers: { 'Content-Type': 'application/json', },
      };
    
      const response: HttpResponse = await CapacitorHttp.get(options);
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   // Add other headers if needed
      // });
      // const { url, bundleId } = await lastValueFrom(
      //   this.http.get<any>(
      //     `${environment.domain}bundle_check.json`,
      //     { headers }
      //   )
      // );
      console.log('response: ', response?.data);
      await this.downloadBundle(response?.data?.url, response?.data?.bundleId);
      await this.setBundle(response?.data?.bundleId);
    } catch (e) {
      console.log(e);
    }
  }

  async downloadBundle(url: string, bundleId: string) {
    await LiveUpdate.downloadBundle({
      url,
      bundleId,
    });
  }

  async setBundle(bundleId: string) {
    await LiveUpdate.setBundle({ bundleId });
    await LiveUpdate.reload();
  }
}
