import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-options-list',
  imports: [NgClass],
  templateUrl: './header-options-list.component.html',
  styleUrl: './header-options-list.component.scss'
})
export class HeaderOptionsListComponent {

  isMessages = signal<boolean>(false);
  isNotifications = signal<boolean>(false);
  isProfileOpen = signal<boolean>(false);

  setMessages(value?: boolean) {
    this.isMessages.set(value ?? !this.isMessages());
  }

  setNotifications(value?: boolean) {
    this.isNotifications.set(value ?? !this.isNotifications());
  }

  setProfileOpen(value?: boolean) {
    this.isProfileOpen.set(value ?? !this.isProfileOpen());
  }

  toggleNotificationDropdown() {
    this.setNotifications();
    this.setMessages(false);
    this.setProfileOpen(false);
  }

  toggleMessageDropdown() {
    this.setMessages();
    this.setNotifications(false);
    this.setProfileOpen(false);
  }

  toggleProfileDropdown() {
    this.setProfileOpen();
    this.setNotifications(false);
    this.setMessages(false);
  }

  // toggleFullscreen() {
  //   // event.preventDefault();
  //   const doc: any = document;
  
  //   if (!doc.fullscreenElement) {
  //     doc.documentElement.requestFullscreen();
  //   } else {
  //     doc.exitFullscreen();
  //   }
  // }

  toggleFullscreen() {
    // event.preventDefault();
    const doc: any = document;
    const docEl: any = document.documentElement;
  
    if (
      !doc.fullscreenElement &&
      !doc.webkitFullscreenElement && 
      !doc.mozFullScreenElement && 
      !doc.msFullscreenElement
    ) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
  }
  
}
